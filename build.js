const fs = require("fs/promises");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");
const { minify } = require("terser");
const CleanCSS = require("clean-css");
const { minify: minifyHtml } = require("html-minifier-terser");

const rootDir = __dirname;
const srcDir = path.join(rootDir, "src");
const distDir = path.join(rootDir, "dist");

const readSrc = (file) => fs.readFile(path.join(srcDir, file), "utf8");

const writeDist = async (file, content) => {
  await fs.mkdir(distDir, { recursive: true });
  await fs.writeFile(path.join(distDir, file), content, "utf8");
};

const buildJs = async () => {
  const input = await readSrc("app.js");
  const minified = await minify(input, {
    compress: true,
    mangle: true,
    format: { comments: false },
  });

  if (!minified.code) {
    throw new Error("Terser failed to generate output.");
  }

  const obfuscated = JavaScriptObfuscator.obfuscate(minified.code, {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    disableConsoleOutput: false,
    rotateStringArray: true,
    selfDefending: true,
    splitStrings: true,
    splitStringsChunkLength: 6,
    stringArray: true,
    stringArrayEncoding: ["base64"],
    stringArrayThreshold: 0.75,
    transformObjectKeys: true,
  });

  await writeDist("app.min.js", obfuscated.getObfuscatedCode());
};

const buildCss = async () => {
  const input = await readSrc("style.css");
  const minified = new CleanCSS({ level: 2 }).minify(input);

  if (minified.errors && minified.errors.length) {
    throw new Error(`CleanCSS errors: ${minified.errors.join("; ")}`);
  }

  await writeDist("style.min.css", minified.styles);
};

const buildHtml = async () => {
  let input = await readSrc("index.html");
  input = input.replace(/style\.css/g, "style.min.css");
  input = input.replace(/app\.js/g, "app.min.js");

  const output = await minifyHtml(input, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    useShortDoctype: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
  });

  await writeDist("index.html", output);
};

const build = async () => {
  await Promise.all([buildJs(), buildCss(), buildHtml()]);
};

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

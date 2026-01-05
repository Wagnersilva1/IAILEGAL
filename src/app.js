const QUESTIONS = [
  // ===================== SEDES =====================
  {
    tag: "Sedes",
    question: "As sedes de organizações possuem PVP liberado?",
    answer:
      "Não. As sedes não possuem PVP liberado e exigem interação obrigatória com visitantes.",
  },
  {
    tag: "Sedes",
    question: "É permitido executar alguém dentro da sede?",
    answer:
      "Não. Executar alguém sem RP válido dentro da sede é proibido.",
  },
  {
    tag: "Sedes",
    question: "Sedes são consideradas áreas de risco?",
    answer:
      "Não. Sedes não são áreas de risco.",
  },
  {
    tag: "Sedes",
    question: "Qual a função das fachadas das sedes?",
    answer:
      "Disfarçar atividades criminosas e manter coerência com o RP perante a polícia.",
  },
  {
    tag: "Sedes",
    question: "Posso usar a sede como local de execução?",
    answer:
      "Não. A sede não é local de execução nem de punições internas visíveis.",
  },

  // ===================== FAVELAS =====================
  {
    tag: "Favelas",
    question: "Favelas possuem PVP liberado?",
    answer:
      "Não. Matar sem motivo válido é proibido.",
  },
  {
    tag: "Favelas",
    question: "Favelas são áreas vermelhas?",
    answer:
      "Sim. São áreas de risco e podem conter indivíduos perigosos.",
  },
  {
    tag: "Favelas",
    question: "A interação em favelas é obrigatória?",
    answer:
      "Sim. A interação com visitantes é obrigatória.",
  },
  {
    tag: "Favelas",
    question: "Posso fugir para favela durante perseguição?",
    answer:
      "Não. Fugir para favelas durante perseguições é proibido.",
  },
  {
    tag: "Favelas",
    question: "Portões podem ser trancados em incursão policial?",
    answer:
      "Não. Portões e portas devem permanecer destrancados.",
  },

  // ===================== DOMINAÇÃO GERAL =====================
  {
    tag: "Dominação",
    question: "Quem pode participar da Dominação Geral?",
    answer:
      "Todas as facções e segmentos, desde que estejam setados há 24h e sem boost ativo.",
  },
  {
    tag: "Dominação",
    question: "Qual o boost da Dominação Geral?",
    answer:
      "Boost de 3x no farm por 3 horas.",
  },
  {
    tag: "Dominação",
    question: "É permitido defender uma Dominação Geral?",
    answer:
      "Não. Dominações não podem ser defendidas.",
  },
  {
    tag: "Dominação",
    question: "Posso puxar dois blips ao mesmo tempo?",
    answer:
      "Não. Puxar dois blips é proibido.",
  },
  {
    tag: "Dominação",
    question: "A facção vencedora pode participar da próxima?",
    answer:
      "Não. Deve aguardar vitória de outra facção ou cooldown de 6h.",
  },

  // ===================== DOMINAÇÃO DE SEGMENTO =====================
  {
    tag: "Segmento",
    question: "Quem pode participar da Dominação de Segmento?",
    answer:
      "Somente facções do segmento correspondente.",
  },
  {
    tag: "Segmento",
    question: "Facção de armas pode ir em munição?",
    answer:
      "Não. Cada segmento é restrito.",
  },
  {
    tag: "Segmento",
    question: "Qual o boost da Dominação de Segmento?",
    answer:
      "Boost de 2x no farm por no mínimo 3 horas.",
  },
  {
    tag: "Segmento",
    question: "Posso participar da geral com boost ativo?",
    answer:
      "Sim. É permitido buscar um boost maior.",
  },

  // ===================== ÁREA DE DOMINAÇÃO =====================
  {
    tag: "Área",
    question: "Como identificar área de dominação ativa?",
    answer:
      "Quando estiver vermelha com caveiras no mapa.",
  },
  {
    tag: "Área",
    question: "Posso entrar sem participar?",
    answer:
      "Não. Você pode ser morto e perder itens.",
  },
  {
    tag: "Área",
    question: "Área verde significa o quê?",
    answer:
      "SAFE-ZONE, sem domínio ativo.",
  },
  {
    tag: "Área",
    question: "É permitido atirar fora da área?",
    answer:
      "Não. Atirar fora ou atravessando limites é RDM.",
  },
  {
    tag: "Área",
    question: "Loot é liberado?",
    answer:
      "Sim, apenas dentro da área.",
  },

  // ===================== COMPORTAMENTO =====================
  {
    tag: "Comportamento",
    question: "Posso fugir de assalto para a dominação?",
    answer:
      "Não. Fugir para dominação é proibido.",
  },
  {
    tag: "Comportamento",
    question: "Posso roubar veículos no perímetro?",
    answer:
      "Não. Roubo de veículos é proibido.",
  },
  {
    tag: "Comportamento",
    question: "Armas são obrigatórias na dominação?",
    answer:
      "Sim. Estar armado é obrigatório.",
  },
  {
    tag: "Comportamento",
    question: "Posso usar animações durante troca de tiro?",
    answer:
      "Não. É considerado abuso de bug.",
  },

  // ===================== EQUIPAMENTOS =====================
  {
    tag: "Equipamentos",
    question: "Helicópteros são permitidos?",
    answer:
      "Não. Helicópteros são proibidos.",
  },
  {
    tag: "Equipamentos",
    question: "Veículos podem entrar na dominação?",
    answer:
      "Não. Entrada com veículos é proibida.",
  },
  {
    tag: "Equipamentos",
    question: "Mochila é obrigatória?",
    answer:
      "Sim. Serve para identificação.",
  },

  // ===================== NOVATOS =====================
  {
    tag: "Novatos",
    question: "Novatos podem participar da dominação?",
    answer:
      "Não. É necessário 24h de setagem.",
  },

  // ===================== BUGS =====================
  {
    tag: "Bugs",
    question: "Abusar de bug na dominação gera punição?",
    answer:
      "Sim. Pode gerar advertência ou banimento.",
  },
  {
    tag: "Bugs",
    question: "Puxar blip morto é permitido?",
    answer:
      "Não. É considerado abuso grave.",
  },
  {
    tag: "Bugs",
    question: "Reviver usando bug é permitido?",
    answer:
      "Não. Reviver por bug é proibido.",
  },

  // ===================== SS / TELAGEM =====================
  {
    tag: "SS",
    question: "É obrigatório clipar as kills?",
    answer:
      "Sim. Clipes podem ser solicitados.",
  },
  {
    tag: "SS",
    question: "O que acontece se eu recusar SS?",
    answer:
      "Banimento imediato por REFUSE.",
  },
  {
    tag: "SS",
    question: "Posso quitar após dominação?",
    answer:
      "Não. É proibido quitar antes de 20 minutos.",
  },

  // ===================== BATTLE ROYALE =====================
  {
    tag: "BattleRoyale",
    question: "Dominação de segmento pausa no Battle Royale?",
    answer:
      "Sim. Pausa 30 minutos antes.",
  },
  {
    tag: "BattleRoyale",
    question: "Posso retornar se morrer no Battle Royale?",
    answer:
      "Não. Não há retorno.",
  },
  {
    tag: "BattleRoyale",
    question: "Uniforme é obrigatório?",
    answer:
      "Sim. Uniforme ou mochila é obrigatório.",
  },

  // ===================== ILHA =====================
  {
    tag: "Ilha",
    question: "Quem tenta acessar a ilha é considerado o quê?",
    answer:
      "Foragido.",
  },
  {
    tag: "Ilha",
    question: "Posso sair da ilha a qualquer momento?",
    answer:
      "Não. A saída é restrita e perigosa.",
  },
  {
    tag: "Ilha",
    question: "Sniper pode sair da ilha?",
    answer:
      "Não. Snipers e Pumps não podem sair.",
  },
  {
    tag: "Ilha",
    question: "VDM é permitido na ilha?",
    answer:
      "Sim. VDM, ratão e loot são permitidos.",
  },

  // ===================== GERAL =====================
  {
    tag: "Geral",
    question: "As regras podem ser alteradas?",
    answer:
      "Sim. Regras podem mudar a qualquer momento.",
  },
  {
    tag: "Geral",
    question: "O desconhecimento das regras isenta punição?",
    answer:
      "Não. Todos são responsáveis por conhecê-las.",
  },

 // ===================== QRR =====================
  {
    tag: "QRR",
    question: "É permitido solicitar QRR entre ilegal e ilegal?",
    answer:
      "Não. QRR entre ilegal x ilegal é proibido em qualquer situação.",
  },
  {
    tag: "QRR",
    question: "Quando o QRR é permitido?",
    answer:
      "Somente contra a polícia.",
  },
  {
    tag: "QRR",
    question: "Posso prestar QRR para outra facção ilegal?",
    answer:
      "Não. Prestar QRR entre ilegais é proibido.",
  },
  {
    tag: "QRR",
    question: "QRR em ação conjunta entre ilegais é permitido?",
    answer:
      "Não. Ações conjuntas entre facções ilegais são proibidas.",
  },
  {
    tag: "QRR",
    question: "Receber QRR ilegal gera punição?",
    answer:
      "Sim. Solicitar ou receber QRR ilegal resulta em advertência.",
  },

  // ===================== AÇÕES – REGRAS GERAIS =====================
  {
    tag: "Ações",
    question: "É obrigatório respeitar o horário de assaltos?",
    answer:
      "Sim. Os horários exibidos na tela devem ser respeitados.",
  },
  {
    tag: "Ações",
    question: "Posso assaltar fora do horário permitido?",
    answer:
      "Não. Assaltar fora do horário é proibido.",
  },
  {
    tag: "Ações",
    question: "Sequestro segue o horário de assalto?",
    answer:
      "Sim. Sequestro só é permitido quando o aviso estiver ativo.",
  },
  {
    tag: "Ações",
    question: "Posso usar veículo de trabalho em ação criminosa?",
    answer:
      "Não. Veículos de empregos legais são proibidos em ações.",
  },
  {
    tag: "Ações",
    question: "Roubar veículo de trabalho é permitido?",
    answer:
      "Não. Roubar veículos de trabalho legal é proibido.",
  },

  // ===================== TRABALHADORES =====================
  {
    tag: "Trabalho",
    question: "Posso matar trabalhadores em serviço?",
    answer:
      "Não. Trabalhadores em serviço não podem ser atacados.",
  },
  {
    tag: "Trabalho",
    question: "Posso sequestrar um trabalhador legal?",
    answer:
      "Não. Trabalhadores legais não podem ser sequestrados.",
  },
  {
    tag: "Trabalho",
    question: "Posso usar veículo de lixeiro em assalto?",
    answer:
      "Não. Veículos de emprego legal são proibidos.",
  },

  // ===================== REFÉNS =====================
  {
    tag: "Refém",
    question: "Refém pode ser do mesmo grupo dos assaltantes?",
    answer:
      "Não. Caso seja, todos os envolvidos serão advertidos.",
  },
  {
    tag: "Refém",
    question: "É obrigatório anunciar o assalto?",
    answer:
      "Sim. Deve ser anunciado em modo gritando.",
  },
  {
    tag: "Refém",
    question: "Devo mencionar a palavra assalto?",
    answer:
      "Sim. A palavra 'assalto' deve ser mencionada.",
  },
  {
    tag: "Refém",
    question: "Devo mencionar a palavra sequestro?",
    answer:
      "Sim. Em sequestros a palavra 'sequestro' é obrigatória.",
  },
  {
    tag: "Refém",
    question: "Posso atirar carregando refém?",
    answer:
      "Não. Atirar carregando refém é proibido.",
  },

  // ===================== CL / CRASH =====================
  {
    tag: "CL",
    question: "Posso deslogar para evitar punição?",
    answer:
      "Não. Combat Logging é proibido.",
  },
  {
    tag: "CL",
    question: "Posso clicar em desistir durante ação?",
    answer:
      "Não. Desistir durante ação é proibido.",
  },
  {
    tag: "Crash",
    question: "O que fazer em caso de crash?",
    answer:
      "Tirar print da tela inteira e postar em avisos-crash em até 5 minutos.",
  },
  {
    tag: "Crash",
    question: "Se demorar para voltar devo avisar?",
    answer:
      "Sim. Deve avisar a staff e justificar.",
  },

  // ===================== NEGOCIAÇÃO =====================
  {
    tag: "Negociação",
    question: "A negociação com a polícia é obrigatória?",
    answer:
      "Sim. Ambas as partes devem respeitar os termos.",
  },
  {
    tag: "Negociação",
    question: "Posso atirar no negociador?",
    answer:
      "Não. Atirar em negociador é proibido.",
  },
  {
    tag: "Negociação",
    question: "Posso render o negociador?",
    answer:
      "Não. Render negociador é proibido.",
  },

  // ===================== MEMÓRIA =====================
  {
    tag: "Memória",
    question: "Após morrer posso lembrar da ação?",
    answer:
      "Não. Deve esquecer tudo após ser morto ou nocauteado.",
  },
  {
    tag: "Memória",
    question: "Se for reanimado posso lembrar?",
    answer:
      "Não. A regra de esquecimento permanece.",
  },

  // ===================== SAMU =====================
  {
    tag: "SAMU",
    question: "SAMU pode ser chamado durante ação?",
    answer:
      "Somente após o término da ação.",
  },
  {
    tag: "SAMU",
    question: "SAMU no local encerra a ação?",
    answer:
      "Sim. A ação é considerada finalizada.",
  },
  {
    tag: "SAMU",
    question: "SAMU interferir gera punição?",
    answer:
      "Sim. Mesmo sem intenção.",
  },

  // ===================== BIND / BUG =====================
  {
    tag: "Bug",
    question: "Posso fingir estar morto?",
    answer:
      "Não. Fingir estar morto é proibido.",
  },
  {
    tag: "Bug",
    question: "Posso fingir estar dormindo?",
    answer:
      "Não. É considerado abuso.",
  },
  {
    tag: "Bug",
    question: "Posso usar animações para vantagem?",
    answer:
      "Não. Uso de animações para vantagem é proibido.",
  },

  // ===================== VEÍCULOS =====================
  {
    tag: "Veículos",
    question: "Posso arrancar portas do veículo?",
    answer:
      "Não. Arrancar portas é proibido.",
  },
  {
    tag: "Veículos",
    question: "Posso usar viatura para rotacionar?",
    answer:
      "Não. Usar viatura é considerado roubo.",
  },
  {
    tag: "Veículos",
    question: "Posso usar ambulância para fugir?",
    answer:
      "Não. Uso de veículos de serviço é proibido.",
  },

  // ===================== PERSEGUIÇÃO =====================
  {
    tag: "Perseguição",
    question: "Posso fugir para favela?",
    answer:
      "Não. Fugir para favela é proibido.",
  },
  {
    tag: "Perseguição",
    question: "Posso fugir para QG?",
    answer:
      "Não. Fugir para QG é proibido.",
  },
  {
    tag: "Perseguição",
    question: "Posso me render para servir de isca?",
    answer:
      "Não. Isso é considerado Cop Bait.",
  },

  // ===================== POLÍCIA =====================
  {
    tag: "Polícia",
    question: "Posso atirar na polícia imediatamente?",
    answer:
      "Não. Somente após 1 minuto do início da perseguição.",
  },
  {
    tag: "Polícia",
    question: "Atirar libera código 05?",
    answer:
      "Sim. Atirar libera automaticamente o código 05.",
  },
  {
    tag: "Polícia",
    question: "Código 3 pode ser usado imediatamente?",
    answer:
      "Não. Somente após 3 minutos de fuga limpa.",
  },
  {
    tag: "Polícia",
    question: "Código 05 pode ser liberado em capotagens?",
    answer:
      "Sim. Em Power-Gaming exagerado.",
  },

  // ===================== ASSALTO =====================
  {
    tag: "Assalto",
    question: "Quantos bandidos podem assaltar juntos?",
    answer:
      "Até 4 bandidos no máximo.",
  },
  {
    tag: "Assalto",
    question: "Assalto de moto permite quantos bandidos?",
    answer:
      "No máximo 2 bandidos.",
  },
  {
    tag: "Assalto",
    question: "É permitido assaltar sozinho?",
    answer:
      "Não. Assaltar sozinho é proibido.",
  },

  // ===================== SEQUESTRO =====================
  {
    tag: "Sequestro",
    question: "É necessário ter polícia em patrulha?",
    answer:
      "Não. Não é necessário /ptr.",
  },
  {
    tag: "Sequestro",
    question: "Quantos bandidos por refém?",
    answer:
      "No mínimo 2 bandidos por refém.",
  },
  {
    tag: "Sequestro",
    question: "Capuz e algema são obrigatórios?",
    answer:
      "Sim. Ambos são obrigatórios.",
  },
  {
    tag: "Sequestro",
    question: "Posso sequestrar em safezone?",
    answer:
      "Não. Safezones são proibidas.",
  },
  {
    tag: "Sequestro",
    question: "Posso sequestrar policial fardado?",
    answer:
      "Não. Policiais em serviço não podem ser sequestrados.",
  },

  // ===================== VALORES =====================
  {
    tag: "Valores",
    question: "Qual o valor padrão de um refém?",
    answer:
      "R$ 1.500.000.",
  },
  {
    tag: "Valores",
    question: "Qual o valor de um líder?",
    answer:
      "R$ 3.500.000.",
  },
  {
    tag: "Valores",
    question: "Valor do comando geral da polícia?",
    answer:
      "R$ 10.000.000.",
  },

  // ===================== GERAL =====================
  {
    tag: "Geral",
    question: "O desconhecimento das regras evita punição?",
    answer:
      "Não. Todos são responsáveis por conhecer as regras.",
  },
  {
    tag: "Geral",
    question: "As regras podem ser alteradas?",
    answer:
      "Sim. As regras podem mudar a qualquer momento.",
  },

 // ===================== QRR – DETALHES =====================
  {
    tag: "QRR",
    question: "Posso pedir QRR se estiver em desvantagem numérica contra outro ilegal?",
    answer:
      "Não. QRR entre ilegais é proibido independentemente da desvantagem.",
  },
  {
    tag: "QRR",
    question: "Se outro ilegal atacar minha facção posso chamar QRR?",
    answer:
      "Não. Conflitos entre ilegais não permitem QRR.",
  },
  {
    tag: "QRR",
    question: "QRR via rádio conta como infração?",
    answer:
      "Sim. Qualquer forma de QRR entre ilegais é proibida.",
  },
  {
    tag: "QRR",
    question: "QRR automático do sistema é permitido?",
    answer:
      "Somente quando acionado contra a polícia.",
  },

  // ===================== HORÁRIOS =====================
  {
    tag: "Horarios",
    question: "Onde vejo o horário permitido para ações?",
    answer:
      "O horário é exibido diretamente na tela do jogo.",
  },
  {
    tag: "Horarios",
    question: "Se o aviso sumir a ação deve parar?",
    answer:
      "Sim. Sem aviso ativo, a ação deve ser encerrada.",
  },
  {
    tag: "Horarios",
    question: "Posso iniciar sequestro faltando segundos para o aviso acabar?",
    answer:
      "Não. A ação deve começar com o aviso ativo.",
  },

  // ===================== ASSALTO – CONDUTAS =====================
  {
    tag: "Assalto",
    question: "Quantos veículos podem ser usados em um assalto?",
    answer:
      "Apenas um veículo para o grupo de assaltantes.",
  },
  {
    tag: "Assalto",
    question: "Os assaltantes devem estar no mesmo veículo?",
    answer:
      "Sim. Todos devem estar no mesmo veículo.",
  },
  {
    tag: "Assalto",
    question: "É permitido trocar de veículo durante o assalto?",
    answer:
      "Somente se fizer parte do RP e sem abuso.",
  },
  {
    tag: "Assalto",
    question: "Posso iniciar assalto sem anunciar?",
    answer:
      "Não. O anúncio é obrigatório.",
  },

  // ===================== ABORDAGEM =====================
  {
    tag: "Abordagem",
    question: "A abordagem deve ser feita em qual modo de fala?",
    answer:
      "Modo gritando.",
  },
  {
    tag: "Abordagem",
    question: "Se a vítima não ouvir o anúncio o que acontece?",
    answer:
      "A ação pode ser invalidada.",
  },
  {
    tag: "Abordagem",
    question: "Posso anunciar assalto sem mencionar a palavra assalto?",
    answer:
      "Não. A palavra deve ser mencionada claramente.",
  },

  // ===================== PERSEGUIÇÃO =====================
  {
    tag: "Perseguicao",
    question: "Posso atirar antes de 1 minuto de perseguição?",
    answer:
      "Não. Atirar antes de 1 minuto é proibido.",
  },
  {
    tag: "Perseguicao",
    question: "A contagem do minuto começa quando?",
    answer:
      "A partir do início da abordagem ou perseguição.",
  },
  {
    tag: "Perseguicao",
    question: "Se eu atirar antes do tempo o que acontece?",
    answer:
      "Libera automaticamente o código 05 policial.",
  },

  // ===================== FUGA =====================
  {
    tag: "Fuga",
    question: "O que é considerada fuga limpa?",
    answer:
      "Fuga sem troca de tiros ou interferências.",
  },
  {
    tag: "Fuga",
    question: "Capotar várias vezes é permitido?",
    answer:
      "Não. Power-Gaming exagerado libera código 05.",
  },
  {
    tag: "Fuga",
    question: "Pular de locais irreais é permitido?",
    answer:
      "Não. É considerado Power-Gaming.",
  },

  // ===================== CÓDIGOS POLICIAIS =====================
  {
    tag: "Policia",
    question: "Quando o código 03 pode ser aplicado?",
    answer:
      "Após 5 minutos de fuga limpa.",
  },
  {
    tag: "Policia",
    question: "Quando o código 3 pode ser aplicado?",
    answer:
      "Após 3 minutos de fuga limpa.",
  },
  {
    tag: "Policia",
    question: "Código 05 pode ser aplicado sem tiros?",
    answer:
      "Sim, em casos de Power-Gaming grave.",
  },

  // ===================== CL / DESISTIR =====================
  {
    tag: "CL",
    question: "Posso desistir para ir direto ao cemitério?",
    answer:
      "Não. Isso é considerado CL.",
  },
  {
    tag: "CL",
    question: "Se eu cair da internet conta como CL?",
    answer:
      "Não, desde que seja comprovado com print.",
  },
  {
    tag: "CL",
    question: "Quanto tempo tenho para postar o print do crash?",
    answer:
      "Até 5 minutos após a queda.",
  },

  // ===================== /SOCORRO =====================
  {
    tag: "Socorro",
    question: "Posso usar /socorro durante ação?",
    answer:
      "Não. Somente após o término.",
  },
  {
    tag: "Socorro",
    question: "Quanto tempo após a ação posso usar /socorro?",
    answer:
      "Após 5 minutos e sem inimigos próximos.",
  },
  {
    tag: "Socorro",
    question: "Usar /socorro antes do tempo gera punição?",
    answer:
      "Sim. Pode gerar advertência.",
  },

  // ===================== SAMU =====================
  {
    tag: "SAMU",
    question: "SAMU pode reanimar durante troca de tiros?",
    answer:
      "Não. A ação deve estar finalizada.",
  },
  {
    tag: "SAMU",
    question: "Se SAMU chegar a ação acaba?",
    answer:
      "Sim. A ação é encerrada.",
  },
  {
    tag: "SAMU",
    question: "SAMU pode ser punido se interferir?",
    answer:
      "Sim. Mesmo sem intenção.",
  },

  // ===================== VEÍCULOS =====================
  {
    tag: "Veiculos",
    question: "Posso usar moto para sequestro?",
    answer:
      "Não. Motos são proibidas para conduzir reféns.",
  },
  {
    tag: "Veiculos",
    question: "Posso levar dois reféns no mesmo carro?",
    answer:
      "Não. Apenas um refém por veículo.",
  },
  {
    tag: "Veiculos",
    question: "Posso usar helicóptero em sequestro?",
    answer:
      "Sim, no máximo dois helicópteros VIP.",
  },
  {
    tag: "Veiculos",
    question: "Posso atirar de helicóptero?",
    answer:
      "Não. Atirar de helicóptero é proibido.",
  },

  // ===================== SEQUESTRO – REGRAS =====================
  {
    tag: "Sequestro",
    question: "Quantos sequestros a facção pode fazer por dia?",
    answer:
      "No máximo 4 ações de sequestro por dia.",
  },
  {
    tag: "Sequestro",
    question: "Posso sequestrar sozinho?",
    answer:
      "Não. Sequestro sozinho é proibido.",
  },
  {
    tag: "Sequestro",
    question: "Todos os sequestradores devem estar armados?",
    answer:
      "Sim. No mínimo com uma pistola.",
  },
  {
    tag: "Sequestro",
    question: "É permitido pegar itens do refém?",
    answer:
      "Sim, temporariamente.",
  },
  {
    tag: "Sequestro",
    question: "Os itens devem ser devolvidos?",
    answer:
      "Sim, caso o refém seja libertado.",
  },

  // ===================== NEGOCIAÇÃO DE SEQUESTRO =====================
  {
    tag: "Negociacao",
    question: "Quanto tempo os sequestradores têm para negociar?",
    answer:
      "30 minutos para negociar a vida do refém.",
  },
  {
    tag: "Negociacao",
    question: "Após quanto tempo o refém deve ser liberado?",
    answer:
      "Após 1 hora caso não haja acordo.",
  },
  {
    tag: "Negociacao",
    question: "Os sequestradores podem pedir valores absurdos?",
    answer:
      "Não. Valores fora das regras invalidam a negociação.",
  },
  {
    tag: "Negociacao",
    question: "Quem pode negociar pela vítima?",
    answer:
      "Polícia, amigos, família ou facção.",
  },

  // ===================== RESTRIÇÕES =====================
  {
    tag: "Restricoes",
    question: "Posso sequestrar em safezone?",
    answer:
      "Não. Safezones são proibidas.",
  },
  {
    tag: "Restricoes",
    question: "Posso sequestrar perto de dominação?",
    answer:
      "Não. Proximidades de dominação são proibidas.",
  },
  {
    tag: "Restricoes",
    question: "Posso sequestrar médicos em serviço?",
    answer:
      "Não. Médicos em serviço não podem ser sequestrados.",
  },

  // ===================== DARK RP =====================
  {
    tag: "DarkRP",
    question: "Raspar cabelo do refém é permitido?",
    answer:
      "Não. Dark-RP é proibido.",
  },
  {
    tag: "DarkRP",
    question: "Quebrar ossos do refém é permitido?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "DarkRP",
    question: "Abuso sexual no RP é permitido?",
    answer:
      "Não. É estritamente proibido.",
  },

  // ===================== RESGATE =====================
  {
    tag: "Resgate",
    question: "Posso resgatar aliado preso?",
    answer:
      "Somente durante o transporte.",
  },
  {
    tag: "Resgate",
    question: "Posso marcar hospital para resgate?",
    answer:
      "Não. Marcar hospitais é proibido.",
  },
  {
    tag: "Resgate",
    question: "Posso resgatar dentro da DP?",
    answer:
      "Não. Proibido.",
  },

  // ===================== GERAL =====================
  {
    tag: "Geral",
    question: "O desconhecimento das regras evita punição?",
    answer:
      "Não. Todos são responsáveis por conhecê-las.",
  },
  {
    tag: "Geral",
    question: "A staff pode interpretar o contexto da ação?",
    answer:
      "Sim. O contexto sempre será analisado.",
  },

  {
    tag: "Assalto",
    question: "Precisa ter policiais em patrulha (/ptr) para assalto?",
    answer:
      "Não. Para ação de assalto não é necessário ter policiais em patrulhamento (/ptr).",
  },
  {
    tag: "Assalto",
    question: "Quando o assalto é permitido?",
    answer:
      "Somente quando o aviso de assalto liberado estiver sendo exibido na cidade.",
  },
  {
    tag: "Assalto",
    question: "Assalto tem horário fixo?",
    answer:
      "Não. Não há mais horários fixos, apenas o aviso na cidade.",
  },
  {
    tag: "Assalto",
    question: "Posso iniciar assalto sem aviso ativo?",
    answer:
      "Não. É proibido iniciar assalto fora do horário permitido pelo aviso.",
  },
  {
    tag: "Assalto",
    question: "É permitido assaltar a pé?",
    answer:
      "Não. Assaltar a pé é proibido.",
  },
  {
    tag: "Assalto",
    question: "Qualquer jogador pode praticar assalto?",
    answer:
      "Não. Apenas jogadores setados em facções/organizações podem praticar assaltos.",
  },
  {
    tag: "Assalto",
    question: "Quais armamentos são permitidos em assalto?",
    answer:
      "Todos os armamentos são liberados em ações de assalto.",
  },
  {
    tag: "Assalto",
    question: "É permitido assaltar sozinho?",
    answer:
      "Não. Assaltar sozinho é proibido.",
  },
  {
    tag: "Assalto",
    question: "Qual o contingente máximo no assalto?",
    answer:
      "Até 4 bandidos em um carro, ou 2 bandidos em uma moto.",
  },
  {
    tag: "Assalto",
    question: "Quantos bandidos podem assaltar na mesma moto?",
    answer:
      "No máximo 2 bandidos na mesma moto.",
  },
  {
    tag: "Assalto",
    question: "Carro duas portas permite quantos assaltantes?",
    answer:
      "No máximo 2 bandidos no mesmo veículo.",
  },
  {
    tag: "Assalto",
    question: "Carro quatro portas permite quantos assaltantes?",
    answer:
      "No máximo 4 bandidos no mesmo veículo.",
  },
  {
    tag: "Assalto",
    question: "O anúncio do assalto é obrigatório?",
    answer:
      "Sim. É obrigatório anunciar a ação para a vítima/refém.",
  },
  {
    tag: "Assalto",
    question: "O anúncio do assalto deve ser feito como?",
    answer:
      "Em modo de fala 'Gritando' e explicando o motivo da abordagem.",
  },
  {
    tag: "Assalto",
    question: "A palavra 'assalto' precisa ser mencionada?",
    answer:
      "Sim. O bandido deve mencionar 'assalto' no anúncio.",
  },
  {
    tag: "Assalto",
    question: "É obrigatório seguir RP durante assalto?",
    answer:
      "Sim. É obrigatório seguir o roleplay para assaltar ou ser assaltado.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar policial fardado em serviço?",
    answer:
      "Não. É proibido assaltar policiais em serviço e uniformizados.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar médicos em serviço?",
    answer:
      "Não. Médicos em serviço e uniformizados não podem ser assaltados.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar mecânicos em serviço?",
    answer:
      "Não. Mecânicos em serviço e uniformizados não podem ser assaltados.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar bombeiros em serviço?",
    answer:
      "Não. Bombeiros em serviço e uniformizados não podem ser assaltados.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar motoristas em serviço?",
    answer:
      "Não. Motoristas em serviço e uniformizados não podem ser assaltados.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar jornalistas em serviço?",
    answer:
      "Não. Jornalistas em serviço e uniformizados não podem ser assaltados.",
  },
  {
    tag: "Assalto",
    question: "Se a vítima cooperar, posso matar depois?",
    answer:
      "Não. Matar após cooperação é RDM.",
  },
  {
    tag: "Assalto",
    question: "Posso roubar/lootear alguém que não participou do assalto?",
    answer:
      "Não. Só pode roubar pertences de quem recebeu a voz de assalto.",
  },
  {
    tag: "Assalto",
    question: "Posso exigir transferência bancária no assalto?",
    answer:
      "Não. Exigir transferência da conta bancária é proibido.",
  },
  {
    tag: "Assalto",
    question: "Policiais podem neutralizar quem está com arma em mãos?",
    answer:
      "Sim. Em qualquer horário, arma em punho pode resultar em neutralização.",
  },
  {
    tag: "Assalto",
    question: "Durante o assalto posso atirar na polícia chegando?",
    answer:
      "Sim. Se a polícia estiver chegando para prender durante o assalto, pode haver reação.",
  },
  {
    tag: "Assalto",
    question: "Posso fazer assalto fake só para matar policiais?",
    answer:
      "Não. Forjar assalto para matar policiais é proibido.",
  },
  {
    tag: "Assalto",
    question: "Posso roubar itens de farm ilegais no assalto?",
    answer:
      "Não. É proibido roubar itens de farm ilegais (pólvora, cápsula, etc.).",
  },
  {
    tag: "Assalto",
    question: "Revistar mulheres é permitido?",
    answer:
      "Sim, desde que mantenha respeito.",
  },
  {
    tag: "Assalto",
    question: "Revistar grávidas é permitido?",
    answer:
      "Sim, desde que mantenha respeito.",
  },
  {
    tag: "Assalto",
    question: "A vítima pode reagir a um assalto?",
    answer:
      "Sim, se estiver armada e não houver arma apontada diretamente.",
  },
  {
    tag: "Assalto",
    question: "Reagir com arma apontada é permitido?",
    answer:
      "Não. Isso caracteriza anti amor à vida.",
  },
  {
    tag: "Assalto",
    question: "Se eu estiver dentro do carro e receber voz, posso fugir?",
    answer:
      "Sim. Quem já está dentro de veículo pode tentar fugir.",
  },
  {
    tag: "Assalto",
    question: "Se eu estiver a pé e com arma apontada, posso correr até um carro?",
    answer:
      "Não. Correr para um veículo com armas apontadas é anti amor à vida.",
  },
  {
    tag: "Assalto",
    question: "É permitido atropelar assaltantes?",
    answer:
      "Não. Tentar atropelar assaltantes é proibido.",
  },
  {
    tag: "Assalto",
    question: "Posso bater meu carro no carro dos assaltantes?",
    answer:
      "Não. Usar veículo para bater é proibido.",
  },
  {
    tag: "Assalto",
    question: "Assaltar pessoas em rota de farm é permitido?",
    answer:
      "Sim. É permitido assaltar pessoas em rota de farm.",
  },
  {
    tag: "Assalto",
    question: "Roubar itens de farm é permitido?",
    answer:
      "Não. É proibido roubar itens de farm.",
  },
  {
    tag: "Assalto",
    question: "Posso marcar blips de entrega de drogas?",
    answer:
      "Não. Marcar blips de entrega de drogas é proibido.",
  },
  {
    tag: "Assalto",
    question: "QRR é permitido durante assalto contra a polícia?",
    answer:
      "Sim. É permitido solicitar/dar QRR/apoio contra a polícia.",
  },

  // ---- Sequestro Ilegal x Polícia (continua até completar 100) ----
  {
    tag: "SequestroXP",
    question: "Qual o mínimo de policiais em patrulha para sequestro ilegal x polícia?",
    answer:
      "Mínimo de 10 policiais em patrulha.",
  },
  {
    tag: "SequestroXP",
    question: "Pode abusar da quantidade de policiais para forçar ação grande?",
    answer:
      "Não. Deve ser usado bom senso para não abusar.",
  },
  {
    tag: "SequestroXP",
    question: "Comandantes ou cidadãos especiais podem ser sequestrados em serviço?",
    answer:
      "Não. Só podem ser sequestrados à paisana (fora de serviço).",
  },
  {
    tag: "SequestroXP",
    question: "Pedir valores exorbitantes fora das regras em sequestro gera o quê?",
    answer:
      "Mostra falta de negociação e a polícia pode neutralizar para salvar reféns.",
  },
  {
    tag: "SequestroXP",
    question: "Qual prioridade dos policiais no sequestro?",
    answer:
      "Preservar a vida dos reféns e retirá-los com segurança o quanto antes.",
  },
  {
    tag: "SequestroXP",
    question: "Sequestradores podem ficar fora da área do sequestro?",
    answer:
      "Apenas no máximo 2 bandidos podem ficar fora para contato com policiais.",
  },
  {
    tag: "SequestroXP",
    question: "É permitido iniciar sequestro com bandidos fora do local escolhido?",
    answer:
      "Não. Não é permitido iniciar com bandidos fora do local.",
  },
  {
    tag: "SequestroXP",
    question: "A polícia deve fazer o quê até o final do sequestro?",
    answer:
      "Rushar até o final da ação ou dar QTA anunciando desistência.",
  },
  {
    tag: "SequestroXP",
    question: "Quantos policiais podem atuar na ação por sequestrador?",
    answer:
      "Sempre o dobro de policiais para a quantidade de sequestradores.",
  },
  {
    tag: "SequestroXP",
    question: "Exemplo: 10 bandidos significa quantos policiais?",
    answer:
      "20 policiais.",
  },

  // Completar a lista para fechar 100 com variações úteis e não repetidas
  {
    tag: "Assalto",
    question: "Se eu não mencionar 'assalto' no anúncio, a ação vale?",
    answer:
      "Pode ser invalidada. A palavra 'assalto' deve ser mencionada claramente.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar usando dois veículos para separar o grupo?",
    answer:
      "Não. O contingente deve estar concentrado conforme limite e sem dividir em comboio.",
  },
  {
    tag: "Assalto",
    question: "Se eu estiver sem facção setada, posso participar do assalto como apoio?",
    answer:
      "Não. Apenas membros setados em facções/organizações podem praticar assalto.",
  },
  {
    tag: "Assalto",
    question: "Posso roubar itens de farm legal durante assalto?",
    answer:
      "As regras destacam proibição de itens de farm e de farm ilegal; evite roubar qualquer item de farm.",
  },
  {
    tag: "Assalto",
    question: "Posso manter a vítima rendida por muito tempo sem necessidade?",
    answer:
      "Não é recomendado. Deve seguir RP e não prolongar para abusar da vítima.",
  },
  {
    tag: "Assalto",
    question: "Posso fazer voz de assalto só para intimidar e ir embora?",
    answer:
      "Não. Isso pode ser entendido como assalto fake ou abuso da regra.",
  },
  {
    tag: "Assalto",
    question: "Se a vítima estiver sem arma, ela pode reagir?",
    answer:
      "A reação deve seguir bom senso. Sem arma, normalmente deve cooperar.",
  },
  {
    tag: "Assalto",
    question: "Se a polícia chegar e eu não atirar, posso fugir?",
    answer:
      "Sim. Fugir é permitido; reagir atirando é permitido se estiverem chegando para prender.",
  },
  {
    tag: "Assalto",
    question: "Posso pedir para a vítima sacar dinheiro no banco?",
    answer:
      "Não. Exigir movimentação bancária/transferência é proibido.",
  },
  {
    tag: "Assalto",
    question: "Posso exigir que a vítima pague por PIX fora do jogo?",
    answer:
      "Não. Qualquer cobrança fora do RP e fora das regras é proibida.",
  },
  {
    tag: "Assalto",
    question: "Posso revistar e humilhar a vítima verbalmente?",
    answer:
      "Não. Revistar é permitido com respeito; humilhação pode gerar punição.",
  },
  {
    tag: "Assalto",
    question: "Se a vítima cooperar, posso finalizar para 'não denunciar'?",
    answer:
      "Não. Isso é RDM após cooperação.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar uma pessoa e depois lootear outro corpo no local?",
    answer:
      "Não. Só pode roubar de quem participou e recebeu voz.",
  },
  {
    tag: "Assalto",
    question: "Posso usar carro 2 portas com 3 pessoas no assalto?",
    answer:
      "Não. Em carro 2 portas, o máximo é 2 bandidos.",
  },
  {
    tag: "Assalto",
    question: "Posso usar carro 4 portas com 5 pessoas no assalto?",
    answer:
      "Não. Em carro 4 portas, o máximo é 4 bandidos.",
  },
  {
    tag: "Assalto",
    question: "Posso fazer assalto com 4 bandidos em duas motos?",
    answer:
      "Não. A regra limita 2 bandidos em uma moto e não prevê divisão em duas motos.",
  },
  {
    tag: "Assalto",
    question: "Se a vítima tentar fugir de carro ao receber voz, isso é permitido?",
    answer:
      "Sim, se ela já estiver dentro do veículo quando receber a voz.",
  },
  {
    tag: "Assalto",
    question: "Se eu estiver a pé e receber voz com arma apontada, posso correr?",
    answer:
      "Não. Correr para pegar veículo nessas condições é anti amor à vida.",
  },
  {
    tag: "Assalto",
    question: "Posso tentar derrubar a moto dos assaltantes com meu carro?",
    answer:
      "Não. Bater veículo contra veículo é proibido.",
  },
  {
    tag: "Assalto",
    question: "Posso levar o assaltado para outro local?",
    answer:
      "Somente se virar sequestro e seguir regras de sequestro; em assalto comum, evite condução.",
  },
  {
    tag: "Assalto",
    question: "Assaltar em safezone é permitido?",
    answer:
      "Não. Ações em safezone são proibidas.",
  },
  {
    tag: "SequestroXP",
    question: "Se tiver 10 policiais online, posso iniciar o sequestro x polícia?",
    answer:
      "A regra fala em 10 policiais em patrulha; deve confirmar se estão de /ptr e usar bom senso.",
  },
  {
    tag: "SequestroXP",
    question: "Posso deixar 5 bandidos do lado de fora no contato?",
    answer:
      "Não. No máximo 2 podem ficar do lado de fora para contato.",
  },
  {
    tag: "SequestroXP",
    question: "Polícia pode desistir do sequestro?",
    answer:
      "Sim. Pode dar QTA e anunciar a desistência.",
  },
  {
    tag: "SequestroXP",
    question: "É permitido iniciar com contato do lado de fora antes de começar?",
    answer:
      "Não. Não pode iniciar sequestro com bandidos fora do local escolhido.",
  },
  {
    tag: "Guerra",
    question: "Para declarar guerra preciso seguir quais regras base?",
    answer:
      "Deve seguir os horários e regras de sequestro da cidade.",
  },
  {
    tag: "Guerra",
    question: "É obrigatório gravar vídeo de declaração da guerra?",
    answer:
      "Sim. A declaração deve ser registrada em vídeo seguindo os requisitos.",
  },
  {
    tag: "Guerra",
    question: "Quantos membros aparecem no vídeo em guerra entre duas facções?",
    answer:
      "4 membros e 1 refém.",
  },
  {
    tag: "Guerra",
    question: "No vídeo de declaração, o refém precisa estar como?",
    answer:
      "Com capuz e algema obrigatórios.",
  },
  {
    tag: "Guerra",
    question: "A facção desafiadora precisa ser identificada no vídeo?",
    answer:
      "Sim. A facção desafiadora deve estar claramente identificada.",
  },
  {
    tag: "Guerra",
    question: "Em guerra com aliança, quem deve aparecer no vídeo?",
    answer:
      "1 membro de cada facção desafiada + 1 representante da facção aliada, com todos presentes.",
  },
  {
    tag: "Guerra",
    question: "Quanto tempo a facção desafiada tem para responder?",
    answer:
      "24 horas para aceitar ou recusar.",
  },
  {
    tag: "Guerra",
    question: "Se não responder em 24h, qual punição?",
    answer:
      "Multa de R$50.000.000 no painelfac do desafiado.",
  },
  {
    tag: "Guerra",
    question: "Se duas facções forem desafiadas e não responderem, o que ocorre?",
    answer:
      "A multa é aplicada para cada uma (dobrada no total).",
  },
  {
    tag: "Guerra",
    question: "Se não tiver saldo no painelfac para pagar a multa?",
    answer:
      "A multa será dividida proporcionalmente entre os líderes.",
  },
  {
    tag: "Guerra",
    question: "Quantas guerras podem ser declaradas por vez?",
    answer:
      "Apenas uma guerra pode ser declarada por vez.",
  },
  {
    tag: "Guerra",
    question: "Se a facção recusar a guerra, posso declarar outra?",
    answer:
      "Sim. Se recusar, você poderá declarar outra guerra.",
  },
  {
    tag: "Guerra",
    question: "Recrutamento na guerra é livre?",
    answer:
      "Sim. O recrutamento pode ocorrer a qualquer momento.",
  },
  {
    tag: "Guerra",
    question: "No evento 15x15, qual requisito de tempo na facção?",
    answer:
      "Mínimo de 7 dias na facção antes da data em que a guerra foi declarada.",
  },
  {
    tag: "Guerra",
    question: "Se uma facção for desafiada por duas facções, o que pode fazer?",
    answer:
      "Pode escolher aliar-se a uma facção parceira para equilibrar.",
  },
  {
    tag: "Guerra",
    question: "Qual limite de facções/organizações envolvidas por lado?",
    answer:
      "Máximo de duas para cada lado.",
  },
  {
    tag: "Guerra",
    question: "Onde ficam os blips de entrada da guerra?",
    answer:
      "No aeroporto.",
  },
  {
    tag: "Guerra",
    question: "Mochila é obrigatória na guerra?",
    answer:
      "Sim. O uso da mochila é obrigatório até o final da guerra.",
  },
  {
    tag: "Guerra",
    question: "Quando a guerra começa e termina?",
    answer:
      "Começa após o RR das 18:00 e termina antes do RR das 18:00 do 3º dia.",
  },
  {
    tag: "Guerra",
    question: "Precisa aguardar liberação de quem para marcar guerra?",
    answer:
      "Deve aguardar liberação do [CHEFE GERAL ILEGAL].",
  },
  {
    tag: "Guerra",
    question: "Aposta é obrigatória na guerra?",
    answer:
      "Sim. Aposta é obrigatória.",
  },
  {
    tag: "Guerra",
    question: "Como funciona o retorno do valor apostado?",
    answer:
      "Ao ganhar, recebe 50% do valor apostado conforme as faixas indicadas.",
  },
  {
    tag: "Guerra",
    question: "Se aceitar guerra e desistir antes do final, o que acontece?",
    answer:
      "Perde o dinheiro apostado.",
  },
  {
    tag: "Guerra",
    question: "Pode ter duas guerras ao mesmo tempo?",
    answer:
      "Pode haver até 2, mediante análise para evitar descontrole.",
  },
  {
    tag: "Guerra",
    question: "Polícia pode ir onde houver QRU de disparos da guerra?",
    answer:
      "Sim, mas não pode ir aos arredores do QG.",
  },

  // 15x15 gravações
  {
    tag: "Guerra15x15",
    question: "A lista dos 15x15 deve ser enviada com quanto tempo de antecedência?",
    answer:
      "Com no mínimo 6 horas de antecedência.",
  },
  {
    tag: "Guerra15x15",
    question: "Onde enviar a lista dos participantes da final?",
    answer:
      "No canal de Bate-papo da respectiva facção/organização no Discord do Ilegal.",
  },
  {
    tag: "Guerra15x15",
    question: "Todos participantes precisam estar no Discord do Ilegal?",
    answer:
      "Sim. É obrigatório estar registrado no Discord do Ilegal.",
  },
  {
    tag: "Guerra15x15",
    question: "Todos devem gravar a própria tela durante a partida?",
    answer:
      "Sim. A gravação é obrigatória e deve ser contínua.",
  },
  {
    tag: "Guerra15x15",
    question: "A gravação deve começar com o quê?",
    answer:
      "Com a área de trabalho e o jogo fechado, antes de abrir o FiveM.",
  },
  {
    tag: "Guerra15x15",
    question: "Pode ter cortes na gravação do 15x15?",
    answer:
      "Não. A gravação deve ser completa, sem cortes.",
  },
  {
    tag: "Guerra15x15",
    question: "Qual prazo para enviar o link do vídeo após terminar?",
    answer:
      "Até 15 minutos após o término da gravação.",
  },
  {
    tag: "Guerra15x15",
    question: "Onde o vídeo deve ser armazenado?",
    answer:
      "No YouTube.",
  },
  {
    tag: "Guerra15x15",
    question: "O que pode acontecer se não houver gravação válida?",
    answer:
      "Pode gerar desclassificação, banimento do jogador e perda do título pela equipe.",
  },

  // Condutas gerais guerra
  {
    tag: "Guerra",
    question: "Drogas, coletes e munições são limitados na guerra?",
    answer:
      "Não. O uso é ilimitado.",
  },
  {
    tag: "Guerra",
    question: "Posso voltar para a guerra após morrer?",
    answer:
      "Sim. Pode voltar quantas vezes quiser durante a guerra.",
  },
  {
    tag: "Guerra",
    question: "Posso reconhecer rival pela roupa da facção?",
    answer:
      "Não. Só pode reconhecer pela mochila.",
  },
  {
    tag: "Guerra",
    question: "Posso matar alguém sem mochila no perímetro?",
    answer:
      "Não. Atirar em pessoas sem mochila é proibido.",
  },
  {
    tag: "Guerra",
    question: "Se alguém sem mochila abrir ticket e for rival, quem é punido?",
    answer:
      "Quem estava sem mochila será punido por não usar a mochila obrigatória.",
  },
  {
    tag: "Guerra",
    question: "Posso marcar saída de spawn após morte?",
    answer:
      "Não. Marcar saída de spawn é proibido.",
  },
  {
    tag: "Guerra",
    question: "É permitido loot nos envolvidos da guerra?",
    answer:
      "Sim. Loot dos corpos envolvidos é permitido.",
  },
  {
    tag: "Guerra",
    question: "É permitido loot de facção não participante?",
    answer:
      "Não. Loot de outras fac/org fora da guerra é proibido.",
  },
  {
    tag: "Guerra",
    question: "É permitido invadir QG durante a guerra?",
    answer:
      "Sim. Invadir o QG durante o período de guerra é permitido.",
  },
  {
    tag: "Guerra",
    question: "É permitido dormir dentro do QG inimigo?",
    answer:
      "Sim, desde que não seja CL.",
  },
  {
    tag: "Guerra",
    question: "Furto de veículos no QG é permitido?",
    answer:
      "Sim. Furto de veículos e carros baú no QG é permitido.",
  },
  {
    tag: "Guerra",
    question: "Power-gaming de veículos é permitido na guerra?",
    answer:
      "Sim, apenas de veículos, como rampar para entrar no QG.",
  },
  {
    tag: "Guerra",
    question: "Reviver com /segurar durante guerra é permitido?",
    answer:
      "Não. É bug de reviver e é proibido.",
  },
  {
    tag: "Guerra",
    question: "Binds/animações são permitidos na guerra?",
    answer:
      "Sim, entre os envolvidos. Contra a polícia nas ruas é proibido.",
  },
  {
    tag: "Guerra",
    question: "Matar fora da dimensão de guerra é permitido?",
    answer:
      "Não, salvo bug na dimensão com aviso do chefe do ilegal.",
  },
  {
    tag: "Guerra",
    question: "Fugir para blip da guerra após voz de assalto é permitido?",
    answer:
      "Não. É proibido usar blips de guerra para se sobressair em ações.",
  },
  {
    tag: "Guerra",
    question: "É permitido usar mochila de outras facções para trocar tiros?",
    answer:
      "Não. É proibido e pode resultar em banimento permanente.",
  },
  {
    tag: "Guerra",
    question: "Retirar a mochila durante a guerra é permitido?",
    answer:
      "Não. Retirar a mochila é proibido.",
  },
  {
    tag: "Guerra",
    question: "Grávidas e crianças podem circular no perímetro da guerra?",
    answer:
      "Não. A circulação é proibida e mortes no perímetro não serão RDM.",
  },
  {
    tag: "Guerra",
    question: "Forçar alguém a descer do carro para conferir facção é permitido?",
    answer:
      "Não. É proibido; pode gerar denúncia por força ação se não for rival.",
  },
  {
    tag: "Guerra",
    question: "PG de ilegal x polícia é permitido durante guerra?",
    answer:
      "Não. PG de ilegal x polícia é proibido; liberado apenas ilegal x ilegal.",
  },
  {
    tag: "Guerra",
    question: "Bugs para atravessar muros e paredes são permitidos?",
    answer:
      "Não. Abuso de bugs é proibido e pode resultar em punições severas.",
  },
  {
    tag: "Guerra",
    question: "Posso usar bug para puxar blip de dominação durante guerra?",
    answer:
      "Não. Burlar o andamento das atividades do RP pode gerar banimento permanente.",
  },

  // Preencher até 100 com variações úteis
  {
    tag: "Guerra",
    question: "Posso reconhecer rival pela voz durante guerra?",
    answer:
      "Não. Reconhecimento deve ser feito pela mochila, não por voz ou roupa.",
  },
  {
    tag: "Guerra",
    question: "Posso matar bombeiro que está ajudando inimigo?",
    answer:
      "Não. É proibido matar bombeiros que estão ajudando pessoas, independentemente do local.",
  },
  {
    tag: "Guerra",
    question: "Se um civil estiver no veículo com alguém em guerra e morrer, é RDM?",
    answer:
      "Não. Não será considerado RDM nesse caso.",
  },
  {
    tag: "Guerra",
    question: "Portões e portas do QG podem ficar fechados na guerra?",
    answer:
      "Não. Staff pode abrir portões e portas a qualquer momento durante a guerra.",
  },
  {
    tag: "Guerra",
    question: "É permitido COP BAIT na guerra entre envolvidos?",
    answer:
      "Sim, entre os envolvidos e com as restrições citadas (sem marcar spawn/cemitério).",
  },
  {
    tag: "Guerra",
    question: "Posso marcar saída de cemitério durante guerra?",
    answer:
      "Não. Marcar cemitério é proibido.",
  },
  {
    tag: "Guerra",
    question: "Cop bait de vendas é permitido?",
    answer:
      "Não. Apenas armadilhas para morte entre envolvidos, conforme regra.",
  },
  {
    tag: "Guerra",
    question: "Quantas advertências a facção pode levar por descumprimento?",
    answer:
      "Descumprimento pode gerar ADV de fac, dependendo da gravidade.",
  },

  {
    tag: "Conflict24",
    question: "Qual objetivo do Conflict24?",
    answer:
      "Trazer RP de conflito entre facções, com confronto armado no QG/favela.",
  },
  {
    tag: "Conflict24",
    question: "Qual o tempo total do Conflict24?",
    answer:
      "Tempo de ação: 15 horas.",
  },
  {
    tag: "Conflict24",
    question: "Existe limite de bandidos no Conflict24?",
    answer:
      "Não. É sem limite de participantes do lado ilegal.",
  },
  {
    tag: "Conflict24",
    question: "Armamentos no Conflict24 são limitados?",
    answer:
      "Não. Armamentos são livres.",
  },
  {
    tag: "Conflict24",
    question: "Qual o valor de inscrição por facção no Conflict24?",
    answer:
      "25kk por facção.",
  },
  {
    tag: "Conflict24",
    question: "Precisa seguir quais regras para declarar Conflict24?",
    answer:
      "Deve seguir horários e regras de sequestro da cidade.",
  },
  {
    tag: "Conflict24",
    question: "O que deve conter o vídeo de declaração do Conflict24?",
    answer:
      "4 membros da facção desafiante e 1 refém (obrigatoriamente o líder da facção adversária).",
  },
  {
    tag: "Conflict24",
    question: "No vídeo do Conflict24, o refém deve estar como?",
    answer:
      "Algemado e com capuz.",
  },
  {
    tag: "Conflict24",
    question: "Após gravar o vídeo, onde solicita o Conflict24?",
    answer:
      "No canal 🔫・marcar-conflict24 seguindo o modelo do canal.",
  },
  {
    tag: "Conflict24",
    question: "Para validar o Conflict24, para quem enviar os 25kk?",
    answer:
      "Enviar para o ID 3 ou ID 9.",
  },
  {
    tag: "Conflict24",
    question: "Quanto tempo o líder desafiado tem para responder?",
    answer:
      "24 horas para aceitar ou recusar.",
  },
  {
    tag: "Conflict24",
    question: "Quantos conflicts podem ser declarados por vez?",
    answer:
      "Apenas um por vez, com limite de um por semana.",
  },
  {
    tag: "Conflict24",
    question: "Se a facção desafiada recusar, posso declarar outro?",
    answer:
      "Sim, seguindo as regras e limites.",
  },
  {
    tag: "Conflict24",
    question: "O recrutamento durante o Conflict24 é livre?",
    answer:
      "Sim, pode ocorrer a qualquer momento.",
  },
  {
    tag: "Conflict24",
    question: "Quantas facções por lado são permitidas no Conflict24?",
    answer:
      "Apenas uma para cada lado.",
  },
  {
    tag: "Conflict24",
    question: "O uso da mochila é obrigatório no Conflict24?",
    answer:
      "Sim. Mochila da fac é obrigatória.",
  },
  {
    tag: "Conflict24",
    question: "Quando o Conflict24 começa e termina?",
    answer:
      "Começa no RR das 18:00 e termina às 09:00 do dia seguinte.",
  },
  {
    tag: "Conflict24",
    question: "Precisa aguardar liberação de quem no Conflict24?",
    answer:
      "Do [RESP ILEGAL].",
  },
  {
    tag: "Conflict24",
    question: "Se desistir do Conflict24 antes do fim, qual punição?",
    answer:
      "Blacklist de 2 semanas.",
  },
  {
    tag: "Conflict24",
    question: "Polícia pode ir aos arredores do QG no Conflict24?",
    answer:
      "Não. Polícia pode ir nas ruas da QRU, mas não nos arredores do QG delimitado.",
  },
  {
    tag: "Conflict24",
    question: "É permitido trocar tiros com polícia dentro do perímetro Conflict?",
    answer:
      "Não. Troca de tiros com polícia dentro do perímetro é proibida.",
  },
  {
    tag: "Conflict24",
    question: "Policiais podem entrar no perímetro Conflict para intervir?",
    answer:
      "Não. Policiais são proibidos dentro do perímetro Conflict.",
  },
  {
    tag: "Conflict24",
    question: "É permitido disparar de fora para dentro do perímetro?",
    answer:
      "Não. Disparos de fora para dentro e de dentro para fora são proibidos.",
  },

  // PROIBIDO NO CONFLICT
  {
    tag: "Conflict24",
    question: "Posso usar mochila de outra facção no Conflict24?",
    answer:
      "Não. É proibido e pode gerar prisão staff por 150 meses.",
  },
  {
    tag: "Conflict24",
    question: "Posso retirar mochila durante Conflict24?",
    answer:
      "Não. Retirar mochila é proibido.",
  },
  {
    tag: "Conflict24",
    question: "Posso atirar em pessoa sem mochila no Conflict24?",
    answer:
      "Não. Atirar em pessoas sem mochila é proibido.",
  },
  {
    tag: "Conflict24",
    question: "PG de ilegal x polícia é permitido no Conflict24?",
    answer:
      "Não. É proibido; liberado apenas ilegal x ilegal.",
  },
  {
    tag: "Conflict24",
    question: "Abuso de bugs (atravessar muros, veículos limbados) é permitido?",
    answer:
      "Não. É proibido e pode gerar punição severa.",
  },
  {
    tag: "Conflict24",
    question: "Fugir para área do Conflict ao receber voz de parada é permitido?",
    answer:
      "Não. É proibido usar a área para se sobressair em ação.",
  },
  {
    tag: "Conflict24",
    question: "É permitido matar bombeiros que ajudam inimigos no Conflict?",
    answer:
      "Não. É proibido.",
  },

  // PERMITIDO NO CONFLICT
  {
    tag: "Conflict24",
    question: "É permitido invadir o QG durante Conflict24?",
    answer:
      "Sim. Invadir o QG durante as 15 horas é permitido.",
  },
  {
    tag: "Conflict24",
    question: "Confronto direto nas ruas é permitido?",
    answer:
      "Sim. Similar à ação de guerra, dentro das regras.",
  },
  {
    tag: "Conflict24",
    question: "Dormir no QG inimigo é permitido?",
    answer:
      "Sim, desde que não seja CL.",
  },
  {
    tag: "Conflict24",
    question: "Furto de veículos no QG é permitido?",
    answer:
      "Sim, incluindo carros baú no QG.",
  },
  {
    tag: "Conflict24",
    question: "Power-gaming de veículos é permitido no Conflict24?",
    answer:
      "Sim, por exemplo rampar para entrar no QG.",
  },
  {
    tag: "Conflict24",
    question: "Reviver com /segurar é permitido no Conflict24?",
    answer:
      "Não. É bug de reviver e é proibido.",
  },
  {
    tag: "Conflict24",
    question: "Reconhecer carros para matar é permitido no Conflict24?",
    answer:
      "Sim, mas se matar inocente fora do conflito, será RDM.",
  },
  {
    tag: "Conflict24",
    question: "Ratão em carro da facção rival é punido?",
    answer:
      "Não. Ratão em carro rival não será punido.",
  },
  {
    tag: "Conflict24",
    question: "Ratão em quem não participa do Conflict é punido?",
    answer:
      "Sim. Pode gerar advertência.",
  },
  {
    tag: "Conflict24",
    question: "Loot dos corpos envolvidos é permitido?",
    answer:
      "Sim. Loot dos envolvidos é permitido a qualquer momento.",
  },
  {
    tag: "Conflict24",
    question: "Loot de facção que não participa é permitido?",
    answer:
      "Não. Loot de não participantes é proibido.",
  },
  {
    tag: "Conflict24",
    question: "Se eu morrer no Conflict24 posso voltar?",
    answer:
      "Sim. Pode voltar quantas vezes quiser.",
  },
  {
    tag: "Conflict24",
    question: "COP BAIT é permitido no Conflict24?",
    answer:
      "Sim, entre os envolvidos e com as restrições (sem spawn/cemitério).",
  },

  // Completar até 100 com variações úteis (sem repetir)
  {
    tag: "Conflict24",
    question: "Posso marcar saída de spawn após morrer no Conflict24?",
    answer:
      "Não. Marcar saída de spawn é proibido.",
  },
  {
    tag: "Conflict24",
    question: "Posso marcar cemitério durante o Conflict24?",
    answer:
      "Não. Marcar cemitério é proibido.",
  },
  {
    tag: "Conflict24",
    question: "Grávidas e crianças podem circular no perímetro do Conflict?",
    answer:
      "Não. A circulação é proibida e mortes no perímetro não serão RDM.",
  },
  {
    tag: "Conflict24",
    question: "Forçar alguém a descer do carro para 'ver se é rival' é permitido?",
    answer:
      "Não. É proibido; se não for rival pode denunciar por força ação.",
  },
  {
    tag: "Conflict24",
    question: "As regras de CL, Dark, Flaming continuam valendo no Conflict?",
    answer:
      "Sim. Devem ser seguidas normalmente.",
  },
  {
    tag: "Conflict24",
    question: "A polícia pode trocar tiros do lado de fora do perímetro?",
    answer:
      "Sim, desde que sem disparos de fora para dentro e sem entrada no perímetro.",
  },

  // --------------------- ASSALTO (1–55) ---------------------
  {
    tag: "Assalto",
    question: "Assalto pode ser iniciado se o aviso de assalto estiver desligado no momento?",
    answer:
      "Não. Assalto só é permitido quando o aviso estiver sendo exibido na cidade.",
  },
  {
    tag: "Assalto",
    question: "Se o aviso de assalto cair no meio da ação, devo encerrar?",
    answer:
      "Sim. Sem aviso ativo, a continuidade pode ser considerada fora do permitido.",
  },
  {
    tag: "Assalto",
    question: "Posso iniciar assalto se não estiver setado em facção/org?",
    answer:
      "Não. Apenas jogadores setados em facções/organizações podem praticar assalto.",
  },
  {
    tag: "Assalto",
    question: "Posso participar do assalto como 'apoio' sem estar setado?",
    answer:
      "Não. Participação sem setagem caracteriza infração.",
  },
  {
    tag: "Assalto",
    question: "É permitido fazer assalto em dupla a pé?",
    answer:
      "Não. Assalto a pé é proibido, mesmo com mais de um bandido.",
  },
  {
    tag: "Assalto",
    question: "Posso estacionar o carro e abordar a vítima a pé para assaltar?",
    answer:
      "Não. A regra proíbe assaltar a pé.",
  },
  {
    tag: "Assalto",
    question: "É permitido realizar assalto usando bicicleta?",
    answer:
      "Não. A regra exige veículo e proíbe assalto a pé.",
  },
  {
    tag: "Assalto",
    question: "O grupo pode usar dois carros para cercar a vítima?",
    answer:
      "Não. O contingente deve estar dentro do limite e sem dividir em múltiplos veículos.",
  },
  {
    tag: "Assalto",
    question: "Posso fazer assalto com 4 bandidos divididos em 2 motos?",
    answer:
      "Não. A regra permite no máximo 2 em uma moto e não prevê duas motos na mesma ação.",
  },
  {
    tag: "Assalto",
    question: "Posso fazer assalto com 3 bandidos em carro 2 portas?",
    answer:
      "Não. Em carro de duas portas, o máximo é 2 bandidos.",
  },
  {
    tag: "Assalto",
    question: "Posso fazer assalto com 2 bandidos em carro 4 portas?",
    answer:
      "Sim. Carro 4 portas permite até 4, então 2 é permitido.",
  },
  {
    tag: "Assalto",
    question: "Posso trocar de carro no meio do assalto para fugir?",
    answer:
      "Evite. Troca pode ser considerada abuso; mantenha coerência e bom senso no RP.",
  },
  {
    tag: "Assalto",
    question: "Sou obrigado a anunciar a rendição antes de revistar?",
    answer:
      "Sim. O anúncio do assalto é obrigatório antes de qualquer ação sobre a vítima.",
  },
  {
    tag: "Assalto",
    question: "Posso anunciar sem usar o modo 'Gritando'?",
    answer:
      "Não. O anúncio deve ser feito no modo 'Gritando'.",
  },
  {
    tag: "Assalto",
    question: "Se eu falar baixo e a vítima não entender, a ação vale?",
    answer:
      "Pode ser invalidada. A fala deve ser clara, em 'Gritando', com a palavra 'assalto'.",
  },
  {
    tag: "Assalto",
    question: "Posso dizer 'perdeu' sem mencionar 'assalto'?",
    answer:
      "Não. É obrigatório mencionar a palavra 'assalto'.",
  },
  {
    tag: "Assalto",
    question: "É permitido ameaçar a vítima sem iniciar o assalto de fato?",
    answer:
      "Não. Isso pode caracterizar assalto fake ou abuso.",
  },
  {
    tag: "Assalto",
    question: "Posso forjar um assalto para atrair a polícia?",
    answer:
      "Não. Assalto fake para matar policiais é proibido.",
  },
  {
    tag: "Assalto",
    question: "Posso matar a vítima se ela cooperar totalmente?",
    answer:
      "Não. Matar após cooperação é considerado RDM.",
  },
  {
    tag: "Assalto",
    question: "Se a vítima cooperar e depois me provocar, posso matar?",
    answer:
      "Não. A regra proíbe matar após cooperação no assalto.",
  },
  {
    tag: "Assalto",
    question: "Posso roubar itens de alguém que morreu perto do assalto?",
    answer:
      "Não. Só pode roubar pertences de quem recebeu voz e participou da ação.",
  },
  {
    tag: "Assalto",
    question: "Posso revistar outra pessoa que apareceu no local sem dar voz de assalto?",
    answer:
      "Não. Você deve dar voz de assalto para poder roubar pertences daquela pessoa.",
  },
  {
    tag: "Assalto",
    question: "Posso exigir que a vítima faça PIX ou pagamento externo?",
    answer:
      "Não. Qualquer transferência externa ou fora do RP é proibida.",
  },
  {
    tag: "Assalto",
    question: "Posso exigir que a vítima saque dinheiro do banco?",
    answer:
      "Não. É proibido exigir transferências/ações bancárias para os assaltantes.",
  },
  {
    tag: "Assalto",
    question: "É permitido revistar mulheres durante o assalto?",
    answer:
      "Sim, desde que com respeito.",
  },
  {
    tag: "Assalto",
    question: "É permitido revistar grávidas durante o assalto?",
    answer:
      "Sim, desde que com respeito.",
  },
  {
    tag: "Assalto",
    question: "Posso humilhar verbalmente a vítima durante revista?",
    answer:
      "Não. Deve manter respeito; humilhação pode gerar punição.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar policiais em serviço se estiverem à paisana?",
    answer:
      "A regra proíbe assaltar em serviço e uniformizados; se estiver à paisana, use bom senso e confirme status.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar mecânico uniformizado mesmo fora do veículo de serviço?",
    answer:
      "Não. Em serviço e uniformizado não pode ser assaltado.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar jornalista uniformizado para obter informação?",
    answer:
      "Não. Jornalistas em serviço e uniformizados são proibidos.",
  },
  {
    tag: "Assalto",
    question: "Posso reagir à polícia atirando durante o assalto?",
    answer:
      "Sim, se os bandidos perceberem a polícia chegando para prendê-los durante o assalto.",
  },
  {
    tag: "Assalto",
    question: "Posso abrir fogo na polícia sem estar efetivamente assaltando alguém?",
    answer:
      "Não. Isso pode caracterizar assalto fake e será punido.",
  },
  {
    tag: "Assalto",
    question: "Policiais podem neutralizar alguém apenas por estar com arma em punho?",
    answer:
      "Sim. Em qualquer horário, arma em mãos pode resultar em neutralização.",
  },
  {
    tag: "Assalto",
    question: "Posso roubar pólvora durante o assalto?",
    answer:
      "Não. Itens de farm ilegais como pólvora são proibidos de roubar.",
  },
  {
    tag: "Assalto",
    question: "Posso roubar gatilho, peça de arma ou cápsula no assalto?",
    answer:
      "Não. Itens de farm ilegais como gatilho, peça de arma e cápsula são proibidos.",
  },
  {
    tag: "Assalto",
    question: "Posso roubar drogas de farm, como pasta impura ou semente?",
    answer:
      "Não. Itens de farm ilegais e semelhantes são proibidos de roubar.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar alguém que está em rota de farm?",
    answer:
      "Sim. Assaltar em rota de farm é permitido.",
  },
  {
    tag: "Assalto",
    question: "Se posso assaltar rota de farm, posso roubar os itens de farm?",
    answer:
      "Não. Assaltar é permitido, roubar itens de farm é proibido.",
  },
  {
    tag: "Assalto",
    question: "Posso marcar o blip de entrega de drogas para emboscar?",
    answer:
      "Não. Marcar blips de entrega de drogas é proibido.",
  },
  {
    tag: "Assalto",
    question: "É permitido atropelar os assaltantes para salvar a vítima?",
    answer:
      "Não. Tentar atropelar assaltantes é proibido.",
  },
  {
    tag: "Assalto",
    question: "É permitido bater meu carro no carro dos assaltantes para impedir fuga?",
    answer:
      "Não. Usar veículo para bater no veículo dos assaltantes é proibido.",
  },
  {
    tag: "Assalto",
    question: "Os assaltantes podem bater o veículo na minha fuga?",
    answer:
      "Não. Bater veículo contra veículo é proibido para ambos os lados.",
  },
  {
    tag: "Assalto",
    question: "Se eu estiver dentro do meu carro e receber voz de assalto, posso fugir?",
    answer:
      "Sim. Estando dentro do veículo, é permitido tentar fuga.",
  },
  {
    tag: "Assalto",
    question: "Se eu estiver a pé e receber voz com armas apontadas, posso correr até um carro?",
    answer:
      "Não. Isso é anti amor à vida.",
  },
  {
    tag: "Assalto",
    question: "A vítima pode reagir se não houver arma apontada?",
    answer:
      "Sim, desde que esteja armada e não configure anti amor à vida.",
  },
  {
    tag: "Assalto",
    question: "Se tiver duas armas apontadas para mim, posso reagir?",
    answer:
      "Não. Armas apontadas caracterizam anti amor à vida ao reagir.",
  },
  {
    tag: "Assalto",
    question: "É permitido dar QRR contra a polícia durante assalto?",
    answer:
      "Sim. QRR/apoio é permitido contra a polícia.",
  },
  {
    tag: "Assalto",
    question: "É permitido chamar QRR ilegal x ilegal durante assalto?",
    answer:
      "Não. QRR entre ilegais é proibido em qualquer contexto.",
  },
  {
    tag: "Assalto",
    question: "Posso continuar o assalto se a vítima fugir a pé?",
    answer:
      "Você pode perseguir dentro do RP, mas sem atropelar, sem bater veículos e sem abuso.",
  },
  {
    tag: "Assalto",
    question: "Posso obrigar a vítima a entrar no meu carro no assalto?",
    answer:
      "Isso caracteriza sequestro; se for conduzir, siga regras de sequestro.",
  },
  {
    tag: "Assalto",
    question: "Posso levar a vítima para um beco para revistar melhor?",
    answer:
      "Evite condução. Se virar condução forçada, trate como sequestro e siga regras.",
  },
  {
    tag: "Assalto",
    question: "Posso assaltar em qualquer lugar da cidade?",
    answer:
      "Somente respeitando o aviso de assalto e evitando áreas proibidas como safezones.",
  },
  {
    tag: "Assalto",
    question: "Assaltar em safezone é permitido?",
    answer:
      "Não. Ações em safezone são proibidas.",
  },
  {
    tag: "Assalto",
    question: "Posso usar linguagem ofensiva na abordagem para intimidar?",
    answer:
      "Não. Deve manter respeito e seguir RP sem abuso.",
  },

  // --------------------- SEQUESTRO X POLÍCIA (56–85) ---------------------
  {
    tag: "SequestroXP",
    question: "Qual o mínimo de policiais em patrulha para sequestro ilegal x polícia?",
    answer:
      "Mínimo de 10 policiais em patrulha.",
  },
  {
    tag: "SequestroXP",
    question: "Se houver 10 policiais, posso exagerar no tamanho da ação?",
    answer:
      "Não. Deve usar bom senso e não abusar para forçar ação grande.",
  },
  {
    tag: "SequestroXP",
    question: "Posso sequestrar comandante se ele estiver fardado?",
    answer:
      "Não. Comandantes ou cidadãos especiais só podem ser sequestrados à paisana.",
  },
  {
    tag: "SequestroXP",
    question: "O que acontece se os bandidos pedirem exigências fora do permitido?",
    answer:
      "Mostra que não há negociação e a polícia pode neutralizar para salvar reféns.",
  },
  {
    tag: "SequestroXP",
    question: "Qual prioridade da polícia na ação de sequestro?",
    answer:
      "Preservar a vida dos reféns e retirá-los com segurança o mais rápido possível.",
  },
  {
    tag: "SequestroXP",
    question: "Sequestradores podem circular fora da área do sequestro?",
    answer:
      "Devem ficar dentro da área; no máximo 2 podem ficar fora apenas para contato.",
  },
  {
    tag: "SequestroXP",
    question: "Posso deixar 4 bandidos fora para negociar?",
    answer:
      "Não. No máximo 2 podem ficar fora para contato.",
  },
  {
    tag: "SequestroXP",
    question: "É permitido iniciar o sequestro com parte do grupo fora do local?",
    answer:
      "Não. Não é permitido iniciar com bandidos do lado de fora do local escolhido.",
  },
  {
    tag: "SequestroXP",
    question: "O que é QTA no sequestro x polícia?",
    answer:
      "É quando a polícia abandona a ação e anuncia que desistiu do sequestro.",
  },
  {
    tag: "SequestroXP",
    question: "A polícia é obrigada a terminar a ação ou pode dar QTA?",
    answer:
      "Deve rushar até o final da ação ou dar QTA, conforme decisão tática.",
  },
  {
    tag: "SequestroXP",
    question: "Quantos policiais podem entrar na ação por número de bandidos?",
    answer:
      "Sempre o dobro da quantidade de sequestradores.",
  },
  {
    tag: "SequestroXP",
    question: "Se houver 6 sequestradores, quantos policiais podem atuar?",
    answer:
      "12 policiais.",
  },
  {
    tag: "SequestroXP",
    question: "Se houver 10 sequestradores, quantos policiais podem atuar?",
    answer:
      "20 policiais.",
  },
  {
    tag: "SequestroXP",
    question: "Se a polícia tiver menos do que o dobro, a ação pode acontecer?",
    answer:
      "Deve respeitar a regra do dobro; se não houver contingente, use bom senso e aguarde.",
  },
  {
    tag: "SequestroXP",
    question: "É permitido exigir armamentos como condição de troca?",
    answer:
      "Exigir valores/armas exorbitantes fora das regras demonstra recusa de negociação e pode levar à neutralização.",
  },
  {
    tag: "SequestroXP",
    question: "Se os reféns estiverem em risco, a polícia pode abater os sequestradores?",
    answer:
      "Sim. A polícia pode neutralizar para salvar os reféns conforme o cenário.",
  },
  {
    tag: "SequestroXP",
    question: "Os sequestradores podem ficar espalhados para fazer emboscada?",
    answer:
      "Não. Devem permanecer na área, salvo até 2 fora para contato.",
  },
  {
    tag: "SequestroXP",
    question: "Se a facção forçar ação grande de propósito, o que pode acontecer?",
    answer:
      "Pode ser interpretado como abuso de regra e gerar punição conforme análise da staff.",
  },
  {
    tag: "SequestroXP",
    question: "Cidadão especial pode ser sequestrado se estiver fora de serviço?",
    answer:
      "Sim, desde que esteja à paisana e respeitando todas as regras da ação.",
  },
  {
    tag: "SequestroXP",
    question: "A polícia pode priorizar eliminar bandidos ao invés de negociar?",
    answer:
      "A prioridade é a vida dos reféns; se não houver negociação válida, pode haver neutralização.",
  },

  // --------------------- GUERRA (86–125) ---------------------
  {
    tag: "Guerra",
    question: "Para declarar guerra, preciso gravar vídeo com refém?",
    answer:
      "Sim. O vídeo de declaração é obrigatório e deve incluir refém conforme regra.",
  },
  {
    tag: "Guerra",
    question: "No vídeo da guerra, capuz e algema no refém são obrigatórios?",
    answer:
      "Sim. Capuz e algema são obrigatórios no vídeo.",
  },
  {
    tag: "Guerra",
    question: "Quantas horas o líder tem para aceitar ou recusar guerra?",
    answer:
      "24 horas.",
  },
  {
    tag: "Guerra",
    question: "Se não responder em 24h, qual valor da multa?",
    answer:
      "R$50.000.000 no painelfac.",
  },
  {
    tag: "Guerra",
    question: "Se não houver saldo no painelfac, quem paga?",
    answer:
      "A multa é dividida proporcionalmente entre os líderes.",
  },
  {
    tag: "Guerra",
    question: "O recrutamento para a guerra pode acontecer a qualquer momento?",
    answer:
      "Sim. O recrutamento é livre.",
  },
  {
    tag: "Guerra",
    question: "Para jogar o 15x15, preciso ter quanto tempo na facção?",
    answer:
      "Pelo menos 7 dias antes da data em que a guerra foi declarada.",
  },
  {
    tag: "Guerra",
    question: "Quantas facções podem estar em cada lado da guerra?",
    answer:
      "No máximo duas facções/organizações por lado.",
  },
  {
    tag: "Guerra",
    question: "Onde ficam os blips de entrada da dimensão da guerra?",
    answer:
      "No aeroporto.",
  },
  {
    tag: "Guerra",
    question: "O uso da mochila é obrigatório durante toda a guerra?",
    answer:
      "Sim. Até o final da guerra.",
  },
  {
    tag: "Guerra",
    question: "Pode retirar a mochila durante a guerra para despistar?",
    answer:
      "Não. Retirar mochila é proibido.",
  },
  {
    tag: "Guerra",
    question: "Pode usar mochila de outra facção para enganar rival?",
    answer:
      "Não. É proibido e pode gerar banimento permanente.",
  },
  {
    tag: "Guerra",
    question: "É permitido reconhecer rival pela voz?",
    answer:
      "Não. Reconhecimento deve ser pela mochila.",
  },
  {
    tag: "Guerra",
    question: "É permitido reconhecer rival pela roupa da facção?",
    answer:
      "Não. Roupa não é método válido; apenas mochila.",
  },
  {
    tag: "Guerra",
    question: "É permitido matar pessoas sem mochila dentro do perímetro?",
    answer:
      "Não. Atirar em pessoas sem mochila é proibido.",
  },
  {
    tag: "Guerra",
    question: "Se alguém da guerra estiver sem mochila e morrer, como fica o ticket?",
    answer:
      "Quem estava sem mochila pode ser punido por descumprir regra.",
  },
  {
    tag: "Guerra",
    question: "É permitido lootear corpos dos envolvidos da guerra?",
    answer:
      "Sim. Loot de envolvidos é permitido.",
  },
  {
    tag: "Guerra",
    question: "É permitido lootear corpos de facção não participante da guerra?",
    answer:
      "Não. Loot de não participantes é proibido.",
  },
  {
    tag: "Guerra",
    question: "É permitido invadir o QG inimigo durante a guerra?",
    answer:
      "Sim. Invadir QG é permitido durante o período de guerra.",
  },
  {
    tag: "Guerra",
    question: "É permitido dormir dentro do QG inimigo?",
    answer:
      "Sim, desde que não seja CL.",
  },
  {
    tag: "Guerra",
    question: "Furto de veículos no QG inimigo é permitido?",
    answer:
      "Sim. Furto de veículos e carros baú é permitido.",
  },
  {
    tag: "Guerra",
    question: "Power-gaming de veículos é permitido na guerra?",
    answer:
      "Sim, apenas para veículos, como rampar para entrar no QG.",
  },
  {
    tag: "Guerra",
    question: "Reviver usando /segurar na guerra é permitido?",
    answer:
      "Não. É bug de reviver e é proibido.",
  },
  {
    tag: "Guerra",
    question: "Binds/animações são liberados contra a polícia durante a guerra?",
    answer:
      "Não. Binds/animações são proibidos contra a polícia nas ruas.",
  },
  {
    tag: "Guerra",
    question: "Binds/animações são liberados entre envolvidos da guerra?",
    answer:
      "Sim. Entre os envolvidos é liberado.",
  },
  {
    tag: "Guerra",
    question: "É permitido marcar saída de spawn após morte na guerra?",
    answer:
      "Não. Marcar spawn é proibido.",
  },
  {
    tag: "Guerra",
    question: "É permitido marcar saída de cemitério na guerra?",
    answer:
      "Não. Marcar cemitério é proibido.",
  },
  {
    tag: "Guerra",
    question: "PG de ilegal x polícia é permitido durante a guerra?",
    answer:
      "Não. É proibido; liberado apenas ilegal x ilegal.",
  },
  {
    tag: "Guerra",
    question: "Abusar de bugs para atravessar paredes é permitido na guerra?",
    answer:
      "Não. Abuso de bugs é proibido e pode gerar punição severa.",
  },
  {
    tag: "Guerra",
    question: "Fugir para blip da guerra ao receber voz de assalto é permitido?",
    answer:
      "Não. Isso é proibido para não burlar o RP.",
  },
  {
    tag: "Guerra",
    question: "Portões e portas do QG podem permanecer trancados na guerra?",
    answer:
      "Não. Staff pode abrir portões e portas a qualquer momento.",
  },
  {
    tag: "Guerra",
    question: "Grávidas e crianças podem circular no perímetro de guerra?",
    answer:
      "Não. Circulação é proibida e mortes no perímetro não serão RDM.",
  },
  {
    tag: "Guerra",
    question: "Se um civil estiver no carro com alguém em guerra e morrer, é RDM?",
    answer:
      "Não. Não será considerado RDM nesse caso.",
  },
  {
    tag: "Guerra",
    question: "É permitido matar fora da dimensão de guerra?",
    answer:
      "Não, salvo em casos de bug na dimensão com aviso do chefe do ilegal.",
  },
  {
    tag: "Guerra",
    question: "Se eu morrer na guerra, posso voltar quantas vezes quiser?",
    answer:
      "Sim. Retorno é permitido durante a guerra.",
  },
  {
    tag: "Guerra",
    question: "Caso eu suspeite de interferência de facção não envolvida, o que faço?",
    answer:
      "Abra ticket de denúncia para análise.",
  },

  // --------------------- CONFLICT24 (126–150) ---------------------
  {
    tag: "Conflict24",
    question: "Qual o objetivo do Conflict24?",
    answer:
      "Simular conflito de interesses entre facções, com confronto armado no QG ou favela.",
  },
  {
    tag: "Conflict24",
    question: "Quanto tempo dura o Conflict24?",
    answer:
      "15 horas.",
  },
  {
    tag: "Conflict24",
    question: "Existe limite de participantes no Conflict24?",
    answer:
      "Não. É sem limite.",
  },
  {
    tag: "Conflict24",
    question: "Armamentos no Conflict24 são livres?",
    answer:
      "Sim. Armamentos são livres.",
  },
  {
    tag: "Conflict24",
    question: "Qual o valor de inscrição do Conflict24?",
    answer:
      "25kk por facção.",
  },
  {
    tag: "Conflict24",
    question: "O vídeo de declaração do Conflict24 precisa ter quem como refém?",
    answer:
      "O refém deve ser obrigatoriamente o líder da facção adversária.",
  },
  {
    tag: "Conflict24",
    question: "No vídeo do Conflict24 o refém precisa estar algemado e com capuz?",
    answer:
      "Sim. Ambos são obrigatórios.",
  },
  {
    tag: "Conflict24",
    question: "Onde solicitar o Conflict24 após gravar?",
    answer:
      "No canal de marcar-conflict24 seguindo o modelo do canal.",
  },
  {
    tag: "Conflict24",
    question: "Para validar o Conflict24, para quem é enviado o valor da inscrição?",
    answer:
      "Para o ID 3 ou ID 9.",
  },
  {
    tag: "Conflict24",
    question: "Quantos conflicts podem ocorrer por semana?",
    answer:
      "Apenas um conflict24 por vez, a cada 1 semana.",
  },
  {
    tag: "Conflict24",
    question: "Quando o Conflict24 começa e termina?",
    answer:
      "Começa no RR das 18:00 e termina às 09:00 do dia seguinte.",
  },
  {
    tag: "Conflict24",
    question: "A mochila é obrigatória durante todo o Conflict24?",
    answer:
      "Sim. Mochila da fac é obrigatória.",
  },
  {
    tag: "Conflict24",
    question: "É permitido trocar tiros com a polícia dentro do perímetro Conflict?",
    answer:
      "Não. Troca de tiros com a polícia dentro do perímetro é proibida.",
  },
  {
    tag: "Conflict24",
    question: "Policiais podem entrar no perímetro Conflict para intervir?",
    answer:
      "Não. Policiais são proibidos dentro do perímetro Conflict.",
  },
  {
    tag: "Conflict24",
    question: "É permitido disparo de fora para dentro do perímetro Conflict?",
    answer:
      "Não. Disparo de fora para dentro e vice-versa é proibido.",
  },
  {
    tag: "Conflict24",
    question: "É permitido invadir o QG durante o Conflict24?",
    answer:
      "Sim. Invadir o QG durante as 15 horas é permitido.",
  },
  {
    tag: "Conflict24",
    question: "Dormir dentro do QG inimigo no Conflict24 é permitido?",
    answer:
      "Sim, desde que não seja CL.",
  },
  {
    tag: "Conflict24",
    question: "Furto de veículos no QG durante Conflict24 é permitido?",
    answer:
      "Sim. Furto de veículos e carros baú é permitido.",
  },
  {
    tag: "Conflict24",
    question: "Power-gaming de veículos é permitido no Conflict24?",
    answer:
      "Sim. Power-gaming de veículos (rampar para entrar) é permitido.",
  },
  {
    tag: "Conflict24",
    question: "Reviver usando /segurar no Conflict24 é permitido?",
    answer:
      "Não. É bug e é proibido.",
  },
  {
    tag: "Conflict24",
    question: "Se eu matar alguém achando suspeito e não for rival, o que acontece?",
    answer:
      "Será considerado RDM.",
  },
  {
    tag: "Conflict24",
    question: "Ratão em carro da facção rival é punido no Conflict24?",
    answer:
      "Não. Ratão contra carro rival não é punido.",
  },
  {
    tag: "Conflict24",
    question: "Ratão em pessoa que não participa do Conflict24 é punido?",
    answer:
      "Sim. Pode gerar advertência.",
  },
  {
    tag: "Conflict24",
    question: "Loot dos corpos envolvidos no Conflict24 é permitido?",
    answer:
      "Sim. Loot dos envolvidos é permitido a qualquer momento.",
  },
  {
    tag: "Conflict24",
    question: "Loot de facção não participante no Conflict24 é permitido?",
    answer:
      "Não. Loot de não participantes é proibido.",
  },

  {
    tag: "TabelaPrecos",
    question: "É permitido forçar a troca de itens ao invés de vender?",
    answer:
      "Não. É proibido forçar troca. A troca só pode acontecer por acordo mútuo entre as duas partes.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso dizer que só vendo se a pessoa trocar por outro item?",
    answer:
      "Não. Você não pode impor que seja somente na troca. Isso é forçar troca.",
  },
  {
    tag: "TabelaPrecos",
    question: "A troca é proibida em qualquer situação?",
    answer:
      "Não. A troca é permitida apenas se houver acordo mútuo entre as partes envolvidas.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se o comprador pedir troca, eu posso aceitar?",
    answer:
      "Sim. Se houver acordo mútuo, a troca é permitida.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu não quiser vender e só quiser trocar, posso recusar a venda?",
    answer:
      "Você pode recusar vender, mas não pode obrigar que toda negociação seja apenas troca.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu disser 'só tenho troca hoje', isso é permitido?",
    answer:
      "Se isso virar imposição para qualquer negociação, pode ser entendido como forçar troca. Prefira oferecer venda e troca como opções.",
  },
  {
    tag: "TabelaPrecos",
    question: "O que acontece se vender itens abaixo do valor da tabela?",
    answer:
      "Se for constatada a venda abaixo do valor, a conta pode ser wipada, resetando itens e valores.",
  },
  {
    tag: "TabelaPrecos",
    question: "A punição por vender abaixo do valor é sempre wipe?",
    answer:
      "A regra informa que, se constatado, o jogador terá a conta wipada com reset de itens e valores.",
  },
  {
    tag: "TabelaPrecos",
    question: "O que significa ter a conta wipada por tabela de preços?",
    answer:
      "Significa resetar todos os itens e valores sob domínio do jogador.",
  },
  {
    tag: "TabelaPrecos",
    question: "Vender abaixo do valor inclui promoções e descontos?",
    answer:
      "Sim. Qualquer venda abaixo do valor pode ser entendida como infração, mesmo como 'promoção'.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso fazer 'queima de estoque' com preço menor que a tabela?",
    answer:
      "Não. Vender abaixo do valor pode gerar wipe da conta.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso vender abaixo do valor para amigo ou aliado?",
    answer:
      "Não. Vender abaixo do valor, mesmo para conhecidos, pode gerar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso fazer 'pacote' com desconto para vários itens?",
    answer:
      "Não. Se o pacote resultar em preço abaixo do valor, pode gerar punição.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso vender barato para girar economia da facção?",
    answer:
      "Não. A regra da tabela proíbe venda abaixo do valor, independentemente do motivo.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu vender por engano abaixo do valor, posso ser punido?",
    answer:
      "Sim. A regra considera o ato constatado, então evite e confira antes.",
  },
  {
    tag: "TabelaPrecos",
    question: "Como evitar punição por tabela de preços?",
    answer:
      "Respeite os valores oficiais, não faça desconto e não force trocas.",
  },
  {
    tag: "TabelaPrecos",
    question: "É permitido cobrar acima do valor da tabela?",
    answer:
      "O texto destaca punição por abaixo do valor; ainda assim, pratique bom senso e siga orientações do ilegal se houver teto/limite.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se o comprador insistir em pagar menos, posso aceitar?",
    answer:
      "Não. Aceitar valor abaixo do permitido pode gerar wipe da conta.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se o comprador não tem dinheiro, posso aceitar troca equivalente?",
    answer:
      "Sim, desde que seja acordo mútuo e não seja imposição sua.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu disser 'ou troca ou nada', é forçar troca?",
    answer:
      "Pode ser interpretado como imposição. O ideal é não condicionar toda compra à troca.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu não tiver item para venda, posso oferecer troca como alternativa?",
    answer:
      "Sim, desde que não force a troca e seja por acordo mútuo.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso pedir item raro como 'troco por' sem valor em dinheiro?",
    answer:
      "Pode, se ambas as partes concordarem e não houver imposição sobre todas as negociações.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso anunciar no chat que só faço troca?",
    answer:
      "Evite. Isso pode ser interpretado como forçar troca. O correto é oferecer venda conforme tabela.",
  },
  {
    tag: "TabelaPrecos",
    question: "A regra de tabela vale para compra e venda?",
    answer:
      "Sim. Ela fala de compra/venda e também de trocas não forçadas.",
  },
  {
    tag: "TabelaPrecos",
    question: "Vender abaixo do valor pode afetar minha facção também?",
    answer:
      "A regra fala em wipe da conta do jogador; dependendo do caso, pode haver sanções adicionais por quebra de regras do ilegal.",
  },
  {
    tag: "TabelaPrecos",
    question: "Como provar que uma troca foi acordo mútuo?",
    answer:
      "Mantenha diálogo claro e, se possível, registre negociações para evitar denúncias falsas.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu fizer troca e a outra pessoa reclamar depois, o que pode acontecer?",
    answer:
      "Se parecer troca forçada, pode gerar punição. Por isso, deixe o acordo claro.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu colocar preço mais baixo para vender rápido, é permitido?",
    answer:
      "Não. Vender abaixo do valor pode gerar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso dar brinde junto com a venda para 'baratear' o preço?",
    answer:
      "Evite. Se o conjunto configurar venda abaixo do valor real, pode ser interpretado como infração.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso parcelar a venda para manter o preço oficial?",
    answer:
      "Se o valor final respeitar a tabela e for RP válido, não é desconto. Evite práticas que pareçam redução de preço.",
  },
  {
    tag: "TabelaPrecos",
    question: "É permitido vender por valor simbólico e compensar por fora?",
    answer:
      "Não. Isso caracteriza venda abaixo do valor e pode gerar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "O que é considerado 'valor' na tabela: dinheiro, itens ou ambos?",
    answer:
      "A regra trata de venda abaixo do valor; trocas são permitidas apenas por acordo mútuo, sem imposição.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu vender a um preço menor mas sem intenção, posso recorrer?",
    answer:
      "Você pode tentar explicar, mas a regra é objetiva: venda abaixo constatada pode gerar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu fizer uma troca muito vantajosa para o comprador, isso conta como vender abaixo?",
    answer:
      "Pode levantar suspeita. Garanta que a troca foi voluntária e coerente.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se a tabela mudar e eu usar valor antigo, posso ser punido?",
    answer:
      "Sim. É sua responsabilidade acompanhar as atualizações e praticar o valor correto.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso negociar valores no PV para não ser denunciado?",
    answer:
      "Não. A regra vale igual; tentar ocultar pode agravar a punição.",
  },
  {
    tag: "TabelaPrecos",
    question: "Denúncia de preço abaixo precisa de prova?",
    answer:
      "Geralmente sim. Mas se for constatado por logs/prints, pode resultar em wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu comprar abaixo do valor, posso ser punido também?",
    answer:
      "A regra menciona punição ao vendedor; mas participar de esquema pode gerar sanções conforme avaliação.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso comprar abaixo do valor e revender no preço correto?",
    answer:
      "Não é recomendado. Se for esquema de subpreço, pode gerar punições.",
  },
  {
    tag: "TabelaPrecos",
    question: "Como evitar 'tabela' sendo usada para lavagem de dinheiro?",
    answer:
      "Respeite valores, evite negociações suspeitas e mantenha RP coerente com o ilegal.",
  },

  // Completar até 100 com variações úteis sem repetir sentido
  {
    tag: "TabelaPrecos",
    question: "Posso anunciar 'troco somente por item X' sem oferecer venda?",
    answer:
      "Evite. Pode soar como troca forçada. Prefira deixar claro que é opção e depende de acordo.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu recusar dinheiro e aceitar só itens, isso é forçar troca?",
    answer:
      "Se você impõe isso como única forma de negociação, pode ser entendido como forçar troca.",
  },
  {
    tag: "TabelaPrecos",
    question: "Troca precisa ser equivalente em valor?",
    answer:
      "A regra fala em acordo mútuo; ainda assim, trocas desequilibradas podem gerar suspeita e conflito.",
  },
  {
    tag: "TabelaPrecos",
    question: "O comprador pode oferecer item como parte do pagamento?",
    answer:
      "Sim, desde que seja acordo mútuo entre as partes.",
  },
  {
    tag: "TabelaPrecos",
    question: "Vender abaixo do valor pode ser considerado manipulação de economia?",
    answer:
      "Sim. Por isso a punição é pesada (wipe) para coibir práticas desse tipo.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu for líder, sou responsável por membros vendendo abaixo?",
    answer:
      "O texto cita punição individual ao jogador; mas líderes devem orientar para evitar problemas e advertências de fac/org por conduta.",
  },
  {
    tag: "TabelaPrecos",
    question: "Como devo orientar novos membros sobre a tabela?",
    answer:
      "Explique que não pode vender abaixo do valor e que troca só existe por acordo mútuo.",
  },
  {
    tag: "TabelaPrecos",
    question: "É permitido fazer 'leilão' com lance baixo?",
    answer:
      "Não. Se o resultado ficar abaixo do valor, pode gerar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu fizer promoção por tempo limitado, é permitido?",
    answer:
      "Não. Promoção com preço menor que o valor é proibida.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu der desconto para pagar dívida, posso?",
    answer:
      "Não. O preço deve respeitar o valor; ajuste a dívida sem subpreço.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso cobrar menos para 'desafogar' o baú da facção?",
    answer:
      "Não. Qualquer venda abaixo do valor pode gerar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu vender abaixo do valor e devolver depois, ainda é infração?",
    answer:
      "Sim. O ato de vender abaixo pode ser constatado e punido.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso fazer troca e ainda pedir complemento em dinheiro?",
    answer:
      "Sim, se for acordo mútuo e sem imposição.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu for denunciado injustamente por tabela, como me protejo?",
    answer:
      "Mantenha comunicação clara e, se possível, registre a negociação para se defender.",
  },
  {
    tag: "TabelaPrecos",
    question: "A regra de wipe por tabela vale para qualquer item ilegal?",
    answer:
      "O texto fala em 'itens' no geral; trate como regra geral para negociações ilegais.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso usar intermediário para vender por mim com desconto?",
    answer:
      "Não. A infração continua existindo e pode ser constatada por logs.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso vender para membros da minha facção abaixo do valor interno?",
    answer:
      "Não. Vender abaixo do valor, mesmo internamente, é proibido.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso vender abaixo do valor para repassar itens para outra facção aliada?",
    answer:
      "Não. Isso pode gerar wipe e ainda levantar suspeita de acordos indevidos.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu comprar caro e quiser recuperar prejuízo vendendo barato, posso?",
    answer:
      "Não. O valor mínimo deve ser respeitado, independentemente de prejuízo.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu cobrar acima do valor, posso ser denunciado por abuso?",
    answer:
      "A regra não cita punição por acima, mas abuso pode gerar conflitos e denúncias; siga bom senso e diretrizes do ilegal.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu só aceitar troca em dias específicos, é permitido?",
    answer:
      "Se isso virar imposição, pode ser entendido como forçar troca. Sempre deixe claro que depende de acordo mútuo.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu recusar venda e indicar outro vendedor, posso?",
    answer:
      "Sim. Você pode recusar negociar, desde que não force troca ao negociar.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso manter uma 'tabela paralela' da facção com valores menores?",
    answer:
      "Não. O servidor exige respeito aos valores; valores menores podem causar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso fazer venda com 'cashback' de itens depois?",
    answer:
      "Não é recomendado. Pode ser visto como desconto indireto abaixo do valor.",
  },
  {
    tag: "TabelaPrecos",
    question: "A tabela de preços se aplica a negociações dentro do QG?",
    answer:
      "Sim. A regra vale para compra/venda, independente do local.",
  },
  {
    tag: "TabelaPrecos",
    question: "A tabela de preços se aplica a vendas em ação marcada?",
    answer:
      "Sim. O valor não pode ser abaixo do permitido em nenhum contexto.",
  },
  {
    tag: "TabelaPrecos",
    question: "A tabela de preços se aplica a vendas por terceiros (laranjas)?",
    answer:
      "Sim. Se for constatada venda abaixo por laranja, a punição pode recair conforme investigação.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso doar item ao invés de vender?",
    answer:
      "Doação pode ser vista como burla de economia dependendo do item/volume. Evite práticas que pareçam venda abaixo do valor.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu troco item por item, isso precisa ter valor próximo ao da tabela?",
    answer:
      "A regra fala em acordo mútuo, mas coerência evita suspeitas e denúncias.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu fizer troca e ainda der um item extra, isso pode ser problema?",
    answer:
      "Pode. Pode parecer desconto/benefício indevido. Evite brindes que distorçam valor.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu vender por valor correto mas com quantidade maior, é infração?",
    answer:
      "Pode ser entendido como subpreço por unidade. Mantenha coerência: preço deve refletir a quantidade.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu vender em lote, devo calcular o valor total conforme tabela?",
    answer:
      "Sim. O lote deve respeitar o valor mínimo proporcional à quantidade.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se alguém me oferecer troca e eu aceitar sem saber o valor, posso me prejudicar?",
    answer:
      "Sim. Faça trocas com consciência para evitar conflitos e suspeitas de subpreço.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se a outra parte pedir 'desconto porque é novato', posso fazer?",
    answer:
      "Não. Desconto abaixo do valor pode gerar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Existe tolerância de erro pequeno na tabela?",
    answer:
      "A regra não fala em tolerância. Trate como zero margem e siga o valor.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso 'arredondar pra baixo' para facilitar pagamento?",
    answer:
      "Não. Arredondar para baixo vira venda abaixo do valor e pode gerar wipe.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso 'arredondar pra cima' para facilitar?",
    answer:
      "Isso não é subpreço, mas mantenha bom senso e transparência para evitar conflito com comprador.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso negociar tabela em canal do Discord do ilegal?",
    answer:
      "Use canais oficiais para tirar dúvidas, mas não combine subpreço nem forçar trocas.",
  },
  {
    tag: "TabelaPrecos",
    question: "A regra de tabela busca evitar o quê?",
    answer:
      "Evitar manipulação econômica, subpreço, esquemas e desequilíbrio no ilegal.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu for pego vendendo abaixo, perco só o dinheiro ou tudo?",
    answer:
      "A regra diz resetar todos os itens e valores sob domínio do jogador.",
  },
  {
    tag: "TabelaPrecos",
    question: "Vender abaixo pode afetar inventário, baú e dinheiro?",
    answer:
      "Sim. O wipe reseta itens e valores que estão sob seu domínio.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso pedir que o comprador 'finja' pagar o valor para evitar logs?",
    answer:
      "Não. Tentar burlar sistema agrava a situação e pode gerar punições maiores.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu desconfiar que alguém está vendendo abaixo, o que devo fazer?",
    answer:
      "Reúna provas e reporte pelos canais apropriados conforme regras do ilegal/cidade.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu for o comprador e suspeitar de preço abaixo, posso recusar?",
    answer:
      "Sim. É recomendado recusar e orientar a pessoa a seguir a tabela.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu vender abaixo e depois compensar com item, ainda é proibido?",
    answer:
      "Sim. A venda abaixo é a infração. Compensações não anulam o ato.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso 'trocar' e depois receber dinheiro em outra hora?",
    answer:
      "Não é recomendado. Pode ser visto como venda abaixo disfarçada.",
  },
  {
    tag: "TabelaPrecos",
    question: "A regra de não forçar troca vale para compra e para venda?",
    answer:
      "Sim. Em qualquer negociação, ninguém pode impor que só funciona por troca.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu disser 'não vendo, só troco', isso é sempre infração?",
    answer:
      "Depende do contexto, mas pode ser interpretado como forçar troca. O ideal é não condicionar negociações dessa forma.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu aceitar troca porque o comprador não tem o dinheiro, é permitido?",
    answer:
      "Sim. A troca é permitida se ambos concordarem livremente.",
  },
  {
    tag: "TabelaPrecos",
    question: "Como deixar claro que a troca foi voluntária?",
    answer:
      "Confirme no chat/voz que ambos concordam e evite pressão, ameaças ou imposições.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso colocar regras internas de comércio na facção?",
    answer:
      "Pode, desde que não conflitem com a regra principal: sem subpreço e sem troca forçada.",
  },
  {
    tag: "TabelaPrecos",
    question: "Posso punir membro da facção que vender abaixo do valor?",
    answer:
      "Sim. Isso ajuda a evitar prejuízo e advertências coletivas por má conduta.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se eu for líder e permitir subpreço, posso perder a facção?",
    answer:
      "Pode contribuir para fluxo de ações erradas e gerar advertência de FAC/ORG conforme regras de advertências.",
  },
  {
    tag: "TabelaPrecos",
    question: "Vender abaixo do valor é considerado 'ação errada'?",
    answer:
      "Sim, pois quebra regra do ilegal e pode gerar punições individuais e coletivas.",
  },
  {
    tag: "TabelaPrecos",
    question: "Se meu membro vender abaixo, a conta dele é wipada?",
    answer:
      "Sim. A regra prevê wipe da conta do jogador que for constatado vendendo abaixo.",
  },
  {
    tag: "TabelaPrecos",
    question: "Vender abaixo do valor pode gerar advertência individual além do wipe?",
    answer:
      "Sim. Dependendo da gravidade, pode haver punições adicionais conforme avaliação.",
  },

  {
    tag: "Lideranca",
    question: "Qual a idade mínima para ser líder de facção ou organização?",
    answer:
      "É necessário ter mais de 18 anos para assumir o comando.",
  },
  {
    tag: "Lideranca",
    question: "Por que é exigido ter mais de 18 anos para liderar?",
    answer:
      "Para garantir maturidade e responsabilidade para lidar com o cargo.",
  },
  {
    tag: "Lideranca",
    question: "Ter um Discord próprio da facção é obrigatório?",
    answer:
      "Sim. É essencial ter um servidor Discord preparado e funcional para a fac/org.",
  },
  {
    tag: "Lideranca",
    question: "Para que serve o Discord da facção?",
    answer:
      "Para comunicação interna, coordenação e interação organizada entre membros.",
  },
  {
    tag: "Lideranca",
    question: "É recomendado formar equipe antes de assumir a facção?",
    answer:
      "Sim. Reunir um grupo de jogadores capacitados ajuda a manter a organização eficiente.",
  },
  {
    tag: "Lideranca",
    question: "Experiência de liderança é obrigatória?",
    answer:
      "Não é obrigatória, mas é altamente recomendada.",
  },
  {
    tag: "Lideranca",
    question: "Que tipo de experiência de liderança conta como recomendada?",
    answer:
      "Liderança em outros servidores, jogos anteriores ou até fora do ambiente virtual.",
  },
  {
    tag: "Lideranca",
    question: "Posso liderar uma facção estando ativo em outra cidade/servidor?",
    answer:
      "Não. É exigido compromisso exclusivo, sem envolvimento em cidades secundárias.",
  },
  {
    tag: "Lideranca",
    question: "Se eu estiver como líder em outro servidor (01/00), o que pode acontecer?",
    answer:
      "Você pode perder a facção e deixar a liderança, não podendo mais fazer parte da facção atual.",
  },
  {
    tag: "Lideranca",
    question: "Preciso conhecer profundamente as regras da cidade para ser líder?",
    answer:
      "Sim. Conhecimento das regras é imprescindível para liderar e manter integridade do servidor.",
  },
  {
    tag: "EntregaFac",
    question: "É permitido vender facção ou organização dentro do jogo?",
    answer:
      "Não. É proibido vender FAC/ORG dentro e fora do jogo.",
  },
  {
    tag: "EntregaFac",
    question: "É permitido vender facção ou organização fora do jogo?",
    answer:
      "Não. Tentativas de venda resultam em banimento imediato.",
  },
  {
    tag: "EntregaFac",
    question: "Quem pode setar o cargo de 'LÍDER'?",
    answer:
      "Somente os Staffs responsáveis pelo Ilegal.",
  },
  {
    tag: "EntregaFac",
    question: "Se um líder for flagrado vendendo FAC/ORG, qual punição?",
    answer:
      "Banimento permanente. Tentativas também resultam em ban imediato.",
  },
  {
    tag: "EntregaFac",
    question: "A prefeitura pode reformar facções sem autorização do líder?",
    answer:
      "Sim. FAC/ORG podem ser reformadas pela prefeitura sem necessidade de autorização.",
  },
  {
    tag: "EntregaFac",
    question: "A administração se responsabiliza por 'vaquinhas' feitas para FAC/ORG?",
    answer:
      "Não. A administração não se responsabiliza por vaquinhas entre jogadores.",
  },
  {
    tag: "EntregaFac",
    question: "Quantos líderes podem ser adicionados ao assumir uma facção?",
    answer:
      "No máximo 3 líderes por facção.",
  },
  {
    tag: "EntregaFac",
    question: "Posso escolher um novo líder depois de 24h de assumir?",
    answer:
      "Não. Após 24h não pode escolher outro e não pode substituir posteriormente sem taxa.",
  },
  {
    tag: "EntregaFac",
    question: "Se eu quiser substituir um líder depois, quanto custa?",
    answer:
      "Será cobrada uma taxa de R$600.",
  },
  {
    tag: "ManterFac",
    question: "O que é recomendado fazer todos os dias para não perder a facção?",
    answer:
      "Fazer recrutamentos diariamente.",
  },
  {
    tag: "ManterFac",
    question: "O farm e o baú influenciam na permanência da facção?",
    answer:
      "Sim. É recomendado manter bom farm e bom movimento no baú.",
  },
  {
    tag: "ManterFac",
    question: "Qual a meta de membros online no horário de pico?",
    answer:
      "15 membros online entre 19h00 e 22h00.",
  },
  {
    tag: "ManterFac",
    question: "Se eu sair da cidade ou for banido, posso repassar a facção para outro jogador?",
    answer:
      "Não. A facção é recolhida automaticamente, sem reembolso de benefícios investidos.",
  },
  {
    tag: "ManterFac",
    question: "Se o líder pedir para sair, quem pode assumir?",
    answer:
      "Os sublíderes podem receber a facção, exceto se também estiverem inativos.",
  },
  {
    tag: "ManterFac",
    question: "A facção pode ser oferecida aos sublíderes em qualquer caso?",
    answer:
      "Só se não houver histórico de problemas/advertências/reclamações na cidade.",
  },
  {
    tag: "ManterFac",
    question: "Se os líderes ficarem inativos mais de 7 dias, o que acontece?",
    answer:
      "A FAC/ORG pode ser recolhida sem aviso prévio.",
  },
  {
    tag: "ManterFac",
    question: "É obrigatório manter a FAC/ORG ativa em farm, produção e vendas?",
    answer:
      "Sim. Manter a FAC/ORG ativa é obrigação do líder.",
  },
  {
    tag: "ManterFac",
    question: "Comparecer às reuniões convocadas pela staff é obrigatório?",
    answer:
      "Sim. É necessário comparecer para acompanhar atualizações e pendências.",
  },
  {
    tag: "ManterFac",
    question: "Se o líder compactuar com hackers ou bugs, o que acontece com a FAC/ORG?",
    answer:
      "A FAC/ORG pode ser recolhida sem aviso prévio, mesmo que indiretamente.",
  },
  {
    tag: "ManterFac",
    question: "Se a facção acumular 3 advertências por descumprimento de regras, o que ocorre?",
    answer:
      "A FAC/ORG pode ser recolhida sem aviso prévio.",
  },
  {
    tag: "SetagemDiscord",
    question: "É obrigatório setar todos os membros do painel no Discord do ilegal?",
    answer:
      "Sim. É obrigatório e pode ser cobrado semanalmente.",
  },
  {
    tag: "SetagemDiscord",
    question: "Onde solicitar setagem no Discord do ilegal?",
    answer:
      "No canal #solicitar-set.",
  },
  {
    tag: "SetagemDiscord",
    question: "Se não fizer a setagem no Discord do ilegal, o que pode acontecer?",
    answer:
      "Pode haver punições ou até recolhimento da FAC/ORG.",
  },
  {
    tag: "ManterFac",
    question: "Se a FAC/ORG não tiver jogadores suficientes no pico, o que pode acontecer?",
    answer:
      "Pode ser advertida e até removida dos atuais líderes.",
  },
  {
    tag: "EntregaFac",
    question: "A facção pode ser removida dos líderes por falta de respeito com a staff?",
    answer:
      "Sim. Falta de respeito com staff/cidade é justa causa para remoção.",
  },
  {
    tag: "EntregaFac",
    question: "Não comparecer em reuniões pode fazer perder a FAC/ORG?",
    answer:
      "Sim. Não comparecimento em reuniões marcadas é motivo de remoção.",
  },
  {
    tag: "EntregaFac",
    question: "Inatividade sem aviso pode resultar em recolhimento?",
    answer:
      "Sim. Inatividade sem aviso a responsável ilegal pode levar a recolhimento.",
  },

  // Completar até 100 com variações úteis
  {
    tag: "ManterFac",
    question: "Se eu investir benefícios na facção e ela for recolhida, recebo reembolso?",
    answer:
      "Não. Em recolhimento, não há direito a reembolso ou estorno.",
  },
  {
    tag: "ManterFac",
    question: "Se a facção ficar sem contratações e sem atividade, o que acontece?",
    answer:
      "Pode ser recolhida sem aviso, painel limpo e repassado, sem reembolso.",
  },
  {
    tag: "EntregaFac",
    question: "A facção é 'propriedade' do líder?",
    answer:
      "Não. A facção é uma doação da cidade aos líderes que administram no jogo.",
  },
  {
    tag: "EntregaFac",
    question: "Se eu quiser mudar o QG por customização, é permitido?",
    answer:
      "Sim, mas há taxa do mapper + taxa da agência.",
  },
  {
    tag: "EntregaFac",
    question: "A cidade pode realocar ou excluir FAC/ORG mesmo com investimento?",
    answer:
      "Sim. As FAC/ORG estão sujeitas a reformas pela prefeitura sem autorização.",
  },
  {
    tag: "Lideranca",
    question: "Qual o tripé mais importante para liderar bem?",
    answer:
      "Responsabilidade, trabalho em equipe e respeito às regras.",
  },
  {
    tag: "ManterFac",
    question: "Se o líder sair do painel, a facção pode continuar com outros líderes?",
    answer:
      "Se o líder setado sair/for banido, a facção pode ser recolhida automaticamente, conforme regra.",
  },
  {
    tag: "EntregaFac",
    question: "Posso transferir liderança por vontade própria para amigo?",
    answer:
      "Não. Repassar por vontade própria não é permitido; setagens são feitas pela staff do ilegal.",
  },
  {
    tag: "ManterFac",
    question: "Se o sublíder estiver ativo, ele assume automaticamente?",
    answer:
      "Ele pode ser ofertado, mas depende do caso e do histórico da facção.",
  },
  {
    tag: "Lideranca",
    question: "Quais responsabilidades um líder deve cumprir no dia a dia?",
    answer:
      "Recrutar, manter atividade, orientar membros, respeitar staff e cumprir regras do ilegal.",
  },

  {
    tag: "AdvFac",
    question: "O que é ADV-VERBAL de FAC/ORG?",
    answer:
      "É uma advertência com 24h sem dominações, 24h sem ações marcadas e perda de 10% do painelfac.",
  },
  {
    tag: "AdvFac",
    question: "Quais punições do ADV-VERBAL?",
    answer:
      "24h sem dominações, 24h sem ações marcadas e 10% do dinheiro do painelfac.",
  },
  {
    tag: "AdvFac",
    question: "O que acontece na ADVERTÊNCIA 1 de FAC/ORG?",
    answer:
      "48h sem dominações, 24h sem ações marcadas e perda de 20% do painelfac.",
  },
  {
    tag: "AdvFac",
    question: "O que acontece na ADVERTÊNCIA 2 de FAC/ORG?",
    answer:
      "72h sem dominações, 48h sem vendas/trocas/movimentações do painelfac, 48h sem ações marcadas e perda de 30%.",
  },
  {
    tag: "AdvFac",
    question: "O que acontece na ADVERTÊNCIA 3 de FAC/ORG?",
    answer:
      "Perde a FAC/ORG + advertência verbal e advertência 1 para os líderes setados (ou punição equivalente).",
  },
  {
    tag: "AdvFac",
    question: "O desconto do painelfac é calculado com base em qual valor?",
    answer:
      "Equivalente ao último valor do painel no momento em que a ADV é anunciada.",
  },
  {
    tag: "AdvFac",
    question: "Quando uma ADV de FAC/ORG pode ser aplicada?",
    answer:
      "Quando houver fluxo alto de ações erradas dos membros da FAC/ORG.",
  },
  {
    tag: "AdvFac",
    question: "O que são 'ações erradas' para gerar ADV de FAC/ORG?",
    answer:
      "Quando vários membros (6+) fazem zaralho, quebram regras e o líder não exonerar, compactuando.",
  },
  {
    tag: "AdvFac",
    question: "Se 6 membros quebrarem regras e o líder não exonerar, pode virar ADV?",
    answer:
      "Sim. Esse é um exemplo citado para fluxo alto de ações erradas.",
  },
  {
    tag: "AdvFac",
    question: "Remover ADV de FAC/ORG tem custo?",
    answer:
      "Sim. O custo para remover está disponível na loja da cidade.",
  },
  {
    tag: "AdvFac",
    question: "Quantas remoções de ADV de FAC/ORG são permitidas por season?",
    answer:
      "No máximo 3 remoções por season.",
  },
  {
    tag: "AdvFac",
    question: "A liderança pode recorrer de uma ADV de FAC/ORG?",
    answer:
      "Sim. Pode recorrer em até 24 horas.",
  },
  {
    tag: "AdvFac",
    question: "ADV de FAC/ORG isenta punição individual dos membros?",
    answer:
      "Não. As punições coletivas não isentam punições individuais.",
  },
  {
    tag: "AdvFac",
    question: "O pagamento para remover ADV pode ser negado?",
    answer:
      "Sim. Pode ser negado pelos CEOs de acordo com julgamento.",
  },
  {
    tag: "AdvFac",
    question: "Após ADV de FAC, se membros continuarem causando balbúrdia, o que ocorre?",
    answer:
      "Podem receber advertências individuais, prisão, advertência e até banimentos.",
  },
  {
    tag: "AdvFac",
    question: "Com ADV 1 ou ADV 2 ainda posso fazer assalto e sequestro?",
    answer:
      "Sim. A regra diz que FAC/ORG com ADV 1 ou ADV 2 pode fazer assalto/sequestro e blipadas normalmente.",
  },
  {
    tag: "AdvFac",
    question: "Com ADV 2 o painelfac fica bloqueado para movimentações por quanto tempo?",
    answer:
      "48 horas sem vendas, trocas e movimentações de valores (bloqueado).",
  },
  {
    tag: "AdvFac",
    question: "ADV-VERBAL bloqueia movimentação do painelfac?",
    answer:
      "Não cita bloqueio, apenas perda de 10% e restrições de ações/dominações.",
  },

  // Roupas FAC/ORG
  {
    tag: "RoupasFac",
    question: "Posso pedir roupa com nome individual tipo 'Gerente - Gabriel'?",
    answer:
      "Não. Não adicionam roupas com nomes individuais; apenas com nome da facção.",
  },
  {
    tag: "RoupasFac",
    question: "Roupas com nome de pessoa serão aceitas?",
    answer:
      "Não. Apenas roupas com o nome da facção/organização são permitidas.",
  },
  {
    tag: "RoupasFac",
    question: "O valor pago pela roupa vai para o designer?",
    answer:
      "Não. O valor pago é destinado ao servidor; o designer pode cobrar separado pelo serviço.",
  },
  {
    tag: "RoupasFac",
    question: "Qual é o processo correto para adicionar roupa ao servidor?",
    answer:
      "Primeiro criar a roupa, depois entrar em contato com o servidor e pagar a taxa de adição.",
  },
  {
    tag: "RoupasFac",
    question: "Para solicitar adição de roupa, onde devo abrir atendimento?",
    answer:
      "É necessário abrir um ticket VIP.",
  },
  {
    tag: "RoupasFac",
    question: "Se uma roupa for adicionada com nome não vinculado à facção, o que acontece?",
    answer:
      "Ela será removida sem aviso prévio.",
  },
  {
    tag: "RoupasFac",
    question: "Roupas de qualquer loja podem ser adicionadas?",
    answer:
      "Não. Somente roupas criadas em lojas parceiras serão adicionadas.",
  },
  {
    tag: "RoupasFac",
    question: "Depois que a roupa entra no servidor, quem é o dono?",
    answer:
      "A partir da entrega e adição, a roupa se torna propriedade do servidor.",
  },
  {
    tag: "RoupasFac",
    question: "Posso reivindicar a roupa depois que ela foi adicionada?",
    answer:
      "Não. Não há possibilidade de reivindicação após a adição.",
  },

  // QG Personalizado
  {
    tag: "QGPersonalizado",
    question: "Posso personalizar o QG da facção?",
    answer:
      "Sim, é permitido, mas há taxa do mapper + taxa da agência.",
  },
  {
    tag: "QGPersonalizado",
    question: "Quem pode fazer a personalização do QG?",
    answer:
      "Apenas parceiros oficiais indicados no Discord do ilegal.",
  },
  {
    tag: "QGPersonalizado",
    question: "Se eu adicionar nomes no QG, isso fica permanente?",
    answer:
      "Após implementar, fica sob decisão do CEO responsável pelo ilegal manter ou remover.",
  },
  {
    tag: "QGPersonalizado",
    question: "Se a cidade resetar (wipe), minha facção retorna automaticamente com o QG?",
    answer:
      "Não. Em reset, a facção pode retornar ou não, independentemente de ser o mesmo proprietário.",
  },
  {
    tag: "QGPersonalizado",
    question: "Se eu precisar mudar de local ou ampliar o QG, o que acontece?",
    answer:
      "Será realizada uma avaliação e, se aprovado pelo CEO, cobra taxa de R$300.",
  },
  {
    tag: "QGPersonalizado",
    question: "A taxa de R$300 para mudar/expandir o QG é reembolsável?",
    answer:
      "Não. A taxa não é reembolsável.",
  },
  {
    tag: "QGPersonalizado",
    question: "Se eu desistir da mudança após pagar, recebo reembolso?",
    answer:
      "Não. Se desistir após pagamento, não há reembolso.",
  },

  // Compras de serviços
  {
    tag: "Servicos",
    question: "A troca de nome transfere a posse da facção para o líder?",
    answer:
      "Não. Troca de nome não transfere posse; a facção é doação da cidade.",
  },
  {
    tag: "Servicos",
    question: "Quanto custa trocar o nome da facção?",
    answer:
      "R$600,00.",
  },
  {
    tag: "Servicos",
    question: "Quantas vezes posso trocar o nome por season?",
    answer:
      "Apenas uma vez por season.",
  },
  {
    tag: "Servicos",
    question: "Posso reverter a troca de nome se eu me arrepender?",
    answer:
      "Não. Não há reembolso ou reversão após a escolha do nome.",
  },
  {
    tag: "QGIlha",
    question: "Comprar QG na ilha é reembolsável?",
    answer:
      "Não. A compra de QG na ilha não é reembolsável.",
  },
  {
    tag: "QGIlha",
    question: "Se um líder entregar a facção, o novo responsável pode manter o QG na ilha?",
    answer:
      "Sim. Pode manter mediante pagamento de R$300,00 ou devolver à cidade.",
  },
  {
    tag: "RoupasFac",
    question: "Se o líder que comprou roupas abandonar a facção, o que ocorre com as roupas?",
    answer:
      "A decisão sobre remoção das roupas da cidade fica a critério do CEO responsável.",
  },
  {
    tag: "MascarasStaff",
    question: "Máscaras para staff seguem qual regra?",
    answer:
      "Seguem diretrizes do CEO; se o staff sair, o CEO decide manter ou remover.",
  },
  {
    tag: "RoupasPolicia",
    question: "Roupas compradas para polícia ficam sob responsabilidade de quem?",
    answer:
      "Sob jurisdição do CEO responsável pela polícia.",
  },
  {
    tag: "RoupasPolicia",
    question: "Se quem comprou roupa da polícia sair da cidade, o que acontece?",
    answer:
      "O CEO da polícia decide se a peça será removida ou mantida.",
  },
  {
    tag: "Servicos",
    question: "Peças adicionadas à cidade podem ser enviadas para servidores parceiros?",
    answer:
      "Sim. Podem ser enviadas para servidor parceiro do CEO e vice-versa.",
  },

  // completar até 100 com variações úteis
  {
    tag: "AdvFac",
    question: "Se eu recorrer da ADV depois de 24h, ainda vale?",
    answer:
      "Não. O prazo para recorrer é de até 24 horas.",
  },
  {
    tag: "AdvFac",
    question: "Uma ADV de facção substitui prisão/ban individual?",
    answer:
      "Não. Punir a facção não impede punições individuais para quem quebrou regra.",
  },
  {
    tag: "AdvFac",
    question: "Se a facção estiver com ADV2, posso movimentar valores do painelfac?",
    answer:
      "Não. Por 48h as vendas, trocas e movimentações ficam bloqueadas.",
  },
  {
    tag: "RoupasFac",
    question: "Posso pagar a taxa do servidor antes de a roupa estar pronta?",
    answer:
      "O processo correto é primeiro criar a roupa e depois pagar a taxa para adicionar.",
  },
  {
    tag: "QGPersonalizado",
    question: "Se eu fizer personalização com alguém não parceiro oficial, posso adicionar?",
    answer:
      "Não. Apenas personalização feita com parceiros oficiais pode ser aceita.",
  },
  {
    tag: "Servicos",
    question: "Troca de nome pode ser feita várias vezes no mesmo mês?",
    answer:
      "Não. Apenas uma vez por season.",
  },
  {
    tag: "QGIlha",
    question: "Se o novo responsável não pagar R$300 para manter o QG na ilha, o que ocorre?",
    answer:
      "Ele deve devolver o QG na ilha à cidade.",
  },
  {
    tag: "RoupasFac",
    question: "Se uma roupa foi adicionada e depois a facção foi recolhida, posso pedir a roupa de volta?",
    answer:
      "Não. A roupa se torna propriedade do servidor após adicionada.",
  },
  {
    tag: "AdvFac",
    question: "Quantas remoções de ADV posso comprar em uma season?",
    answer:
      "No máximo 3 remoções por season.",
  },
  {
    tag: "AdvFac",
    question: "CEO pode negar a remoção de ADV mesmo eu pagando?",
    answer:
      "Sim. O pagamento pode ser negado pelos CEOs conforme julgamento.",
  },

  {
    tag: "Lideranca",
    question: "Qual é o objetivo do guia para assumir a liderança?",
    answer:
      "Ajudar quem deseja liderar uma facção/organização a entender requisitos e responsabilidades antes de assumir.",
  },
  {
    tag: "Lideranca",
    question: "Qual a idade mínima para assumir o comando de uma facção ou organização?",
    answer:
      "É necessário ter mais de 18 anos de idade para assumir a liderança.",
  },
  {
    tag: "Lideranca",
    question: "Por que precisa ter mais de 18 anos para liderar?",
    answer:
      "Para garantir maturidade e responsabilidade para lidar com as exigências do cargo.",
  },
  {
    tag: "Lideranca",
    question: "A exigência de idade está ligada a quê?",
    answer:
      "À capacidade de lidar com responsabilidades e tomar decisões maduras.",
  },
  {
    tag: "Lideranca",
    question: "É obrigatório ter um Discord da facção/organização?",
    answer:
      "Sim. É essencial ter um servidor Discord preparado e funcional.",
  },
  {
    tag: "Lideranca",
    question: "Qual a função do Discord da facção/organização?",
    answer:
      "Ser a plataforma central de comunicação, coordenação e interação interna.",
  },
  {
    tag: "Lideranca",
    question: "O Discord serve só para conversa casual?",
    answer:
      "Não. Ele deve ser usado para comunicação interna, coordenação de atividades e organização da equipe.",
  },
  {
    tag: "Lideranca",
    question: "O que significa ter um Discord 'preparado e funcional'?",
    answer:
      "Um servidor organizado e pronto para comunicação e coordenação, evitando bagunça e falta de estrutura.",
  },
  {
    tag: "Lideranca",
    question: "Por que a preparação de comunicação é importante para o líder?",
    answer:
      "Porque facilita alinhamento, liderança eficiente e coordenação das atividades da facção/organização.",
  },
  {
    tag: "Lideranca",
    question: "Preciso montar uma equipe antes de assumir a liderança?",
    answer:
      "Sim. O guia recomenda reunir um grupo de jogadores para a facção/organização.",
  },
  {
    tag: "Lideranca",
    question: "Quanto maior a equipe, melhor?",
    answer:
      "O guia destaca que quanto mais jogadores capacitados e dedicados, mais eficaz será a organização.",
  },
  {
    tag: "Lideranca",
    question: "O que é mais importante: quantidade ou qualidade dos membros?",
    answer:
      "O guia valoriza jogadores capacitados e dedicados, ou seja, qualidade e comprometimento.",
  },
  {
    tag: "Lideranca",
    question: "Por que recrutar jogadores dedicados ajuda a liderança?",
    answer:
      "Porque melhora a capacidade de alcançar metas e manter a organização operando com eficiência.",
  },
  {
    tag: "Lideranca",
    question: "Recrutamento influencia diretamente o desempenho da facção?",
    answer:
      "Sim. Uma equipe forte aumenta a eficiência e o alcance de metas.",
  },
  {
    tag: "Lideranca",
    question: "Ter experiência em liderança é obrigatório?",
    answer:
      "Não é obrigatório, mas é altamente recomendado.",
  },
  {
    tag: "Lideranca",
    question: "Que tipo de experiência prévia em liderança é recomendada?",
    answer:
      "Liderança em outros servidores, em jogos anteriores ou até fora do ambiente virtual.",
  },
  {
    tag: "Lideranca",
    question: "Experiência fora do jogo pode ajudar a liderar dentro do RP?",
    answer:
      "Sim. O guia cita experiência de liderança fora do ambiente virtual como válida e recomendada.",
  },
  {
    tag: "Lideranca",
    question: "Qual habilidade é crucial para um líder segundo o guia?",
    answer:
      "Motivar a equipe, resolver conflitos e tomar decisões estratégicas.",
  },
  {
    tag: "Lideranca",
    question: "O líder precisa saber resolver conflitos internos?",
    answer:
      "Sim. Resolver conflitos é citado como uma habilidade crucial.",
  },
  {
    tag: "Lideranca",
    question: "O líder precisa tomar decisões estratégicas?",
    answer:
      "Sim. Tomar decisões estratégicas é parte essencial da liderança.",
  },
  {
    tag: "Lideranca",
    question: "O líder precisa motivar os membros?",
    answer:
      "Sim. Motivar a equipe é uma habilidade importante para manter a organização eficiente.",
  },
  {
    tag: "Lideranca",
    question: "Posso liderar uma facção e jogar em outras cidades secundárias?",
    answer:
      "Não. O guia exige compromisso exclusivo com a cidade.",
  },
  {
    tag: "Lideranca",
    question: "O que significa 'compromisso exclusivo'?",
    answer:
      "Significa estar totalmente comprometido com a cidade, sem envolvimento em outras cidades secundárias.",
  },
  {
    tag: "Lideranca",
    question: "Se eu tiver status de líder em outro servidor, posso perder a facção aqui?",
    answer:
      "Sim. Se estiver como 01/00 [LÍDER] em outro servidor, pode perder a facção e a liderança.",
  },
  {
    tag: "Lideranca",
    question: "O que acontece se eu for líder em outro servidor ao mesmo tempo?",
    answer:
      "Você pode perder a facção e deixar a liderança, e ainda pode não fazer mais parte da facção atual.",
  },
  {
    tag: "Lideranca",
    question: "Além de perder a facção, posso ser removido da facção atual?",
    answer:
      "Sim. O guia diz que pode não poder mais fazer parte da facção atual.",
  },
  {
    tag: "Lideranca",
    question: "Preciso conhecer as regras da cidade para liderar?",
    answer:
      "Sim. O guia diz que é imprescindível ter profundo conhecimento das regras e regulamentos.",
  },
  {
    tag: "Lideranca",
    question: "Quais regras eu preciso conhecer como líder?",
    answer:
      "Regras de comportamento, conduta nas interações e diretrizes específicas de facções/organizações.",
  },
  {
    tag: "Lideranca",
    question: "Por que o conhecimento das regras é tão importante?",
    answer:
      "Porque o cumprimento das regras mantém a integridade e o bom funcionamento do servidor.",
  },
  {
    tag: "Lideranca",
    question: "Se eu não cumprir as regras, o que isso pode afetar?",
    answer:
      "Pode comprometer a integridade e o funcionamento da cidade, além de gerar punições conforme regras do servidor.",
  },
  {
    tag: "Lideranca",
    question: "O guia fala sobre responsabilidade. O que isso envolve na prática?",
    answer:
      "Assumir decisões maduras, organizar a equipe, manter boa conduta e respeitar as regras da cidade.",
  },
  {
    tag: "Lideranca",
    question: "O guia fala sobre trabalho em equipe. Por que isso é essencial?",
    answer:
      "Porque uma facção/organização depende de coordenação e cooperação para operar de forma eficiente.",
  },
  {
    tag: "Lideranca",
    question: "Quais são os pilares finais reforçados pelo guia?",
    answer:
      "Responsabilidade, trabalho em equipe e respeito às regras para uma experiência positiva.",
  },
  {
    tag: "Lideranca",
    question: "O que garante uma experiência positiva para todos na comunidade?",
    answer:
      "Cumprir requisitos, agir com responsabilidade, liderar bem a equipe e respeitar as regras.",
  },
  {
    tag: "Lideranca",
    question: "Se eu cumprir todos os requisitos, eu automaticamente viro líder?",
    answer:
      "O guia diz que você estará preparado, mas a liderança depende dos processos e decisões da cidade/ilegal.",
  },
  {
    tag: "Lideranca",
    question: "O guia diz que é 'fundamental' compreender o quê antes de liderar?",
    answer:
      "Os requisitos e responsabilidades associados à posição de liderança.",
  },
  {
    tag: "Lideranca",
    question: "Qual é a recomendação sobre recrutamento no guia?",
    answer:
      "Reunir um grupo de jogadores e buscar membros capacitados e dedicados para maior eficiência.",
  },
  {
    tag: "Lideranca",
    question: "O que pode acontecer se eu não tiver estrutura de comunicação (Discord) pronta?",
    answer:
      "Você tende a perder organização interna, coordenação e eficiência, prejudicando a liderança e o desempenho do grupo.",
  },
  {
    tag: "Lideranca",
    question: "O guia exige que eu tenha experiência de liderança em outro servidor?",
    answer:
      "Não exige, mas recomenda fortemente por ser útil para motivar, decidir e resolver conflitos.",
  },
  {
    tag: "Lideranca",
    question: "A liderança envolve apenas mandar ou também organizar?",
    answer:
      "Envolve organizar, coordenar, comunicar, motivar, resolver conflitos e tomar decisões estratégicas.",
  },
  {
    tag: "Lideranca",
    question: "Se eu tiver 18 anos certinho, eu posso assumir?",
    answer:
      "O texto diz 'mais de 18 anos'. Então, pela regra descrita, precisa ser acima de 18.",
  },
  {
    tag: "Lideranca",
    question: "O que eu devo priorizar ao iniciar como líder?",
    answer:
      "Estruturar comunicação no Discord, montar equipe dedicada e dominar as regras da cidade.",
  },
  {
    tag: "Lideranca",
    question: "O que acontece se eu tentar liderar sem conhecer as regras?",
    answer:
      "Você pode cometer quebras por desconhecimento e prejudicar a integridade e o funcionamento da facção e da cidade.",
  },
  {
    tag: "Lideranca",
    question: "O guia considera a liderança como algo sério ou só um cargo simbólico?",
    answer:
      "Como algo sério: exige maturidade, responsabilidade, organização e conhecimento das regras.",
  },
  {
    tag: "Lideranca",
    question: "Qual é o alerta principal sobre jogar em outras cidades secundárias?",
    answer:
      "Que você deve ter compromisso exclusivo; ser líder em outro servidor pode fazer você perder a facção aqui.",
  },
  {
    tag: "Lideranca",
    question: "Qual é a mensagem final do guia para quem quer liderar?",
    answer:
      "Considere os requisitos, cumpra as responsabilidades e mantenha respeito, trabalho em equipe e regras para uma experiência positiva.",
  },
  {
    tag: "AssumirFac",
    question: "Quantos jogadores são exigidos no mínimo para assumir uma facção?",
    answer:
      "É necessário ter no mínimo 15 jogadores na cidade ou em call.",
  },
  {
    tag: "AssumirFac",
    question: "Os jogadores precisam estar online para assumir uma facção?",
    answer:
      "Sim. A quantidade de jogadores online é um critério fundamental.",
  },
  {
    tag: "AssumirFac",
    question: "Ter mais de 15 jogadores online aumenta as chances?",
    answer:
      "Sim. Quanto mais jogadores online, maior a prioridade para assumir a facção.",
  },
  {
    tag: "AssumirFac",
    question: "A prioridade para assumir uma facção é definida por quê?",
    answer:
      "Pela quantidade de jogadores online no Discord e na cidade.",
  },
  {
    tag: "AssumirFac",
    question: "A presença em call é importante para assumir uma facção?",
    answer:
      "Sim. Estar em call demonstra organização e aumenta as chances.",
  },

  {
    tag: "Producao",
    question: "O que significa o bloco de PRODUÇÃO em uma facção?",
    answer:
      "Indica os tipos de itens e atividades que a facção poderá produzir.",
  },
  {
    tag: "Producao",
    question: "Cada facção possui um tipo específico de produção?",
    answer:
      "Sim. Cada seguimento possui uma produção definida.",
  },
  {
    tag: "Producao",
    question: "A produção define o foco principal da facção?",
    answer:
      "Sim. Ela determina o tipo de atividade principal da facção.",
  },
  {
    tag: "Producao",
    question: "A produção influencia diretamente o farm da facção?",
    answer:
      "Sim. Ela define quais itens podem ser produzidos e movimentados.",
  },
  {
    tag: "Producao",
    question: "A produção é exclusiva da facção?",
    answer:
      "Sim. Cada facção possui seu próprio seguimento de produção.",
  },

  {
    tag: "Bonus",
    question: "O que são os bônus ao assumir uma facção?",
    answer:
      "São benefícios entregues aos membros após assumir a facção.",
  },
  {
    tag: "Bonus",
    question: "O bônus de baú pessoal é entregue para quem?",
    answer:
      "Para cada membro da facção.",
  },
  {
    tag: "Bonus",
    question: "Qual a capacidade do baú pessoal oferecido?",
    answer:
      "1000Kg para cada membro.",
  },
  {
    tag: "Bonus",
    question: "O baú pessoal fica onde?",
    answer:
      "Dentro da estrutura da facção.",
  },
  {
    tag: "Bonus",
    question: "O baú pessoal facilita o quê?",
    answer:
      "A organização e o armazenamento de itens dos membros.",
  },

  {
    tag: "Veiculos",
    question: "Existe veículo como bônus ao assumir a facção?",
    answer:
      "Sim. Veículos são disponibilizados na garagem de membros.",
  },
  {
    tag: "Veiculos",
    question: "Os veículos bônus ficam disponíveis para membros?",
    answer:
      "Sim. Eles ficam na garagem de membros.",
  },
  {
    tag: "Veiculos",
    question: "Os veículos bônus ajudam em quais atividades?",
    answer:
      "Deslocamento, logística e farm.",
  },
  {
    tag: "Veiculos",
    question: "Existe veículo específico para farm marítimo?",
    answer:
      "Sim. Há um veículo exclusivo para farm marítimo.",
  },
  {
    tag: "Veiculos",
    question: "O veículo marítimo também funciona em terra?",
    answer:
      "Sim. Ele é aquático e terrestre.",
  },

  {
    tag: "Sistema",
    question: "Existe sistema de farm AFK como bônus?",
    answer:
      "Sim. O sistema de farm AFK está incluído.",
  },
  {
    tag: "Sistema",
    question: "O sistema de farm AFK beneficia quem?",
    answer:
      "Beneficia os membros da facção.",
  },
  {
    tag: "Sistema",
    question: "O farm AFK reduz a necessidade de presença ativa?",
    answer:
      "Ele auxilia no farm, mas não substitui a atividade dos membros.",
  },
  {
    tag: "Sistema",
    question: "Existe garagem pública como bônus?",
    answer:
      "Sim. A facção conta com garagem pública.",
  },
  {
    tag: "Sistema",
    question: "A garagem pública facilita o quê?",
    answer:
      "O acesso rápido a veículos para os membros.",
  },

  {
    tag: "Comunicacao",
    question: "Existe rádio privada como bônus da facção?",
    answer:
      "Sim. A rádio privada está incluída.",
  },
  {
    tag: "Comunicacao",
    question: "A rádio privada serve para quê?",
    answer:
      "Para comunicação interna segura entre os membros.",
  },
  {
    tag: "Comunicacao",
    question: "A comunicação é importante para a facção?",
    answer:
      "Sim. Organização e comunicação são essenciais.",
  },
  {
    tag: "Comunicacao",
    question: "A presença no Discord influencia a decisão?",
    answer:
      "Sim. Quanto mais pessoas online no Discord, maior a prioridade.",
  },
  {
    tag: "Comunicacao",
    question: "Estar organizado no Discord ajuda a assumir?",
    answer:
      "Sim. Demonstra preparo e estrutura.",
  },

  {
    tag: "Requisitos",
    question: "Existe exigência mínima de organização para assumir uma facção?",
    answer:
      "Sim. É necessário mostrar capacidade de organização e presença.",
  },
  {
    tag: "Requisitos",
    question: "Assumir uma facção depende apenas de dinheiro?",
    answer:
      "Não. Depende principalmente de organização e quantidade de jogadores.",
  },
  {
    tag: "Requisitos",
    question: "A quantidade de jogadores é analisada?",
    answer:
      "Sim. É um dos critérios principais.",
  },
  {
    tag: "Requisitos",
    question: "A facção exige comprometimento dos membros?",
    answer:
      "Sim. A presença e atividade são fundamentais.",
  },
  {
    tag: "Requisitos",
    question: "Assumir uma facção exige planejamento prévio?",
    answer:
      "Sim. Organização prévia aumenta muito as chances.",
  },

  {
    tag: "Prioridade",
    question: "Quem define a prioridade para assumir uma facção?",
    answer:
      "A equipe responsável avalia com base nos critérios apresentados.",
  },
  {
    tag: "Prioridade",
    question: "Ter mais jogadores em call garante a facção?",
    answer:
      "Não garante, mas aumenta significativamente as chances.",
  },
  {
    tag: "Prioridade",
    question: "O número mínimo é suficiente em todos os casos?",
    answer:
      "É o mínimo exigido, mas mais jogadores aumentam a prioridade.",
  },
  {
    tag: "Prioridade",
    question: "A prioridade pode mudar de acordo com outros candidatos?",
    answer:
      "Sim. Depende da quantidade de jogadores apresentados.",
  },
  {
    tag: "Prioridade",
    question: "A organização do grupo influencia a escolha?",
    answer:
      "Sim. Organização conta pontos no processo.",
  },

  {
    tag: "Geral",
    question: "Assumir uma facção envolve responsabilidade?",
    answer:
      "Sim. O grupo passa a ser responsável pela facção.",
  },
  {
    tag: "Geral",
    question: "Os bônus são iguais para todos os seguimentos?",
    answer:
      "Sim. Os bônus listados são os mesmos.",
  },
  {
    tag: "Geral",
    question: "A facção passa a ter estrutura própria?",
    answer:
      "Sim. Com baús, veículos, garagem e comunicação.",
  },
  {
    tag: "Geral",
    question: "Os membros precisam manter atividade constante?",
    answer:
      "Sim. A facção depende de atividade contínua.",
  },
  {
    tag: "Geral",
    question: "Assumir uma facção exige trabalho em equipe?",
    answer:
      "Sim. O sucesso depende do coletivo.",
  },

  {
    tag: "Geral",
    question: "A facção passa a ter mais responsabilidade dentro do ilegal?",
    answer:
      "Sim. Ela passa a representar um seguimento importante.",
  },
  {
    tag: "Geral",
    question: "A estrutura oferecida ajuda no crescimento da facção?",
    answer:
      "Sim. Facilita farm, organização e comunicação.",
  },
  {
    tag: "Geral",
    question: "A quantidade de membros influencia diretamente a produção?",
    answer:
      "Sim. Mais membros ativos aumentam a eficiência.",
  },
  {
    tag: "Geral",
    question: "A facção pode crescer após ser assumida?",
    answer:
      "Sim. O crescimento depende da gestão e recrutamento.",
  },
  {
    tag: "Geral",
    question: "Assumir uma facção é uma oportunidade estratégica?",
    answer:
      "Sim. Oferece estrutura completa e vantagens operacionais.",
  },{
    tag: "Dominacao",
    question: "O que é necessário para iniciar uma dominação de segmento?",
    answer:
      "É necessário fazer parte do segmento correspondente à área dominada.",
  },
  {
    tag: "Dominacao",
    question: "Quem pode participar da dominação geral?",
    answer:
      "Todos os segmentos, desde que estejam setados há pelo menos 24 horas.",
  },
  {
    tag: "Dominacao",
    question: "Quem pode participar da dominação de arma branca?",
    answer:
      "Todos os segmentos, desde que cumpram o tempo mínimo de setagem.",
  },
  {
    tag: "Dominacao",
    question: "É permitido participar da dominação sem estar setado?",
    answer:
      "Não. É obrigatório estar setado corretamente.",
  },
  {
    tag: "Dominacao",
    question: "Quantas horas mínimas de setagem são exigidas?",
    answer:
      "No mínimo 24 horas na facção ou organização.",
  },

  // ================= ALIANÇAS E PARCERIAS =================
  {
    tag: "Dominacao",
    question: "É permitido fazer alianças durante a dominação?",
    answer:
      "Não. Parcerias e alianças são proibidas.",
  },
  {
    tag: "Dominacao",
    question: "Posso ajudar outra facção sem estar setado nela?",
    answer:
      "Não. Jogadores sem setagem não podem auxiliar.",
  },
  {
    tag: "Dominacao",
    question: "Aliança entre facções rivais é permitida?",
    answer:
      "Não. É proibido qualquer tipo de parceria.",
  },
  {
    tag: "Dominacao",
    question: "Parceria individual durante dominação é permitida?",
    answer:
      "Não. Parcerias individuais também são proibidas.",
  },
  {
    tag: "Dominacao",
    question: "O que acontece se for comprovada aliança ilegal?",
    answer:
      "A facção pode receber advertência ou punição maior.",
  },

  // ================= CLIPES E PROVAS =================
  {
    tag: "Dominacao",
    question: "É obrigatório gravar as kills durante a dominação?",
    answer:
      "Sim. O clipe é obrigatório.",
  },
  {
    tag: "Dominacao",
    question: "Quando o clipe pode ser solicitado?",
    answer:
      "Sempre que solicitado pela staff.",
  },
  {
    tag: "Dominacao",
    question: "Não ter clipe pode gerar punição?",
    answer:
      "Sim. Pode resultar em telagem ou punição.",
  },
  {
    tag: "Dominacao",
    question: "O clipe deve mostrar o quê?",
    answer:
      "A kill realizada de forma clara e contínua.",
  },
  {
    tag: "Dominacao",
    question: "Clipes editados são aceitos?",
    answer:
      "Não. Clipes devem ser completos e sem cortes.",
  },

  // ================= BOOST E VITÓRIA =================
  {
    tag: "Dominacao",
    question: "Qual boost é concedido ao vencer uma dominação de segmento?",
    answer:
      "Boost de 2x no farm por no mínimo 3 horas.",
  },
  {
    tag: "Dominacao",
    question: "Qual boost é concedido ao vencer a dominação geral?",
    answer:
      "Boost de 3x no farm por 3 horas.",
  },
  {
    tag: "Dominacao",
    question: "O boost termina automaticamente?",
    answer:
      "Não. Ele dura até outra facção dominar a área ou acabar o tempo.",
  },
  {
    tag: "Dominacao",
    question: "O boost é acumulativo?",
    answer:
      "Não. Boosts não acumulam.",
  },
  {
    tag: "Dominacao",
    question: "Pode participar de outra dominação com boost ativo?",
    answer:
      "Depende do tipo de boost ativo.",
  },

  // ================= ÁREA DE DOMINAÇÃO =================
  {
    tag: "Dominacao",
    question: "Como identificar uma área de dominação ativa?",
    answer:
      "Ela aparece com caveiras vermelhas no mapa.",
  },
  {
    tag: "Dominacao",
    question: "A área é perigosa fora da dominação?",
    answer:
      "Não. Fora da dominação ela é safe-zone.",
  },
  {
    tag: "Dominacao",
    question: "O que significa parede verde na área?",
    answer:
      "Que a área está sem domínio e é safe-zone.",
  },
  {
    tag: "Dominacao",
    question: "Posso entrar na área vermelha sem participar?",
    answer:
      "Não. Você pode ser morto e perder itens.",
  },
  {
    tag: "Dominacao",
    question: "A troca de tiros é permitida fora da área?",
    answer:
      "Não. Apenas dentro da área delimitada.",
  },

  // ================= TIRO E COMBATE =================
  {
    tag: "Dominacao",
    question: "É permitido atirar de fora para dentro da área?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Dominacao",
    question: "É permitido atirar de dentro para fora da área?",
    answer:
      "Não. Também é proibido.",
  },
  {
    tag: "Dominacao",
    question: "Matar fora da área conta como o quê?",
    answer:
      "Conta como RDM.",
  },
  {
    tag: "Dominacao",
    question: "Matar com área verde é permitido?",
    answer:
      "Não. Será considerado RDM.",
  },
  {
    tag: "Dominacao",
    question: "O combate só vale quando a área está vermelha?",
    answer:
      "Sim. Apenas com a dominação ativa.",
  },

  // ================= LOOT =================
  {
    tag: "Dominacao",
    question: "O loot é permitido dentro da área?",
    answer:
      "Sim. O loot é liberado.",
  },
  {
    tag: "Dominacao",
    question: "É permitido lootear de fora para dentro?",
    answer:
      "Não. É proibido.",
  },
  {
    tag: "Dominacao",
    question: "É permitido passar itens de dentro para fora?",
    answer:
      "Não. É proibido.",
  },
  {
    tag: "Dominacao",
    question: "O loot pode ser feito por qualquer participante?",
    answer:
      "Sim, desde que esteja dentro da área.",
  },
  {
    tag: "Dominacao",
    question: "Loot fora do perímetro gera punição?",
    answer:
      "Sim. É considerado infração.",
  },

  // ================= VEÍCULOS =================
  {
    tag: "Dominacao",
    question: "É permitido entrar com veículos na dominação?",
    answer:
      "Não. Veículos são proibidos.",
  },
  {
    tag: "Dominacao",
    question: "É permitido usar helicóptero?",
    answer:
      "Não. Helicópteros são proibidos.",
  },
  {
    tag: "Dominacao",
    question: "Empurrar alguém com veículo é permitido?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Dominacao",
    question: "Roubar veículos no perímetro é permitido?",
    answer:
      "Não. Roubo de veículos é proibido.",
  },
  {
    tag: "Dominacao",
    question: "Veículos podem ser usados para fuga?",
    answer:
      "Não. Não é permitido entrar ou sair com veículos.",
  },

  // ================= MORTE E RETORNO =================
  {
    tag: "Dominacao",
    question: "Ao morrer posso retornar na dominação de segmento?",
    answer:
      "Sim. O retorno é permitido.",
  },
  {
    tag: "Dominacao",
    question: "Ao morrer posso retornar no Battle Royale?",
    answer:
      "Não. No Battle Royale não há retorno.",
  },
  {
    tag: "Dominacao",
    question: "Crash permite retorno no Battle Royale?",
    answer:
      "Não. Crash também impede retorno.",
  },
  {
    tag: "Dominacao",
    question: "Quitar durante dominação é permitido?",
    answer:
      "Não. Quitar em menos de 20 minutos é proibido.",
  },
  {
    tag: "Dominacao",
    question: "Quitar após dominação pode gerar punição?",
    answer:
      "Sim, se for antes do tempo mínimo.",
  },

  // ================= MOCHILA E IDENTIFICAÇÃO =================
  {
    tag: "Dominacao",
    question: "O uso da mochila é obrigatório?",
    answer:
      "Sim. A mochila é obrigatória.",
  },
  {
    tag: "Dominacao",
    question: "A mochila serve para quê?",
    answer:
      "Para identificação dos participantes.",
  },
  {
    tag: "Dominacao",
    question: "É permitido trocar a mochila durante a dominação?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Dominacao",
    question: "Usar roupa de família é permitido?",
    answer:
      "Não. É proibido.",
  },
  {
    tag: "Dominacao",
    question: "Confusão por roupa gera o quê?",
    answer:
      "Advertência.",
  },

  // ================= BLIPS =================
  {
    tag: "Dominacao",
    question: "É permitido puxar dois blips ao mesmo tempo?",
    answer:
      "Não. É terminantemente proibido.",
  },
  {
    tag: "Dominacao",
    question: "Uma facção pode participar de duas dominações simultâneas?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Dominacao",
    question: "O que acontece se puxar blip morto?",
    answer:
      "Será considerado abuso de bug grave.",
  },
  {
    tag: "Dominacao",
    question: "Líder pode ser punido por blip morto?",
    answer:
      "Sim. Pode gerar advertência e prisão.",
  },
  {
    tag: "Dominacao",
    question: "Blip morto afeta a facção?",
    answer:
      "Sim. Pode gerar punição coletiva.",
  },

  // ================= BATTLE ROYALE =================
  {
    tag: "BattleRoyale",
    question: "Quando as dominações de segmento são pausadas?",
    answer:
      "30 minutos antes do Battle Royale.",
  },
  {
    tag: "BattleRoyale",
    question: "Os pontos são resetados ao pausar?",
    answer:
      "Não. Os pontos são mantidos.",
  },
  {
    tag: "BattleRoyale",
    question: "Após o Battle Royale a dominação volta?",
    answer:
      "Sim. Ela continua de onde parou.",
  },
  {
    tag: "BattleRoyale",
    question: "Quanto tempo a facção dominante tem para retornar?",
    answer:
      "10 minutos após o término.",
  },
  {
    tag: "BattleRoyale",
    question: "Quem pode participar do Battle Royale?",
    answer:
      "Todos os grupos.",
  },

  // ================= SS E PUNIÇÕES =================
  {
    tag: "Dominacao",
    question: "O que acontece se o jogador não for encontrado para SS?",
    answer:
      "Ele será banido para telagem.",
  },
  {
    tag: "Dominacao",
    question: "Após telagem sem irregularidade, o que acontece?",
    answer:
      "Recebe unban com 500 meses de prisão.",
  },
  {
    tag: "Dominacao",
    question: "Quantos banimentos levam ao permanente?",
    answer:
      "Três reincidências pelo mesmo motivo.",
  },
  {
    tag: "Dominacao",
    question: "Refuse após dominação é punido?",
    answer:
      "Sim. Pode ser considerado refuse.",
  },
  {
    tag: "Dominacao",
    question: "TK proposital dentro da dominação é permitido?",
    answer:
      "Não. Pode gerar ADV ou banimento.",
  },
  {
    tag: "Horarios",
    question: "Existe horário fixo para iniciar uma dominação?",
    answer:
      "Não. As dominações seguem o sistema do servidor conforme liberação.",
  },
  {
    tag: "Horarios",
    question: "É permitido iniciar dominação fora do horário liberado?",
    answer:
      "Não. Iniciar fora do horário permitido é proibido.",
  },
  {
    tag: "Horarios",
    question: "O que acontece se uma facção tentar dominar fora do horário?",
    answer:
      "A ação pode ser anulada e gerar punições.",
  },
  {
    tag: "Horarios",
    question: "O horário influencia na validade da dominação?",
    answer:
      "Sim. Fora do horário a dominação não é válida.",
  },
  {
    tag: "Horarios",
    question: "A staff pode cancelar uma dominação fora do horário?",
    answer:
      "Sim. A staff pode intervir a qualquer momento.",
  },

  // ===================== HORÁRIOS – BATTLE ROYALE =====================
  {
    tag: "Horarios",
    question: "As dominações de segmento param antes do Battle Royale?",
    answer:
      "Sim. Elas são pausadas 30 minutos antes.",
  },
  {
    tag: "Horarios",
    question: "Durante a pausa do Battle Royale posso puxar blip?",
    answer:
      "Não. As dominações ficam pausadas.",
  },
  {
    tag: "Horarios",
    question: "Os pontos das dominações pausadas são perdidos?",
    answer:
      "Não. Os pontos não são resetados.",
  },
  {
    tag: "Horarios",
    question: "Após o Battle Royale as dominações voltam automaticamente?",
    answer:
      "Sim. Elas continuam de onde pararam.",
  },
  {
    tag: "Horarios",
    question: "Existe horário específico para entrar no Battle Royale?",
    answer:
      "Sim. Os convites são enviados no horário definido pela staff.",
  },

  // ===================== PROIBIÇÕES – PARTICIPAÇÃO =====================
  {
    tag: "Proibicoes",
    question: "É permitido participar da dominação sem estar setado?",
    answer:
      "Não. É obrigatório estar setado corretamente.",
  },
  {
    tag: "Proibicoes",
    question: "Novatos podem participar da dominação?",
    answer:
      "Não. É necessário no mínimo 24 horas na facção.",
  },
  {
    tag: "Proibicoes",
    question: "Posso participar da dominação enquanto estou com boost ativo?",
    answer:
      "Depende do tipo de boost. Algumas participações são bloqueadas.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido participar de duas dominações ao mesmo tempo?",
    answer:
      "Não. É terminantemente proibido.",
  },
  {
    tag: "Proibicoes",
    question: "Uma facção pode puxar dois blips simultâneos?",
    answer:
      "Não. Isso é proibido.",
  },

  // ===================== PROIBIÇÕES – COMBATE =====================
  {
    tag: "Proibicoes",
    question: "É permitido matar fora da área de dominação?",
    answer:
      "Não. Isso é considerado RDM.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido matar quando a área está verde?",
    answer:
      "Não. Área verde é safe-zone.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido atirar de fora para dentro da área?",
    answer:
      "Não. Disparos cruzados são proibidos.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido atirar de dentro para fora da área?",
    answer:
      "Não. Também é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido trocar tiros fora do perímetro?",
    answer:
      "Não. O combate só vale dentro da área vermelha.",
  },

  // ===================== PROIBIÇÕES – VEÍCULOS =====================
  {
    tag: "Proibicoes",
    question: "É permitido entrar com carro na dominação?",
    answer:
      "Não. Veículos são proibidos.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido usar moto na dominação?",
    answer:
      "Não. Nenhum veículo é permitido.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido usar helicóptero na dominação?",
    answer:
      "Não. Helicópteros são proibidos.",
  },
  {
    tag: "Proibicoes",
    question: "Posso usar veículo para empurrar jogadores?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido roubar veículos na área da dominação?",
    answer:
      "Não. Roubo de veículos é proibido.",
  },

  // ===================== PROIBIÇÕES – LOOT =====================
  {
    tag: "Proibicoes",
    question: "É permitido lootear de fora para dentro da área?",
    answer:
      "Não. O loot só é válido dentro do perímetro.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido passar itens para fora da área?",
    answer:
      "Não. Transferência de itens é proibida.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido receber itens de fora da área?",
    answer:
      "Não. Isso também é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "Lootear alguém fora da área é permitido?",
    answer:
      "Não. É considerado infração.",
  },
  {
    tag: "Proibicoes",
    question: "Loot em área verde é permitido?",
    answer:
      "Não. Área verde é safe-zone.",
  },

  // ===================== PROIBIÇÕES – ROUPAS E IDENTIFICAÇÃO =====================
  {
    tag: "Proibicoes",
    question: "É obrigatório usar mochila na dominação?",
    answer:
      "Sim. A mochila é obrigatória.",
  },
  {
    tag: "Proibicoes",
    question: "Posso retirar a mochila durante a dominação?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido usar roupa de família?",
    answer:
      "Não. Roupas de família são proibidas.",
  },
  {
    tag: "Proibicoes",
    question: "Confusão por roupa gera punição?",
    answer:
      "Sim. Pode gerar advertência.",
  },
  {
    tag: "Proibicoes",
    question: "Posso usar roupa de outra facção?",
    answer:
      "Não. Isso é proibido.",
  },

  // ===================== PROIBIÇÕES – BUGS E ABUSOS =====================
  {
    tag: "Proibicoes",
    question: "É permitido usar bugs durante a dominação?",
    answer:
      "Não. Qualquer abuso de bug é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "Usar bug para reviver alguém é permitido?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "Forçar crash durante a dominação é permitido?",
    answer:
      "Não. Isso é considerado CL.",
  },
  {
    tag: "Proibicoes",
    question: "Puxar blip morto é permitido?",
    answer:
      "Não. É abuso de bug grave.",
  },
  {
    tag: "Proibicoes",
    question: "Líder pode ser punido por abuso de bug?",
    answer:
      "Sim. Pode gerar punição direta à facção.",
  },

  // ===================== PROIBIÇÕES – FUGA E AÇÕES EXTERNAS =====================
  {
    tag: "Proibicoes",
    question: "É permitido fugir de assalto para dentro da dominação?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido fugir da polícia para dentro da dominação?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido assaltar dentro da área da dominação?",
    answer:
      "Não. Assaltos são proibidos no perímetro.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido sequestrar dentro da dominação?",
    answer:
      "Não. Sequestros são proibidos.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido roubar dentro da área da dominação?",
    answer:
      "Não. Qualquer roubo é proibido.",
  },

  // ===================== PROIBIÇÕES – SAÍDA E QUIT =====================
  {
    tag: "Proibicoes",
    question: "É permitido quitar logo após a dominação?",
    answer:
      "Não. É proibido sair antes de 20 minutos.",
  },
  {
    tag: "Proibicoes",
    question: "Quitar antes de 20 minutos pode gerar punição?",
    answer:
      "Sim. Pode gerar punições severas.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido se jogar para fora da área?",
    answer:
      "Não. Isso é proibido.",
  },
  {
    tag: "Proibicoes",
    question: "É permitido pular de paraquedas na dominação?",
    answer:
      "Não. Paraquedas são proibidos.",
  },
  {
    tag: "Proibicoes",
    question: "Forçar saída da área é permitido?",
    answer:
      "Não. É considerado infração.",
  },
  {
    tag: "Dominacao",
    question: "Qual o horario de inicio da dominacao?",
    answer:
      "O horario e definido pelos responsaveis e anunciado no discord oficial.",
  },
  {
    tag: "Dominacao",
    question: "Onde vejo o blip de dominacao no mapa?",
    answer: "No mapa, as areas ativas aparecem com caveira vermelha.",
  },
  {
    tag: "Dominacao",
    question: "Posso sair da area e voltar durante a dominacao?",
    answer: "Sim, desde que respeite a area e as regras da acao.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar sniper fora do perimetro?",
    answer: "Nao. Atirar de fora para dentro e proibido.",
  },
  {
    tag: "Dominacao",
    question: "Granadas sao permitidas na dominacao?",
    answer: "Sim, desde que usadas dentro da area e sem bug.",
  },
  {
    tag: "Dominacao",
    question: "Posso pegar armas de players caidos?",
    answer: "Sim. O loot dentro da area e livre.",
  },
  {
    tag: "Dominacao",
    question: "Posso finalizar fora do perimetro?",
    answer: "Nao. Finalizar fora da zona e proibido.",
  },
  {
    tag: "Dominacao",
    question: "Posso carregar player para fora da zona?",
    answer: "Nao. Levar jogadores para fora e proibido.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar veiculo dentro da area?",
    answer: "Nao. Veiculos sao proibidos nas dominacoes.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar roupa de familia na dominacao?",
    answer: "Nao. Roupas de familia sao proibidas.",
  },
  {
    tag: "Dominacao",
    question: "Preciso estar na call para BR?",
    answer: "Sim. A call da faccao e obrigatoria.",
  },
  {
    tag: "Dominacao",
    question: "Quantos convites sao enviados no BR?",
    answer: "Sao feitas duas tentativas de convite.",
  },
  {
    tag: "Dominacao",
    question: "Se eu atrasar para a call, posso entrar?",
    answer: "Nao. As calls sao trancadas 10 minutos antes.",
  },
  {
    tag: "Dominacao",
    question: "Posso puxar blip se a area estiver verde?",
    answer: "Sim. Area verde esta sem dominio.",
  },
  {
    tag: "Dominacao",
    question: "O que acontece se eu assaltar no perimetro?",
    answer: "Assalto no perimetro e proibido e gera punicao.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar paraquedas na dominacao?",
    answer: "Nao. Paraquedas sao proibidos.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar bug de parede ou animacao?",
    answer: "Nao. Abuso de bug e punido.",
  },
  {
    tag: "Dominacao",
    question: "Posso ficar sem arma dentro da area?",
    answer: "Nao. Armas sao obrigatorias.",
  },
  {
    tag: "Dominacao",
    question: "Dominacao de segmento aceita outros segmentos?",
    answer: "Nao. Apenas o segmento correspondente pode entrar.",
  },
  {
    tag: "Dominacao",
    question: "Dominacao geral aceita qualquer segmento?",
    answer: "Sim. Todos os segmentos podem participar.",
  },
  {
    tag: "Dominacao",
    question: "Dominacao arma branca aceita qualquer segmento?",
    answer: "Sim. Todos os segmentos podem participar.",
  },
  {
    tag: "Dominacao",
    question: "Posso participar com boost de segmento ativo?",
    answer: "Sim. Segmento ativo permite disputar geral e BR.",
  },
  {
    tag: "Dominacao",
    question: "Posso participar com boost geral ativo?",
    answer: "Nao para segmento enquanto o boost estiver ativo.",
  },
  {
    tag: "Dominacao",
    question: "Qual o cooldown da vencedora de segmento?",
    answer: "Aguarde 6 horas ou outra faccao vencer.",
  },
  {
    tag: "Dominacao",
    question: "Qual o cooldown da vencedora geral?",
    answer: "Aguarde 6 horas para participar novamente.",
  },
  {
    tag: "Dominacao",
    question: "Cooldown apos BR para puxar segmento?",
    answer: "Apos o fim do boost do BR.",
  },
  {
    tag: "Dominacao",
    question: "Tempo minimo do boost 2x?",
    answer: "3 horas.",
  },
  {
    tag: "Dominacao",
    question: "Tempo minimo do boost 3x?",
    answer: "3 horas.",
  },
  {
    tag: "Dominacao",
    question: "Dominacao pode ser defendida?",
    answer: "Nao. Precisa esperar outra faccao dominar.",
  },
  {
    tag: "Dominacao",
    question: "Pode ter parceria temporaria na dominacao?",
    answer: "Nao. Parcerias sao proibidas.",
  },
  {
    tag: "Dominacao",
    question: "Posso chamar aliado sem setagem?",
    answer: "Nao. Sem setagem e proibido.",
  },
  {
    tag: "Dominacao",
    question: "Matar na area verde e permitido?",
    answer: "Nao. Area verde e safe-zone.",
  },
  {
    tag: "Dominacao",
    question: "Posso ficar em predio fora da zona?",
    answer: "Nao. Atirar de fora e proibido.",
  },
  {
    tag: "Dominacao",
    question: "Posso deslogar logo apos a dominacao?",
    answer: "Nao. Deve esperar 20 minutos.",
  },
  {
    tag: "Dominacao",
    question: "Se eu perder clipe das kills?",
    answer: "Pode ser puxado para SS.",
  },
  {
    tag: "Dominacao",
    question: "Se eu nao responder SS?",
    answer: "Pode ser banido por refuse.",
  },
  {
    tag: "Dominacao",
    question: "SS pode puxar sem aviso?",
    answer: "Sim.",
  },
  {
    tag: "Dominacao",
    question: "Ban por hack no BR faz o que?",
    answer: "Desclassifica automaticamente.",
  },
  {
    tag: "Dominacao",
    question: "Vitoria revogada se alguem for banido?",
    answer: "Sim. O boost pode ser removido.",
  },
  {
    tag: "Dominacao",
    question: "Quem define o horario do BR?",
    answer: "Os responsaveis anunciam no discord.",
  },
  {
    tag: "Dominacao",
    question: "Existe limite de jogadores no BR?",
    answer: "Nao, salvo anuncio oficial.",
  },
  {
    tag: "Dominacao",
    question: "Binds no BR sao permitidos?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Preciso de mochila no BR?",
    answer: "Sim, uniforme completo ou mochila.",
  },
  {
    tag: "Dominacao",
    question: "Com BR ativo posso puxar geral?",
    answer: "Nao enquanto o boost estiver ativo.",
  },
  {
    tag: "Dominacao",
    question: "Com BR ativo posso puxar segmento?",
    answer: "Nao enquanto o boost estiver ativo.",
  },
  {
    tag: "Dominacao",
    question: "Com segmento ativo posso disputar geral?",
    answer: "Sim.",
  },
  {
    tag: "Dominacao",
    question: "Com BR ativo posso disputar geral?",
    answer: "Apos o fim do boost do BR.",
  },
  {
    tag: "Dominacao",
    question: "O que e blip morto?",
    answer: "Puxar blip encerrado ou bugado.",
  },
  {
    tag: "Dominacao",
    question: "Punicao por blip morto?",
    answer: "Advertencia e punicao conforme gravidade.",
  },
  {
    tag: "Dominacao",
    question: "Posso bloquear entrada com veiculo?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Helicoptero ou veiculo aereo e permitido?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar radio externo em vez da call?",
    answer: "Nao. A call oficial e obrigatoria.",
  },
  {
    tag: "Dominacao",
    question: "Posso entrar com roupa civil?",
    answer: "Nao. Use uniforme ou mochila.",
  },
  {
    tag: "Dominacao",
    question: "Se eu nao tiver uniforme?",
    answer: "Use mochila da faccao.",
  },
  {
    tag: "Dominacao",
    question: "Area vermelha indica o que?",
    answer: "Dominacao ativa e area de risco.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar explosivo fora da area?",
    answer: "Nao. A acao deve ser dentro da zona.",
  },
  {
    tag: "Dominacao",
    question: "Posso ajudar player de dentro estando fora?",
    answer: "Nao. Nao pode interagir de fora.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar carro e descer na area?",
    answer: "Nao. Veiculos sao proibidos no perimetro.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar moto para fugir da zona?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar mascara de outra faccao?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Se eu tiver 12h de faccao, posso?",
    answer: "Nao. Minimo 24h.",
  },
  {
    tag: "Dominacao",
    question: "Se eu mudei de faccao hoje, posso?",
    answer: "Nao. Precisa 24h.",
  },
  {
    tag: "Dominacao",
    question: "Com segmento ativo posso puxar BR?",
    answer: "Sim, BR permitido.",
  },
  {
    tag: "Dominacao",
    question: "Com geral ativo posso puxar BR?",
    answer: "Sim, BR permitido.",
  },
  {
    tag: "Dominacao",
    question: "Posso entrar na dominacao de municao sendo armas?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso entrar na dominacao de armas sendo municao?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso entrar na dominacao de lavagem sendo desmanche?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso entrar na dominacao de desmanche sendo lavagem?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Quando as dominacoes pausadas voltam?",
    answer: "Depois do BR e do tempo de organizacao.",
  },
  {
    tag: "Dominacao",
    question: "Quanto tempo apos BR para retomar?",
    answer: "10 minutos para organizacao.",
  },
  {
    tag: "Dominacao",
    question: "Posso puxar dominacao durante pausa?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Area verde e safe-zone?",
    answer: "Sim.",
  },
  {
    tag: "Dominacao",
    question: "Posso lootear sem participar da acao?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso ficar na area vermelha como espectador?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "O que e RDM na dominacao?",
    answer: "Kill fora da area ou com area verde.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar glitch para reviver?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso tirar uniforme no meio da acao?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso trocar mochila durante a acao?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso chamar aliado de fora para dentro?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar bug de cobertura?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso jogar granada para fora da area?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso levar colete extra no BR?",
    answer: "Sim.",
  },
  {
    tag: "Dominacao",
    question: "Posso levar drogas no BR?",
    answer: "Sim.",
  },
  {
    tag: "Dominacao",
    question: "Posso levar muni extra no BR?",
    answer: "Sim.",
  },
  {
    tag: "Dominacao",
    question: "Posso levar itens de craft no BR?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso iniciar dominacao sem setagem?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso dominar area com boost ativo?",
    answer: "Nao se for do mesmo segmento.",
  },
  {
    tag: "Dominacao",
    question: "Quanto tempo a vencedora fica bloqueada?",
    answer: "6 horas ou ate outra faccao vencer.",
  },
  {
    tag: "Dominacao",
    question: "Se minha faccao perdeu, posso voltar?",
    answer: "Sim, se nao estiver em cooldown.",
  },
  {
    tag: "Dominacao",
    question: "Posso chamar parceiro civil?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar roupa de familia na geral?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso usar veiculo para empurrar na geral?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso atacar de dentro para fora na area verde?",
    answer: "Nao.",
  },
  {
    tag: "Dominacao",
    question: "Posso entrar no BR sem convite?",
    answer: "Nao. Somente com convite da organizacao.",
  },
  {
    tag: "Dominacao",
    question: "Qual tempo devo esperar para ir para uma proxima dominação?",
    answer: "06 horas",
  },
  {
    tag: "Dominacao",
    question: "O cooldown das dominações são de quantas horas",
    answer: "06 horas",
  },


];


























const chatWindow = document.getElementById("chatWindow");
const questionGrid = document.getElementById("questionGrid");
const resetChat = document.getElementById("resetChat");
const filterInput = document.getElementById("filterInput");
const preview = document.getElementById("preview");
const AGENT_AVATAR =
  "https://i.ibb.co/JRT9FDXS/Chat-GPT-Image-21-de-dez-de-2025-10-59-43.png";

const getTimeStamp = () => {
  const now = new Date();
  return now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const addMessage = (text, type, options = {}) => {
  const bubble = document.createElement("div");
  bubble.className = `message ${type}`;

  if (type === "bot") {
    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.alt = "Atendente do Ilegal";
    avatar.src = AGENT_AVATAR;
    bubble.appendChild(avatar);
  }

  const content = document.createElement("div");
  content.className = "bubble";

  if (options.typing) {
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    content.appendChild(typing);
  } else {
    content.textContent = text;
  }

  const meta = document.createElement("span");
  meta.className = "meta";
  meta.textContent = options.typing ? "digitando..." : getTimeStamp();
  content.appendChild(meta);

  bubble.appendChild(content);
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  return bubble;
};

const seedIntro = () => {
  const boot = addMessage("Iniciando atendimento...", "bot");
  const typingBubble = addMessage("", "bot", { typing: true });
  setTimeout(() => {
    typingBubble.remove();
    addMessage(
      "Ola! Sou a IA do Ilegal. Escolha uma pergunta rapida abaixo para iniciar o seu atendimento.",
      "bot"
    );
  }, 1100);
  setTimeout(() => {
    boot.remove();
  }, 1300);
};

const handleQuestion = (item) => {
  addMessage(item.question, "user");
  const typingBubble = addMessage("", "bot", { typing: true });
  const delay = 900 + Math.floor(Math.random() * 800);
  setTimeout(() => {
    typingBubble.remove();
    addMessage(item.answer, "bot");
  }, delay);
};

const normalizeText = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const STOPWORDS = new Set([
  "a",
  "o",
  "os",
  "as",
  "um",
  "uma",
  "de",
  "do",
  "da",
  "dos",
  "das",
  "para",
  "pra",
  "por",
  "com",
  "sem",
  "no",
  "na",
  "nos",
  "nas",
  "em",
  "e",
  "ou",
  "que",
  "quando",
  "como",
  "onde",
  "qual",
  "quais",
  "posso",
  "pode",
  "posso",
  "vou",
  "ir",
  "agora",
  "ja",
]);

const tokenize = (text) =>
  normalizeText(text)
    .split(" ")
    .filter((token) => token.length > 2 && !STOPWORDS.has(token));

const editDistance = (a, b) => {
  if (a === b) return 0;
  if (!a || !b) return Math.max(a.length, b.length);
  const dp = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
};

const fuzzyTokenMatch = (token, pool) => {
  if (token.length < 4) return false;
  for (let i = 0; i < pool.length; i += 1) {
    const candidate = pool[i];
    if (candidate.startsWith(token) || token.startsWith(candidate)) {
      return true;
    }
    if (token.length <= 6 && candidate.length <= 6) {
      if (editDistance(token, candidate) <= 1) return true;
    }
  }
  return false;
};

const scoreMatch = (query, item) => {
  const q = normalizeText(query);
  if (!q) return 0;
  const question = normalizeText(item.question);
  const answer = normalizeText(item.answer);
  const tag = normalizeText(item.tag);
  const queryTokens = tokenize(q);
  const questionTokens = tokenize(question);
  const answerTokens = tokenize(answer);
  const tagTokens = tokenize(tag);
  let score = 0;

  if (answer.includes(q)) score += 12;
  if (question.includes(q)) score += 6;
  if (tag.includes(q)) score += 2;

  queryTokens.forEach((term) => {
    if (answerTokens.includes(term)) score += 6;
    if (questionTokens.includes(term)) score += 3;
    if (tagTokens.includes(term)) score += 1;
  });

  const fuzzyHits = queryTokens.filter((term) =>
    fuzzyTokenMatch(term, answerTokens)
  ).length;
  score += fuzzyHits * 4;

  return score;
};

const buildQuestions = (filter = "") => {
  questionGrid.innerHTML = "";
  const normalizedFilter = normalizeText(filter);
  let list = QUESTIONS;

  if (normalizedFilter) {
    list = QUESTIONS.map((item) => ({
      item,
      score: scoreMatch(normalizedFilter, item),
    }))
      .filter((entry) => entry.score > 2)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((entry) => entry.item);
  }

  list.forEach((item) => {
    const button = document.createElement("button");
    button.className = "question-card";
    button.type = "button";
    button.innerHTML = `<span>${item.tag}</span>${item.question}`;
    button.addEventListener("click", () => handleQuestion(item));
    questionGrid.appendChild(button);
  });

  if (!list.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Sem resultados.";
    questionGrid.appendChild(empty);
  }
};

resetChat.addEventListener("click", () => {
  chatWindow.innerHTML = "";
  seedIntro();
});

filterInput.addEventListener("input", (event) => {
  buildQuestions(event.target.value);
});

buildQuestions();
seedIntro();

if (preview) {
  const hidePreview = () => preview.classList.add("hidden");
  preview.addEventListener("click", hidePreview);
  window.addEventListener("load", () => {
    setTimeout(hidePreview, 900);
  });
}

const gridCanvas = document.getElementById("bgGrid");

if (gridCanvas) {
  const ctx = gridCanvas.getContext("2d");
  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
  };
  const gridSize = 32;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let baseMatrix = new DOMMatrix();
  let inverseMatrix = new DOMMatrix();
  const sparks = [];
  const maxSparks = 14;
  const spawnChance = 0.12;
  const glows = Array.from({ length: 6 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    speed: 0.00015 + index * 0.00005,
  }));

  const toGrid = (x, y) => new DOMPoint(x, y).matrixTransform(inverseMatrix);

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = window.devicePixelRatio || 1;
    gridCanvas.width = Math.floor(width * dpr);
    gridCanvas.height = Math.floor(height * dpr);
    gridCanvas.style.width = `${width}px`;
    gridCanvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const tx = width * 0.06;
    const ty = height * 0.1;
    baseMatrix = new DOMMatrix([1, 0.25, -0.6, 1, tx, ty]);
    inverseMatrix = baseMatrix.inverse();
  };

  const spawnSpark = () => {
    if (sparks.length >= maxSparks) return;
    const x = Math.floor(Math.random() * 120) - 60;
    const y = Math.floor(Math.random() * 120) - 60;
    sparks.push({
      x,
      y,
      alpha: 0,
      life: 0,
      speed: 0.008 + Math.random() * 0.01,
    });
  };

  const draw = (time) => {
    ctx.clearRect(0, 0, width, height);

    const corners = [
      toGrid(0, 0),
      toGrid(width, 0),
      toGrid(0, height),
      toGrid(width, height),
    ];
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    corners.forEach((pt) => {
      minX = Math.min(minX, pt.x);
      maxX = Math.max(maxX, pt.x);
      minY = Math.min(minY, pt.y);
      maxY = Math.max(maxY, pt.y);
    });

    const minCellX = Math.floor(minX / gridSize) - 2;
    const maxCellX = Math.ceil(maxX / gridSize) + 2;
    const minCellY = Math.floor(minY / gridSize) - 2;
    const maxCellY = Math.ceil(maxY / gridSize) + 2;
    const rangeX = Math.max(1, maxCellX - minCellX);
    const rangeY = Math.max(1, maxCellY - minCellY);

    const timeFactor = time * 0.00008;

    ctx.save();
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(8, 12, 16, 1)");
    gradient.addColorStop(0.5, "rgba(11, 18, 24, 1)");
    gradient.addColorStop(1, "rgba(10, 16, 22, 1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    const vignette = ctx.createRadialGradient(
      width * 0.5,
      height * 0.5,
      width * 0.2,
      width * 0.5,
      height * 0.5,
      width * 0.6
    );
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,0.45)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);

    glows.forEach((glow, index) => {
      const drift = timeFactor * (1 + index * 0.15);
      const gx = ((glow.x + drift) % 1) * width;
      const gy = ((glow.y + drift * 0.7) % 1) * height;
      const radius = width * (0.08 + index * 0.01);
      const glowGradient = ctx.createRadialGradient(gx, gy, 0, gx, gy, radius);
      glowGradient.addColorStop(0, "rgba(52, 245, 197, 0.08)");
      glowGradient.addColorStop(1, "rgba(52, 245, 197, 0)");
      ctx.fillStyle = glowGradient;
      ctx.fillRect(gx - radius, gy - radius, radius * 2, radius * 2);
    });

    ctx.setTransform(
      baseMatrix.a,
      baseMatrix.b,
      baseMatrix.c,
      baseMatrix.d,
      baseMatrix.e,
      baseMatrix.f
    );

    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 1;
    for (let x = minCellX; x <= maxCellX; x += 1) {
      const gx = x * gridSize;
      ctx.beginPath();
      ctx.moveTo(gx, minCellY * gridSize);
      ctx.lineTo(gx, maxCellY * gridSize);
      ctx.stroke();
    }

    for (let y = minCellY; y <= maxCellY; y += 1) {
      const gy = y * gridSize;
      ctx.beginPath();
      ctx.moveTo(minCellX * gridSize, gy);
      ctx.lineTo(maxCellX * gridSize, gy);
      ctx.stroke();
    }

    const sweepSpan = Math.max(1, (maxCellY - minCellY) * gridSize);
    const sweepPos =
      minCellY * gridSize + ((time * 0.04) % (sweepSpan + gridSize));
    ctx.fillStyle = "rgba(52, 245, 197, 0.08)";
    ctx.fillRect(
      minCellX * gridSize,
      sweepPos,
      (maxCellX - minCellX) * gridSize,
      3
    );

    const focus = toGrid(pointer.x, pointer.y);
    const focusX = Math.floor(focus.x / gridSize);
    const focusY = Math.floor(focus.y / gridSize);
    ctx.fillStyle = "rgba(52, 245, 197, 0.85)";
    ctx.fillRect(
      focusX * gridSize + 1,
      focusY * gridSize + 1,
      gridSize - 2,
      gridSize - 2
    );
    ctx.strokeStyle = `rgba(52, 245, 197, ${
      0.4 + 0.3 * Math.sin(time * 0.006)
    })`;
    ctx.lineWidth = 2;
    ctx.strokeRect(
      focusX * gridSize + 1,
      focusY * gridSize + 1,
      gridSize - 2,
      gridSize - 2
    );

    if (Math.random() < spawnChance) {
      spawnSpark();
    }

    for (let i = sparks.length - 1; i >= 0; i -= 1) {
      const spark = sparks[i];
      spark.life += spark.speed;
      spark.alpha = Math.sin(Math.min(spark.life, 1) * Math.PI);
      const sx = focusX + spark.x;
      const sy = focusY + spark.y;
      if (spark.life >= 1) {
        sparks.splice(i, 1);
        continue;
      }
      ctx.fillStyle = `rgba(52, 245, 197, ${0.45 * spark.alpha})`;
      ctx.fillRect(
        sx * gridSize + 1,
        sy * gridSize + 1,
        gridSize - 2,
        gridSize - 2
      );
    }

    ctx.restore();
    window.requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  resize();
  window.requestAnimationFrame(draw);
}

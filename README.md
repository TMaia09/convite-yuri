Senha: yuri2026

O que cada arquivo do projeto faz
index.html

O que é: É o arquivo principal da estrutura da página web.

O que faz: Contém a marcação estrutural do site (a "esqueleto" visual), organiza as tags de texto, o formulário de RSVP, a contagem regressiva e aplica barreiras de segurança (como a tag noindex para o Google não listar o site).

manifest.json

O que é: O manifesto do Progressive Web App (PWA).

O que faz: Diz ao navegador do celular como se comportar caso o convidado queira "instalar" o convite na tela inicial como se fosse um aplicativo nativo.

js/app.js

O que é: O script orquestrador principal.

O que faz: É o cérebro que controla o fluxo da página. Ele gerencia a tela de boas-vindas, faz a verificação da senha de acesso (yuri2026) e chama os outros módulos quando a senha é aceita.

js/countdown.js

O que é: O módulo da contagem regressiva.

O que faz: Calcula em tempo real a diferença exata entre o horário atual e o dia 28 de novembro de 2026 às 15:30, atualizando os segundos, minutos, horas e dias na tela segundo a segundo.

js/rsvp.js

O que é: O módulo de confirmação de presença.

O que faz: Captura o nome, a quantidade de acompanhantes e o recado digitados pelo convidado, formata o texto com quebras de linha e negritos e dispara a URL da API do WhatsApp (wa.me) para enviar tudo direto para o seu chat.

Posso deletar a pasta do meu computador?
Não recomendo deletar agora!

É muito importante manter essa pasta guardada no seu computador por dois motivos:

Seu backup principal: O GitHub está hospedando uma cópia para o site funcionar na internet, mas o seu código oficial de edição continua na sua máquina. Se precisar mudar a data, o endereço do buffet, o seu número de WhatsApp ou a senha no futuro, você precisará editar esses arquivos no seu computador e enviá-los novamente.

Segurança: Caso aconteça algum problema no repositório do GitHub, você tem todo o projeto intacto salvo no seu PC.

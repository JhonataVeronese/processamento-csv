# Teste Prático para Desenvolvedor Full Stack

Criado aplicação completa front-end com react Js e typescript e uma API back-end em Node JS com typescript para realizar leitura de arquivo CSV.

*Sobre o front-end*
- Front-end apenas para exibição dos dados processados na API, é possivel evoluir a aplicação para fazer upload de arquivo csv e devolver os dados 100% formatados da API

*Sobre o back-end*
- Foco maior foi estruturar uma API robusta para processamento de arquivos CSV
- Utilizando Clean architecture, sendo possivel adicionar também o TDD para validação das camadas além de testes de integração
- Criado uma collection no postman para testes diretamente na API
- Parametros de entrada atualmente é o nome do arquivo, mas é possivel evoluir para recuperar de um bucket S3, receber o arquivo pela rota ou como está feito recebendo o nome de um arquivo ( A ideia era umar rota para upload do arquivo e posteriormente seu processamento ).
- API pode ser usada em uma lambda com step function para realizar o processamento após upload do arquivo

A ideia é ser de facil ajuste para mais de uma maneira de implementação, sem deixar de utilizar padrões de projeto e arquitetura. Porém criando um MVP para validação do requisito sem que demande muito tempo de desenvolvimento. 



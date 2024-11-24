
Feature: Login

Funcionalidade para realizar variados logins no sistema PHPTravels

Scenario Outline: <cenario>

   Given eu acesso a pagina home da aplicacao
   When eu inserir meu e-mail "<email>" e minha senha "<senha>"
   And clicar no botao entrar
   Then tenho meu acesso "<mensagem>"

       Examples:
           |     cenario     |       email       |  senha |        mensagem        |
           |Login com sucesso|user@phptravels.com|demouser|com sucesso na aplicação|

Feature: Cadastro de Usuarios

Cadastro de usuarios na plataforma

Scenario Outline: "<caso_teste>"

   Given que estejamos na page de cadastro
   And inserimos nosso Nome "<name>" e Sobrenome "<surname>"
   And informarmos nossos dados de contacto "<address>", e-mail "<email>" e o nosso telefone "<phone>"
   And informamos o nosso genero como "<gender>" e nossos hobbies "<hobbies>"
   And nossa Skill "<skill>" e nosso pais "<country>"
   When eu selecionar o meu nascimento sendo ano "<year>", mes "<month>" e dia "<day>"
   And inserir minhas senhas "<password>" e "<confPassword>"
   And clico no botao Cadastrar
   Then tenho meu cadastro realizado com sucesso

       Examples:
           |     caso_teste     |   name   |surname| address|        email        |  phone  |gender|hobbies|   skill  | country |year|month|day|password|confPassword|
           |Cadastro com Sucesso|Washington|Almeida|Rua Xpto|wwalmeida88@gmail.com|123456789| Male | Movies|Javascript|Australia|1988|March| 25| 123456 |   123456   |
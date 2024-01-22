Feature: Compras através do aplicativo SwagLabs 
  Eu como usuário
  Gostaria de acessar o aplicativo SwagLabs
  E efetuar a compra dos seus produtos com sucesso

  Background: Realizar o login na plataforma SwagLabs
    Given que o usuario esteja logado

  Scenario: Efetuar a compra do produto 'Mochila' com sucesso
    When usuario adicionar a mochila ao carrinho de compras
    And efetuar a compra do produto
    Then pagamento do produto sera efetuada com sucesso
/* eslint-disable no-undef */
// variable global
const { loginScreen, homeScreen, productScreen, cartScreen } = inject()
const name = require('../../helpers/utils')
const code = require('../../helpers/utils')
const credencial = require('../../resources/data/credencial')

require('dotenv').config()

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

Given('que o usuario esteja logado', () => {
  loginScreen.loginApp(credencial.user, credencial.password)
  homeScreen.checkLoginSuccess()
})

When('usuario adicionar a mochila ao carrinho de compras', () => {
  homeScreen.selectToggle()
  productScreen.addBackpackToCart()
  productScreen.backMenu()
})

When('efetuar a compra do produto', () => {
  homeScreen.checkCart()
  cartScreen.checkoutProduct()
  cartScreen.dataBuyer(firstName, lastName, postalCode)
})

Then('pagamento do produto sera efetuada com sucesso', () => {
  cartScreen.completePayment()
})

/* eslint-disable no-undef */
Feature('Buy Produts')

// variable global
const { loginScreen, homeScreen, productScreen, cartScreen } = inject()
const name = require('../../helpers/utils')
const code = require('../../helpers/utils')
const credencial = require('../../resources/data/credencial')

require('dotenv').config()

const firstName = name.getFirstName()
const lastName = name.getLastName()
const postalCode = code.getCode()

Before(() => {
  loginScreen.loginApp(credencial.user, credencial.password)
  homeScreen.checkLoginSuccess()
  homeScreen.selectToggle()
})

After(() => {
  productScreen.backMenu()
  homeScreen.checkCart()
  cartScreen.checkoutProduct()
  cartScreen.dataBuyer(firstName, lastName, postalCode)
  cartScreen.completePayment()
})

Scenario('Buy Sauce Labs Backpack with success', () => {
  productScreen.addBackpackToCart()
}).tag('wip')

Scenario('Buy Sauce Labs Bike Light with success', () => {
  productScreen.addBikeLightToCart()
})

Scenario('Buy Sauce Labs Bolt T-Shirt with success', () => {
  productScreen.addBoltTShirtToCart()
})

Scenario('Buy Sauce Labs Fleece Jacket with success', () => {
  productScreen.addFleeceJacketToCart()
})

Scenario('Buy Sauce Labs Onesie with success', () => {
  productScreen.addOnesieToCart()
})

Scenario('Buy T-Shirt RED with success', () => {
  productScreen.addTShirtREDToCart()
})

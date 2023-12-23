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

Given('that I am logged into the SwagLabs app', () => {
  loginScreen.loginApp(credencial.user, credencial.password)
  homeScreen.checkLoginSuccess()
})

When('I add the Backpack to the cart', () => {
  homeScreen.selectToggle()
  productScreen.addBackpackToCart()
  productScreen.backMenu()
})

When('I add the Bike Light to the cart', () => {
  homeScreen.selectToggle()
  productScreen.addBikeLightToCart()
  productScreen.backMenu()
})

When('I add the Bolt T-Shirt to the cart', () => {
  homeScreen.selectToggle()
  productScreen.addBoltTShirtToCart()
  productScreen.backMenu()
})

When('I add the Fleece Jacket to the cart', () => {
  homeScreen.selectToggle()
  productScreen.addFleeceJacketToCart()
  productScreen.backMenu()
})

When('I add the Onesie to the cart', () => {
  homeScreen.selectToggle()
  productScreen.addOnesieToCart()
  productScreen.backMenu()
})

When('I add the T-Shirt RED to the cart', () => {
  homeScreen.selectToggle()
  productScreen.addTShirtREDToCart()
  productScreen.backMenu()
})

When('fill in all payment details', () => {
  homeScreen.checkCart()
  cartScreen.checkoutProduct()
  cartScreen.dataBuyer(firstName, lastName, postalCode)
})

Then('the payment is completed successfully.', () => {
  cartScreen.completePayment()
})

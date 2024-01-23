/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
Feature('Buy Produts')

const fs = require('fs')
const path = require('path') // Importe o módulo 'path'
const yaml = require('js-yaml')

const { loginScreen, homeScreen, productScreen, cartScreen } = inject()
const name = require('../../helpers/utils')
const code = require('../../helpers/utils')

// Carrega as credenciais do arquivo YAML
const credencialPath = path.resolve(__dirname, '../../resources/data/credencial.yml')
const credencial = yaml.load(fs.readFileSync(credencialPath, 'utf8'))

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
})

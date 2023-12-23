/* eslint-disable no-sequences */
/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  buttons: {
    removeProduct: '~test-REMOVE',
    continueShopping: '~test-CONTINUE SHOPPING',
    checkout: '~test-CHECKOUT',
    cancel: 'test-CANCEL',
    finish: '~test-FINISH'
  },

  fields: {
    firstName: '~test-First Name',
    lastName: '~test-Last Name',
    postalCode: '~test-Zip/Postal Code'
  },

  message: {
    paymentSuccess: '~test-CHECKOUT: COMPLETE!'
  },

  checkoutProduct() {
    I.tap(this.buttons.checkout)
    I.wait(3)
  },

  dataBuyer(txtFirstName, txtLastName, txtPostalCode) {
    I.fillField(this.fields.firstName, txtFirstName)
    I.fillField(this.fields.lastName, txtLastName)
    I.fillField(this.fields.postalCode, txtPostalCode)

    // press continue payment
    I.touchPerform([
      {
        action: 'press',
        options: { x: 540, y: 1500 }
      },
      { action: 'release' }
    ])
  },

  completePayment() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1400 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 300 }
      },
      { action: 'release' }
    ])
    I.waitForElement(this.buttons.finish, 5)
    I.tap(this.buttons.finish)

    I.wait(2)

    I.waitForElement(this.message.paymentSuccess)
    I.seeElement(this.message.paymentSuccess)
  }
}

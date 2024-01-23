/* eslint-disable no-sequences */
/* eslint-disable no-undef */
const { I } = inject()
const isAndroidStudio = process.env.MODE === 'local'

module.exports = {
  locs: {
    btnContinue: 'CONTINUE',
    btnCheckout: '~test-CHECKOUT',
    btnFinish: '~test-FINISH',
    txtFirstName: '~test-First Name',
    txtLastName: '~test-Last Name',
    txtPostalCode: '~test-Zip/Postal Code',
    lblPaymentSuccess: '~test-CHECKOUT: COMPLETE!'
  },

  checkoutProduct() {
    I.tap(this.locs.btnCheckout)
    I.wait(3)
  },

  dataBuyer(firstName, lastName, postalCode) {
    I.fillField(this.locs.txtFirstName, firstName)
    I.fillField(this.locs.txtLastName, lastName)
    I.fillField(this.locs.txtPostalCode, postalCode)

    // press continue payment
    if (isAndroidStudio) {
      I.touchPerform([
        {
          action: 'press',
          options: { x: 540, y: 1500 }
        },
        { action: 'release' }
      ])
    } else {
      I.click(this.locs.btnContinue)
    }
  },

  completePayment() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 500, y: 1500, force: true }
      },
      {
        action: 'moveTo',
        options: { x: 500, y: 200, force: true }
      },
      { action: 'release' }
    ])
    I.waitForElement(this.locs.btnFinish, 5)
    I.tap(this.locs.btnFinish)

    I.wait(2)

    I.waitForElement(this.locs.lblPaymentSuccess)
    I.seeElement(this.locs.lblPaymentSuccess)
  }
}

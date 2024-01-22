/* eslint-disable no-sequences */
/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  homeMenu: {
    addCart: '~test-ADD TO CART',
    pageBack: '~test-BACK TO PRODUCTS'
  },

  addBackpackToCart() {
    I.selectProductCustom('600', '440')

    I.wait(2)

    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1200 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 450 }
      },
      { action: 'release' }
    ]),
      I.wait(2)

    I.tap(this.homeMenu.addCart)

    I.wait(2)
  },

  backMenu() {
    I.tap('~test-BACK TO PRODUCTS')
    I.wait(2)
  }
}

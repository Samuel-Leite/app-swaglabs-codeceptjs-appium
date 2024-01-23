/* eslint-disable no-sequences */
/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  locs: {
    btnAddCart: '~test-ADD TO CART',
    btnPageBack: '~test-BACK TO PRODUCTS'
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

    I.tap(this.locs.btnAddCart)

    I.wait(2)
  },

  backMenu() {
    I.tap(this.locs.btnPageBack)
    I.wait(2)
  }
}

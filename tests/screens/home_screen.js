/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  locs: {
    btnMenu: '~test-Menu',
    btnToggle: '~test-Toggle',
    btnAddCart: '~test-ADD TO CART',
    btnCart: '~test-Cart'
  },

  checkLoginSuccess() {
    I.waitForElement(this.locs.btnMenu, 5)
    I.seeElement(this.locs.btnMenu)
  },

  selectToggle() {
    I.tap(this.locs.btnToggle)
    I.wait(3)
  },

  checkCart() {
    I.tap(this.locs.btnCart)
    I.wait(2)
  }
}

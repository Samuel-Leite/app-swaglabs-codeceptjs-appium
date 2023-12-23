/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  homeMenu: {
    menu: '~test-Menu',
    toggle: '~test-Toggle',
    addCart: '~test-ADD TO CART',
    cart: '~test-Cart'
  },

  checkLoginSuccess() {
    I.waitForElement(this.homeMenu.menu, 5)
    I.seeElement(this.homeMenu.menu)
  },

  selectToggle() {
    I.tap(this.homeMenu.toggle)
    I.wait(3)
  },

  checkCart() {
    I.tap(this.homeMenu.cart)
    I.wait(2)
  }
}

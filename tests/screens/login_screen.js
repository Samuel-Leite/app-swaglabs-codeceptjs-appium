/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  locs: {
    txtUserName: '~test-Username',
    txtPassword: '~test-Password',
    btnEnter: '~test-LOGIN'
  },

  loginApp(user, pass) {
    I.waitForElement(this.locs.txtUserName, 5)
    I.fillField(this.locs.txtUserName, user)
    I.fillField(this.locs.txtPassword, pass)
    I.tap(this.locs.btnEnter)
  }
}

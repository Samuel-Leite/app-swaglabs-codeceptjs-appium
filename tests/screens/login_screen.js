/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  fields: {
    userName: '~test-Username',
    password: '~test-Password'
  },

  button: {
    enter: '~test-LOGIN'
  },

  loginApp(userName, password) {
    I.waitForElement(this.fields.userName, 5)
    I.fillField(this.fields.userName, userName)
    I.fillField(this.fields.password, password)
    I.tap(this.button.enter)
  },

  fieldUserName() {
    try {
      ;('~test-Username')
    } catch {
      ;('//input[@id = "user-name"]')
    }
  }
}

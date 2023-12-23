/* eslint-disable no-undef */
// in this file you can append custom step methods to 'I' object

const isAndroidStudio = process.env.MODE === 'local'

module.exports = function () {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    selectProductCustom(x, y) {
      if (isAndroidStudio) {
        this.touchPerform([{ action: 'press', options: { x, y } }, { action: 'release' }])
      } else {
        this.click('Sauce Labs Backpack')
      }
    }
  })
}

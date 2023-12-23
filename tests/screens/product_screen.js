/* eslint-disable no-sequences */
/* eslint-disable no-undef */
const { I } = inject()
const isAndroidStudio = process.env.MODE === 'local'

module.exports = {
  homeMenu: {
    addCart: '~test-ADD TO CART',
    pageBack: '~test-BACK TO PRODUCTS'
  },

  addBackpackToCart() {
    if (isAndroidStudio) {
      I.touchPerform([
        {
          action: 'press',
          options: { x: 600, y: 440 }
        },
        { action: 'release' }
      ])
    } else {
      I.click('Sauce Labs Backpack')
    }

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

  addBikeLightToCart() {
    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 880 }
      },
      { action: 'release' }
    ]),
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

  addBoltTShirtToCart() {
    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 1260 }
      },
      { action: 'release' }
    ]),
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

  addFleeceJacketToCart() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1600 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 450 }
      },
      { action: 'release' }
    ]),
      I.wait(2)

    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 500 }
      },
      { action: 'release' }
    ]),
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

  addOnesieToCart() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1600 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 450 }
      },
      { action: 'release' }
    ]),
      I.wait(2)

    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 900 }
      },
      { action: 'release' }
    ]),
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

  addTShirtREDToCart() {
    I.touchPerform([
      {
        action: 'longPress',
        options: { x: 600, y: 1600 }
      },
      {
        action: 'moveTo',
        options: { x: 600, y: 450 }
      },
      { action: 'release' }
    ]),
      I.wait(2)

    I.touchPerform([
      {
        action: 'press',
        options: { x: 600, y: 1290 }
      },
      { action: 'release' }
    ]),
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

/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
require('dotenv').config({ path: '.env' })

const capsPath = path.join(__dirname, `./resources/conf/${process.env.MODE}/caps.yml`)

// Verificar se o arquivo existe
if (!fs.existsSync(capsPath)) {
  console.error('Arquivo caps.yml não encontrado.')
  process.exit(1) // Encerrar o processo se o arquivo não for encontrado
}

// Carregar o conteúdo do arquivo YAML usando yaml.load
const capabilities = yaml.load(fs.readFileSync(capsPath, 'utf8'))

/* eslint-disable no-dupe-keys */
exports.config = {
  output: './output',
  helpers: {
    Appium:
      process.env.MODE === 'local'
        ? // Local
          {
            app: path.join(__dirname, '/resources/app', process.env.APP),
            platform: capabilities[process.env.CAPS].platformName,
            capabilities: capabilities[process.env.CAPS]
          }
        : // Remote
          {
            host: 'hub-cloud.browserstack.com',
            port: 4444,
            user: process.env.BS_USER,
            key: process.env.BS_KEY,
            platform: capabilities[process.env.CAPS].platformName,
            desiredCapabilities: capabilities[process.env.CAPS]
          },
    Hooks: {
      require: './helpers/hooks.js'
    }
  },
  include: {
    I: './helpers/commands.js',
    loginScreen: './tests/screens/login_screen.js',
    homeScreen: './tests/screens/home_screen.js',
    productScreen: './tests/screens/product_screen.js',
    cartScreen: './tests/screens/cart_screen.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './tests/features/product.feature',
    steps: ['./tests/step_definitions/product_steps.js']
  },
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: './output',
      require: '@codeceptjs/allure-legacy'
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      ignoreSteps: ['grab*'],
      output: './output',
      deleteSuccessful: false,
      disableScreenshotOnFail: false
    },
    // Habilitar o ultimo print em caso de falha
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'mobile-automation'
}

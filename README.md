# Automação mobile E2E com framework CodeceptJS

![logo-PhotoRoom png-PhotoRoom](https://github.com/Samuel-Leite/app-swaglabs-codeceptjs-appium/assets/74505293/c107fa6b-e60c-45ae-8d91-c232a8cbe849)

## 🚀 Introdução:

Através do framework CodeceptJS + Appium, o projeto utilizou o APK SwagLabs para realizar automação de testes E2E contemplando as configurações: gherkin, variáveis randômicas, husky, allure report e outros visando as boas práticas do mercado.

## 💻 Tecnologias:

- VS Code
- Node.js
- Java 11
- CodeceptJS + Appium
- Appium Desktop
- Emuladores: Android Studio e BrowserStack (BS)
- Appium Inspector
- JavaScript
- Allure Report

## 🤖 Instalação e configuração:

- Clonar o projeto na máquina local
- Executar no terminal do projeto automação o comando:

```
'npm install'
```

- Informar os dados no arquivo dotEnv com o modelo do dispositivo que será executado e as credenciais do BrowserStack, segue o modelo:

```
# Informar se será executado local (Android Studio) ou remote (BrowserStack)
MODE='remote'

# Informar o dispositivo que será executado com o respectivo capabilitys ./resoluces/conf/*/caps.json
CAPS='galaxyS21'

# Nome do aplicativo a ser executado no Android Studio que está salvo no './resources/app/*.apk'
APP='nome_do_aplicativo'

# Usuário e senha de conexão com BrowserStack
BS_USER='nome_usuario'
BS_KEY='numero_chave'
```

- Inicializar o Appium Desktop

- Inicializar o emulador do Android Studio ou do BrowserStack

- Executar todos os testes:

```
npm run regression
```

- Executar o teste através de tag:

```
npm run tag @nome_tag
```

- Executar o teste através do gherkin:

```
npm run gherkin
```

Observação: é necessário que esteja configurado o ANDROID_HOME nas variáveis de ambiente da sua máquina.

## 📂 Estrututa do projeto:

| Diretório       | Finalidade                                                                             |
| --------------- | -------------------------------------------------------------------------------------- |
| ./husky         | Configuração da automação dos commits                                                  |
| ./helpers       | Configuração com Custom Commands, Hooks e Utils com funções utilizadas na automação    |
| ./resource/app  | Arquivo APK da aplicação que está integrado ao Android Studio                          |
| ./resource/conf | Capabilitys dos dispositivos do Android Studio e BrowserStack                          |
| ./resource/data | Credenciais para logar no aplicativo móvel SauceLabs                                   |
| ./tests         | Testes e2e, features, screens e Step Definitions concernentes aos testes automatizados |

## 💡 Observações:

- Além de informar as credenciais no arquivo .env para realizar a integração com o BrowserStack, é necessário realizar o upload do APK no BrowserStack e copiar o código gerado e inserir no arquivo './resoluces/conf/\*/caps.json' no campo 'app'.

## 📷 Vídeo de execução no BrowserStack:

Segue vídeo evidenciando a execução do cenário de teste através do BrowserStack:

- Dispositivo: Xiaomi Redmi Note 11,
- Sistema Operacional: Android 11.0.

https://github.com/Samuel-Leite/app-swaglabs-codeceptjs-appium/assets/74505293/a75810fd-eff4-4d2a-a87e-ef5811af91fc

## 🔗 Links para Apoio:

- [CodeceptJs Appium](https://codecept.io/helpers/Appium.html)
- [Capabilitys do BrowserStack](https://www.browserstack.com/app-automate/capabilities?tag=w3c)
- [Ações de toque do Appium no CodeceptJS](https://sandeepqaops.medium.com/appium-touch-actions-in-codeceptjs-double-tap-press-long-press-drag-and-drop-etc-390b0edca65d)
- [Download do Appium Inspector](https://github.com/appium/appium-inspector/releases)
- [Download do Appium Desktop](https://github.com/appium/appium-desktop/releases)
- [Download do APK Sauce Labs utilizado no projeto](https://github.com/saucelabs/sample-app-mobile/releases/tag/2.7.1)

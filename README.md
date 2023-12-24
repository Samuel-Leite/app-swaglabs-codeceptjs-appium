# Automação de teste E2E com aplicação mobile com framework CodeceptJS

![Alt text](image.png)

## 🚀 Introdução:

Através do framework CodeceptJS e Appium, o projeto utilizou a aplicação do Swag Labs incluindo configurações: gherkin, variáveis randômicas, e outras configurações contemplando as boas práticas do mercado.

Faça o donwload do template no repositório de código para utilizar no seu projeto em especifico, feito isso, fique a vontande para usufruir dos recursos disponíveis e também customizar de acordo com sua necessidade.

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

# Informar o aparelho que será executado e seus capabilitys ./resoluces/conf/*/caps.json
CAPS='galaxyS21'

# Nome do aplicativo a ser executado no Android Studio que está salvo no './resources/app/*.apk'
APP='nome_do_aplicativo'

# Usuário e senha de conexão com BrowserStack
BS_USER='nome_usuario'
BS_KEY='numero_chave'
```

- Inicializar o Appium Desktop

- Inicializar o emulador do Android Studio ou do BrowserStack

- Executar todos os testes através do comando

```
npm run regression
```

- Executar o teste através de tag com o comando

```
npm run tag @nome_tag
```

## 📂 Estrututa do projeto

| Diretório       | Finalidade                                                                             |
| --------------- | -------------------------------------------------------------------------------------- |
| ./husky         | Configuração da automação dos commits                                                  |
| ./helpers       | Configuração com Custom Commands, Hooks e Utils com funções utilizadas na automação    |
| ./resource/app  | Arquivo APK da aplicação que está integrado ao Android Studio                          |
| ./resource/conf | Capabilitys dos dispositivos do Android Studio e BrowserStack                          |
| ./resource/data | Credenciais para logar no aplicativo móvel SauceLabs                                   |
| ./tests         | Testes e2e, features, screens e Step Definitions concernentes aos testes automatizados |
| ./.env          | Arquivo com as variáveis                                                               |

## 💡 Observações:

- Além de informar as credenciais no arquivo .env para realizar a integração com o BrowserStack, é necessário realizar o upload do APK no BrowserStack e copiar o código gerado e inserir no arquivo './resoluces/conf/\*/caps.json' no campo 'app'.

## 📷 Vídeo de execução no BrowserStack

Segue vídeo evidenciando a execução do cenário de teste através do BrowserStack:

- Dispositivo: Xiaomi Redmi Note 11,
- Sistema Operacional: Android 11.0

https://github.com/Samuel-Leite/app-swaglabs-codeceptjs-appium/assets/74505293/a75810fd-eff4-4d2a-a87e-ef5811af91fc

## 🔗 Links para Apoio

- [CodeceptJs Appium](https://codecept.io/helpers/Appium.html)
- [Capabilitys do BrowserStack](https://www.browserstack.com/app-automate/capabilities?tag=w3c)
- [Ações de toque do Appium no CodeceptJS](https://sandeepqaops.medium.com/appium-touch-actions-in-codeceptjs-double-tap-press-long-press-drag-and-drop-etc-390b0edca65d)
- [Download do Appium Inspector](https://github.com/appium/appium-inspector/releases)
- [Download do Appium Desktop](https://github.com/appium/appium-desktop/releases)
- [Download do APK Sauce Labs utilizado no projeto](https://github.com/saucelabs/sample-app-mobile/releases/tag/2.7.1)

# DashboardReactNative

### Baixar o Chocolatey
Abrir o cmd.exe e digitar:
<p>@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

### Procedimentos de Instalação do Node:
choco install -y nodejs.install python2 jdk8

### Criar ou Clonar e navegar ao Diretório do app
<p>no cmd digite mkdir myapp
<p>ou
<p>no terminal do git digite git clone <Endereço do Repositório>
<p>e após digite cd <nome do diretório gerado>

### Procedimentos de Instalação do YARN:
npm install -g yarn

### Procedimentos de Instalação do Expo:
<p>yarn add expo-cli
<p>yarn install

### Criação do App
yarn run expo init myapp

### Inicialização
yarn run expo start ./myapp

### Procedimentos Sob Demanda:
<p>Adicionar portas 19000 e 19001 (expo) a excessão no firewall
<p>yarn test ou npm test
<p>yarn build ou npm build
<p>yarn build ou npm build

### Procedimentos Opcionais:

#### Instalação do react e react native:
<p>yarn add react-native-cli
<p>yarn add create-react-app
<p>yarn install

### Criação do App (Opcional)
yarn create react-app my-app

#### Iniciar react native
yarn run react-native init ./myapp

#### Iniciar react web
yarn start ou npm start

### Observações:
É possivel realizar as instalações com o padrão neste projeto é com o yarn.

### Links adicionais:
<p>https://expo.io/
<p>https://nodejs.org/en/
<p>https://www.python.org/
<p>https://oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html
<p>https://pt-br.reactjs.org/

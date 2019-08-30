# DashboardReactNative

### Execução
<p>clonar o repositório com git clone <Link do Repositório>
<p>Abrir o cmd e navegar até a pasta clonada. ex: cd myapp
<p>Digitar no cmd:
<p> O Arquivo Inicialize.bat realiza os procedimentos abaixo
<p> - yarn install
<p> - yarn run expo start
<p>Baixar o aplicativo do expo: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR
<p>Escanear o código QR gerado.

#### Observações:
<p> Caso a opção Lan não funcione. utilize Tunel.
<p> Para a opção Lan funcionar deve-se estar na mesma rede que o dispositivo que iniciou o expo.
<p> é possivel modificar o ip de execução da lan através de set REACT_NATIVE_PACKAGER_HOSTNAME=192.168.0.101.

## Instalação de Dependencias

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

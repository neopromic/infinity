
# ♾️ Projeto Infinity, sua plataforma de treinos!

Que tal uma plataforma para ter seus treinos, deita, e metas nos treinos organizados, em um só lugar, e de forma fácil? O Projeto Infinity proporciona isso!
<div>
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/neopromic/infinity?style=flat-square&logo=github">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/neopromic/infinity?style=flat-square">
<img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Finfinity-project.vercel.app%2F&up_message=Infinity%20is%20in%20production!%20Yeeeep-buddy!%20%F0%9F%92%AA%F0%9F%8F%BB%E2%99%BE%EF%B8%8F&style=flat-square&link=https%3A%2F%2Finfinity-project.vercel.app">
  
</div>


## Demonstração

<a href="https://ibb.co/xqhxK6p"><img src="https://i.ibb.co/xqhxK6p/Screenshot-20240623-160119.png" alt="Home Page" border="0"></a> <a href="https://ibb.co/z8ZvPY5"><img src="https://i.ibb.co/z8ZvPY5/Screenshot-20240623-160101.png" alt="AuthPage" border="0"></a> <a href="https://ibb.co/5YJCLzp"><img src="https://i.ibb.co/5YJCLzp/Screenshot-20240623-160056.png" alt="LandingPage" border="0"></a>

## 💪🏻 Partiu contribuir?!
Que tal meter a mão na massa e nos ajudar a trazer melhorias pro projeto infinity?

### 1️⃣ Primeiros passos

Clone o repositório para sua máquina local para iniciar as contribuições no projeto.

```bash
git clone https://github.com/neopromic/infinity.git
```
### 2️⃣ Instalando as dependências
Antes de tudo, instale as dependências do projeto para começar a desenvolver.

```bash
  pnpm install
```

> Lembre-se de utilizar ```pnpm``` neste projeto.

### ⚠️ DOTENV? SECURITY? Como configurar?!
Nosso projeto utiliza .env (dotenv) como segurança de keys, já que é um projeto open-source, então antes de começar a desenvolver, você precisa de passos adicionais.

- [x] Acesse [o console do Firebase por uma conta sua do google](http://console.firebase.google.com/u/0/)
  - [x] Crie um novo projeto
  - [x] Obtenha as credenciais do projeto para web.

> No arquivo ``services/database/firebase.ts`` voce encontra o arquivo de configuração da SDK do firebase, troque os valores para os seus obtidos no console do firebase.

> Lembre-se de não mudar os valores por segurança, apenas copie os nomes e coloque os valores dentro do .env.local
```js
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEANSUREMENT_ID,
};
```
> Sempre crie variáveis de ambente com o nome iniciando com ``NEXT_PUBLLIC_``, seguido pelo nome da variável. Exemplo: ```NEXT_PUBLIC_API_URL```.

### ✅ Você está livre agora!
Após a configuração inicial do dotenv, você está pronto pra desenvolver novas features para o infinity-project! 

Crie coisas incríveis e mande PR (Pull Request), nosso time irá analisar e ver as melhores soluções pra fazer merge!


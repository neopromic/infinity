
# ♾️ Projeto Infinity, sua plataforma de treinos!

Que tal uma plataforma para ter seus treinos, deita, e metas nos treinos organizados, em um só lugar, e de forma fácil? O Projeto Infinity proporciona isso!
<div>
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/neopromic/infinity?style=flat-square&logo=github">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/neopromic/infinity?style=flat-square">
<img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Finfinity-project.vercel.app%2F&up_message=Infinity%20is%20in%20production!%20Yeeeep-buddy!%20%F0%9F%92%AA%F0%9F%8F%BB%E2%99%BE%EF%B8%8F&style=flat-square&link=https%3A%2F%2Finfinity-project.vercel.app">
  
</div>


## Demonstração

![Screenshot of project demonstration initial ui (v1)](https://i.ibb.co/fqJxWJd/Screenshot-20240514-164516.png)

## 💪🏻 Partiu contribuir?!
Que tal meter a mão na massa e nos ajudar a trazer melhorias pro infinity project?! 

### Primeiros passos

Clone o repositorio para sua maquina local para iniciar as contribuiçoes no projeto.

```bash
git clone https://github.com/neopromic/infinity.git
```
### Instalando as dependencias
Antes de tudo, instale as dependencias do projeto para começar a desenvolver.

```bash
  pnpm install
```

> Lembtre-se de utilizar ```pnpmm``` neste projeto.

### DOTENV? SECURITY? Como configurar?!
Nosso projeto utiliza .env (dotenv) como segurança de keys, ja que e um projeto open-source, entao antes de começar a desenvolver, voce precisa de passos adicionais.

- [x] Acesse [o console do Firebase por uma conta sua do google](http://console.firebase.google.com/u/0/)
  - [x] Crie um novo projeto
  - [x] Obtenha as credenciais do projeto para web.

> No arquivo ``services/database/firebase.ts`` voce encontra o arquivo de configuraçao da SDK do firebase, troque os valores para os seus obtidos no console do firebase.
> Lembre-se de nao mudar os valores por segurança, apenas copie os nomes e coloque os valores dentro do .env.local
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
> Sempre crie vaariaveis de ambente com o nome iniciando com ``NEXT_PUBLLIC_``, seguido pelo nome da variavel. Exemplo: ```NEXT_PUBLIC_API_URL```.

### Voce esta livre agora!
Apos a configuraçao inicial do dotenv, voce esta pronto pra desenvolver novas features para a infinity-project! Crie coisas incriveis e mande PR (Pull Request), nosso time ira analisar e ver as melhores soluçoes e fazer merge!


# Blog-Nodejs-Reactjs
Blog com Nodejs no Back-End e Reactjs no Front-End

#Commandos
npm install --save express body-parser
create-react-app client
yarn add axios

#Conectando Back-End ao Front-End
index.js
app.use(express.static(__dirname + '/client'));

//chamada no Front client/app.js
axios
      .get('/anuncios')
      .then(resultado => {
        console.log(resultado)
      })

//Adicionar em client/package.json para que o Front conecte ao Back
"proxy": "http://localhost:3001/api",
const express = require('express')
const handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');
const router = require('./src/config/router')
const app = express()

app.engine("handlebars", handlebars({
    helpers: require(`${__dirname}/src/app/views/helpers`)
}))

app.set('view engine', 'handlebars'); 
app.set('views', `${__dirname}/src/app/views`); // Arquivos contando códigos HTML

// Adicionando Sass
app.use(sass({
    src:`${__dirname}/src/public/scss`,
    dest: `${__dirname}/src/public/css`,
    outputStyle: 'compressed',
    prefix: '/css',
}));

// Adicionar arquivos scss
app.use('/css', express.static(`${__dirname}/src/public/css`));
// Adicionar arquivos estáticos
app.use('/img', [ express.static(`${__dirname}/src/public/img`)]);
// Adicionar arquivos webfonts
app.use('/webfonts', express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`));

// Adicionando arquivos estáticos js
app.use('/js', [
    express.static(`${__dirname}/node_modules/jquery/dist/`),
    express.static(`${__dirname}/node_modules/popper.js/dist/umd/`),
    express.static(`${__dirname}/node_modules/bootstrap/dist/js/`),
    express.static(`${__dirname}/src/public/js`)
]);

app.use(express.urlencoded({extended: false}))
app.use(router);

app.listen(3000, () => {
    console.log("Server running on port 3000! 🚀")
})


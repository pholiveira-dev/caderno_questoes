require('dotenv').config();

const express = require('express');
const db = require('./src/knex'); // Garanta que este caminho está correto
const path = require('path');
const app = express();
const routes = require('./routes'); // O caminho para o seu arquivo de rotas

// Middlewares para processar dados de requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurando views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Conectando o arquivo de rotas
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
})
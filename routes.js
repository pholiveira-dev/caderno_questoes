const express = require('express');
const router = express.Router();

// Importa os dois controladores
const alunoController = require('./src/controllers/alunoController');
const reposicaoController = require('./src/controllers/reposicaoController');

// Rotas para o Cadastro de Alunos
// Rota GET para a página inicial, que lista os alunos
router.get('/', alunoController.listarAlunos);

// Rota POST para o cadastro de alunos
router.post('/alunos', alunoController.cadastrarAluno);

// Rotas para as Solicitações de Reposição
// Rota GET para a página de solicitações de reposição
router.get('/reposicoes', reposicaoController.listarReposicoes);

// Rota POST para o cadastro de uma nova solicitação
router.post('/reposicoes', reposicaoController.cadastrarReposicao);

module.exports = router;
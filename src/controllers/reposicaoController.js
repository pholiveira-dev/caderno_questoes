// Importa o modelo que contém a lógica de acesso ao banco de dados
const reposicaoModel = require('../models/reposicao_model');

// Função para listar todas as solicitações de reposição
async function listarReposicoes(req, res) {
  try {
    const reposicoes = await reposicaoModel.findAllReposicoes();
    res.render('reposicao', { reposicoes: reposicoes });
  } catch (error) {
    console.error('Erro ao listar solicitações de reposição:', error);
    res.status(500).send('Erro ao carregar a página de solicitações de reposição.');
  }
}

// Função para lidar com o cadastro de uma nova solicitação
async function cadastrarReposicao(req, res) {
  const { rgm, motivo, professor, data_reposicao } = req.body;
  
  // Validação básica
  if (!rgm || !motivo || !professor || !data_reposicao) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  try {
    // Cria um novo registro no banco de dados
    const novaReposicaoData = { rgm, motivo, professor, data_reposicao };
    await reposicaoModel.createReposicao(novaReposicaoData);
    
    // Redireciona para a página de solicitações após o sucesso
    return res.redirect('/reposicoes');

  } catch (error) {
    console.error('Erro ao cadastrar solicitação de reposição:', error);
    return res.status(500).send('Erro interno no servidor.');
  }
}

module.exports = {
  listarReposicoes,
  cadastrarReposicao,
};
const knex = require('../db/connection');

// Função para criar uma nova solicitação de reposição
async function createReposicao(reposicaoData) {
  try {
    const [id_reposicao] = await knex('agendamento_reposicao').insert(reposicaoData).returning('id_reposicao');
    return id_reposicao;
  } catch (error) {
    console.error('Erro ao criar solicitação de reposição:', error);
    throw error;
  }
}

// Função para buscar todas as solicitações de reposição
async function findAllReposicoes() {
  try {
    return knex('agendamento_reposicao').select('*');
  } catch (error) {
    console.error('Erro ao buscar solicitações de reposição:', error);
    throw error;
  }
}

module.exports = {
  createReposicao,
  findAllReposicoes,
};
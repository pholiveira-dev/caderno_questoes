const knex = require('../../src/db/connection');

async function findAlunoByRGM(rgm) {
    try {
        return knex('aluno').where({ rgm }).first();
    } catch (error) {
        console.error('Erro ao buscar aluno pelo RGM: ', error);
        throw error;
    }
}

async function createAluno(alunoData) {
    try {
        const [id_aluno] = await knex('aluno').insert(alunoData).returning('id_aluno');
        return id_aluno;
    } catch (error) {
        console.error('Erro ao inserir aluno:', error);
        throw error; 
    }
}

// ...código existente...

// Nova função: busca todos os alunos no banco de dados
async function findAllAlunos() {
  try {
    return knex('aluno').select('*');
  } catch (error) {
    console.error('Erro ao buscar todos os alunos:', error);
    throw error;
  }
}

module.exports = {
  findAlunoByRGM,
  createAluno,
  findAllAlunos // Exporta a nova função
};
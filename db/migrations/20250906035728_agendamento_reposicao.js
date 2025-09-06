const { table } = require("../../src/knex");

exports.up = function(knex) {
  return knex.schema.createTable('agendamento_reposicao', (table) => {
    table.increments('id_agendamento').primary();

    table.integer('aluno_id').unsigned().notNullable();
    table.foreign('aluno_id').references('id_aluno').inTable('aluno');

    table.enu('professor', ['Ariane', 'Bárbara', 'Breno', 'Jade', 'Karillucy', 'Mariana', 'Natália']).notNullable();
    table.enu('motivo', ['Atestado médico', 'Escala de trabalho', 'Matricula tardia', 'Autorização do professor']).notNullable();

    table.string('link_documento');
    table.string('codigo_autorizacao').unique();

    table.timestamp('data_solicitacao').defaultTo(knex.fn.now());
  }
)};

exports.down = function(knex) {
  return knex.schema.dropTable('agendamento_reposicao');
};

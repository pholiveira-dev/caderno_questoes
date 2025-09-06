exports.up = function(knex) {
  return knex.schema.createTable('aluno', (table) => {
    table.increments('id_aluno').primary();
    table.string('nome', 100).notNullable();
    table.string('email', 50).notNullable();
    table.string('rgm').notNullable();
    table.enu('semestre', ['7º', '8º']).notNullable();
    table.enu('turno', ['Matutino', 'Vespertino', 'Noturno']);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('aluno');
};
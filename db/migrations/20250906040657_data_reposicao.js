exports.up = function(knex) {
  return knex.schema.createTable('datas_reposicao', (table) => {
    table.increments('id_data_reposicao').primary();

    table.integer('agendamento_id').unsigned().notNullable();
    table.foreign('agendamento_id').references('id_agendamento').inTable('agendamento_reposicao');
    
    table.date('data_reposicao').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('datas_reposicao');
};


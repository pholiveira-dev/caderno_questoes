exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('aluno').del()
  await knex('aluno').insert([
    {id_aluno: 1, nome: 'Pedro Henrique de Oliveira Alves', email: 'pedrohen1001@hotmail.com', rgm: 15377377, semestre: '7º', turno: 'Matutino', professor: 'Ariane', motivo: 'Atestado médico'},

    {id_aluno: 2, nome: 'Gabriela de Frannça Costa', email: 'gabrielaunb21@gmail.com', rgm: 2971537, semestre: '8º', turno: 'Noturno', professor: 'Mariana', motivo: 'Matricula tardia'},

    {id_aluno: 3, nome: 'Artur de França Oliveira', email: 'artur123@hotmail.com', rgm: 69875420, semestre: '7º', turno: 'Vespertino', professor: 'Karillucy', motivo: 'Escala de trabalho'}
  ]);
};

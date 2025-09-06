// Importa o modelo que contém a lógica de acesso ao banco de dados
const alunoModel = require('../models/aluno_model');

// Função para lidar com o cadastro de um novo aluno
async function cadastrarAluno(req, res) {
  const { nome, email, rgm, semestre, turno } = req.body;
  
  // Lógica de validação básica: verifica se todos os campos estão presentes
  if (!nome || !email || !rgm || !semestre || !turno) {
    // Retorna um erro e uma mensagem para o usuário
    // Em um cenário real, você pode redirecionar para uma página de erro
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  try {
    // Primeiro, verifica se o aluno com o RGM já existe no banco de dados
    const alunoExistente = await alunoModel.findAlunoByRGM(rgm);
    if (alunoExistente) {
      // Retorna um erro e uma mensagem para o usuário
      return res.status(409).send('Aluno com este RGM já está cadastrado.');
    }

    // Se o aluno não existir, cria um novo registro
    const novoAlunoData = { nome, email, rgm, semestre, turno };
    await alunoModel.createAluno(novoAlunoData);
    
    // Redireciona para a página inicial após o sucesso
    // A rota GET / vai renderizar a view com a lista de alunos atualizada
    return res.redirect('/');

  } catch (error) {
    console.error('Erro ao cadastrar aluno:', error);
    return res.status(500).send('Erro interno no servidor.');
  }
}

// Função para listar todos os alunos (usada pela rota GET /)
async function listarAlunos(req, res) {
  try {
    const alunos = await alunoModel.findAllAlunos();
    res.render('aluno', { alunos: alunos });
  } catch (error) {
    console.error('Erro ao listar alunos:', error);
    res.status(500).send('Erro ao carregar a página de alunos.');
  }
}


// Exporta as duas funções para serem usadas nas rotas
module.exports = {
  cadastrarAluno,
  listarAlunos
};
const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);

// Listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tarefas = await knex('tarefas').select('*');
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar nova tarefa
router.post('/', async (req, res) => {
  try {
    const { titulo, descricao } = req.body;
    await knex('tarefas').insert({ titulo, descricao });
    res.status(201).json({ message: 'Tarefa criada com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
  try {
    const { titulo, descricao } = req.body;
    await knex('tarefas')
      .where('id', req.params.id)
      .update({ titulo, descricao });
    res.json({ message: 'Tarefa atualizada com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deletar tarefa
router.delete('/:id', async (req, res) => {
  try {
    await knex('tarefas')
      .where('id', req.params.id)
      .del();
    res.json({ message: 'Tarefa excluída com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

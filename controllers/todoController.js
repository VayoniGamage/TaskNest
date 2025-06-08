// controllers/todoController.js
const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const { task } = req.body;
  const newTodo = new Todo({ task });
  const savedTodo = await newTodo.save();
  res.status(201).json(savedTodo);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

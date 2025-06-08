// tests/todo.test.js
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Todo = require('../models/todoModel');

beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/tasknest_test_db');
});

afterEach(async () => {
  await Todo.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('TaskNest API', () => {
  it('should create a todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ task: 'Test Task' });
    
    expect(res.statusCode).toBe(201);
    expect(res.body.task).toBe('Test Task');
  });

  it('should get todos', async () => {
    await Todo.create({ task: 'Another Task' });

    const res = await request(app).get('/todos');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should delete a todo', async () => {
    const todo = await Todo.create({ task: 'Delete Me' });

    const res = await request(app).delete(`/todos/${todo._id}`);

    expect(res.statusCode).toBe(204);
  });
});

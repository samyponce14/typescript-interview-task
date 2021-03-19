const { app, server } = require('../server');
const supertest = require('supertest');
const request = supertest(app);

let token = '';

beforeAll(async () => {
  const response = await request.get('/api/login?username=admin&password=admin');
  token = response.body.token;
});

afterEach(async () => {
  await server.close();
});

describe('GET /api/login', () => {
  test('should return 401 if request param is empty', async done => {
    const response = await request.get('/api/login');
    expect(response.status).toBe(401);
    done();
  });
  test('should return 200 & token if request query contains valid username and password', async done => {
    const response = await request.get('/api/login?username=admin&password=admin');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('token');
    done();
  });
});

describe('GET /api/user', () => {
  test('should return 401 if absent token', async done => {
    const response = await request.get('/api/user');
    expect(response.status).toBe(401);
    done();
  });
  test('should return 200 if request contains valid token', async done => {
    const response = await request.get('/api/user').set('Authorization', 'Bearer ' + token);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('username');
    done();
  });
});

describe('GET /api/logout', () => {
  test('should return 401 if absent token', async done => {
    const response = await request.get('/api/logout');
    expect(response.status).toBe(401);
    done();
  });
  test('should return 200 if request contains valid token', async done => {
    const response = await request.get('/api/logout').set('Authorization', 'Bearer ' + token);
    expect(response.status).toBe(200);
    done();
  });
});
import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

let server = app.listen(4000);

let token = '';

beforeAll(async () => {
  const response = await request.get('/api/login?username=admin&password=admin');
  token = response.body.token;
});

afterEach(async () => {
  await server.close();
});

describe('GET /api/items', () => {
  test('should return 401 if token is invalid or is missing', async done => {
    const response = await request.get('/api/items');
    expect(response.status).toBe(401);
    done();
  });
  test('should return 200 & item list', async done => {
    const response = await request.get('/api/items').set('Authorization', 'Bearer ' + token);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('items');
    done();
  });
});

describe('POST /api/items', () => {
  test('should return 401 if absent token', async done => {
    const response = await request.post('/api/items');
    expect(response.status).toBe(401);
    done();
  });
  test('should return 400 if a parameter is missing', async done => {
    let item = {
      id: '001',
      title: 'Google',
      description: 'My personal account'
    };
    const response = await request.post('/api/items').send(item).set('Authorization', 'Bearer ' + token);
    expect(response.status).toBe(400);
    done();
  });
  test('should return 200 if request contains valid token', async done => {
    let item = {
      id: '001',
      title: 'Google',
      description: 'My personal account',
      password: 'Password789'
    };
    const response = await request.post('/api/items').send(item).set('Authorization', 'Bearer ' + token);
    expect(response.status).toBe(200);
    done();
  });
});

const request = require('supertest');
const app = require('../app');

describe('Express App', () => {
  describe('GET /', () => {
    it('should return a greeting message', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toContain('CI/CD Pipeline');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('OK');
    });
  });

  describe('POST /api/greet', () => {
    it('should greet with provided name', async () => {
      const res = await request(app).post('/api/greet').send({ name: 'John' });
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('Hello, John!');
    });

    it('should return 400 if name is missing', async () => {
      const res = await request(app).post('/api/greet').send({});
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe('Name is required');
    });
  });

  describe('GET /api/users', () => {
    it('should return list of users', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toContain('Users endpoint');
      expect(Array.isArray(res.body.users)).toBe(true);
      expect(res.body.users).toHaveLength(2);
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = { name: 'Alice Johnson', email: 'alice@example.com' };
      const res = await request(app).post('/api/users').send(userData);
      expect(res.statusCode).toBe(201);
      expect(res.body.message).toContain('created successfully');
      expect(res.body.user).toHaveProperty('id');
      expect(res.body.user.name).toBe(userData.name);
      expect(res.body.user.email).toBe(userData.email);
    });

    it('should return 400 if name is missing', async () => {
      const res = await request(app).post('/api/users').send({ email: 'test@example.com' });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toContain('required');
    });

    it('should return 400 if email is missing', async () => {
      const res = await request(app).post('/api/users').send({ name: 'Test User' });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toContain('required');
    });
  });
});

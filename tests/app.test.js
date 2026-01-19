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
});

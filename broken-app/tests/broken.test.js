const request = require('supertest');
const app = require('../app');

describe('GET /broken', () => {
  it('should respond with JSON containing success and data array', async () => {
    const res = await request(app).get('/broken');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});

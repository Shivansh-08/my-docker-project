const request = require('supertest');

const BASE_URL = 'http://localhost';

test('GET / should return Hello from Docker', async () => {
    const res = await request(BASE_URL).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello from Docker');
});

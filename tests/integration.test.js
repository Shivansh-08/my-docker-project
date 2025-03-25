const request = require('supertest');

const BASE_URL = 'http://localhost:80';

beforeAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for Nginx
});

test('GET / should return Hello from Docker', async () => {
    const res = await request(BASE_URL).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello from Docker');
});

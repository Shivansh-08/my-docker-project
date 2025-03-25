const request = require('supertest');
const app = require('../server'); // Adjust the path

test('GET / should return Hello from Docker', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello from Docker');
});

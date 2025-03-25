const fs = require('fs');
const path = require('path');

test('index.html should exist', () => {
    const filePath = path.join(__dirname, '../html/index.html');
    expect(fs.existsSync(filePath)).toBe(true);
});

test('index.html should contain "Hello from Docker"', () => {
    const filePath = path.join(__dirname, '../html/index.html');
    const content = fs.readFileSync(filePath, 'utf8');
    expect(content).toContain('Hello from Docker');
});

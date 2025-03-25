const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('Integration Test: Nginx Web Server', () => {
  it('should return status 200 and the greeting from the HTML file', (done) => {
    chai.request('http://localhost:8080')
      .get('/')
      .end((err, res) => {
        if (err) {
          console.error("Request failed:", err.message);
          return done(err);  // Stop test execution if request fails
        }
        
        expect(res).to.have.status(200);
        expect(res.text).to.include("Hello, World!");  // Adjust based on expected HTML content
        done();
      });
  });
});

//Supertest Template
// const request = require('supertest');
// const app = require('../app'); // Import your Express app or server file

// describe('GET /api/users', () => {
//   it('should return a list of users', (done) => {
//     request(app)
//       .get('/api/users')
//       .expect(200)
//       .end((err, res) => {
//         if (err) return done(err);
//         // Assertion for the response
//         // ...
//         done();
//       });
//   });
// });

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})
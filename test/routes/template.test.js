const add = (a, b) =>{
  return a + b
}

// const err = () => {
//   throw new Error("I am a new error")
// }

// const promiseTest = (a, b) =>{
//   return new Promise((resolve,reject) => {
//     if(a - b > 0){
//       resolve('Positive integer')
//     }else{
//       reject('Negative integer')
//     }
//   })
// } 


//Supertest Template
const request = require('supertest');
// const app = require('../app'); // Import your Express app or server file

describe('GET /api/users', () => {
  it('should return a list of users', (done) => {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // Assertion for the response
        // ...
        done();
      });
  });
});


describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(add(1, 2)).toBe(3)
  })

  // it('should test that theres an error',() => {
  //   expect(()=>err()).toThrow("I am a new error")
  // })

  // it('should test promise function (old method)', () =>{
  //   promiseTest(1, 2)
  //   .then(data =>{
  //       expect(data).toBe('Postive integer')    
  //   })
  //   .catch(e => {
  //       expect(e).toBe('Negative integer')
  //   })
  // }) 

  // it('should test promise function (easy method)', () =>{
  //   expect(PromiseTest(2, 1)).resolves.toBe('Positive integer')
  // })

  // it('should test promise function (easy method)', () =>{
  //   expect(PromiseTest(1, 2)).rejects.toBe('Negative integer')
  // })
})
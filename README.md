# GitInspiredAssignment
This contains the setup of the Supertest and Cypress framework as well the documentation of how to set them up.

# Setting Up Automated Testing Frameworks (Supertest with Jest and Cypress)

## How to install Supertest with Jest 
* Create a folder with any name (the name I used was ASSR-Supertest)
* Open Vscode and open the folder which you created in Vscode 
* Open the terminal and run the command "npm install --save-dev jest supertest"
* In your package.json file, add the code<br> 
"jest": {<br>
    "testEnvironment": "node",<br>
    "coveragePathIgnorePatterns": <br>[
      "/node_modules/"
    ]<br>
 },<br>
This is the basic configuration to set up Jest for testing your APIs.

* In the package.json file, add the test script.
    Syntax: "scripts":{<br>
                        "test": "jest"<br>
                  },

* After, create a test folder to contain your tests (in my situation, create another folder called routes in the test folder prior to the tutorial I watched, it's optional to do so)
* Create a test file with the extension ".test.js" inside the test folder (the test file I created was named "template.test.js")
* In your ".test.js" file, copy and paste this syntax (the base syntax for supertest [source: Chatgpt Plus])<br> 
//Supertest Template<br>
const request = require('supertest');<br>
const app = require('../app'); // Import your Express app or server file<br>
<br>
describe('GET /api/users', () => {<br>
  it('should return a list of users', (done) => {<br>
    request(app)<br>
      .get('/api/users')<br>
      .expect(200)<br>
      .end((err, res) => {<br>
        if (err) return done(err);<br>
        // Assertion for the response<br>
        // ...<br>
        done();<br>
      });<br>
  });<br>
});<br>

* To run this, type in the terminal "npm test" or type in the bash "yarn jest." (Notice that this code doesn't have an actual test so it will fail)

Source:<br> https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6#:~:text=Jest%20%2D%20Jest%20is%20a%20JavaScript,js%20HTTP%20servers.

## What Supertest and Jest is
Jest - Jest is a JavaScript testing framework developed by Facebook. It works out of the box with minimal configuration and has an in-built test runner, assertion library, and mocking support.<br>

Supertest - Supertest is a library for testing Node.js HTTP servers. It enables testers to send HTTP requests such as GET, POST, PATCH, PUT, DELETE to HTTP servers and get results.<br>

### Some sources that explain Supertest and Jest in details are;
https://www.npmjs.com/package/supertest<br>
https://www.tabnine.com/code/javascript/modules/supertest<br>
https://medium.com/@iamfaisalkhatri/api-testing-using-supertest-ea37522fa329<br>
https://www.youtube.com/watch?v=KQjeU0mBQU8<br>
https://github.com/ladjs/supertest<br>
<br><br><br><br>






## How to install Cypress
* Make sure that node is installed on your pc; if not, you can install node from the website: https://nodejs.org
* Open the command prompt and run “mkdir project_name” to create a new project (in my case, I run the prompt “mkdir ASSR-Cypress”)
* To initialize the Node.js project, run the "npm init -y" command in the terminal. (This is after you have opened the folder in Vscode) 
* This command will install the project's 'package.json'
* Now to install Cypress, run the command "npm install cypress --save-dev" in terminal
* Open Cypress by running in terminal the command "npx cypress open." This opens the Cypress test GUI
* Now to create a test file, navigate to the e2e folder and create a file with the extension "spec.cy.js" (in my case, I created template.spec.cy.js)
* In your ".spec.cy.js" file, copy and paste this syntax (the base syntax for supertest [source: Chatgpt Plus])<br>
 describe('Test Suite Name', () => {<br>
  beforeEach(() => {<br>
    // Code to run before each test case (optional)<br>
  });<br>
<br>
  afterEach(() => {<br>
    // Code to run after each test case (optional)<br>
  });<br>
<br>
  before(() => {<br>
    // Code to run before all test cases (optional)<br>
  });<br>
<br>
  after(() => {<br>
    // Code to run after all test cases (optional)<br>
  });<br>
<br>
  it('Test Case Name', () => {<br>
    // Test case code with Cypress commands and assertions<br>
  });<br>
<br>
  // Add more test cases as needed<br>
<br>
});<br>
<br>
Source:<br>
https://chat.openai.com/c/e11becbf-3f56-4629-8fa3-8e0d9f666e3e

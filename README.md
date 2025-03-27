![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Code Solutions For Jest Testing

This repository contains the final code solutions for the first part of the JavaScript Testing with Jest syllabus.


[Jest website](https://jestjs.io/)

### Installtion Jest

1. ```npm init```
2. Press Enter until you reach ```Test command:```
3. When you get to ```Test command:``` enter ```jest```,   ```Test command: jest```
4. Continue to Enter through the options
5. Enter ```npm install --save-dev jest@26.6.3``` into the terminal.

You can run your tests by running ```npm test```


### Red Green Refactor of Test Driven Development

Red - Write a test that will fail, because it doesn't have the accompanying code to test it with.

Green - Write enough code so that the original test passes.

Refactor - Rewrite the code so it requires less code whilst the original test still passes.

Parent Directory - ```/workspace/Jest_Testing_Part1```


### Mocking

- How do we test for changes in the HTML?

- Mocking means providing a simulated environment to run your tests in.

- Rather than loading an entire webpage, you can get JEST to simulate parts of a webpage that you can run tests against.

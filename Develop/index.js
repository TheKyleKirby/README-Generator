// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the installation process:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is this project used for?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose the appropriate license for this project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who are the contributors of this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = `
# ${answers.title}

![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is covered under the ${answers.license} license.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

For additional questions, reach out to me at ${answers.email}.
You can check out my GitHub profile at [${answers.github}](https://github.com/${answers.github}).
`;

    writeToFile('README.md', readmeContent);
  });
}

init();
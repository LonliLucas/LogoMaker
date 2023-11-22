const { error } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "Enter 3 characters for your logo: ",
    name: "characters",
  },
  {
    type: "input",
    message: "Enter the color you want the characters to be: ",
    name: "textColor",
  },
  {
    type: "list",
    message: "Which shape should the backround be?",
    name: "shape",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    message: "Enter the color you want the shape to be: ",
    name: "shapeColor",
  },
  {
    type: "input",
    message: "What do you want to name your logo file? ",
    name: "title",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File ${fileName} has been created!`)
  });
}

function createLogo(answers) {
  return (
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n` +
    `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />\n` +
    `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.characters}</text>\n` +
    `</svg>`
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const content = createLogo(answers);
    writeToFile(`./output/${answers.title}.svg`, content);
  }).catch((error) => {
    console.error('Error occured:', error);
  })
};

init();

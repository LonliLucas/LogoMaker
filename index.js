const fs = require('fs');
const inquirer = require('inquirer');

const questions = [{
    type: 'input',
    message: 'Enter 3 characters for your logo: ',
    name: 'characters'
},
{
    type: 'input',
    message: 'Enter the color you want the characters to be: ',
    name: 'textColor'
},
{
    type: 'list',
    message: 'Which shape should the backround be?',
    name: 'shape'
},
{
    type: 'input',
    message: 'Enter the color you want the shape to be: ',
    name: 'shapeColor'
},
{
    type: 'input',
    message: 'What do you want to name your logo file? ',
    name: 'title'
}];

function LogoInfo(characters, textColor, shape, shapeColor, title) {
    this.characters = characters;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.title = title;
    this.createLogo = function() {

    }
}

console.log("eat this idiot");
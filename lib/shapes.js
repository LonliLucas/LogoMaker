const Square = require("./square");
const Circle = require("./circle");
const Triangle = require("./triangle");

function chooseShape(answers) {
    let shape;
    if(answers.shape == 'Circle') {
        shape = new Circle(answers.shapeColor);
    }
    else if(answers.shape == 'Square') {
        shape = new Square(answers.shapeColor);
    }
    else {
        shape = new Triangle(answers.shapeColor);
    }

    return shape.generateSVG();
};

module.exports = chooseShape;
function chooseShape(answers) {
    if(answers.shape == 'Circle') {
        return `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`
    }
    else if(answers.shape == 'Square') {
        return `<rect x="75" y="35" width="150" height="150" fill="${answers.shapeColor}" />`
    }
    else {
        return `<polygon x="75" y="35" points="150,0 300,250 0,250" fill="${answers.shapeColor}" />`
    };
};

module.exports = chooseShape;
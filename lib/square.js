class Square {
    constructor(color) {
        this.color = color;
    }
    
    generateSVG() {
        return `<rect x="75" y="35" width="150" height="150" fill="${this.color}" />`;
    }
}

module.exports = Square;
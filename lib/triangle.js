class Triangle {
    constructor(color) {
        this.color = color;
    }
    
    generateSVG() {
        return `<polygon points="150,0 300,250 0,250" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
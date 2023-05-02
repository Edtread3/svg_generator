// Base class for shapes
class Shape {
  constructor() {
    this.color = "";
    
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
//  TO DO create a method that renders a circle for your svg
render() {
  return `<circle cx="150" cy="100" r="80" fill="${this.color} />`;
}
}

class Triangle extends Shape {
 //  TO DO create a method that renders a triangle for your svg
 render() {
 return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color} />`;
 }
}

class Square extends Shape {
 //  TO DO create a method that renders a square for your svg
 render() {
  return `<rect x="90" y="40" width="120" height="120" fill="${this.color} />`;
 } 
}

module.exports = { Circle, Triangle, Square };

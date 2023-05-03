// Base class for shapes
class Shape {
  constructor() {
    this.color = "";
    this.text = "";
    this.textColor = "";
    
  }
  setColor(color) {
    this.color = color;
    
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

class Circle extends Shape {
//  TO DO create a method that renders a circle for your svg
render() {
  return `<circle cx="150" cy="100" r="80" text="${this.text}" textColor="${this.textColor}" fill="${this.color}" />`;
}
}

class Triangle extends Shape {
 //  TO DO create a method that renders a triangle for your svg
 render() {
 return `<polygon points="150, 18 244, 182 56, 182" text="${this.text}" textColor="${this.textColor}" fill="${this.color}" />`;
 }
}

class Square extends Shape {
 //  TO DO create a method that renders a square for your svg
 render() {
  return `<rect x="90" y="40" width="120" height="120" text="${this.text}" textColor="${this.textColor}" fill="${this.color}" />`;
 } 
}

module.exports = { Circle, Triangle, Square };

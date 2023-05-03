const inquirer = require('inquirer');
const fs = require('fs/promises');
const { Circle, Triangle, Square } = require("./shapes");



class CLI {
  run() {
    // TO DO using inquirier create prompts to help render your svg
    return inquirer
      .prompt([
        {
          type: 'input',
          message: 'For text of logo please enter up to 3 characters',
          name: 'text',
        },
        {
          type: 'input',
          message: 'Please choose color or enter a hexadecimal for your text',
          name: 'text-Color',
        },
        {
          type: 'list',
          message: 'Now select shape of your choice between circle, square, or triangle.',
          name: 'shapes',
          choices: ['triangle','square','circle'],
        },
        {
          type: 'input',
          message: 'Select color of shape.',
          name: 'color',
        },
      ])  
      .then((response) => {
        var svgText;
        switch (response.shapes){
          case 'triangle': 
          const triangle = new Triangle()
          triangle.setColor(response.color)
          triangle.setText(response.text)
          triangle.setTextColor(response.textColor)
          svgText = triangle.render()
          break;
          case 'square':
            const square = new Square()
            square.setColor(response.color)
            square.setText(response.text)
            square.setTextColor(response.textColor)
            svgText = square.render()
            break;
          case 'circle':
            const circle = new Circle()
            circle.setColor(response.color)
            circle.setText(response.text)
            circle.setTextColor(response.textColor)
            svgText = circle.render()
            break;

        }
        fs.writeFile('shape.svg', svgText, (err) =>{
          err ? console.log(err) : console.log("Success!!!...SVG logo created");
         
          })
      })

      
      
        
     
     };  

  
  
  
}

  // TO DO using your inquirer data use fs to write your svg file

 
 

module.exports = CLI;

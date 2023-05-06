const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs/promises');
const { Circle, Triangle, Square } = require("./shapes");



class CLI {
  run() {
    // TO DO using inquirier create prompts to help render your svg
    
    inquirer.registerPrompt('text', MaxLengthInputPrompt)
    inquirer.prompt([
        {
          type: 'maxlength-input',
          message: 'For text of logo please enter up to 3 characters:',
          maxLength: 3,
          name: 'text',
        },
        {
          type: 'input',
          message: 'Please choose color or enter a hexadecimal for your text:',
          name: 'textColor',
        },
        {
          type: 'list',
          message: 'Now select shape of your choice between circle, square, or triangle:',
          name: 'shapes',
          choices: ['triangle','square','circle'],
        },
        {
          type: 'input',
          message: 'Select color of shape:',
          name: 'color',
        },
      ])  
      .then((response) => {
        var svgLogo;
        switch (response.shapes){
          case 'triangle': 
          const triangle = new Triangle()
          triangle.setColor(response.color)
          triangle.setText(response.text)
          triangle.setTextColor(response.textColor)
          var makeShape = triangle.render() 
          var svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${makeShape}
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
          
          </svg>`

          fs.writeFile('shape.svg', svgLogo, (err) =>{
            err ? console.log(err) : console.log("Success!!!...SVG logo created");
           
            })
          break;
          case 'square':
            const square = new Square()
            square.setColor(response.color)
            square.setText(response.text)
            square.setTextColor(response.textColor)
            var makeShape = square.render() 
            var svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${makeShape}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
          
          </svg>`
            
            fs.writeFile('shape.svg', svgLogo, (err) =>{
              err ? console.log(err) : console.log("Success!!!...SVG logo created");
             
              })
            break;
          case 'circle':
            const circle = new Circle()
            circle.setColor(response.color)
            circle.setText(response.text)
            circle.setTextColor(response.textColor)
            var makeShape = circle.render() 
            var svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${makeShape}
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
          
          </svg>`
           
          fs.writeFile('shape.svg', svgLogo, (err) =>{
            err ? console.log(err) : console.log("Success!!!...SVG logo created");
           
            })
          break;

        }
        // fs.writeFile('shape.svg', svgLogo, (err) =>{
        //   err ? console.log(err) : console.log("Success!!!...SVG logo created");
         
        //   })
      })

      
      
        
     
     };  

  
  
  
}

  // TO DO using your inquirer data use fs to write your svg file

 
 

module.exports = CLI;

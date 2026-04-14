const prompt = require('prompt-sync')();
let n1=parseInt(prompt('Enter 1st Number: '));
let n2=parseInt(prompt('Enter 2nd Number: '));
let choice=parseInt(prompt('Enter choice: 1.Add | 2.Subs | 3.Multi | 4.Div'));

switch(choice){
    case 1: console.log('Addition is: '+(n1+n2));
    break;
    case 2: console.log('Subtraction is: '+(n1-n2));
    break;
    case 3: console.log('Multiplication is: '+(n1*n2));
    break;
    case 4: console.log('Division is: '+(n1/n2));
    break;
    default: console.log('Invalid choice.try later.');
    break;
      
}




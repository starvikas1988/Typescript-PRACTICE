// Import stylesheets
import './style.css';

// Write TypeScript code!
function great(name:string):string{
  return `Name: ${name}`; 
}
console.log(great('swati Pandey mother of Pratyush pandey'));

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = "<H2>"+great('swati Pandey mother of Pratyush pandey')+"</H2>";
import "./style.css";


const numberOfCupsCoffee = 2
const fullName = 'Austin Pierce'

console.log(`I drink ${numberOfCupsCoffee} cups of coffee and my name is ${fullName}`)

const aboutMe = {
  fullName: 'Austin Pierce',
  luckyNumber: 47, 
  favoriteMovies: ['Wolf of Wallstreet' , 'Social Network' , 'Hangover' , 'Lone Survivor'],
}
// console.log(aboutMe)
console.log(`My name is ${aboutMe.fullName} and my luck number is ${aboutMe.luckyNumber} and my favorite movies are ${aboutMe.favoriteMovies}`)

const firstOperand = window.prompt('Input a number') || '0'
console.log(firstOperand)

const firstOperandFloat = parseFloat(firstOperand)
console.log(firstOperandFloat)
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

const secondOperand = window.prompt('Input a number') || '0'
console.log(secondOperand)

const secondOperandFloat = parseFloat(secondOperand)
console.log(secondOperandFloat)

const sum = firstOperandFloat + secondOperandFloat
console.log(`When you add the two numbers together you get ${sum} as your answer`)

const difference = secondOperandFloat - firstOperandFloat
console.log(`When you subtract the second number from the first number you get ${difference} as your answer`)



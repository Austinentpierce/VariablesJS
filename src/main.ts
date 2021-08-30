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
console.log(`When you add the two numbers together you get ${sum} as your answer.`)

const difference = secondOperandFloat - firstOperandFloat
console.log(`When you subtract the second number from the first number you get ${difference} as your answer.`)

const product = firstOperandFloat * secondOperandFloat
console.log(`When you multiply the first number by the second number you will get ${product} as your answer.`)

const quotient = firstOperandFloat / secondOperandFloat
console.log(`When you divide the first number by the second number you get ${quotient} as your answer.`)

const remainder = firstOperandFloat % secondOperandFloat
console.log(`The reaminder of the 2 numbers is ${remainder}.`)

console.log(`The sum of the numbers would be ${sum}, The difference of the numbers would be ${difference}, The quotient of the numbers would be ${quotient}, The product of the numbers would be ${product}, The remainder of the numbers would be ${remainder}`)

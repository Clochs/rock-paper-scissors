// Create computer choice function and return choice
// IF 
//     random number <= .333
//     return Rock
// ELSE IF 
//     random number <= .666
//     return Paper
// ELSE
//     return Scissors

let humanScore = 0
let computerScore = 0

function getComputerChoice(choice){
    const randomNum = Math.random()
    if(randomNum <= .333){
        return 'Rock'
    }else if(randomNum <= .666){
        return 'Paper'
    }else{
        return 'Scissors'
    }
}
// Create human choice funtion
// GET
//      prompt user for choice 
function getHumanChoice(choice){
    return prompt('Enter Rock, Paper or Scissors: ')
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice().toLowerCase()
    console.log(`Human chose ${humanChoice}`)
    computerChoice = getComputerChoice().toLowerCase()
    console.log(`Computer chose ${computerChoice}`)
    if((humanChoice === 'rock' && computerChoice === 'scissors')
        || (humanChoice === 'paper' && computerChoice === 'rock') 
        || (humanChoice === 'scissors' && computerChoice === 'paper')){
            console.log("Human wins!")
            humanScore++
        }else if(humanChoice === computerChoice){
            console.log("It's a tie!")
            
        }else{
            console.log('Computer wins!')
            computerScore++
        }
console.log(`Human: ${humanScore} Computer: ${computerScore}`)

}



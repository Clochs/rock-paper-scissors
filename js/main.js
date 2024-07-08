// Create computer choice function and return choice
// IF random number <= .333
//     return Rock
// ELSE IF random number <= .666
//     return Paper
// ELSE
//     return Scissors
// ENDIF

function getComputerChoice() {
    let rPSRandom = Math.random()
    if (rPSRandom <= .333) {
        return "rock"
    } else if (rPSRandom < .666) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Create getHumanChoice function
// GET input from user
//      return input
// END

function getHumanChoice() {
    return prompt("Choose rock, paper or scissors: ")
}

// INIT declare humanScore and computerScore variables and set to 0

let humanScore = 0
let computerScore = 0




// Create function playRound and define 2 parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
// INIT humanChoice 
// SET humanChoice parameter to lowercase
    humanChoice = getHumanChoice().toLowerCase()
// INIT computerChoice
    computerChoice = getComputerChoice()
// IF humanChoice === computerChoice 
//          log "It's a tie"
    if (humanChoice === computerChoice) {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, It's a tie!`)
// ELSE IF humanChoice beats computer choice
//          log "You win!"
// INCREMENT humanChoice +1
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`${humanChoice} beats ${computerChoice}, You win!`)
        humanScore++
// ELSE
//      computerChoice beats humanChoice
//          log "Computer wins!"
// INCREMENT computerChoice +1
// ENDIF
    } else {
        console.log(`${computerChoice} beats ${humanChoice}, You lose!`)
        computerScore++
    }
}

// // START
// // Create computer choice function and return choice
// function getComputerChoice() {
//     // SET rPSRandom to random number .0 - .1
//     let rPSRandom = Math.random()
//     // IF random number <= .333
//     //     return Rock
//     if (rPSRandom <= .333) {
//         return "rock"
//         // ELSE IF random number <= .666
//         //     return Paper
//     } else if (rPSRandom < .666) {
//         return "paper"
//         // ELSE
//         //     return Scissors
//     } else {
//         return "scissors"
//     }
//     // ENDIF
// }

// // Create getHumanChoice function
// function getHumanChoice() {
//     // GET input from user
//     //      return input
//     return prompt("Choose rock, paper or scissors: ")
//     // END
// }

// // Create playGame function
// // function playGame() {

//     // INIT declare humanScore and computerScore variables and set to 0
//     let humanScore = 0
//     let computerScore = 0

//     // Create function playRound and define 2 parameters humanChoice and computerChoice
//     let playRound = function (humanChoice, computerChoice) {
//         // INIT humanChoice 
//         // SET humanChoice parameter to lowercase
//         humanChoice = getHumanChoice().toLowerCase()
//         // INIT computerChoice
//         computerChoice = getComputerChoice()
//         // IF humanChoice === computerChoice 
//         //          log "It's a tie"
//         if (humanChoice === computerChoice) {
//             console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, It's a tie!`)
//             // ELSE IF humanChoice beats computer choice
//             //          log "You win!"
//             // INCREMENT humanChoice +1
//         } else if ((humanChoice === "rock" && computerChoice === "scissors")
//             || (humanChoice === "paper" && computerChoice === "rock")
//             || (humanChoice === "scissors" && computerChoice === "paper")) {
//             console.log(`${humanChoice} beats ${computerChoice}, You win!`)
//             humanScore++
//             // ELSE
//             //      computerChoice beats humanChoice
//             //          log "Computer wins!"
//             // INCREMENT computerChoice +1
//         } else {
//             console.log(`${computerChoice} beats ${humanChoice}, You lose!`)
//             computerScore++
//         }
//         // ENDIF
//         return console.log(`Human: ${humanScore} Computer: ${computerScore}`)
//     }
//     // CALL playRound 5 times
//     // REPEATE UNTIL
//     // 5 times
//     // for (let i = 1; i <= 5; i++) {
//         playRound()
//         // ENDFOR
//         // IF humanScore is the same as computerScore
//     // } 
//     if (humanScore === computerScore) {
//         // LOG It's a tie!
//         console.log(`It's a tie!`)
//         // ESLE IF humanScore is greater than computerScore
//     } else if (humanScore > computerScore) {
//         // LOG Game over!
//         // LOG both scores and human wins!
//         console.log(`Game over!`)
//         console.log(`Human score: ${humanScore}, Computer score: ${computerScore} human wins!`)
//         // ELSE 
//         // LOG Game over!
//         // LOG Computer wins!
//     } else {
//         console.log(`Game over!`)
//         console.log(`Human score: ${humanScore}, Computer score: ${computerScore} computer wins!`)
//     }
//     // END IF
// // }
// // END
// let btnRock = document.querySelector('#rock')
// btnRock.addEventListener('click', () => {
//     console.log('round')
// })


let playRound = function (humanChoice) {


    computerChoice = getComputerChoice()

    if (humanChoice === computerChoice) {
        document.querySelector('#result').textContent = `You chose ${humanChoice}, and the computer chose ${computerChoice}. It's a tie!`

    } else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        document.querySelector('#result').textContent = `You choose ${humanChoice}, and ${humanChoice} beats ${computerChoice}. You win!`
        humanScore++

    } else {
        document.querySelector('#result').textContent = `The computer chose ${computerChoice}, and ${computerChoice} beats ${humanChoice}. You lose!`
        computerScore++
    }
    if (humanScore === 5) {
        document.querySelector('#game').textContent = 'You win the game!'
    } else if (computerScore === 5) {
        document.querySelector('#game').textContent = 'The computer wins the game!'
    }
    return document.querySelector('#score').textContent = `Human: ${humanScore} Computer: ${computerScore}`
}

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

let humanScore = 0
let computerScore = 0



const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})
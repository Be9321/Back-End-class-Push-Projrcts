// define getUserChoice function
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper ' || userInput === 'scissors' || userInput === 'bombs') {
    return userInput;
} else {
    console.log('Error! Invalid choice');
}
};
// define the getComputerChoice function 
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0 :
            return 'rock';
            break;
            case 1 : 
            return 'paper';
            break;
            case 2 : 
            return 'scissors';
            break;
            default :
            return 'bombs';
    }
};
// define determineWinner Function 
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if(computerChoice === 'paper'){
            return 'The computer won!';
        } else {
            return 'you won!';
        }
    }
if (userChoice === 'paper') {
    if(computerChoice=== 'scissors') {
        return 'The computer won!';
    } else {
        return 'you won!';
    }
}
if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
return 'The cpmputer won!'; 
    } else {
        return 'you won!';
    }
}

if (userChoice === 'bombs') {
    return 'you won!';
}
}

// Define playGame function
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
// start the game
playGame();
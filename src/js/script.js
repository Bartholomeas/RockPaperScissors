const intro = document.querySelector('.intro');
const battle = document.querySelector('.battle');

const playBtn = document.querySelector('.play-btn');

const playerHand = document.querySelector('.player-hand');
const playerScore = document.querySelectorAll('.player-score p');

const computerHand = document.querySelector('.computer-hand');
const computerScore = document.querySelectorAll('.computer-score p');

const options = document.querySelectorAll('.buttons button');

let pScore = 0;
let cScore = 0;
// Starting the game |
const game = () => {

    const startGame = () => {
        playBtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            battle.classList.add('fadeIn');
        });
    };
    const playMatch = () => {
        // Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', e => {
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //    Here we call compare hands
                compareHands(e.target.textContent, computerChoice);

                // Update images
                playerHand.src = `./dist/img/${e.target.textContent}.png`
                computerHand.src = `./dist/img/${computerChoice}.png`


            });
        });
    };

    const updateScore = () => {
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');
        // Check draw
        if (playerChoice === computerChoice) {
            winner.textContent = 'Its draw!';
            console.log(playerChoice);
            console.log(computerChoice);
        }
        // Check rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }

        // Check paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }

        // Check scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
    };


    startGame();
    playMatch();

};

game();

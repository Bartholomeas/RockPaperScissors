const intro = document.querySelector('.intro');
const battle = document.querySelector('.battle');

const playBtn = document.querySelector('.play-btn');

const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

const options = document.querySelectorAll('.buttons button');

// Starting the game |
const game = () => {
    let pScore = 0;
    let cScore = 0;

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
                compareHands();

                // Update images
                playerHand.src = `./dist/img/${e.target.textContent}`


            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');

        // Check draw
        if (playerChoice === computerChoice) {
            winner.textContent = ' Its draw!';
        }
        // Check rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                pScore++;
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                return;
            }
        }

        // Check paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player wins!';
                pScore++;
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                return;
            }
        }

        // Check scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player wins!';
                pScore++;
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                return;
            }
        }

    };


    startGame();
    playMatch();

};

game();

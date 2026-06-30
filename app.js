let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No Number!');

    } else if (guess === secretNumber) {

        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '250px';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else {

        if (score > 1) {

            displayMessage(
                guess > secretNumber ? 'Too High!' : 'Too Low!'
            );

            score--;
            document.querySelector('.score').textContent = score;

        } else {

            displayMessage('You Lost!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '150px';
});
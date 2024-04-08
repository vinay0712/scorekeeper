const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const player1Display = document.querySelector('#player1Display')
const player2Display = document.querySelector('#player2Display')
const reset = document.querySelector('#reset');
const playto = document.querySelector('#playTo');
let winningScore = 0;
let score1 = 0;
let score2 = 0;
let isGameOver = false;

playto.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    // winningScore = parseInt(e.data);
    resett();
})


player1.addEventListener('click', function () {

    if (!isGameOver) {
        score1 += 1;
        if (score1 === winningScore) {
            isGameOver = true;
            player1Display.classList.add('has-text-success');
            player2Display.classList.add('has-text-danger');
        }
        player1Display.textContent = score1;
    }
})
player2.addEventListener('click', function () {
    if (!isGameOver) {
        score2 += 1;
        if (score2 === winningScore) {
            isGameOver = true;
            player2Display.classList.add('has-text-success');
            player1Display.classList.add('has-text-danger');
        }
        player2Display.textContent = score2;
    }
})
reset.addEventListener('click', resett)
function resett() {
    score1 = 0;
    score2 = 0;
    player1Display.textContent = score1;
    player2Display.textContent = score2;
    isGameOver = false;
    player1Display.classList.remove('has-text-success', 'has-text-danger');
    player2Display.classList.remove('has-text-success', 'has-text-danger');

}

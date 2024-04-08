const p1={
    score:0,
    button:document.querySelector('#player1'),
    display:document.querySelector('#player1Display')
};
const p2={
    score:0,
    button:document.querySelector('#player2'),
    display:document.querySelector('#player2Display')
}

const reset = document.querySelector('#reset');
const playto = document.querySelector('#playTo');
let winningScore = 0;

let isGameOver = false;

playto.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    // winningScore = parseInt(e.data);
    resett();
})
function win(player,opponent){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
            
        }
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener('click', function () {
    win(p1,p2);
 })

p2.button.addEventListener('click', function () {
   win(p2,p1);
})
reset.addEventListener('click', resett)
function resett() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    isGameOver = false;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');

}

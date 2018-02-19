

var cardsArray, containerQueue, score;

score = 0;
containerQueue = 1;

var diamondAce = {card: 'diamond_ace',
                 nominal: 11};
var diamondKing = {card: 'diamond_king',
                 nominal: 10};
var heartQueen = {card: 'heart_queen',
                 nominal: 10};
var spadeEight = {card: 'spade_8',
                 nominal: 8};

cardsArray = [diamondAce, diamondKing, heartQueen, spadeEight];

document.querySelector(".container_1").style.display = 'none';
document.querySelector(".container_2").style.display = 'none';
document.querySelector(".container_3").style.display = 'none';
document.querySelector(".container_4").style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    var rand = Math.floor(Math.random() * cardsArray.length);
    var cardDom = document.querySelector('.container_' + containerQueue);
    containerQueue++;
    cardDom.style.display = 'block';
    if(cardsArray.length > 0){
    cardDom.src = 'cards/' + cardsArray[rand].card + '.png';
    score += cardsArray[rand].nominal;

    if (score <= 21) {
        document.querySelector('#score-0').textContent = score;
    }else document.querySelector('#score-0').textContent = 'Game Over';
        
        cardsArray.splice(rand, 1);
    }
});


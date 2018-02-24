// declare variables

var cardsArray, containerQueue, score, isGameActive;

// function cunstructor for card

var Cards = function(name, suit, valueCard){
    this.name = name;
    this.suit = suit;
    this.valueCard = valueCard;
}

// creates all cards

var card_1 = new Cards('ace', 'club', 11);
var card_2 = new Cards('king', 'club', 10);
var card_3 = new Cards('queen', 'club', 10);
var card_4 = new Cards('jack', 'club', 10);
var card_5 = new Cards('ten', 'club', 10);
var card_6 = new Cards('nine', 'club', 9);
var card_7 = new Cards('eight', 'club', 8);
var card_8 = new Cards('seven', 'club', 7);
var card_9 = new Cards('six', 'club', 6);
var card_10 = new Cards('five', 'club', 5);
var card_11 = new Cards('four', 'club', 4);
var card_12 = new Cards('three', 'club', 3);
var card_13 = new Cards('two', 'club', 2);

var card_14 = new Cards('ace', 'diamond', 11);
var card_15 = new Cards('king', 'diamond', 10);

var card_16 = new Cards('queen', 'heart', 10);

var card_17 = new Cards('eight', 'spade', 8);


// init function

init();

function init(){
    // reset global variables
    score = 0;
    containerQueue = 1;
    cardsArray = [];
    isGameActive = true;
    
    //reset score on display
    document.querySelector('.player-score').textContent = score;
    
    // add all cards to array
    
    cardsArray.push(card_1); 
    cardsArray.push(card_2);
    cardsArray.push(card_3); 
    cardsArray.push(card_4);
    cardsArray.push(card_5); 
    cardsArray.push(card_6);
    cardsArray.push(card_7); 
    cardsArray.push(card_8);
    cardsArray.push(card_9); 
    cardsArray.push(card_10);
    cardsArray.push(card_11);
    cardsArray.push(card_12); 
    cardsArray.push(card_13);
    cardsArray.push(card_14);
    cardsArray.push(card_15);
    cardsArray.push(card_16); 
    cardsArray.push(card_17);
    
    // hide all cards from screen

    for(i = 1; i < 10; i++){
        document.querySelector('.img_' + i).style.display = 'none';
    }
}

// button New Game

document.querySelector('.btn-new-game').addEventListener('click', init);

// button 'one more card' function

document.querySelector('.btn-roll').addEventListener('click', function(){
   
    if(isGameActive){
        
        if(containerQueue < 10){

            var randomCard = cardsArray[Math.floor(Math.random() * cardsArray.length)];

            var cardDom = document.querySelector('.img_' + containerQueue);

            containerQueue++;

            cardDom.style.display = 'block';

            if(cardsArray.length > 0){
            cardDom.src = 'cards/' + randomCard.suit + '/' + randomCard.suit + '_' + randomCard.name + '.png';

            score += randomCard.valueCard;

            if (score <= 21) {
                document.querySelector('.player-score').textContent = score;
            }else {
                document.querySelector('.player-score').textContent = 'BUST';
                isGameActive = false;
            }
                cardsArray.splice(randomCard, 1);
            }
        }
    }
});



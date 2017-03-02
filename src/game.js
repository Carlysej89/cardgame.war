let buildDeck = require('./deck.js');

function cardWar(players) {

  let cards = buildDeck();
  // console.log(cards);

  //compare two cards and return a winner
  for ( let i = 0; i < 52 ; i+=2) {

    console.log(cards[i],cards[i+1]);
    if (cards[i]>cards[i+1]){
      let playerOne = 'P1';
      console.log(playerOne);
    } else if (cards[i]<cards[i+1]){
      let playerTwo = 'P2';
      console.log(playerTwo);
    } else {
      console.log('tie');
    }
  }


}

cardWar();









// console.log(buildDeck());


let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

module.exports = function buildDeck() {
  let shuffledDeck = [];
  let randomCardIndex = Math.floor(Math.random() * 52);

  //let maximum = 52;
  //for ( let i = maximum; i<= maximum; i++)
  shuffledDeck.push( deck[randomCardIndex]);


  return deck;
};

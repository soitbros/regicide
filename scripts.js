//sets value of card suits, face values, and assigns health to jack, queen, and king
// clubs = \u2663, diamonds = \u2666, spades = \u2660, hearts = \u2665
var cardSuits = [
  "Spades",
  "Hearts",
  "Clubs",
  "Diamonds"
];

var cardValues = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];

var royalValues = [
  "Jack",
  "Queen",
  "King"
];

function cardRegular(suits,values) {
  this.suits = cardSuits;
  this.values = cardValues;
  this.cardHit = values;
  this.createNode = makeNode;
}

function cardRoyalty(suits,values) {
  this.suits = cardSuits;
  this.values = royalValues;
  this.cardHealth = 21;
  this.createNode = makeNode;
  this.cardHit = 21;
}

function cardStack() {
  this.makeDeck = new Array ();
  this.shuffleDeck
  this.dealDeck
  this.reshuffleDeck
}

var colorRed

Array.prototype.pullCard = function() {
  return this[Math.floor(Math.random() * this.length)];
}

// You will eventually also have a Discard Pile and a Graveyard.

if (cardHealth === 0) {
  move to .graveyard
}

// Three “shots” (three shots will be referred to as a “Volley”) are dealt at a time from the Draw Pile. Monarchs will accumulate “hits” until they are killed and removed to the Graveyard. Hits are automatic once fired and assigned as follows:

var startVolley = function () {
  pullCard * 3;
  if (Ace == royalSuit) {
    var cardHealth = cardHealth + highest cardHit;
    move highest Card to .discard;
  } else if (highest cardSuits == royalSuit && cardValues % 2 === 0) {
    var cardHealthQueen = cardHealthQueen - cardHit;
  } else if (highest cardSuits == royalSuit && cardValues % 2 != 0) {
    var cardHealthKing = cardHealthKing - cardHit;
  } else if royalJack and jackOpposite Suit {
    move both to .graveyard
  } else if royalJack && one Royal Dead {
    royalJack appendChild(royalsDiv)
  } else if royalJack {
    //attack opponent opposite color royal
  } else (highest cardSuits) {
    //attack opponent (if all three are different suits, all three will attack opponents)
  }
}

// win condition : last one standing

//sets value of card suits, face values, and assigns health to jack, queen, and king
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
  "10",
  "Jack"
];

var royalValues = [
  "Queen",
  "King"
];

function cardRegular(suits,values) {
  this.suits = cardSuits;
  this.values = cardValues;
  this.cardHit = parseInt(values);
  this.createNode = makeNode;
}

function cardRoyalty(suits,values) {
  this.suits = cardSuits;
  this.values = royalValues;
  this.createNode = makeNode;
  this.cardHealth = 21;
  this.cardHit = 21;
}

function cardStack() {
  this.cards = [];
  this.makeDeck = cardDeck;
  this.shuffleDeck = cardShuffle;
  this.dealDeck = cardDeal;
}

function royalStack() {
  this.cards = [];
  this.makeRoyals = royalDeck;
}

deck = new cardStack();
royals = new royalStack();

// clubs = \u2663, diamonds = \u2666, spades = \u2660, hearts = \u2665


function cardDeck() {
  var m = cardSuits.length * cardValues.length;
  this.cards = [];
  for (var i = 0; i < cardSuits.length; i++) {
    for (var j = 0; j < cardValues.length; j++) {
      this.cards[m + i * cardValues.length + j] =
        cardRegular(cardValues[j], cardSuits[i]);
    }
  }
}

function royalDeck() {
  var m = cardSuits.length * royalValues.length;
  this.cards = [];
  for (var i = 0; i < cardSuits.length; i++) {
    for (var j = 0; j < royalValues.length; j++) {
      this.cards[m + i * royalValues.length + j] =
        cardRoyalty(royalValues[j], cardSuits[i]);
    }
  }
}

function cardShuffle() {
  for (var i = 0; i < 3; i++)
    for (var j = 0; j < this.cards.length; j++) {
      var k = Math.floor(Math.random() * this.cards.length);
      var temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
}

function cardDeal() {
  if (this.cards.length > 2)
    return (3 * this.cards.shift());
  else
    return null;
}

function makeNode() {
  var cardNode = document.createElement("div");
  cardNode.className = "card";
}

// inserts protagonists

$('select').on('change', function() {
  $('')
})


// You will eventually also have a Discard Pile and a Graveyard.

if (cardHealth === 0) {
  move to .graveyard
}

// Three “shots” (three shots will be referred to as a “Volley”) are dealt at a time from the Draw Pile. Monarchs will accumulate “hits” until they are killed and removed to the Graveyard. Hits are automatic once fired and assigned as follows:

var startVolley = function () {
  cardDeal();
  if 
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

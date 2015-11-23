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
  this.cardHit = values;
  this.createNode = makeNode;
}

function cardRoyalty(suits,values) {
  this.suits = cardSuits;
  this.values = royalValues;
  this.cardHealth = 21;
  this.createNode = makeNode;
}

function cardStack() {
  this.makeDeck = new Array ();
  this.shuffleDeck
  this.dealDeck
  this.reshuffleDeck
}

var colorBlack = [
  "spade"
]

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
  if color
}


// Monarchs are hit by cards numbered 2 through 10 of their own suit.
// Queens are hit by even­numbered cards only.
// Kings are hit by odd­numbered cards only.
// No monarch may be hit more than once in a given Volley, and must be hit by the highest shot fired. So if, for example, the Volley dealt includes a 4, 6, and 10 of Spades, the Queen of Spades would only be hit by the 10. The remaining two cards would go into the Discard Pile.
// A Volley MUST contain three shots, so when the Draw Pile gets down to less than three cards, the remaining unfired cards go automatically into the Discard Pile which is then reshuffled to become to new Draw Pile.


// Aces
// Aces are healing cards. When an Ace appears in a Volley, it automatically removes the highest­ numbered hit on either monarch of its suit, and both the hit and the Ace go into the Discard Pile. If neither monarch has hits on them, the Ace goes into the Discard Pile on its own.
//
// [image] Jacks
// Jacks have two special functions depending on the state of their House when they appear in a Volley.
// Assassin: When a Jack appears in a Volley and both the monarchs of its house are still alive, it becomes an Assassin. An Assassin automatically takes out one monarch of an opposite­colored house. (Black Assassins take out red monarchs and vice versa.) Within this rule, the choice of monarch assassinated is up to you. Once the assassination has occurred, the dead monarch is placed in the Graveyard, and the Jack, along with any hits the dead monarch had accumulated, goes into the Discard Pile to reappear after the next shuffle. If an Assassin Jack appears and no opposite­color monarchs remain, the Jack assassinates a monarch from the rival same­color House.
// Replacement: When a Jack appears in a Volley and one of the monarchs of its house has been killed (even if it happens on the same Volley in which the Jack appears), the Jack automatically moves up to replace the dead monarch and reign in its place. The Jack can replace a King or a Queen. The Jack then begins taking the appropriate hits for the monarch it replaced (if the Jack replaces a Queen it takes even­numbered hits, if it replaces a King it takes odd­numbered hits). If that Jack accumulates 21 or more hits, it is killed and placed in the Graveyard with the other dead monarchs.
// [image of jack replacements] Jack vs. Jack
// If two Jacks of opposite colors appear in the same Volley, they automatically assassinate each other and are both removed to the Graveyard. (If the Jacks are the same color, they may play as normal, Assassinating or Replacing monarchs.)
// Inert Cards
// Once both (or all three if a Replacement Jack is involved) monarchs of a House are in the Graveyard, the House is demolished, and all cards of that suit are rendered inert including any unplayed Jacks. Inert cards remain in the deck, but are removed to the Discard pile as soon as they appear in a Volley. They are merely filler.
// Endgame
// Play continues until only your monarch or monarchs survive (even if only a Replacement Jack survives) or until both (or all) of your monarchs are in the Graveyard.
//

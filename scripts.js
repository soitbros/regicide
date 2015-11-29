window.onload = init;

function init(){

//sets value of card suits, face values, and assigns health to queen & king

var cardSuits = [
  "Spades",
  "Hearts",
  "Clubs",
  "Diamonds"
];

var cardValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J"
];

var royalValues = [
  "Q",
  "K"
];

function cardRegular(cardValue,cardSuit) {
  this.suit = cardSuit;
  this.value = cardValue;
  this.cardHit = parseInt(this.value);
  this.createCard = makeCard;
}

function cardRoyalty(royalValue,cardSuit) {
  this.suit = cardSuit;
  this.value = royalValue;
  this.cardHealth = 21;
  this.createCard = makeCard;
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
deck.makeDeck();
deck.shuffleDeck();
royals = new royalStack();
royals.makeRoyals();
card = deck.dealDeck();

// standard deck creation

function cardDeck() {
  this.cards = [];
  for (var i = 0; i < cardSuits.length; i++) {
    for (var j = 0; j < cardValues.length; j++) {
      this.cards[i * cardValues.length + j] =
      new cardRegular(cardValues[j], cardSuits[i]);
    }
  }
}

// royal deck creation

function royalDeck() {
  this.cards = [];
  for (var i = 0; i < cardSuits.length; i++) {
    for (var j = 0; j < royalValues.length; j++) {
      this.cards[i * royalValues.length + j] =
      new cardRoyalty(royalValues[j], cardSuits[i]);
    }
  }
}

// shuffles cards

function cardShuffle() {
  for (var i = 0; i < 3; i++)
    for (var j = 0; j < this.cards.length; j++) {
      var k = Math.floor(Math.random() * this.cards.length);
      var temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
}

// deals cards

function cardDeal() {
  if (deck.cards.length > 0) {
    return deck.cards.shift();
  } else {
    return null;
  }
}

// creates cards

function makeCard() {
  var card = $('<div>').attr('class', 'card');
  var front = $('<div>').attr('class', 'front');
  var royal = $('<div>').attr('class', 'royal');
  var spot = $('<div>').attr('class','index');
  var spotChar;
  switch (this.suit) {
    case "Clubs" :
    spotChar = "\u2663";
    break;
  case "Diamonds" :
    spot.attr('id', 'red');
    spotChar = "\u2666";
    break;
  case "Hearts" :
    spot.attr('id', 'red');
    spotChar = "\u2665";
    break;
  case "Spades" :
    spotChar = "\u2660";
    break;
  }

  spot.append(document.createTextNode(this.value + spotChar));

  if (this.value === "K" || this.value ==="Q") {
    royal.append(spot);
    card.append(royal);
  } else {
  front.append(spot);
  card.append(front);
  }

  return card;
}

// inserts protagonists

var playerKing = royals.cards[1];
var playerQueen = royals.cards[0];

$('.play_area .king').append(playerKing.createCard());
$('.play_area .queen').append(playerQueen.createCard());
$('.play_area .health_king').text(playerKing.cardHealth);
$('.play_area .health_queen').text(playerQueen.cardHealth);

// inserts opponents

var opp1King = royals.cards[3];
var opp1Queen = royals.cards[2];

$('.opponent_one .king').append(opp1King.createCard());
$('.opponent_one .queen').append(opp1Queen.createCard());
$('.opponent_one .health_king').text(opp1King.cardHealth);
$('.opponent_one .health_queen').text(opp1Queen.cardHealth);

var opp2King = royals.cards[5];
var opp2Queen = royals.cards[4];

$('.opponent_two .king').append(opp2King.createCard());
$('.opponent_two .queen').append(opp2Queen.createCard());
$('.opponent_two .health_king').text(opp2King.cardHealth);
$('.opponent_two .health_queen').text(opp2Queen.cardHealth);

var opp3King = royals.cards[7];
var opp3Queen = royals.cards[6];

$('.opponent_three .king').append(opp3King.createCard());
$('.opponent_three .queen').append(opp3Queen.createCard());
$('.opponent_three .health_king').text(opp3King.cardHealth);
$('.opponent_three .health_queen').text(opp3Queen.cardHealth);





$('.deck_deal .deal').append(card.createCard());


// health bars



// You will eventually also have a Discard Pile and a Graveyard.

// if (cardHealth === 0) {
//   move to .graveyard
// }

// Three “shots” (three shots will be referred to as a “Volley”) are dealt at a time from the Draw Pile. Monarchs will accumulate “hits” until they are killed and removed to the Graveyard. Hits are automatic once fired and assigned as follows:

// var startVolley = function () {
//   cardDeal();
//   if
//   if (Ace == royalSuit) {
//     var cardHealth = cardHealth + highest cardHit;
//     move highest Card to .discard;
//   } else if (highest cardSuits == royalSuit && cardValues % 2 === 0) {
//     var cardHealthQueen = cardHealthQueen - cardHit;
//   } else if (highest cardSuits == royalSuit && cardValues % 2 != 0) {
//     var cardHealthKing = cardHealthKing - cardHit;
//   } else if royalJack and jackOpposite Suit {
//     move both to .graveyard
//   } else if royalJack && one Royal Dead {
//     royalJack appendChild(royalsDiv)
//   } else if royalJack {
//     //attack opponent opposite color royal
//   } else (highest cardSuits) {
//     //attack opponent (if all three are different suits, all three will attack opponents)
//   }
// }

// win condition : last one standing


}

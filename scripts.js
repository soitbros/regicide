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
  this.deckDeal = cardsDeal;
  this.draw = cardDraw;
  this.addCard = addCards;
  this.combine = cardsCombine;
}

function royalStack() {
  this.cards = [];
  this.makeRoyals = royalDeck;
}

var deck = new cardStack();
var hand = new cardStack();
var discard = new cardStack();
var royals = new royalStack();
deck.makeDeck();
deck.shuffleDeck();
royals.makeRoyals();

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
    cardVolley();
}

// combines cards

function cardsCombine(stack) {
  this.cards = this.cards.concat(stack.cards)
  stack.cards = new Array();
}

// draws cards

function cardDraw(n) {

  var card;

  if (n >= 0 && n < this.cards.length) {
    card = this.cards[n];
    this.cards.splice(n, 1);
  }
  else
    card = null;

  return card;
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

// discards

function discards() {
  if (deck === null) return;
  discard.combine(hand);
  cardVolley();
}

// resets

function reset() {
  if (deck === null) return;
  discard.combine(hand);
  deck.combine(discard);
  cardVolley();
}

// deals cards

function cardsDeal() {

  if (this.cards.length > 0)
    return this.cards.shift();
  else
    return null;
}

function addCards(card) {
  this.cards.push(card);
}

function deal() {
  if (deck === null) return;
  if (deck.cards.length < 3)
    alert("Not enough cards.");
  else {
    discards();
    for (var i = 0; i < 3; i++)
      hand.addCard(deck.deckDeal());
  }
  cardVolley();
}

// sets volley

function cardVolley() {
  var left = 0;
  var top = 0;
  var starter = $(".deck");
  // while (starter.firstChild !== null)
  //   starter.remove(starter.firstChild);
  for (var i = 0; i < deck.cards.length; i++) {
    card = deck.cards[i].createCard();
    card.children().css("visibility", "hidden");
    card.css("margin-left", left + "em");
    card.css("margin-top", top + "em");
    starter.append(card);
    left += .010;
    top += .005;
  }

  var starter = $(".deal");
  // while (starter.firstChild !== null)
  //   starter.removeChild(starter.firstChild);
  for (var i = 0; i < hand.cards.length; i++) {
    card = hand.cards[i].createCard();
    card.css("margin-top", top + "em");
    starter.append(card);
    top += 7;
  }

  var starter = $(".discard");
  // while (starter.firstChild !== null)
  //   starter.removeChild(starter.firstChild);
  for (var i = discard.cards.length - 0; i < discard.cards.length; i++) {
    card = discard.cards[i].createCard();
    card.css("margin-left", left + "em");
    card.css("margin-top", top + "em");
    starter.append(card);
    left += .010;
    top += .005;
  }
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

// cardVolley();

// health bars

$(".volley").on("click", deal());
$(".tally").on("click", discards());

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

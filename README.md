# regicide
game project

Regicide is a game similar to War and Solitaire. The gameplay is as follows:

The main player is the King and Queen of Spades, facing the King and Queen of Diamonds, of Clubs, and of Hearts. Each regent has 21 hit points.

Three cards are played on what is called the flop. Upon flopping, you tally the hit points. Odd same-suit values are deducted from the King's hit points, while even same-suit values are deducted from the Queen's.

Jacks are randomly assigned a hit point value of 0 to 9, so they can do substantial damage. Their hit points are assigned based on being odd or even.

Aces are randomly assigned a healing value of 0 to 9, so they can save a regent who has been injured or add extra hit points.

The player with a regent remaining wins.


The first thing I did to start this project was work from a set of rules. My fiancé sent me rules earlier in the year as he'd come up with the game, so I used that as my reference to work from.

This one was tough. I knew I'd need to construct a deck first, so I decided to check on what approaches other people have used to construct a deck. I found someone who made a deck complete with displaying the cards drawn and with a discard pile, so I looked to his code to figure out what to do. I found his own code somewhat sloppy and had some poor practices, so I rewrote much of it, quite a bit into jQuery for ease of use.

Once I had a functioning deck, it was a pretty simple matter to write the remaining game rules, win conditions, and DOM manipulations.

The Ace and Jack are a compromise. They're supposed to be far more articulatedn in the actual game with the Jack replacing a dead regent or acting as an assassin, and I was not able to get them to work with the time given. I also wanted to make it so that you could choose the suit you wanted to play with, but I was unsuccessful even in testing with changing that. Last, I wanted to display the cards next to each regent as they took an injury, which again I was unable to do in the time given.

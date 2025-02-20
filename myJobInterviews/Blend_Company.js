// Interview for a 80,000 120,000 MXN Full stack position

// First Interfview

/*
    Shuffle a standard deck (52 cards) and split it in half so that each player starts with a pile of 26 cards.
 
    Every round, each player plays the top card from their pile. The player with the higher card wins and adds both cards to the bottom of their pile. We do not care about suits.
    
    If at any point a player runs out of cards, the game is over and that player loses.
    
    If players tie (e.g. both players play an 8 on the same turn), then each player plays three cards. The players compete with their third cards.
    The player with the higher competing card wins and adds all of the cards that have been played during the turn to the bottom of their pile.
    This process repeats as necessary until the tie is resolved.

    Note: The deck has cards from 1 to 13, and the player with the higher card wins and adds both cards to the bottom of their pile.
*/

function createDeck() {
  const deck = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 14; j++) {
      deck.push(j);
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const p1 = Math.floor(Math.random() * i + 1);

    let temp = deck[i];
    deck[i] = deck[p1];
    deck[p1] = temp;
  }

  return deck;
}

function splitDeck(shuffledDeck) {
  return {
    player1Deck: shuffledDeck.slice(0, 26),
    player2Deck: shuffledDeck.slice(26, 52),
  };
}

function playGame() {
  const deck = createDeck();
  const shuffledDeck = shuffleDeck(deck);

  const { player1Deck, player2Deck } = splitDeck(shuffledDeck);

  while (player1Deck.length > 0 && player2Deck.length > 0) {
    let roundCards = [];

    const winner = playRound(player1Deck, player2Deck, roundCards);

    if (winner === 1) {
      player1Deck.push(...roundCards);
    } else if (winner === 2) {
      player2Deck.push(...roundCards);
    }
  }

  if (player1Deck.length === 0) {
    console.log('Player 2 wins!');
  } else if (player2Deck.length === 0) {
    console.log('Player 1 wins!');
  }
}

function playRound(player1, player2, roundCards) {
  if (player1.length === 0) return 2;
  if (player2.length === 0) return 1;

  const card1 = player1.shift();
  const card2 = player2.shift();

  roundCards.push(card1, card2);

  if (card1 > card2) return 1;
  else if (card2 > card1) return 2;
  return handleTie;
}

function handleTie(player1, player2, roundCards) {
  const cardsToPlay = 3;
  let tieBreakerCards1 = [];
  let tieBreakerCards2 = [];

  for (let i = 0; i < cardsToPlay; i++) {
    if (player1.length > 0) {
      tieBreakerCards1.push(player1.shift());
    }
    if (player2.length > 0) {
      tieBreakerCards2.push(player2.shift());
    }
  }

  roundCards.push(...tieBreakerCards1, ...tieBreakerCards2);

  const lastCard1 = tieBreakerCards1[tieBreakerCards1.length - 1];
  const lastCard2 = tieBreakerCards2[tieBreakerCards2.length - 1];

  if (lastCard1 > lastCard2) {
    return 1;
  } else if (lastCard2 > lastCard1) {
    return 2;
  } else {
    // Recursive call in case of another tie
    return handleTie(player1, player2, roundCards);
  }
}

//////////////////////// ##########################
//////////////////////// ##########################
//////////////////////// ##########################
//////////////////////// ##########################

// Shuffle deck
// function shuffleDeck(deck) {
//   for (let i = deck.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [deck[i], deck[j]] = [deck[j], deck[i]];
//   }
//   return deck;
// }

// function createDeck() {
//   const deck = [];
//   for (let i = 1; i <= 13; i++) {
//     for (let j = 0; j < 4; j++) {
//       deck.push(i);
//     }
//   }
//   return deck;
// }

// function playGame() {
//   let deck = createDeck();
//   shuffleDeck(deck);

//   let player1 = deck.slice(0, 26);
//   let player2 = deck.slice(26, 52);

//   while (player1.length > 0 && player2.length > 0) {
//     let roundCards = [];
//     let winner = playRound(player1, player2, roundCards);
//     if (winner === 1) {
//       player1.push(...roundCards);
//     } else if (winner === 2) {
//       player2.push(...roundCards);
//     }
//   }

//   if (player1.length === 0) {
//     console.log('Player 2 wins!');
//   } else if (player2.length === 0) {
//     console.log('Player 1 wins!');
//   }
// }

// function playRound(player1, player2, roundCards) {
//   if (player1.length === 0) return 2;
//   if (player2.length === 0) return 1;

//   const card1 = player1.shift();
//   const card2 = player2.shift();

//   roundCards.push(card1, card2);

//   if (card1 > card2) {
//     return 1;
//   } else if (card2 > card1) {
//     return 2;
//   } else {
//     // Tie situation
//     return handleTie(player1, player2, roundCards);
//   }
// }

// function handleTie(player1, player2, roundCards) {
//   const cardsToPlay = 3;
//   let tieBreakerCards1 = [];
//   let tieBreakerCards2 = [];

//   for (let i = 0; i < cardsToPlay; i++) {
//     if (player1.length > 0) {
//       tieBreakerCards1.push(player1.shift());
//     }
//     if (player2.length > 0) {
//       tieBreakerCards2.push(player2.shift());
//     }
//   }

//   roundCards.push(...tieBreakerCards1, ...tieBreakerCards2);

//   const lastCard1 = tieBreakerCards1[tieBreakerCards1.length - 1];
//   const lastCard2 = tieBreakerCards2[tieBreakerCards2.length - 1];

//   if (lastCard1 > lastCard2) {
//     return 1;
//   } else if (lastCard2 > lastCard1) {
//     return 2;
//   } else {
//     // Recursive call in case of another tie
//     return handleTie(player1, player2, roundCards);
//   }
// }

// playGame();

////

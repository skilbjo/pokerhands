var poker = {
  // Returns the name of the input hand.
  // See the specs for the required formats.
  labelHand: function(hand) {
  	return poker.findWinner(hand);
  	
  },
  findWinner: function(hand) {
  	var winner;

  	if (poker.isFlush(hand)) {
  		winner = 'Flush with high card ' + poker.highCard(hand)[0];
  	} else {
  		winner = poker.highCard(hand);
  	}

  	return winner;
  },
  highCard: function(hand) {
  	var cards = hand.split(' '),
  		sortedHand = [],
  		firstCard = '',
  		result = '';

  	sortedHand = cards.map(function(card) {
  		return poker.rank(card);
  	});

  	sortedHand.sort(function(a,b){return b - a; });

  	console.log(sortedHand);

  	switch(sortedHand[0]) {
  		case 10:
  			firstCard = 'J';
  			break;
  		case 11:
  			firstCard = 'Q';
  			break;	
  		case 12:
  			firstCard = 'K';
  			break;
  		case 13:
  			firstCard = 'A';
  			break;	
  		default:
  			firstCard = sortedHand[0];
  	}

  	result = firstCard + ' High';

  	return result;
  },
  rank: function(card) {
  	var valuePrefix = card.split('')[0],
  		value;

		switch(valuePrefix) {
			case 'J':
				value = 10;
				break;
			case 'Q':
				value = 11;
				break;
			case 'K':
				value = 12;
				break;
			case 'A':
				value = 13;
				break;
			default:
				value = parseInt(valuePrefix);
		}
		return value;
  },
  getSuite: function(card) {
  	var suitPrefix = card.split('')[1].toUpperCase(),
  		suit;

		switch(suitPrefix) {
			case 'H':
				suit = 'Hearts';
				break;
			case 'S':
				suit = 'Spades';
				break;
			case 'D':
				suit = 'Diamonds';
				break;
			case 'C':
				suit = 'Clubs';
				break;
		}
		return suit;
  },
  isFlush: function(hand) {
		var handArray = hand.split(" ");
		firstSuit=handArray[0].substr(1,1);
		for(var i=0;i<handArray.length;i++){
			card=handArray[i];
			suit=card.substr(1,1);
			if (suit!=firstSuit) {
				return false;
			}
		}
		return true;
	}
};

console.log(poker.labelHand("9H 8C 4H 3S 2D"));
console.log(poker.labelHand("QD JS 9S 8S 2S"));
console.log(poker.labelHand('3D KD TD 9D 5D'));


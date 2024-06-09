import Card from './Card';
export default class Deck {
    constructor() {
        this.deck = [];
        this.newDeck();
    }
    newDeck() {
        let card = new Card();
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 9; j++) {
                for (let k = 0; k < 10; k++) {
                    card.setCardType(i);
                    card.setCardColor(j);
                    card.setCardNumber(k);
                    card.setIsCard();
                    if (card.getIsCard()) {
                        card.setCardName();
                        this.deck.push(card);
                    }
                }
            }
        }
        for (let i = 2; i < 9; i++) {
            for (let j = 0; j < 6; j++) {
                card.setCardType(i);
                card.setCardColor(j);
                card.setCardNumber(-1);
                card.setIsCard();
                if (card.getIsCard()) {
                    card.setCardName();
                    this.deck.push(card);
                }
            }
        }
        for (let i = 9; i < 26; i++) {
            card.setCardType(i);
            card.setCardColor(-1);
            card.setCardNumber(-1);
            card.setIsCard();
            if (card.getIsCard()) {
                card.setCardName();
                this.deck.push(card);
            }
        }
    }
    getDeck() {
        return this.deck;
    }
    getDeckSize() {
        return this.deck.length;
    }
    shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

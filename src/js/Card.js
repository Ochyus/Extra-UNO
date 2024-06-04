class Card {
    cardType; String;
    cardColor; String;
    cardNumber; Number;
    isWild; Boolean;
    constructor(cardType, cardColor, cardNumber, isWild) {
        this.cardType = cardType;
        this.cardColor = cardColor;
        this.cardNumber = cardNumber;
        this.isWild = isWild;
    }
}

module.exports = Card;
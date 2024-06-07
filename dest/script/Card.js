export default class Card {
    constructor() {
        this.cardType = "";
        this.cardColor = "";
        this.cardNumber = -1;
        this.cardAction = "";
        this.cardName = "";
        this.isCard = false;
    }
    /**
     * Returns the type of the card.
     *
     * @return {string} The type of the card. If the card type is unavailable, "None" is returned.
     */
    getCardType() {
        return this.cardType;
    }
    /**
     * Returns the color of the card.
     *
     * @return {string} The color of the card. If the card color is unable, "None" is returned.
     */
    getCardColor() {
        return this.cardColor;
    }
    /**
     * Returns the card number if it is a number, otherwise returns -1.
     *
     * @return {number} The card number if it available, otherwise -1.
     */
    getCardNumber() {
        return this.cardNumber;
    }
    getCardAction() {
        return this.cardAction;
    }
    getCardName() {
        return this.cardName;
    }
    getIsCard() {
        return this.isCard;
    }
    /**
     * Sets the card type of the object.
     *
     * @param {string} cardType - The new card type to set.
     */
    setCardType(cardType) {
        this.cardType = cardType;
    }
    /**
     * Sets the color of the card.
     *
     * @param {string} cardColor - The new color to set for the card.
     */
    setCardColor(cardColor) {
        this.cardColor = cardColor;
    }
    /**
     * Sets the card number of the current card.
     *
     * @param {number} cardNumber - The new card number to set.
     */
    setCardNumber(cardNumber) {
        this.cardNumber = cardNumber;
    }
    setCardAction(cardAction) {
        this.cardAction = cardAction;
    }
    setCardName() {
        if (this.isCard) {
            if (this.getCardType().includes("Colored")) {
                this.cardName += this.getCardColor() + " ";
            }
            if (this.getCardType().includes("Rainbow")) {
                this.cardName += "Rainbow" + " ";
            }
            if (this.getCardType().includes("Number")) {
                this.cardName += "" + this.getCardNumber() + " ";
            }
            if (this.getCardType().includes("Wild")) {
                this.cardName = this.getCardType() + " ";
            }
        }
    }
    setIsCard() {
        if (this.cardType === "" || this.cardColor === "" || this.cardNumber === -1 || this.cardAction === "") {
            this.isCard = false;
            return;
        }
        this.isCard = true;
    }
}

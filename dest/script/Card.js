export default class Card {
    constructor() {
        this.cardType = "";
        this.cardColor = "";
        this.cardNumber = -2;
        this.cardName = "";
        this.isCard = false;
    }
    /**
     * Returns the type of the card.
     *
     * @return {string} The type of the card.
     */
    getCardType() {
        return this.cardType;
    }
    /**
     * Returns the color of the card.
     *
     * @return {string} The color of the card.
     */
    getCardColor() {
        return this.cardColor;
    }
    /**
     * Returns the card number.
     *
     * @return {number} The card number.
     */
    getCardNumber() {
        return this.cardNumber;
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
    setCardType(index) {
        if (index === 0) {
            this.cardType = "Colored Number";
        }
        else if (index === 1) {
            this.cardType = "Colored Number Fast";
        }
        else if (index === 2) {
            this.cardType = "Colored Skip";
        }
        else if (index === 3) {
            this.cardType = "Colored Reverse";
        }
        else if (index === 4) {
            this.cardType = "Colored Go Again";
        }
        else if (index === 5) {
            this.cardType = "Colored Discard 1";
        }
        else if (index === 6) {
            this.cardType = "Colored Discard 2";
        }
        else if (index === 7) {
            this.cardType = "Colored Draw 1";
        }
        else if (index === 8) {
            this.cardType = "Colored Draw 2";
        }
        else if (index === 9) {
            this.cardType = "Wild";
        }
        else if (index === 10) {
            this.cardType = "Wild Draw 1";
        }
        else if (index === 11) {
            this.cardType = "Wild Draw 2";
        }
        else if (index === 12) {
            this.cardType = "Wild Draw 4";
        }
        else if (index === 13) {
            this.cardType = "Wild Draw 6";
        }
        else if (index === 14) {
            this.cardType = "Wild Draw 8";
        }
        else if (index === 15) {
            this.cardType = "Wild Draw 10";
        }
        else if (index === 16) {
            this.cardType = "Wild D2";
        }
        else if (index === 17) {
            this.cardType = "Wild D4";
        }
        else if (index === 18) {
            this.cardType = "Wild D6";
        }
        else if (index === 19) {
            this.cardType = "Wild D8";
        }
        else if (index === 20) {
            this.cardType = "Wild D10";
        }
        else if (index === 21) {
            this.cardType = "Wild D12";
        }
        else if (index === 22) {
            this.cardType = "Wild D20";
        }
        else if (index === 23) {
            this.cardType = "Wild 777";
        }
        else if (index === 24) {
            this.cardType = "Wild Shield";
        }
        else if (index === 25) {
            this.cardType = "Wild Swap";
        }
    }
    /**
     * Sets the color of the card.
     *
     * @param {string} cardColor - The new color to set for the card.
     */
    setCardColor(index) {
        if (index === 0) {
            this.cardColor = "Red";
        }
        else if (index === 1) {
            this.cardColor = "Green";
        }
        else if (index === 2) {
            this.cardColor = "Blue";
        }
        else if (index === 3) {
            this.cardColor = "Yellow";
        }
        else if (index === 4) {
            this.cardColor = "Purple";
        }
        else if (index === 5) {
            this.cardColor = "Orange";
        }
        else if (index === 6) {
            this.cardColor = "Cyan";
        }
        else if (index === 7) {
            this.cardColor = "Pink";
        }
        else if (index === 8) {
            this.cardColor = "Magic";
        }
        else {
            this.cardColor = "None";
        }
    }
    /**
     * Sets the card number of the current card.
     *
     * @param {number} cardNumber - The new card number to set.
     */
    setCardNumber(cardNumber) {
        this.cardNumber = cardNumber;
    }
    setCardName() {
        if (this.isCard) {
            this.cardName = "";
            if (this.getCardType().includes("Colored")) {
                this.cardName += this.getCardColor() + " ";
                this.cardType = this.cardType.replace("Colored", "");
            }
            if (this.getCardType().includes("Rainbow")) {
                this.cardName += "Rainbow" + " ";
                this.cardType = this.cardType.replace("Rainbow", "");
            }
            if (this.getCardType().includes("Number")) {
                this.cardName += "" + this.getCardNumber() + " ";
                this.cardType = this.cardType.replace("Number", "");
            }
            this.cardName += this.cardType;
            this.cardName = this.cardName.trim();
        }
    }
    setIsCard() {
        if (this.cardType === "" || this.cardColor === "" || this.cardNumber === -2) {
            this.isCard = false;
            return;
        }
        this.isCard = true;
    }
}

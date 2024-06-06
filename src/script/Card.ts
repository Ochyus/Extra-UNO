export default class Card {
    
    cardType?: string;      // A string representing the type of the card.
    cardColor?: string;     // A string representing the color of the card.
    cardNumber?: number;    // A number representing the number of the card.
    isColored?: boolean;    // A boolean representing if the card is a wild card.

    /**
     * Returns the type of the card.
     *
     * @return {string} The type of the card. If the card type is unavailable, "None" is returned.
     */
    getCardType(): string {
        if (typeof this.cardType === "string") {
            return this.cardType;
        }
        return "None";
    }

    /**
     * Returns the color of the card.
     *
     * @return {string} The color of the card. If the card color is unable, "None" is returned.
     */
    getCardColor(): string {
        if (typeof this.cardColor === "string") {
            return this.cardColor;
        }
        return "None";
    }

    /**
     * Returns the card number if it is a number, otherwise returns -1.
     *
     * @return {number} The card number if it available, otherwise -1.
     */
    getCardNumber(): number {
        if (typeof this.cardNumber === "number") {
            return this.cardNumber;
        }
        return -1;
    }

    /**
     * Returns the value of the `isColored` property of the current card object.
     *
     * @return {boolean} The value of the `isColored` property. If the property is unavailable, `false` is returned.
     */
    getIsColored(): boolean {
        if (typeof this.isColored === "boolean") {
            return this.isColored;
        }
        return false;
    }

    /**
     * Sets the card type of the object.
     *
     * @param {string} cardType - The new card type to set.
     */
    setCardType(cardType: string) {
        this.cardType = cardType;
    }

    /**
     * Sets the color of the card.
     *
     * @param {string} cardColor - The new color to set for the card.
     */
    setCardColor(cardColor: string) {
        this.cardColor = cardColor;
    }

    /**
     * Sets the card number of the current card.
     *
     * @param {number} cardNumber - The new card number to set.
     */
    setCardNumber(cardNumber: number) {
        this.cardNumber = cardNumber;
    }

    /**
     * Sets if the card is a wild card.
     *
     * @param {boolean} isColored - The new wild status to set.
     */
    setIsColored(isColored: boolean) {
        this.isColored = isColored;
    }
    isCard() {
        if (typeof this.cardType === "undefined" || typeof this.cardColor === "undefined" || typeof this.cardNumber === "undefined" || typeof this.isColored === "undefined") {
            return false;
        }
        return true;
    }
}
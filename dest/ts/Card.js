export default class Card {
    /**
     * Constructs a new Card object with the given parameters.
     *
     * @param {string} cardType - The type of the card.
     * @param {string} cardColor - The color of the card.
     * @param {number} cardNumber - The number of the card.
     * @param {boolean} isColored - Whether the card is a wild card.
     */
    constructor(cardType, cardColor, cardNumber, isColored) {
        this.cardType = cardType;
        this.cardColor = cardColor;
        this.cardNumber = cardNumber;
        this.isColored = isColored;
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
     * Returns the card number of the current card.
     *
     * @return {number} The card number.
     */
    getCardNumber() {
        return this.cardNumber;
    }
    /**
     * Returns if the card is a wild card.
     *
     * @return {boolean} True if the card is a wild card.
     */
    getIsColored() {
        return this.isColored;
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
    /**
     * Sets if the card is a wild card.
     *
     * @param {boolean} isColored - The new wild status to set.
     */
    setIsColored(isColored) {
        this.isColored = isColored;
    }
}

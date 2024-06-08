export default class Card {
    
    cardType: string;      // A string representing the type of the card.
    cardColor: string;     // A string representing the color of the card.
    cardNumber: number;    // A number representing the number of the card, if it has one.
    cardAction: string;   // A string representing the action of the card.
    cardName: string;      // A string representing the name of the card.
    isCard: boolean;       // A boolean representing whether the card is a card or not.

    public constructor() {
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
     * @return {string} The type of the card.
     */
    public getCardType(): string {
        return this.cardType;
    }

    /**
     * Returns the color of the card.
     *
     * @return {string} The color of the card.
     */
    public getCardColor(): string {
        return this.cardColor;
    }

    /**
     * Returns the card number.
     *
     * @return {number} The card number.
     */
    public getCardNumber(): number {
        return this.cardNumber;
    }

    public getCardAction(): string {
        return this.cardAction;
    }

    public getCardName(): string {
        return this.cardName;
    }

    public getIsCard(): boolean {
        return this.isCard;
    }

    /**
     * Sets the card type of the object.
     *
     * @param {string} cardType - The new card type to set.
     */
    public setCardType(index: number): void {
        if (index === 0) {
            this.cardType = "Colored Number";
        } else if (index === 1) {
            this.cardType = "Rainbow Number";
        } else if (index === 2) {
            
        }
    }

    /**
     * Sets the color of the card.
     *
     * @param {string} cardColor - The new color to set for the card.
     */
    public setCardColor(index: number): void {
        if (index === 0) {
            this.cardColor = "Red";
        } else if (index === 1) {
            this.cardColor = "Green";
        } else if (index === 2) {
            this.cardColor = "Blue";
        } else if (index === 3) {
            this.cardColor = "Yellow";
        }
    }

    /**
     * Sets the card number of the current card.
     *
     * @param {number} cardNumber - The new card number to set.
     */
    public setCardNumber(cardNumber: number) {
        this.cardNumber = cardNumber;
    }

    public setCardAction(cardAction: string) {
        this.cardAction = cardAction;
    }

    public setCardName() {
        if (this.isCard) {
            this.cardName = "";
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

    public setIsCard() {
        if (this.cardType === "" || this.cardColor === "" || this.cardNumber === -1 || this.cardAction === "") {
            this.isCard = false;
            return;
        }
        this.isCard = true;
    }
}
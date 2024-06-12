import Card from "./Card";

export default class Hand {
    private hand: Card[];
    constructor() {
        this.hand = [];
    }

    public getHand(): Card[] {
        return this.hand;
    }
}
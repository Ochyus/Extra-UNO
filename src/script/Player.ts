import Hand from "./Hand.js";

export default class Player {
    private name: string;
    private hand: Hand;

    public constructor(name: string) {
        this.name = name;
        this.hand = new Hand();
    }

    public getName(): string {
        return this.name;
    }

    public getHand(): Hand {
        return this.hand;
    }

    public setName(name: string): void {
        this.name = name;
    }
}
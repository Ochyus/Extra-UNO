import Hand from "./Hand.js";
export default class Player {
    constructor(name) {
        this.name = name;
        this.hand = new Hand();
    }
    getName() {
        return this.name;
    }
    getHand() {
        return this.hand;
    }
    setName(name) {
        this.name = name;
    }
}

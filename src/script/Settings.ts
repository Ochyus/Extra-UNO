export default class Settings {

    swap0: boolean;
    shift8: boolean;
    canstack: boolean;
    constantdraw: boolean;
    constructor(swap0: boolean, shift8: boolean, canstack: boolean, constantdraw: boolean) {
        this.swap0 = swap0;
        this.shift8 = shift8;
        this.canstack = canstack;
        this.constantdraw = constantdraw;
    }
}

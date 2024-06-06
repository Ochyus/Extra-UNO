export default class Settings {

    swap0: boolean;
    shift8: boolean;
    canStack: boolean;
    willAlwaysDraw: boolean;
    playAfterDraw: boolean;

    constructor() {
        this.swap0 = false;
        this.shift8 = false;
        this.canStack = false;
        this.willAlwaysDraw = false;
        this.playAfterDraw = false;
    }

    getSwap0(): boolean {
        return this.swap0;
    }

    getShift8(): boolean {
        return this.shift8;
    }

    getCanStack(): boolean {
        return this.canStack;
    }

    getWillAlwaysDraw(): boolean {
        return this.willAlwaysDraw;
    }

    set0And8(swapAndShift: boolean) {
        this.swap0 = swapAndShift;
        this.shift8 = swapAndShift;
    }

    setCanStack(canStack: boolean) {
        this.canStack = canStack;
    }

    setWillAlwaysDraw(willAlwaysDraw: boolean) {
        this.willAlwaysDraw = willAlwaysDraw;
    }
}

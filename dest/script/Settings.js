export default class Settings {
    constructor() {
        this.swap0 = false;
        this.shift8 = false;
        this.canStack = false;
        this.willAlwaysDraw = false;
        this.playAfterDraw = false;
    }
    getSwap0() {
        return this.swap0;
    }
    getShift8() {
        return this.shift8;
    }
    getCanStack() {
        return this.canStack;
    }
    getWillAlwaysDraw() {
        return this.willAlwaysDraw;
    }
    getPlayAfterDraw() {
        return this.playAfterDraw;
    }
    set0And8(swapAndShift) {
        this.swap0 = swapAndShift;
        this.shift8 = swapAndShift;
    }
    setCanStack(canStack) {
        this.canStack = canStack;
    }
    setWillAlwaysDraw(willAlwaysDraw) {
        this.willAlwaysDraw = willAlwaysDraw;
    }
    setPlayAfterDraw(playAfterDraw) {
        this.playAfterDraw = playAfterDraw;
    }
}

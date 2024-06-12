export default class Settings {

    private swap0: boolean;
    private shift8: boolean;
    private canStack: boolean;
    private willAlwaysDraw: boolean;
    private playAfterDraw: boolean;

    public constructor() {
        this.swap0 = false;
        this.shift8 = false;
        this.canStack = false;
        this.willAlwaysDraw = false;
        this.playAfterDraw = false;
    }

    public getSwap0(): boolean {
        return this.swap0;
    }

    public getShift8(): boolean {
        return this.shift8;
    }

    public getCanStack(): boolean {
        return this.canStack;
    }

    public getWillAlwaysDraw(): boolean {
        return this.willAlwaysDraw;
    }

    public getPlayAfterDraw(): boolean {
        return this.playAfterDraw;
    }

    public set0And8(swapAndShift: boolean) {
        this.swap0 = swapAndShift;
        this.shift8 = swapAndShift;
    }

    public setCanStack(canStack: boolean) {
        this.canStack = canStack;
    }

    public setWillAlwaysDraw(willAlwaysDraw: boolean) {
        this.willAlwaysDraw = willAlwaysDraw;
    }

    public setPlayAfterDraw(playAfterDraw: boolean) {
        this.playAfterDraw = playAfterDraw;
    }
}

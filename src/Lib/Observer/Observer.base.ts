class ObserverBase {
    target: any = null
    observe_to: string = null

    callback: any[]

    constructor() {
    }


    private CallCbcks() {

    }

    public Watch() {
        if(this.target instanceof HTMLElement) {
            this.callback.forEach(cb => cb())
        }
    }

    public setObserver(target:any, observe_to:string) {
        this.target = target;
        this.observe_to = observe_to;
    }

    public addCallback(callback: () => void) {
        this.callback.push(callback)
    }
    public clearAllCbcks() {
        this.callback = [];
    }
}
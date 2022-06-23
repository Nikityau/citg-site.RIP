export class ObserverBase {
    target: HTMLElement = null
    observe_to: string = null

    state: string = null;

    callback: any[] = []

    timeout: NodeJS.Timeout = null

    constructor() {
        this.Watch = this.Watch.bind(this)
    }


    private CallCbcks() {
        this.callback.forEach(cb => cb())
    }

    public Watch() {
        if(!this.target) return

        if(this.target instanceof HTMLElement) {
            const state = this.target[this.observe_to]
            if(this.state != state) {
                this.state = state;
                this.CallCbcks()
            }
        }

        setTimeout(this.Watch, 500)
    }
    public StopWatch() {
        clearTimeout(this.timeout)
    }

    public setObserver(target:any, observe_to:string) {
        this.target = target;
        this.observe_to = observe_to;

        this.state = this.target[this.observe_to]
    }

    public addCallback(callback: () => void) {
        this.callback.push(callback)
    }
    public clearAllCbcks() {
        this.callback = [];
    }
}
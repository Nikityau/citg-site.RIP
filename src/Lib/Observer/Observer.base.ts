export class ObserverBase {
    target: HTMLElement = null
    observe_to: string = null

    state: string = null;

    callback: any[] = []

    timeout: NodeJS.Timeout = null

    constructor() {
        this.Watch = this.Watch.bind(this)
    }


    private async CallCbcks() {
       await this.callback.forEach(async cb => await cb())
    }

    public async Watch() {
        if(!this.target) return

        if(this.target instanceof HTMLElement) {
            const state = await this.target[this.observe_to]
            if(this.state != state) {
                this.state = state;
                await this.CallCbcks()
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
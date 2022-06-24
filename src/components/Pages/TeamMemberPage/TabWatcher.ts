export class TabWatcher {
    static callbacks: any[] = []

    static CallCbks() {
        TabWatcher.callbacks.map(cb => cb())
    }

    static AddCallback(cb: () => void) {
        TabWatcher.callbacks.push(cb)
    }

}
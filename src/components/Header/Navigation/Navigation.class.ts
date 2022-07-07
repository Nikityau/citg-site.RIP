export type TLocation = 'home' | 'projects' | 'team' | 'undef'
export interface ICoords {
  x:number,
  y:number
}

export class NavigationClass {
    private circle: HTMLElement | null = null;

    private home: HTMLElement | null = null;
    private middle: HTMLElement | null = null;
    private end: HTMLElement | null = null;

    private additionalTopOffset = 15;

    constructor(
        circle: HTMLElement | null,
        home: HTMLElement | null,
        middle: HTMLElement | null,
        end: HTMLElement | null,
        location: TLocation
    ) {
        this.circle = circle;

        this.home = home;
        this.middle = middle;
        this.end = end;

        this.Change(location);
    }

    private ChangePos(el: HTMLElement): Promise<ICoords> {
        return new Promise((resolve) => {
            resolve({
                x: el.offsetLeft + el.clientWidth / 2 - this.circle.clientWidth / 2,
                y: el.offsetTop + el.clientHeight / 2 + this.additionalTopOffset,
            });
        });
    }

    private async ToHome() {
        if (!this.home || !this.circle) return;

        const pos = await this.ChangePos(this.home);

        await this.SetByPos(pos)
    }

    private async ToMiddle() {
        if (!this.middle || !this.circle) return;

        const pos = await this.ChangePos(this.middle);

        await this.SetByPos(pos)
    }

    private async ToEnd() {
        if (!this.end || !this.circle) return;

        const pos = await this.ChangePos(this.end);
        await this.SetByPos(pos)
    }

    private async SetByPos(pos) {
        this.circle.style.left = pos.x  + "px";
        this.circle.style.top = pos.y + "px";
    }

    public async Change(location: TLocation) {
        switch (location) {
            case "home":
                await this.ToHome()
                return
            case "projects":
                await this.ToMiddle()
                return
            case "team":
                await this.ToEnd()
                return
            default:
                await this.ToHome()
                return
        }
    }

    public AddLinks(circle: HTMLElement, home: HTMLElement, middle: HTMLElement, end: HTMLElement) {
        this.circle = circle;

        this.home = home;
        this.middle = middle;
        this.end = end;
    }
}

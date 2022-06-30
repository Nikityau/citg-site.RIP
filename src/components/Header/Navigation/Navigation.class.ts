import * as http from "http";

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
    location: string
  ) {
    this.circle = circle;

    this.home = home;
    this.middle = middle;
    this.end = end;

    this.Change(location);
  }

  private ChangePos(el: HTMLElement): Promise<{ x: number; y: number }> {
    return new Promise((resolve) => {
      resolve({
        x: el.offsetLeft + el.clientWidth / 2,
        y: el.offsetTop + el.clientHeight / 2,
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
    this.circle.style.transform = `translate(${pos.x - this.circle.clientWidth / 2}px, ${pos.y / 4}px)`
   /* this.circle.style.left = await (pos.x - this.circle.clientWidth / 2 + "px");
    this.circle.style.top = await (pos.y + this.additionalTopOffset + "px");*/
  }

  public async Change(location: string) {
    if (location.includes("home")) {
      await this.ToHome();
      return;
    }

    if (location.includes("projects")) {
      await this.ToMiddle();
      return;
    }

    if (location.includes("team")) {
      await this.ToEnd();
      return;
    }

    await this.ToHome();
    return;
  }
  public AddLinks(circle: HTMLElement, home: HTMLElement, middle: HTMLElement, end: HTMLElement) {
    this.circle = circle;

    this.home = home;
    this.middle = middle;
    this.end = end;
  }
}

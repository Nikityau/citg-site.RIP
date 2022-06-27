import { IAnimationInterface } from "../AnimationBase/Animation.interface";

export class AnimationLevitation implements IAnimationInterface {
  element: HTMLElement;
  timeout: NodeJS.Timeout = global.setTimeout(() => { return }, 0);
  delay: number;
  private border: number;
  private coeff: number;
  private coeffIncrease: number;

  public constructor(element: HTMLElement, border = 20, delay = 50, coeffInc = 1) {
    this.element = element;
    this.delay = delay;
    this.border = border;
    this.coeff = border;
    this.coeffIncrease = coeffInc;

    this.ClearInterval = this.ClearInterval.bind(this)
    this.Stop = this.Stop.bind(this)
  }

  private GoUp() {
    this.timeout = setInterval(async () => {
      this.coeff -= await (this.coeffIncrease);

      this.element.style.top = await (Number.parseFloat(this.element.style.top) -
        this.coeff +
        "px");

      if (this.coeff <= 1) {
        this.ClearInterval();
        this.DefaultCoeff();
        await this.GoDown();
      }
    }, this.delay);
  }
  private GoDown() {
    this.timeout = setInterval(async () => {
      this.coeff -= await (this.coeffIncrease);

      this.element.style.top = await (Number.parseFloat(this.element.style.top) +
        this.coeff +
        "px");

      if (this.coeff <= 1) {
        this.ClearInterval();
        this.DefaultCoeff();
        await this.GoUp();
      }
    }, this.delay);
  }
  private ClearInterval() {
    clearInterval(this.timeout);
  }
  private DefaultCoeff() {
    this.coeff = this.border;
  }

  async Start(): Promise<void>{
    await this.GoUp();
  }
  Stop(): void {
    this.ClearInterval();
  }
}

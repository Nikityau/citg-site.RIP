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
  }

  private GoUp() {
    /*return new Promise((resolve) => {

      const Up = async () => {
        console.log('up')
        if(this.coeff <= 1) {
          this.DefaultCoeff();
          return resolve(true)
        }

        this.coeff = this.coeff - this.coeffIncrease;

        this.element.style.top = Number.parseFloat(this.element.style.top) - this.coeff + 'px';

        setTimeout(async () => {
          requestAnimationFrame(() => {
            Up()
          });
        }, this.delay)
      }
      requestAnimationFrame(() => {
        Up()
      })
    })*/

    this.timeout = setInterval(async () => {
      this.coeff -= await this.coeffIncrease;

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
    /* return new Promise( (resolve) => {
      const Up = async () => {
        if(this.coeff <= 1) {
          this.DefaultCoeff();
          return resolve(false);
        }

        this.coeff = this.coeff - this.coeffIncrease;

        this.element.style.top = Number.parseFloat(this.element.style.top) + this.coeff + 'px';

        setTimeout(async () => {
          requestAnimationFrame(() => {
            Up()
          })
        }, this.delay)
      }
      requestAnimationFrame(() => {
        Up()
      })
    })*/

    this.timeout = setInterval(async () => {
      this.coeff -= await this.coeffIncrease;

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

  /*async AnimStart() {
    try {
      console.log('start')
      await this.GoUp();
      console.log('after up')
      await this.GoDown();
      console.log('after down')

      setTimeout(() => {
        console.log('repeat')
        this.AnimStart()
      }, this.delay)
    } catch (e) {
      Logger.Error('smth went wrong')
    }
  }*/

  Start(): NodeJS.Timeout {
    this.GoUp();

    return this.timeout;
  }
  Stop(): void {
    this.ClearInterval();
  }
}

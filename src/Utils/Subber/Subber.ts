import { TypeEvent } from "./Subber.TypeEvent.enum";

export class Subber {
  static async Subb(el: HTMLElement, typeEvent: TypeEvent, listener: (ev: Event) => any) {
    await el.addEventListener(typeEvent, listener);
  }
  static async Unsubb(el: HTMLElement, typeEvent: TypeEvent, listener: (ev: Event) => any) {
    await el.removeEventListener(typeEvent, listener);
  }
}

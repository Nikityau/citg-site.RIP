export enum EventType {
  AUTOPLAY = "autoplay",
  ARROWS = "arrows",
  SWIPE = "swipe",
}

export type onChangeIndex = (i: number, event: EventType) => void;

export interface IAnimationInterface {
  element: HTMLElement;
  timeout: NodeJS.Timeout;
  delay: number;

  Start(): NodeJS.Timeout;
  Stop(): void;
}

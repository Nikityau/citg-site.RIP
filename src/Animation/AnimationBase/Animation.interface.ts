export interface IAnimationInterface {
  element: HTMLElement;
  timeout: NodeJS.Timeout;
  delay: number;

  Start(): Promise<void>;
  Stop(): void;
}

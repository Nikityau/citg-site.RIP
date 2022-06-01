export class Logger {
  static Success(message: string): void {
    console.log("SUCCESS", message);
  }
  static Warning(message: string): void {
    console.warn("WARNING", message);
  }
  static Error(message: string): void {
    console.error("ERROR", message);
  }
  static Info(message: any): void {
    console.log("INFO", message);
  }
}

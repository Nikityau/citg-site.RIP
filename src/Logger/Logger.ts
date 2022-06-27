export class Logger {
    static async Success(message: string) {
        await console.log("SUCCESS", message);
    }

    static async Warning(message: string) {
        await console.warn("WARNING", message);
    }

    static async Error(message: string) {
        await console.error("ERROR", message);
    }

    static async Info(message: any) {
        await console.log("INFO", message);
    }
}

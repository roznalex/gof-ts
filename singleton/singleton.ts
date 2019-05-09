export class Logger {
  private static instance: Logger

  private constructor() {}

  public static getLogger(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }

    return Logger.instance
  }

  public log(str: string): void {
    console.log(str)
  }
}

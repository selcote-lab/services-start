export class LoggingService {
  logStateChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}

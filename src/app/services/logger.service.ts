import { Injectable } from '@angular/core';

export interface Logger {
  info(msg: string): void;
  warn(msg: string): void;
  error(msg: string): void;
}

@Injectable({ providedIn: 'root' })
export class LoggerService implements Logger {
  info(msg: string): void {
    console.log(msg);
  }
  warn(msg: string): void {
    console.warn(msg);
  }
  error(msg: string): void {
    console.error(msg);
  }
}

@Injectable({ providedIn: 'root' })
export class Logger2Service implements Logger {
  info(msg: string): void {
    const ts = new Date().toISOString();
    console.log(ts + ' ' + msg);
  }
  warn(msg: string): void {
    const ts = new Date().toISOString();
    console.warn(ts + ' ' + msg);
  }
  error(msg: string): void {
    const ts = new Date().toISOString();
    console.error(ts + ' ' + msg);
  }
}

@Injectable({ providedIn: 'root' })
export class MockLoggerService implements Logger {
  info(msg: string): void {}
  warn(msg: string): void {}
  error(msg: string): void {}
}

import express, { Express } from 'express';
import healthRouter from './routes/health/health-router';

class App {
  _express: Express;

  constructor() {
    this._express = express();
    this.init();
  }

  private init (): void {
    this._express.use(`/api/health`, healthRouter);
  }
}

export default new App()._express;
import express, { Express } from 'express';
import healthRouter from './routes/health/health-router';
import authorRouter from './routes/author/author-router';

class App {
  _express: Express;

  constructor() {
    this._express = express();
    this.init();
  }

  private init (): void {
    this._express.use(`/api/health`, healthRouter);
    this._express.use(`/api/author`, authorRouter);
  }
}

export default new App()._express;
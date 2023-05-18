import express, { Router, Response } from "express";

export class BaseRouter {
    _router: Router;

    constructor() {
        this._router = express.Router();
    }
}

export default new BaseRouter()._router;
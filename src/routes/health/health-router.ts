import { BaseRouter } from "../base-router";

import getHealth from './get-health';

class HealthRouter extends BaseRouter {
    constructor() {
        super();
        this.init();
    }

    private init() {
        this._router.get('/', getHealth);
    }
}

export default new HealthRouter()._router;
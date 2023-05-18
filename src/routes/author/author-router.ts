import { BaseRouter } from "../base-router";

import getAuthor from './get-author';

class AuthorRouter extends BaseRouter {
    constructor() {
        super();
        this.init();
    }

    private init() {
        this._router.get('/', getAuthor);
    }
}

export default new AuthorRouter()._router;
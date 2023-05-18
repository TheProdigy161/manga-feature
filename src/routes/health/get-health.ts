import { Response, Request } from 'express';

export default (_req: Request, res: Response) => {
    res.send({ message: "Api is running." });
}
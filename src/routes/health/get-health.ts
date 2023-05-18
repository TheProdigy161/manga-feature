import { Response, Request } from 'express';

export default (_req: Request, res: Response) => {
    try {
        res.send({ message: "Hahahahah" });
    } catch (error) {
        console.log('Failed to get');
    }
}
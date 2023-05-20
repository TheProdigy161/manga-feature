import { Response, Request } from 'express';

export default (_req: Request, res: Response) => {
    res.status(200).json({success: true, data: 'Api is running.' });
}
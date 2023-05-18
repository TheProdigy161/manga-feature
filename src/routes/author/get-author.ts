import { Response, Request } from 'express';
import { Author } from '../../models/author.model';
import { DateTime } from 'luxon';

export default (_req: Request, res: Response) => {
    try {
        res.send(new Author({
            forename: 'Ross',
            surname: 'Bratton',
            birthday: DateTime.utc(),
            summary: 'This is the summary.'
        }));
    } catch (err) {
        res.send({ error: 'Failed to get author.' })
    }
}
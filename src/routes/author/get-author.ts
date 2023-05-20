import { Response, Request } from 'express';
import { Author } from '../../models/author/author.model';
import { DateTime } from 'luxon';

export default (req: Request<{id: string}>, res: Response) => {
    try {
        const { id } = req.params;

        const author: Author = new Author({
            id,
            forename: 'Ross',
            surname: 'Bratton',
            birthday: DateTime.utc(),
            summary: 'This is the summary.'
        })

        res.status(200).json({success: true, data: author });
    } catch (err) {
        res.status(404).json({ success: false, error: 'Failed to get author.' });
    }
}
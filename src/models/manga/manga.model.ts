import { DateTime } from 'luxon';
import { v4 as uuid } from 'uuid';
import { Author } from '../author/author.model';

export class Manga {
    id?: string = uuid();
    name: string;
    summary: string;
    releaseDate: DateTime;
    finishDate?: DateTime;
    image?: Blob;

    author: Author;

    constructor(data?: Manga) {
        if (!data) 
            return;
            
        this.id = data.id;
        this.name = data.name;
        this.summary = data.summary;
        this.releaseDate = data.releaseDate;
        this.image = data.image;

        this.author = data.author;
    }
}
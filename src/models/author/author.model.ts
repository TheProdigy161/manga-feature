import { DateTime } from 'luxon';
import { v4 as uuid } from 'uuid';
import { Manga } from '../manga/manga.model';

export class Author {
    id?: string = uuid();
    forename: string;
    surname: string;
    pseudonym?: string;
    summary: string;
    birthday: DateTime;
    image?: Blob;

    mangas: Manga[] = []; 

    constructor(data?: Author) {
        if (!data)
            return;
            
        this.id = data.id;
        this.forename = data.forename;
        this.surname = data.surname;
        this.pseudonym = data.pseudonym;
        this.summary = data.summary;
        this.birthday = data.birthday;
        this.image = data.image;
    }
}
import { DateTime } from 'luxon';

export class Author {
    forename: string;
    surname: string;
    summary: string;
    birthday: DateTime;

    constructor(data?: Author) {
        if (!data)
            return;

        this.forename = data.forename;
        this.surname = data.surname;
        this.summary = data.summary;
        this.birthday = data.birthday;
    }
}
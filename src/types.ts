export type Address = {
    streetNumber: string;
    streetName: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
}

export type ContactInfo = {
    email: string;
    phoneNumber: string;
}

export type Item = {
    id: string;
    name: string;
}

export type MusicAlbum = Item & {
    artist: string;
}

export type Book = Item & {
    author: string;
    publisher: string;
}
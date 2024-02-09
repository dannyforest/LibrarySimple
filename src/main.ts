import Library from "./models/Library";
import Shelf from "./models/Shelf";
import Member from "./models/Member";
import {Book} from "./types";

const library = new Library("St-Henri");
library.address = {
    city: "Paris",
    country: "France",
    streetNumber: "123",
    streetName: "Rue de la paix",
    province: "Paris",
    postalCode: "75001"
}

library.contactInfo = {
    email: "info@library.com",
    phoneNumber: "0123456789",
}

// Sequence 1:  Add a book to the library
const harryPotterBook: Book = {
    id: "1",
    name: "Harry Potter",
    author: "J.K. Rowling",
    publisher: "Bloomsbury"
}
const bookShelf = new Shelf();
bookShelf.addItem(harryPotterBook);
library.addShelf(bookShelf);

// Sequence 2:  Add a member to the library and loan item
const newMember = new Member("1", "Danny");
library.addMember(newMember);

library.loadItemToMember(newMember, harryPotterBook);
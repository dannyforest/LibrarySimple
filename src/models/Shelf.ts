import {Book, Item, MusicAlbum} from "../types";

export default class Shelf {
    capacity: number = 100;
    items: Item[] = [];

    constructor(capacity: number = 100) {
        this.capacity = capacity;
    }

    /**
     * Adds an item to the shelf.
     *
     * @param {Item} item - The item to be added.
     * @throws {Error} Throws an error if the shelf is already full.
     */
    addItem(item: Item | Book | MusicAlbum): void {
        if (this.items.length < this.capacity) {
            this.items.push(item);
        } else {
            throw new Error('Shelf is full');
        }
    }

    /**
     * Removes an item from the shelf.
     *
     * @param {Item} item - The item to be removed.
     *
     * @return {void}
     */
    removeItem(item: Item): void {
        this.items = this.items.filter(i => i.id !== item.id); // Remove the item from the shelf.
    }
}
import Member from "./Member";
import Shelf from "./Shelf";
import {Address, ContactInfo, Item} from "../types";

export default class Library {
    public address?: Address;
    public contactInfo?: ContactInfo;

    constructor(name: string, maxShelfCapacity: number = 100, address?: Address, contactInfo?: ContactInfo) {
        this.name = name;
        this.maxShelfCapacity = maxShelfCapacity;
        this.address = address;
        this.contactInfo = contactInfo;
    }

    /**
     * Loads an item to a member.
     *
     * @param {Member} member - The member to load the item to.
     * @param {Item} item - The item to be loaded to the member.
     * @return {boolean} - True if the item was successfully loaned to the member, false otherwise.
     */
    public loadItemToMember(member: Member, item: Item): boolean {
        // TODO: Find shelf that contains the item
        // TODO: Remove from shelf
        const couldLoan = member.loanItem(item);

        if (!couldLoan) {
            // TODO: Return item to shelf

            return false;
        }

        return true; // Return true if the item was successfully loaned. This is useful for testing.
    }

    /**
     * Returns the item from a member and adds it to the unshelved items list.
     *
     * @param {Item} item - The item to be returned.
     * @param {Member} member - The member who is returning the item.
     *
     * @return {void}
     */
    public returnItem(item: Item, member: Member): void {
        member.returnItem(item);
        this.unshelvedItems.push(item); // Add item to unshelvedItems list.
    }

    /**
     * Returns an array of unshelved items.
     *
     * @return {Item[]} Array of unshelved items.
     */
    public getUnshelvedItems(): Item[] {
        return this.unshelvedItems;
    }

    /**
     * Adds an item to the specified shelf.
     *
     * @param {Shelf} shelf - The shelf to add the item to.
     * @param {Item} item - The item to be added to the shelf.
     *
     * @return {void}
     */
    public addItemToShelf(shelf: Shelf, item: Item): void {
        shelf.addItem(item);
    }

    /**
     * Returns the name of the object.
     *
     * @return {string} The name of the object.
     */
    public getName() {
        return this.name;
    }

    /**
     * Adds a member to the list of members
     *
     * @param {Member} member - The member to be added
     */
    public addMember(member: Member) {
        this.members.push(member);
    }

    /**
     * Removes a member from the array of members.
     *
     * @param {Member} member - The member to be removed.
     * @return {Member[]} - The updated array of members after removing the specified member.
     */
    public removeMember(member: Member): Member[] {
        this.members = this.members.filter(m => m !== member);
        return this.members;
    }

    /**
     * This method returns the members of the object.
     *
     * @return {Array} The array containing the members.
     */
    public getMembers() {
        return this.members;
    }

    /**
     * Adds a shelf to the library.
     *
     * @param {Shelf} shelf - The shelf to be added.
     *
     * @return {void}
     */
    public addShelf(shelf: Shelf) {
        if (this.shelves.length < this.maxShelfCapacity) {
            this.shelves.push(shelf);
        }
    }

    public removeShelf(shelf: Shelf): Shelf[] {
        this.shelves = this.shelves.filter(s => s !== shelf);
        return this.shelves; // Return the updated list of shelfs. This is useful for testing.
    }

    public getShelfs() {
        return this.shelves;
    }


    private maxShelfCapacity = 10; // Maximum number of shelves that can fit in the library
    private name: string;
    private members: Member[] = [];
    private shelves: Shelf[] = [];
    private unshelvedItems: Item[] = []; // Items that have been returned to the library but not yet shelved.
}
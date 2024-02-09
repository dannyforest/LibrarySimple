import {Address, ContactInfo, Item} from "../types";

export default class Member {
    static readonly MAX_LOAN_COUNT = 5;

    id: string;
    name: string;
    address?: Address; // optional
    contactInfo?: ContactInfo;

    constructor(id: string, name: string, address?: Address, contactInfo?: ContactInfo) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.contactInfo = contactInfo;
        this.loanedItems = [];
    }

    /**
     * Retrieves the list of loaned items.
     *
     * @return {Array} The array of loaned items.
     */
    public getLoanedItems() {
        return this.loanedItems;
    }

    /**
     * Loan an item to a member.
     *
     * @param {Item} item - The item to be loaned.
     *
     * @return {void}
     */
    loanItem(item: Item): boolean {
        if (this.loanedItems.length < Member.MAX_LOAN_COUNT) {
            this.loanedItems.push(item);

            return true;
        }

        return false;
    }

    /**
     * Remove the specified item from the loanedItems list.
     *
     * @param {Item} item - The item to be returned.
     * @return {Item[]} - The updated list of loaned items after removing the specified item.
     */
    returnItem(item: Item): Item[] {
        this.loanedItems = this.loanedItems.filter(i => i.id !== item.id);
        return this.loanedItems; // Return the updated list of loaned items. This is useful for testing.
    }

    private loanedItems: Item[] = [];
}
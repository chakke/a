import { Airport } from '../classes/airport';

export class AirportController {
    mItems: Map<string, Airport> = new Map<string, Airport>();
    constructor() { }
    /** Load data from file */
    onResponseData(data) {
        if (data && data.data) {
            this.mItems.clear();
            for (let itemData of data.data) {
                let item = this.getItem(itemData.code);
                if (!item) {
                    item = new Airport(itemData);
                    this.mItems.set(item.getCode(), item);
                }
            }
        }
    }

    /**Lay ve currency theo id, tra ve null neu khong co trong du lieu */
    getItem(code: string) {
        if (this.mItems.has(code)) return this.mItems.get(code);
        return null;
    }

    getItems() {
        return this.mItems.values();
    }
}
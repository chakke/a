import { Country } from '../classes/country';

export class CountryController {
    mItems: Map<string, Country> = new Map<string, Country>();
    constructor() { }
    /** Load data from file */
    onResponseData(data) {
        if (data && data.countries) {
            this.mItems.clear();
            for (let itemData of data.countries) {
                let item = this.getItem(itemData.code);
                if (!item) {
                    item = new Country(itemData.value, itemData.display, itemData.display, "assets/qbtkt/countries/" + itemData.national_flag);
                    this.mItems.set(item.id, item);
                }
            }
        }
    }

    /**Lay ve currency theo id, tra ve null neu khong co trong du lieu */
    getItem(code: string) {
        if (this.mItems.has(code)) return this.mItems.get(code);
        return null;
    }

    public hasData() {
        return Object.keys(this.mItems).length > 0;
    }

    getItems() {
        return this.mItems.values();
    }
}
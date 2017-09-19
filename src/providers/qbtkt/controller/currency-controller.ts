import { Currency } from '../classes/currency';

export class CurrencyController {

    mItems: Map<string, Currency> = new Map<string, Currency>();

    constructor() {

    }
    /** Load data from file */
    onResponseData(data) {
        if (data && data.data) {
            this.mItems.clear();
            for (let currencyData of data.data) {
                let currency = this.getItem(currencyData.currencyId);
                if (!currency) {
                    currency = new Currency(currencyData);
                    this.mItems.set(currency.getID(), currency);
                }
            }
        }
    }

    /**Lay ve currency theo id, tra ve null neu khong co trong du lieu */
    getItem(currencyID: string) {
        if (this.mItems.has(currencyID)) return this.mItems.get(currencyID);
        return null;
    }

    getItems() {
        return this.mItems.values();
    }

}
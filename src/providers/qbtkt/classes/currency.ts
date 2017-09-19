export class Currency {
    id: string = "";
    name: string = "";
    numOfDecimalPoint: number = 0;

    constructor(data?){
        if(data) this.onCurrencyData(data);
    }
    onCurrencyData(data) {
        if (data.currencyID) this.id = data.currencyID;
        if (data.currencyLongName) this.name = data.name;
        if (data.numOfDecimalPoint) this.numOfDecimalPoint = data.numOfDecimalPoint;
    }

    getID(): string {
        return this.id;
    }
}
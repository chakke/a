export class Airport {
    code: string = "";
    name: string = "";
    location: string = "";
    shortLocation: string = "";
    tzMinuteOffset: number = -1;
    uniqueUrlName: string = "";
    domesticTax: number = -1;
    internationalTax: number = -1;
    keyCity: boolean = false;
    country: string = "";

    constructor(data?) {
        if (data) {
            this.onAirportData(data);
        }
    }
    getCode() {
        return this.code;
    }
    onAirportData(data) {
        if (!data) return;
        if (data.code) this.code = data.code;
        if (data.name) this.name = data.name;
        if (data.location) this.location = data.location;
        if (data.shortLocation) this.shortLocation = data.shortLocation;
        if (data.tzMinuteOffset) this.tzMinuteOffset = data.tzMinuteOffset;
        if (data.keyCity) this.keyCity = data.keyCity;
        if (data.uniqueUrlName) this.uniqueUrlName = data.uniqueUrlName;
        if (data.domesticTax) this.domesticTax = data.domesticTax;
        if (data.internationalTax) this.internationalTax = data.internationalTax;
        if (data.country) this.country = data.country;
    }
}
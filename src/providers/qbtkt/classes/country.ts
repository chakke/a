export class Country {
    id: string = "";
    internationalName: string = "";
    vietNameseName: string = "";
    nationalFlag: string = "";
    constructor(id: string, internationalName: string, vietNameseName?: string, nationalFlag?: string) {
        this.id = id;
        this.internationalName = internationalName;
        if (vietNameseName) this.vietNameseName = vietNameseName;
        if (nationalFlag) this.nationalFlag = nationalFlag;
    }
}
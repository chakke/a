
import { Injectable } from '@angular/core';
import { HttpService } from "../http-service";
import { QBTicketingHttpService } from "./qbtkt-http-service";
import { QBTicketingConfig } from "./qbtkt-config";
import { CountryController } from "./controller/country-controller";
@Injectable()
export class QBTicketingModule {
    private mQBTicketingHttpService: QBTicketingHttpService;

    private mConfig: QBTicketingConfig;
    private mCountryController: CountryController;
    constructor(private mHttpService: HttpService) {

        this.mQBTicketingHttpService = new QBTicketingHttpService(mHttpService);
        this.mConfig = new QBTicketingConfig();
        this.mCountryController = new CountryController();
    }

    /**===================Get Functions=================== */
    getHttpService() {
        return this.mQBTicketingHttpService;
    }
    getAppConfig() {
        return this.mConfig;
    }
    getCountries(){
        return this.mCountryController;
    }
    loadConfig() {
        return new Promise((resolve, reject) => {
            if (this.mConfig.hasData()) {
                resolve();
            } else {
                this.mHttpService.getHttp().request("assets/config/qbtkt.json").subscribe(
                    data => {
                        this.mConfig.onResponseConfig(data.json());
                        resolve();
                    }
                );
            }
        });
    }

    loadCountriesFlag() {
        return new Promise((resolve, reject) => {
            if (this.mCountryController.hasData()) {
                resolve();
            } else {
                this.mHttpService.getHttp().request("assets/qbtkt/data/countries.json").subscribe(
                    data => { 
                        this.mCountryController.onResponseData(data.json());
                        resolve();
                    }
                );
            }
        });
    }
    onResponseAirports(data) {

    }
    onResponseAirlines(data) {

    }
    onResponseCountry(data) {

    }
    onResponseCurrency(data) {

    }
    onUpdate() {

    }

}




import { Injectable } from '@angular/core';
import { HttpService } from "../http-service";
import { QBTicketingHttpService } from "./qbtkt-http-service";
import { QBTicketingConfig } from "./qbtkt-config";
@Injectable()
export class QBTicketingModule {
    private mQBTicketingHttpService: QBTicketingHttpService;

    private mConfig: QBTicketingConfig;
    constructor(private mHttpService: HttpService) {

        this.mQBTicketingHttpService = new QBTicketingHttpService(mHttpService);
        this.mConfig = new QBTicketingConfig();
    }

    /**===================Get Functions=================== */
    getHttpService() {
        return this.mQBTicketingHttpService;
    }
    getAppConfig() {
        return this.mConfig;
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



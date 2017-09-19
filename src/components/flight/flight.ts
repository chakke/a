import { Component ,Input} from '@angular/core';

@Component({
  selector: 'flight',
  templateUrl: 'flight.html'
})
export class FlightComponent {
  @Input("src") src : string = "";
  @Input("description") description : string = "";
  

  constructor() {
   
  }

}

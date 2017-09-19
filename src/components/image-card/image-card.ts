import { Component ,Input} from '@angular/core';

@Component({
  selector: 'image-card',
  templateUrl: 'image-card.html'
})
export class ImageCardComponent {
  @Input("src") src : string = "";
  @Input("description") description : string = "";
  

  constructor() {
   
  }

}

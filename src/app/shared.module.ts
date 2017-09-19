import { NgModule } from '@angular/core';

//component
import { NumberPickerComponent } from '../components/number-picker/number-picker';
import { ScrollToTopComponent } from '../components/scroll-to-top/scroll-to-top';

//directive
import { CollapseDirective } from '../directives/collapse.directive'

@NgModule({
  declarations: [
    NumberPickerComponent,
    ScrollToTopComponent,
    CollapseDirective
  ],
  exports: [
    NumberPickerComponent,
    ScrollToTopComponent,
    CollapseDirective
  ]
})
export class SharedModule { }

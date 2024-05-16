import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {WidgetModel} from './widget/widget.model';

import {IndexComponent} from './index.component';
import {ComponentComponent} from './component.component';


@NgModule({
  declarations: [
    IndexComponent,
    ComponentComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    WidgetModel,
  ],
  exports: [
    IndexComponent,
    ComponentComponent
  ]
})
export class PageModule {
}

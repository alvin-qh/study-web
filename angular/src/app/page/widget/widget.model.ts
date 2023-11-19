import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CardModule} from './card.module';

import {NavbarComponent} from './navbar.component';
import {BreadcrumbComponent} from './breadcrumb.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    CardModule
  ],
  exports: [
    CardModule,
    NavbarComponent,
    BreadcrumbComponent
  ]
})
export class WidgetModel {
}

import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-widget-card',
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>`
})
export class CardComponent {
}

@Component({
  selector: 'app-widget-card-header',
  template: `
    <div [ngClass]="{'card-header': true, 'bg-dark text-white': darkMode}">
      <ng-content></ng-content>
    </div>`
})
export class CardHeaderComponent {
  @Input('dark-mode') darkMode = false;
  @Input('title') title = '';
}

@Component({
  selector: 'app-widget-card-body',
  template: `
    <div class="card-body">
      <ng-content></ng-content>
    </div>`
})
export class CardBodyComponent {
}


@Component({
  selector: 'app-widget-card-footer',
  template: `
    <div [ngClass]="{'card-footer': true, 'bg-dark text-white': darkMode}">
      <ng-content></ng-content>
    </div>`
})
export class CardFooterComponent {
  @Input('dark-mode') darkMode = false;
}

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent
  ]
})
export class CardModule {
}

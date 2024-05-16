import {Component, Input} from '@angular/core';


declare interface BreadcrumbLevel {
  href: string;
  title: string;
}

@Component({
  selector: 'app-widget-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  @Input('levels') levels: BreadcrumbLevel[] = [];
  @Input('dark-mode') darkMode = true;
}

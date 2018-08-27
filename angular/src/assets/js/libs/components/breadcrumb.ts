import {Component, Input} from '@angular/core';


declare interface BreadcrumbLevel {
    href: string,
    title: string
}


@Component({
    selector: 'ng-breadcrumb',
    templateUrl: './breadcrumb.html'
})
export class NgBreadcrumbComponent {
    @Input('levels') levels: BreadcrumbLevel[] = [];
    @Input('dark-mode') darkMode: boolean = true;
}

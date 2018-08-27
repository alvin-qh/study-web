import {Component, Input, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'ng-card',
    template: `
        <div class="card">
            <ng-content></ng-content>
        </div>`
})
class NgCardComponent {
}

@Component({
    selector: 'ng-card-header',
    template: `
        <div [ngClass]="{'card-header': true, 'bg-dark text-white': darkMode}">
            <ng-content></ng-content>
        </div>`
})
class NgCardHeaderComponent {
    @Input('dark-mode') darkMode: boolean = false;
    @Input('title') title: string = '';
}

@Component({
    selector: 'ng-card-body',
    template: `
        <div class="card-body">
            <ng-content></ng-content>
        </div>`
})
class NgCardBodyComponent {
}


@Component({
    selector: 'ng-card-footer',
    template: `
        <div [ngClass]="{'card-footer': true, 'bg-dark text-white': darkMode}">
            <ng-content></ng-content>
        </div>`
})
class NgCardFooterComponent {
    @Input('dark-mode') darkMode: boolean = false;
}

const modules = [NgCardComponent, NgCardHeaderComponent, NgCardBodyComponent, NgCardFooterComponent];

@NgModule({
    declarations: modules,
    imports: [CommonModule],
    exports: modules
})
export class NgCardModule {
}
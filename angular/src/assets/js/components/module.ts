import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from "./index";
import {NgCardModule} from "./comp.card"


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgCardModule,
        RouterModule.forRoot([
            // { path: '', component: ProductListComponent },
        ])
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class IndexModule {
}
import "../../css/components/index.less";

import {AfterViewInit, Component, DoCheck} from "@angular/core";
import {createNgRoot} from "../common/common";
import {NgBreadcrumbComponent} from "../libs/components/breadcrumb";
import {NgCardModule} from "./card";
import hljs from "highlight.js";

declare interface User {
    name?: string,
    gender?: 'M' | 'F',
    role?: string,
    remark?: string
}

@Component({
    selector: 'ng-index',
    templateUrl: './index.html'
})
class AppComponent implements AfterViewInit, DoCheck {
    breadcrumbLevels = [
        {href: '../', title: 'Home'},
        {title: 'Components'}
    ];

    user: User = {
        name: '',
        gender: 'F',
        role: 'TEACHER',
        remark: ''
    };

    constructor() {
        hljs.initHighlightingOnLoad();
    }

    display() {
        const element = document.querySelector('.hljs.json');
        if (element != null) {
            (<HTMLElement>element).innerText = JSON.stringify(this.user, null, '    ');
            hljs.highlightBlock(element)
        }
    }

    ngAfterViewInit(): void {
    }

    ngDoCheck(): void {
        this.display();
    }
}

createNgRoot('ng-index', [NgBreadcrumbComponent], [NgCardModule], [AppComponent]);

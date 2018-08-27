import "../../css/home/index.less";

import {Component} from "@angular/core";
import {createNgRoot} from "../common/common";
import {NgNavbar} from "../libs/components/navbar";

@Component({
    selector: 'ng-index',
    templateUrl: './index.html'
})
class AppComponent {
}

createNgRoot('ng-index', [NgNavbar], [], [AppComponent]);

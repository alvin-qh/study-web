import "../../css/common/common.less";

import "./polyfills";

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/compiler';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import 'rxjs/Observable';
import 'rxjs/Subscription';
import 'rxjs/Subject';
import 'rxjs/BehaviorSubject';

import {CompilerOptions, NgModule, NgModuleRef, Type, enableProdMode} from "@angular/core";
import {BootstrapOptions} from "@angular/core/src/application_ref";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

enableProdMode();

function startup<M>(moduleType: Type<M>, compilerOptions?: (CompilerOptions & BootstrapOptions) | Array<CompilerOptions & BootstrapOptions>): Promise<NgModuleRef<M>> {
    return platformBrowserDynamic().bootstrapModule(moduleType, compilerOptions);
}

export function createNgRoot(rootName: string, comps: any[], modules: any[], bootstraps?: any | any[]) {
    if (document.getElementsByTagName(rootName).length === 0) {
        return null;
    }

    if (!bootstraps) {
        bootstraps = comps;
    } else {
        if (!Array.isArray(bootstraps)) {
            bootstraps = [bootstraps];
        }
        comps = comps.concat(bootstraps);
    }
    modules = modules.concat(BrowserModule, FormsModule, NgbModule);

    @NgModule({
        declarations: comps,
        imports: modules,
        bootstrap: bootstraps
    })
    class AppModule {
    }

    startup(AppModule);
    return AppModule;
}
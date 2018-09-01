import React from "react";
import {render} from "react-dom";

import {runWith} from "../common/common";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

function Header() {
    // noinspection HtmlUnknownTarget
    return <header>
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="/www/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>Introduce</BreadcrumbItem>
            <BreadcrumbItem active>Hello</BreadcrumbItem>
        </Breadcrumb>
    </header>;
}

const Body = [
    <Header/>,
    <main className="container">
        <div className="text-center">
            <h1>Hello, World</h1>
        </div>
    </main>
];

runWith('intro.hello', function () {
    render(Body, document.getElementById('app'));
});
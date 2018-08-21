import React from "react";
import {render} from "react-dom";

import {runWith} from "../common/common";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

runWith('intro.hello', function () {

    function Header() {
        return <header>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/www/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/www/intro/">Introduce</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Hello
                </BreadcrumbItem>
            </Breadcrumb>
        </header>;
    }

    const Body = <div>
        <Header/>
        <main className="container">
            <div className="text-center">
                <h1>Hello, World</h1>
            </div>
        </main>
    </div>;

    render(Body, document.getElementById('app'));
});
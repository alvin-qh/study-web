import "../../css/intro/index.less";

import React from "react";
import {render} from "react-dom";
import {Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem} from 'reactstrap';

import {runWith} from "../common/common";

runWith('intro.index', function () {

    function Header() {
        return <header>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/www/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Introduce
                </BreadcrumbItem>
            </Breadcrumb>
        </header>;
    }

    const Body = <div>
        <Header/>
        <main className="container">
            <ListGroup>
                <ListGroupItem><a href="hello.html">Hello</a></ListGroupItem>
                <ListGroupItem><a href="process-control.html">Process control</a></ListGroupItem>
                <ListGroupItem><a href="component.html">Component</a></ListGroupItem>
            </ListGroup>
        </main>
    </div>;

    render(Body, document.getElementById('app'));
});
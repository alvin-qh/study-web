'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {Breadcrumb} from "react-bootstrap";

import ns from "../../common/ns";

import "../../../css/intro/index.less";

ns('intro.index', function () {

    const breadcrumb = (
        <Breadcrumb>
            <Breadcrumb.Item href="/www/">
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Introduce
            </Breadcrumb.Item>
        </Breadcrumb>
    );

    const menu = (
        <nav className="simple-menu">
            <ul>
                <li><a href="hello.html">Hello</a></li>
                <li><a href="component.html">Component</a></li>
                <li><a href="if-else.html">If / Else</a></li>
            </ul>
        </nav>
    );

    const div = (
        <div className="row">
            {breadcrumb}
            {menu}
        </div>
    );

    ReactDOM.render(div, document.getElementById('app'));
});
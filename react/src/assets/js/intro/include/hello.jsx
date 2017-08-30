'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {Breadcrumb} from "react-bootstrap";

import ns from "../../common/ns";

ns('intro.hello', function () {

    const breadcrumb = (
        <Breadcrumb>
            <Breadcrumb.Item href="/www/">
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/www/intro/">
                Introduce
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Hello
            </Breadcrumb.Item>
        </Breadcrumb>
    );

    const body = (
        <div className="row">
            {breadcrumb}

            <div className="text-center">
                <h1>Hello, World</h1>
            </div>
        </div>
    );

    ReactDOM.render(body, document.getElementById('app'));
});
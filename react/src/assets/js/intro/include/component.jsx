'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {Breadcrumb, Panel} from "react-bootstrap";

import ns from "../../common/ns";

ns('intro.component', function () {

    const PageBreadcrumb = React.createClass({
        render() {
            return (
                <Breadcrumb>
                    <Breadcrumb.Item href="/www/">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/www/intro/">
                        Introduce
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Component
                    </Breadcrumb.Item>
                </Breadcrumb>
            );
        }
    });

    const PageBody = React.createClass({
        render() {
            return (
                <Panel title>
            );
        }
    });

    const Page = React.createClass({
        render() {
            return (
                <div className="row">
                    <PageBreadcrumb/>

                </div>
            );
        }
    });

    ReactDOM.render(<Page/>, document.getElementById("app"));
});
'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {Breadcrumb} from "react-bootstrap";

import ns from "../../common/ns";

ns('intro.ifElse', function () {

    const breadcrumb = (
        <Breadcrumb>
            <Breadcrumb.Item href="/www/">
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/www/intro/">
                Introduce
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                If-Else
            </Breadcrumb.Item>
        </Breadcrumb>
    );

    const form = (
        <form className="form-horizontal">
            <div className="form-group">
                <label className="control-label col-md-1 text-right">循环次数</label>
                <div className="row col-md-2">
                    <input className="form-control" type="number"/>
                </div>
            </div>
        </form>
    );

    const body = (
        <div className="row">
            {breadcrumb}
            {form}
        </div>
    );

    ReactDOM.render(body, document.getElementById('app'));
});
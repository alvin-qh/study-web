'use strict';

import React from "react";
import ReactDOM from "react-dom";

import ns from "../common/ns";

import "../../css/home/index.less";

ns('home.index', function () {

    const menu = (
        <nav className="simple-menu">
            <ul>
                <li>
                    <a href="/www/intro/">Introduce</a>
                </li>
            </ul>
        </nav>
    );

    ReactDOM.render(
        <div className="row">{menu}</div>,
        document.getElementById('app')
    );
});
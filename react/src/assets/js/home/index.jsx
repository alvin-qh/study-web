import React from "react";
import {render} from "react-dom";

import {runWith} from "../common/common";
import NavBar from "./widgets/nav-bar";

const Body = [
    <NavBar key="header"/>,
    <main className="container" key="main">
        <div className="py-4">
            <h1>Rect Demos
                <small>How to build user interfaces with this framework.</small>
            </h1>
        </div>
        <div>
            <div className="site">
                <h4>Homepage:</h4>
                <p><a href="https://reactjs.org/" className="text-info">https://reactjs.org/</a></p>
            </div>

            <div className="site">
                <h4>Bootstrap for React:</h4>
                <p><a href="http://reactstrap.github.io/components"
                      className="text-info">http://reactstrap.github.io/components</a></p>
            </div>

            <div className="site">
                <h4>Redux: </h4>
                <p><a href="https://redux.js.org/" className="text-info">https://redux.js.org/</a></p>
                <p><a href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html"
                      className="text-info">http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html</a>
                </p>
            </div>
        </div>
    </main>
];

runWith('home.index', function () {
    render(Body, document.getElementById('app'));
});
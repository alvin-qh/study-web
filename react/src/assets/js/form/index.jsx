import "../../css/form/index.less";

import React from "react";
import {render} from "react-dom";
import {runWith} from "../common/common";
import hljs from "highlight.js";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Wrapper} from "../components/utils";

runWith('form.index', function () {

    hljs.initHighlightingOnLoad();

    function Header() {
        return <header>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/www/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Form
                </BreadcrumbItem>
            </Breadcrumb>
        </header>;
    }

    function Body() {
        return <Wrapper>
            <Header/>
            <main className="container">
            </main>
        </Wrapper>
    }

    render(<Body/>, document.getElementById('app'));
});
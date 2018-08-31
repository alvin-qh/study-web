import "../../css/form/index.less";

import React from "react";
import {render} from "react-dom";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import hljs from "highlight.js";
import {Card, Form} from "./controls/controls";
import {runWith} from "../common/common";

function Header() {
    // noinspection HtmlUnknownTarget
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
    const gender = {
        M: 'Male',
        F: 'Female'
    };

    return <React.Fragment>
        <Header/>

        <main className="container">
            <Card title="Form" dark>
                <Form className="form" cols={[1, 5]}>
                    <Form.Text label="Name:" name="name" placeholder="Please input your name"/>
                    <Form.Radio label="Gender:" name="gender" values={gender}/>
                </Form>
            </Card>
        </main>
    </React.Fragment>;
}

runWith('form.index', function () {
    hljs.initHighlightingOnLoad();
    render(<Body/>, document.getElementById('app'));
});
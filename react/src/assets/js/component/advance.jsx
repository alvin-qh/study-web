import "../../css/form/index.less";

import React from "react";
import {render} from "react-dom";
import classNames from "classnames";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

import hljs from "highlight.js";
import {Card, Form} from "./controls/controls";
import {runWith} from "../common/common";
import Button from "./controls/button";

function Header() {
    // noinspection HtmlUnknownTarget
    return <header>
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="/www/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>Component</BreadcrumbItem>
            <BreadcrumbItem active>Advance</BreadcrumbItem>
        </Breadcrumb>
    </header>;
}

class Body extends React.Component {
    static gender = {
        'M': 'Male',
        'F': 'Female'
    };

    static roles = {
        'STUDENT': 'Student',
        'TEACHER': 'Teacher'
    };

    static hobbies = {
        'READING': 'Reading',
        'SPORTING': 'Sporting',
        'GAMING': 'Gaming',
        'TRAVELING': 'Traveling',
        'COOKING': 'Cooking'
    };

    constructor() {
        super();

        this.state = {
            formCols: [3, 9],
            form: {
                data: {
                    gender: 'M',
                    role: 'TEACHER'
                }
            }
        };

        this.codePreRef = React.createRef();
    }

    componentDidMount() {
        hljs.highlightBlock(this.codePreRef.current);
    }

    componentDidUpdate() {
        hljs.highlightBlock(this.codePreRef.current);
    }

    onFormTypeChanged = e => {
        this.setState({
            formCols: e.currentTarget.value === 'inline' ? [3, 9] : null
        });
    };

    onFormSubmitted = data => {
        this.setState({
            form: data
        });
    };

    render() {
        return <React.Fragment>
            <Header/>

            <main className="container">
                <div>
                    <div className="form-group">
                        <select className="form-control form-control-sm col-2"
                                onChange={this.onFormTypeChanged}>
                            <option value="inline">Inline</option>
                            <option value="responsive">Responsive</option>
                        </select>
                    </div>
                </div>

                <Card title="Form" backStyle="primary" forceStyle="light">
                    <div className="row">
                        <div className="col">
                            <Form className="form"
                                  cols={this.state.formCols}
                                  data={this.state.form.data}
                                  onSubmit={this.onFormSubmitted}>
                                <Form.Text label="Name" name="name" placeholder="Please input your name"/>
                                <Form.Text type="number" label="Tel" name="tel"
                                           placeholder="Please input your telephone number"/>
                                <Form.Radio label="Gender" name="gender" items={Body.gender}/>
                                <Form.Select label="Role" name="role" options={Body.roles}/>
                                <Form.Checkbox label="Hobbies" name="hobbies" items={Body.hobbies}/>
                                <Form.Edit label="Remark" name="remark" rows="5" placeholder="Input some remarks"/>
                                <Button outline type="submit">
                                    <i className="fa fa-check mr-2"/>Submit
                                </Button>
                            </Form>
                        </div>
                        <div className="col code">
                            <pre className={classNames('hljs', 'json')}
                                 ref={this.codePreRef}>
                                {JSON.stringify(this.state.form.data, null, '    ')}
                            </pre>
                        </div>
                    </div>
                </Card>
            </main>
        </React.Fragment>;
    }
}

runWith('form.index', function () {
    hljs.initHighlightingOnLoad();

    render(<Body/>, document.getElementById('app'));
});
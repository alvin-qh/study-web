import "../../css/intro/component.less";

import React, {Component} from "react";
import {render} from "react-dom";
import {runWith, Times} from "../common/common";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import PropTypes from "prop-types";
import hljs from "highlight.js";
import {Wrapper} from "../components/utils";

/**
 * Create component by function
 */
function Header(props) {
    const {className, ...attributes} = props;

    // noinspection HtmlUnknownTarget
    return <header>
        <Breadcrumb className={className || ''} {...attributes}>
            <BreadcrumbItem>
                <a href="/www/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
                Component
            </BreadcrumbItem>
        </Breadcrumb>
    </header>;
}

/**
 * Create component by class
 */
class PersonCard extends Component {

    // define props types can passed in this component
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        onFormChanged: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            now: Times.nowString(),
            form: {
                name: '',
                gender: 'M',
                occu: 'STUDENT',
                remark: ''
            }
        };
        this.emitFormChanged();

        setInterval(() => {
            this.setState({
                now: Times.nowString()
            });
        }, 1000);
    }

    emitFormChanged() {
        if (this.props.onFormChanged) {
            this.props.onFormChanged(this.state.form);
        }
    }

    // onNameChanged = e => {
    //     this.setState({
    //         form: {
    //             ...this.state.form,
    //             name: e.currentTarget.value
    //         }
    //     }, () => this.emitFormChanged());
    // };
    //
    // onGenderChanged = e => {
    //     this.setState({
    //         form: {
    //             ...this.state.form,
    //             gender: e.currentTarget.value
    //         }
    //     }, () => this.emitFormChanged());
    // };
    //
    // onOccuChanged = e => {
    //     this.setState({
    //         form: {
    //             ...this.state.form,
    //             occu: e.currentTarget.value
    //         }
    //     }, () => this.emitFormChanged());
    // };
    //
    // onRemarkChanged = e => {
    //     this.setState({
    //         form: {
    //             ...this.state.form,
    //             remark: e.currentTarget.value
    //         }
    //     });
    // };

    // Use bind name
    onFormFieldChanged1 = (name, e) => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: e.currentTarget.value
            }
        }, () => this.emitFormChanged());
    };

    // Use input name property
    onFormFieldChanged2 = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.currentTarget.name]: e.currentTarget.value
            }
        }, () => this.emitFormChanged());
    };

    occupations = [{name: 'Teacher', value: 'TEACHER'}, {name: 'Student', value: 'STUDENT'}];

    render() {
        // noinspection JSUnusedLocalSymbols
        const {className, children, onFormChanged, ...attributes} = this.props;

        return <Card {...attributes} className={className}>
            <CardHeader className="bg-primary text-white"><strong>Alvin</strong></CardHeader>
            <CardBody>
                <div className="row">
                    <div className="col">
                        <form className="form">
                            <div className="form-group row">
                                <label className="col-form-label col-2 text-right">Name:</label>
                                <input className="form-control col-8" name="name"
                                       placeholder="Please input your name"
                                       onChange={this.onFormFieldChanged1.bind(this, 'name')}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-2 text-right">Gender:</label>
                                <div className="row col-8">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="gender" type="radio" value="M"
                                               checked={this.state.form.gender === 'M'}
                                               onChange={this.onFormFieldChanged1.bind(this, 'gender')}/>
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline col-6">
                                        <input className="form-check-input" name="gender" type="radio" value="F"
                                               checked={this.state.form.gender === 'F'}
                                               onChange={this.onFormFieldChanged1.bind(this, 'gender')}/>
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-2 text-right">Occu:</label>
                                <select className="form-control col-8" onChange={this.onFormFieldChanged2}
                                        name="occu" value={this.state.form.occu}>
                                    {this.occupations.map(opt =>
                                        <option value={opt.value} key={opt.value}>{opt.name}</option>)}
                                </select>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-2 text-right">Remark:</label>
                                <textarea className="form-control col-8" rows="5" name="remark"
                                          value={this.state.form.remark} onChange={this.onFormFieldChanged2}/>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        {children}
                    </div>
                </div>
            </CardBody>
            <CardFooter>{this.state.now}</CardFooter>
        </Card>;
    }
}


class JSONBoard extends Component {
    constructor(props) {
        super(props);
        this.preElement = React.createRef();
    }

    componentDidUpdate() {
        hljs.highlightBlock(this.preElement.current);
    }

    render() {
        const {formData, className, ...attributes} = this.props;

        return <div {...attributes} className={`json-board ${className || ''}`}>
            <pre className="hljs json" ref={this.preElement}>{JSON.stringify(formData, null, '    ')}</pre>
        </div>;
    }
}

JSONBoard.propTypes = {
    formData: PropTypes.object
};

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: null
        }
    }

    onFormChanged = formData => {
        this.setState({
            formData: formData
        });
    };

    render() {
        return <Wrapper>
            <Header/>
            <main className="container">
                <PersonCard onFormChanged={this.onFormChanged}>
                    <JSONBoard formData={this.state.formData}/>
                </PersonCard>
            </main>
        </Wrapper>
    }
}

runWith('intro.component', function () {

    hljs.initHighlightingOnLoad();

    render(<Body/>, document.getElementById("app"));
});
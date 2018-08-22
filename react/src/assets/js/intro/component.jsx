import React, {Component} from "react";
import {render} from "react-dom";
import {runWith, Times} from "../common/common";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardFooter, CardHeader} from "reactstrap";
import PropTypes from "prop-types";

runWith('intro.component', function () {

    function Header() {
        return <header>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/www/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/www/intro/">Introduce</a>
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
                    occu: 'STUDENT'
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

        onNameChanged = e => {
            this.setState({
                form: {
                    ...this.state.form,
                    name: e.currentTarget.value
                }
            });
            this.emitFormChanged();
        };

        onGenderChanged = e => {
            this.setState({
                form: {
                    ...this.state.form,
                    gender: e.currentTarget.value
                }
            });
            this.emitFormChanged();
        };

        onOccuChanged = e => {
            this.setState({
                form: {
                    ...this.state.form,
                    occu: e.currentTarget.value
                }
            });
            this.emitFormChanged();
        };

        occupations = [{name: 'Teacher', value: 'TEACHER'}, {name: 'Student', value: 'STUDENT'}];

        render() {
            const {className, children, ...attributes} = this.props;

            return <Card {...attributes} className={className}>
                <CardHeader className="bg-primary text-white"><strong>Alvin</strong></CardHeader>
                <CardBody>
                    <form className="form">
                        <div className="form-group row">
                            <label className="col-form-label col-1 text-right">Name:</label>
                            <input className="form-control col-6" name="name" placeholder="Please input your name"
                                   onChange={this.onNameChanged}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-1 text-right">Gender:</label>
                            <div className="row col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="gender" type="radio" value="M"
                                           checked={this.state.form.gender === 'M'} onChange={this.onGenderChanged}/>
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline col-6">
                                    <input className="form-check-input" name="gender" type="radio" value="F"
                                           checked={this.state.form.gender === 'F'} onChange={this.onGenderChanged}/>
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-1 text-right">Occu:</label>
                            <select className="form-control col-6" onChange={this.onOccuChanged}
                                    value={this.state.form.occu}>
                                {this.occupations.map(opt =>
                                    <option value={opt.value} key={opt.value}>{opt.name}</option>)}
                            </select>
                        </div>
                    </form>
                    {children}
                </CardBody>
                <CardFooter>{this.state.now}</CardFooter>
            </Card>;
        }
    }

    /**
     * Create component by function
     */
    function JSONBoard(props) {
        const {formData, className, ...attributes} = props;

        return <div {...attributes} className={`form-group ${className}`}>
            <label className="col-form-label col-1 text-right">JSON: </label>
            <textarea className="form-control col-6" readOnly value={JSON.stringify(formData)}/>
        </div>;
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
            return <div>
                <Header/>
                <main className="container">
                    <PersonCard onFormChanged={this.onFormChanged}>
                        <JSONBoard className="row mt-5" formData={this.state.formData}/>
                    </PersonCard>
                </main>
            </div>;
        }
    }

    render(<Body/>, document.getElementById("app"));
});
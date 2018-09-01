import "../../css/intro/process-control.less";

import React from "react";
import PropTypes from "prop-types";

import {render} from "react-dom";
import {runWith} from "../common/common";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {toast, ToastContainer} from 'react-toastify';

function Header() {
    // noinspection HtmlUnknownTarget
    return <header>
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="/www/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>Introduce</BreadcrumbItem>
            <BreadcrumbItem active>Process Control</BreadcrumbItem>
        </Breadcrumb>
    </header>;
}

class IfElse extends React.Component {
    static COLORS = {RED: 'Red', GREEN: 'Green', BLUE: 'Blue'};

    constructor(props) {
        super(props);

        this.state = {
            color: 'RED'
        }
    }

    onColorChanged = e => {
        this.setState({
            color: e.currentTarget.value
        });
    };

    showColorBoxes(color) {
        const ColorBox = props => {
            const {darken} = props;

            let className = `color-box bg-${color.toLowerCase()}`;
            if (darken) {
                className += ' darken';
            }
            return <div className={className}/>
        };

        if (this.state.color === color) {
            return <ColorBox/>;
        } else {
            return <ColorBox darken/>;
        }
    }

    render() {
        return <div className="card">
            <div className="card-header">
                <strong>If / Else</strong>
            </div>

            <div className="card-body">
                <div className="ask">
                    <div className="form-group">
                        <label className="col-form-label">Colors: </label>
                        <select className="form-control col-6" value={this.state.color}
                                onChange={this.onColorChanged}>
                            {Object.keys(IfElse.COLORS).map(key =>
                                <option value={key} key={key}>{IfElse.COLORS[key]}</option>)}
                        </select>
                    </div>
                </div>

                <div className="answer">
                    <div className="answer-1 col-3 row">
                        <div
                            className={`font-weight-bold col color-red  ${this.state.color !== 'RED' ? 'darken' : ''}`}>Red
                        </div>
                        <div
                            className={`font-weight-bold col color-green ${this.state.color !== 'GREEN' ? 'darken' : ''}`}>Green
                        </div>
                        <div
                            className={`font-weight-bold col color-blue ${this.state.color !== 'BLUE' ? 'darken' : ''}`}>Blue
                        </div>
                    </div>
                </div>

                <div className="answer">
                    <div className="answer-2 row mt-5">
                        {this.showColorBoxes('RED')}
                        {this.showColorBoxes('GREEN')}
                        {this.showColorBoxes('BLUE')}
                    </div>
                </div>
            </div>
        </div>;
    }
}

class Loop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    onValueChanged = (name, e) => {
        this.setState({
            [name]: parseInt(e.currentTarget.value)
        });
    };

    render() {
        class Pagination extends React.Component {
            static propTypes = {
                count: PropTypes.number
            };

            constructor(props) {
                super(props);
            }

            static showPage(n) {
                toast.info(`Page index changed to ${n}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                });
            }

            pages(n) {
                // noinspection JSUnnecessarySemicolon
                return Array.from(Array(n)).map((_, n) =>
                    <li className="page-item" key={n}>
                        <a className="page-link" href="javascript:;"
                           onClick={() => Pagination.showPage(n + 1)}>{n + 1}
                        </a>
                    </li>
                );
            }

            render() {
                const {count, ...attributes} = this.props;
                return <nav aria-label="Page navigation">
                    <ul {...attributes} className="pagination">
                        {this.pages(count)}
                    </ul>
                    <ToastContainer/>
                </nav>;
            }
        }

        return <div className="card mt-4">
            <div className="card-header">
                <strong>Loop</strong>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label className="control-label text-right">Pages:</label>
                    <select className="form-control col-6" onChange={this.onValueChanged.bind(this, 'count')}>
                        {[...Array(10)].map((_, n) => <option value={n + 1} key={n}>{n + 1}</option>)}
                    </select>
                </div>
                <div className="mt-4">
                    <div className="row container">
                        <Pagination count={this.state.count}/>
                    </div>
                </div>
                <div className="container">
                    <div className="site">
                        <h4>Homepage for Toastify:</h4>
                        <p><a href="https://fkhadra.github.io/react-toastify/"
                              className="text-info">https://fkhadra.github.io/react-toastify/</a></p>
                    </div>
                </div>
            </div>
        </div>;
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <Header/>
            <main className="container">
                <IfElse/>
                <Loop/>
            </main>
        </React.Fragment>;
    }
}

runWith('intro.processControl', function () {
    render(<Body/>, document.getElementById('app'));
});
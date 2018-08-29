import "../../css/intro/process-control.less";

import React, {Component} from "react";
import {render} from "react-dom";
import {runWith} from "../common/common";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Wrapper} from "../components/utils";

runWith('intro.processControl', function () {

    function Header() {
        return <header>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/www/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Process Control
                </BreadcrumbItem>
            </Breadcrumb>
        </header>;
    }

    class IfElse extends Component {
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
                        <div className="form-group row">
                            <label className="col-form-label col-1 text-right">Colors: </label>
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
                        <div className="answer-2 col-3 row mt-5">
                            {this.showColorBoxes('RED')}
                            {this.showColorBoxes('GREEN')}
                            {this.showColorBoxes('BLUE')}
                        </div>
                    </div>
                </div>
            </div>;
        }
    }

    class Body extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <Wrapper>
                <Header/>
                <main className="container">
                    <IfElse/>
                </main>
            </Wrapper>;
        }
    }

    render(<Body/>, document.getElementById('app'));
});
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {render} from "react-dom";

import * as _ from "lodash";
import {runWith} from "../common/common";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

runWith('intro.ifElse', function () {

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
                    If/Else
                </BreadcrumbItem>
            </Breadcrumb>
        </header>;
    }

    class Card extends Component {
        constructor(props) {
            super(props);
        }

        static propTypes = {
            className: PropTypes.string,
            children: PropTypes.node
        };

        render() {
            const {className = '', title = '', children, ...attributes} = this.props;

            return <div {...attributes} className={`card ${className}`}>
                <div className="card-header bg-dark text-white"><strong>{title}</strong></div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        }
    }

    function ColorSelect(props) {
        const {className = '', title = '', value = '', colors, onChange, ...attributes} = props;
        return <div {...attributes} className={`form-group row ${className}`}>
            <label className="col-form-label col-2 text-right">{title}</label>
            <select className="form-control col-6" value={value}>
                {_.map(colors, c => <option value={c.value}>{c.name}</option>)}
            </select>
        </div>;
    }

    ColorSelect.propTypes = {
        title: PropTypes.string,
        className: PropTypes.string,
        colors: PropTypes.array,
        onChange: PropTypes.func
    };

    const colors = [
        {name: 'Red', value: 'RED'},
        {name: 'Blue', value: 'BLUE'},
        {name: 'Green', value: 'GREEN'}
    ];

    const Body = <div>
        {
            this.state = {value: 'BLUE'}
        }
        <Header/>
        <main className="container">
            <Card title="Select Color">
                <ColorSelect title="Select color: " colors={colors} value={this.state.value} onChange={onColorChanged}/>
            </Card>
        </main>
    </div>;

    render(Body, document.getElementById('app'));
});
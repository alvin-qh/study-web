'use strict';

import React from "react";
import ReactDOM from "react-dom";

import {Modal, Panel} from "react-bootstrap"

import ns from "../../common/namespace";

ns('intro.index', function () {

    const Hello = React.createClass({
        model: {},
        getInitialState() {
            return {showModal: false};
        },
        close() {
            this.setState({showModal: false});
        },
        open() {
            this.setState({showModal: true});
        },
        render() {
            const panelTitle = (<h3>Hello</h3>);
            return (
                <div>
                    <Panel className="panel-primary" header={panelTitle}>
                        <div className="alert alert-success">Hello, world</div>
                        <div className="text-center">
                            <button className="btn btn-primary" type="button" onClick={this.open}>
                                Click Me
                            </button>
                        </div>
                    </Panel>

                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Hello</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <h2>Hello World</h2>
                        </Modal.Body>
                    </Modal>
                </div>
            );
        }
    });

    ReactDOM.render(<Hello/>, document.getElementById('app'));
});
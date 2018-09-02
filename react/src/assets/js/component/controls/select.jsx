import React from "react";
import PropTypes from "prop-types";
import {decorateComponent} from "./utils";
import FormControl from "./form-control";

class Select extends FormControl {
    static propTypes = {
        options: PropTypes.object,
        ...FormControl.propTypes
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            options = {},
        } = this.props;

        return this.renderComponent(
            <select className="form-control">
                {options && Object.keys(options).map(key => <option value={key} key={key}>{options[key]}</option>)}
            </select>);
    }
}

export default decorateComponent(Select, 'select');
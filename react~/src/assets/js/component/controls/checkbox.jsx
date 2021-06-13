import React from "react";
import PropTypes from "prop-types";
import FormControl from "./form-control";
import {decorateComponent} from "./utils";

class Checkbox extends FormControl {
    static propTypes = {
        items: PropTypes.object,
        ...FormControl.propTypes
    };

    constructor(props) {
        super(props);
    }

    render() {
        return this.renderComponent(
            <input type="checkbox"
                   className="form-check-input"/>)
    }
}

export default decorateComponent(Checkbox, 'checkbox');
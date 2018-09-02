import React from "react";
import PropTypes from "prop-types";

import FormControl from "./form-control";
import {decorateComponent} from "./utils";

class Text extends FormControl {
    static propTypes = {
        placeholder: PropTypes.string,
        type: PropTypes.oneOf(['email', 'date', 'number', 'password', 'url', 'tel']),
        ...FormControl.propTypes
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            type = 'text',
            placeholder = '',
        } = this.props;

        return this.renderComponent(
            <input type={type}
                   className="form-control"
                   placeholder={placeholder}/>);
    }
}

export default decorateComponent(Text, 'text');
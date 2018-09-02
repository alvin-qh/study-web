import React from "react";
import PropTypes from "prop-types";
import {decorateComponent} from "./utils";
import FormControl from "./form-control";

class Edit extends FormControl {
    static propTypes = {
        placeholder: PropTypes.string,
        rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        ...FormControl.propTypes
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            placeholder = '',
            rows = 0
        } = this.props;

        return this.renderComponent(
            <textarea
                rows={rows}
                className="form-control"
                placeholder={placeholder}/>);
    }
}

export default decorateComponent(Edit, 'edit');
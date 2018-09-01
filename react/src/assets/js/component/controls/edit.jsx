import React from "react";
import PropTypes from "prop-types";
import {controlClassNames, decorateComponent, labelClassNames} from "./utils";

class Edit extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };

    render() {
        const {
            label = '',
            labelCol = '',
            name,
            controlCol = '',
            value = '',
            placeholder = '',
            onDataChanged,
            rows = 0
        } = this.props;


        return <React.Fragment>
            {label && <label className={labelClassNames(labelCol)}>{label}:</label>}
            <textarea
                className={controlClassNames(controlCol)}
                name={name}
                rows={rows}
                placeholder={placeholder}
                value={value}
                onChange={onDataChanged}/>
        </React.Fragment>;
    }
}

export default decorateComponent(Edit, 'edit');
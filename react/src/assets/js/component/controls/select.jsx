import React from "react";
import PropTypes from "prop-types";
import {controlClassNames, decorateComponent, labelClassNames} from "./utils";

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        options: PropTypes.object
    };

    render() {
        const {
            label = '',
            labelCol = '',
            name,
            controlCol = '',
            options = {},
            onDataChanged,
            value = ''
        } = this.props;
        
        return <React.Fragment>
            {label && <label className={labelClassNames(labelCol)}>{label}:</label>}
            <select className={controlClassNames(controlCol)}
                    name={name}
                    onChange={onDataChanged}
                    value={value}>
                {options && Object.keys(options).map(key => <option value={key} key={key}>{options[key]}</option>)}
            </select>
        </React.Fragment>;
    }
}

export default decorateComponent(Select, 'select');
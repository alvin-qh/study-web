import React from "react";
import PropTypes from "prop-types";
import {controlClassNames, decorateComponent, labelClassNames} from "./utils";

class Text extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        type: PropTypes.oneOf(['email', 'date', 'number', 'password', 'url', 'tel'])
    };

    render() {
        const {
            label = '',
            labelCol = '',
            name,
            controlCol = '',
            type = 'text',
            value = '',
            placeholder = '',
            onDataChanged
        } = this.props;

        return <React.Fragment>
            {label && <label className={labelClassNames(labelCol)}>{label}:</label>}
            <input type={type}
                   className={controlClassNames(controlCol)}
                   name={name}
                   placeholder={placeholder}
                   value={value}
                   onChange={onDataChanged}/>
        </React.Fragment>;
    }
}

export default decorateComponent(Text, 'text');
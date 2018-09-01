import React from "react";
import PropTypes from "prop-types";
import {checkGroupClassName, checkWrapperClassNames, decorateComponent, labelClassNames} from "./utils";

class Radio extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string.isRequired,
        items: PropTypes.object,
        value: PropTypes.string
    };

    render() {
        const {
            label = '',
            labelCol = '',
            name,
            controlCol = '',
            items = {},
            onDataChanged,
            value = ''
        } = this.props;

        const controls = Object.keys(items).map(key =>
            <div className={checkGroupClassName(!!controlCol)} key={key}>
                <input type="radio"
                       className="form-check-input"
                       name={name}
                       value={key}
                       checked={value === key}
                       onChange={onDataChanged}/>
                <label className="form-check-label">{items[key]}</label>
            </div>
        );

        return <React.Fragment>
            {label && <label className={labelClassNames(labelCol)}>{label}:</label>}
            {controlCol ? <div className={checkWrapperClassNames(controlCol)}>{controls}</div> : controls}
        </React.Fragment>;
    }
}

export default decorateComponent(Radio, 'radio');
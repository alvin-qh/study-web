import {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";

class Text extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
    };

    render() {
        const {
            label = '',
            labelCol = '',
            name,
            controlCol = '',
            type = 'text',
            value = '',
            placeholder = ''
        } = this.props;

        const labelClassName = classNames(labelCol, {
            ['col-form-label text-right']: labelCol,
            'control-label': !labelCol
        });
        const controlClassName = classNames('form-control', controlCol);

        return <React.Fragment>
            {label && <label className={labelClassName}>{label}</label>}
            <input type={type}
                   className={controlClassName}
                   name={name}
                   placeholder={placeholder}
                   value={value}/>
        </React.Fragment>;
    }
}

export default Text;
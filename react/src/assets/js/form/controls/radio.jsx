import {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";

class Radio extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.object,
    };

    render() {
        const {
            label = '',
            labelCol = '',
            name,
            controlCol = '',
            values = {}
        } = this.props;

        const labelClassName = labelCol ? 'col-form-label text-right' : 'control-label';

        const wrapperClassName = classNames({'form-check': !controlCol, 'form-check-inline': !!controlCol});
        const controls = Object.keys(values).map(key =>
            <div className={wrapperClassName} key={key}>
                <input type="radio" className={classNames('form-check-input')} name={name} value={key}/>
                <label className={classNames('form-check-label')}>{values[key]}</label>
            </div>
        );

        return <React.Fragment>
            {label && <label className={`${labelClassName} ${labelCol}`}>{label}</label>}
            {controlCol ?
                <div className={classNames({'row': !!controlCol}, controlCol)}>{controls}</div> : controls}
        </React.Fragment>;
    }
}

export default Radio;
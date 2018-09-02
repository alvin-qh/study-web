import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import {decorateComponent, globalStyles} from "./utils";

class Button extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['submit', 'button', 'reset']),
        style: PropTypes.oneOf([...globalStyles, 'link']),
        outline: PropTypes.bool,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            children,
            labelCol,
            type = 'button',
            style = 'primary',
            outline = false,
            errors = null,
            onClick = () => {
            }
        } = this.props;

        const className = (() => {
            let names = ['btn', `btn-${outline ? 'outline-' : ''}${style}`];
            if (labelCol) {
                names = [...names, `offset-${labelCol}`];
            }
            return classNames(names);
        })();

        return <button type={type}
                       className={className}
                       disabled={Object.keys(errors).length > 0}
                       onClick={onClick}>{children}</button>
    }
}

export default decorateComponent(Button, 'button');
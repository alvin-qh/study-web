import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {globalStyles} from "./utils";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        backStyle: PropTypes.oneOf([...globalStyles]),
        forceStyle: PropTypes.oneOf('light', 'dark')
    };

    render() {
        const {
            className = '',
            children,
            title = '',
            backStyle = 'primary',
            forceStyle = 'light'
        } = this.props;

        return <div className={classNames('card', className)}>
            <div className={classNames('card-header', `bg-${backStyle}`, `text-${forceStyle}`)}>
                <strong>{title}</strong>
            </div>
            <div className={classNames('card-body')}>
                {children}
            </div>
        </div>;
    }
}

export default Card;
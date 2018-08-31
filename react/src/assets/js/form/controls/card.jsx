import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Card extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        dark: PropTypes.bool
    };

    render() {
        const {
            className = '',
            children,
            title = '',
            dark = false
        } = this.props;

        return <div className={classNames('card', className)}>
            <div className={classNames('card-header', {['bg-dark text-white']: dark})}>
                <strong>{title}</strong>
            </div>
            <div className={classNames('card-body')}>
                {children}
            </div>
        </div>;
    }
}

export default Card;
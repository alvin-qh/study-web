import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Text from "./Text";
import Radio from "./Radio";


class Form extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        cols: PropTypes.array,
        className: PropTypes.string
    };


    render() {
        const {className = '', cols, children, ...attributes} = this.props;

        return <form className={classNames(className)} {...attributes}>
            {React.Children.map(children, child => {
                if (Text === child.type || Radio === child.type) {
                    if (cols) {
                        child = React.cloneElement(child, {
                            labelCol: `col-${cols[0]}`,
                            controlCol: `col-${cols[1]}`
                        });
                    }
                    return <div className={classNames('form-group', {row: !!cols})}>{child}</div>;
                }
                return child;
            })}
        </form>;
    }
}

Form.Text = Text;
Form.Radio = Radio;


export default Form;
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Text from "./text";
import Radio from "./radio";
import Select from "./select";
import Checkbox from "./checkbox";
import Edit from "./edit";
import Button from "./button";

class Form extends React.Component {

    static propTypes = {
        cols: PropTypes.array,
        className: PropTypes.string,
        data: PropTypes.object,
        onSubmit: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {...props.data || {}}
    }

    onFormDataChanged = e => {
        const target = e.currentTarget;

        let value = target.value;
        if (target.type === 'checkbox') {
            let values = this.state[target.name] || new Set();
            if (target.checked) {
                values.add(value);
            } else {
                values.delete(value);
            }
            value = values;
        }
        this.setState({
            [target.name]: value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        if (this.props.onSubmit) {
            this.props.onSubmit({data: {...this.state}});
        }
    };

    render() {
        const {
            className = '',
            cols,
            children,
            ...attributes
        } = this.props;

        return <form className={classNames(className)} {...attributes} onSubmit={this.onSubmit}>
            {React.Children.map(children, child => {
                if (child.type && child.type.controlName) {
                    let props = {
                        onDataChanged: this.onFormDataChanged,
                        value: this.state[child.props.name]
                    };
                    if (cols) {
                        props = {
                            ...props,
                            labelCol: cols[0],
                            controlCol: cols[1]
                        };
                    }
                    child = React.cloneElement(child, props);
                    return <div className={classNames('form-group', {row: !!cols})}>{child}</div>;
                }
                return child;
            })}
        </form>;
    }
}

Form.Text = Text;
Form.Radio = Radio;
Form.Select = Select;
Form.Checkbox = Checkbox;
Form.Edit = Edit;
Form.Button = Button;

export default Form;
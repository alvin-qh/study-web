import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Text from "./text";
import Radio from "./radio";
import Select from "./select";
import Checkbox from "./checkbox";
import Edit from "./edit";
import Button from "./button";
import FormValidators from "./validations";

class Form extends React.Component {
    static propTypes = {
        cols: PropTypes.array,
        className: PropTypes.string,
        data: PropTypes.object,
        onSubmit: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            form: {...props.data || {}},
            errors: {}
        };
        this.validators = new FormValidators(() => ({...this.state.form}));
    }

    onFormDataChanged = e => {
        const target = e.currentTarget;

        let value = target.value;
        if (target.type === 'checkbox') {
            let values = this.state.form[target.name] || new Set();
            if (target.checked) {
                values.add(value);
            } else {
                values.delete(value);
            }
            value = values;
        }
        this.setState({
            form: {
                ...this.state.form,
                [target.name]: value
            }
        }, () => {
            const errors = this.validators.validate();
            this.setState({
                errors: this.validators.validate()
            }, () => {
                if (Object.keys(errors).length > 0 && this.props.onSubmit) {
                    this.props.onSubmit({data: {}});
                }
            });
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const errors = this.validators.validate();
        this.setState({
            errors: errors
        }, () => {
            if (this.props.onSubmit) {
                this.props.onSubmit({data: Object.keys(errors).length === 0 ? {...this.state.form} : {}});
            }
        });
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
                        value: this.state.form[child.props.name],
                        errors: this.state.errors

                    };
                    if (cols) {
                        props = {
                            ...props,
                            labelCol: cols[0],
                            controlCol: cols[1]
                        };
                    }
                    this.validators.add(child.props.name, child.props.validators);

                    child = React.cloneElement(child, props);
                    return <div className={classNames('form-group', {'row': !!cols})}>{child}</div>;
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
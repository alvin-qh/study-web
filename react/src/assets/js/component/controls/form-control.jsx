import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class FormControl extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string.isRequired,
        validators: PropTypes.array
    };

    constructor(props) {
        super(props);

        const renderLabel = () => {
            const {label, labelCol} = this.props;
            const classes = labelCol ?
                classNames(`col-${labelCol}`, 'col-form-label', 'text-right') : 'control-label';
            return !!label && <label className={classes}>{label}:</label>
        };

        const renderBody = (grouping, render) => {
            const {controlCol} = this.props;
            const classes = classNames({
                'row': !!controlCol && grouping,
                [`col-${controlCol}`]: !!controlCol,
                'no-padding': !grouping
            });
            return <div className={classes}>{render()}</div>;
        };

        this.renderComponent = component => {
            const {
                name,
                value = '',
                controlCol,
                items,
                onDataChanged
            } = this.props;

            const {
                type
            } = component.props;

            const grouping = type === 'checkbox' || type === 'radio';

            return <React.Fragment>
                {renderLabel()}
                {renderBody(grouping, () => {
                    if (grouping) {
                        return Object.keys(items).map(key =>
                            <div className={classNames('form-check', {'form-check-inline': !!controlCol})}
                                 key={key}>
                                {React.cloneElement(component, {
                                    name: name,
                                    value: key,
                                    checked: value.has ? value.has(key) : value === key,
                                    onChange: onDataChanged
                                })}
                                <label className="form-check-label">{items[key]}</label>
                            </div>);
                    }
                    return React.cloneElement(component, {
                        name: name,
                        value: value,
                        onChange: onDataChanged
                    });
                })}
            </React.Fragment>;
        };
    }
}
import classNames from "classnames";

export function labelClassNames(col) {
    if (col) {
        return classNames(`col-${col}`, 'col-form-label', 'text-right');
    }
    return classNames('control-label');
}

export function controlClassNames(col) {
    if (col) {
        return classNames('form-control', `col-${col}`);
    }
    return classNames('form-control');
}

export function checkWrapperClassNames(col) {
    return classNames('row', `col-${col}`);
}

export function checkGroupClassName(inline) {
    if (inline) {
        return 'form-check-inline';
    }
    return 'form-check';
}

export function decorateComponent(component, name) {
    component.controlName = name;
    return component;
}

export const globalStyles = ['primary', 'secondary', 'light', 'info', 'warning', 'danger'];
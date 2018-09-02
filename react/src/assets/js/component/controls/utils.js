export function decorateComponent(component, name) {
    component.controlName = name;
    return component;
}

export const globalStyles = ['primary', 'secondary', 'light', 'info', 'warning', 'danger'];
const checkFieldSymbol = Symbol('check-file-method');

function v_required(value) {
    if (typeof value === 'string') {
        return value.trim().length > 0;
    }
    return value !== null && !isNaN(value) && value !== undefined;
}

export default class FormValidators {

    static validatorMap = {
        'required': v_required
    };

    constructor(fetchDataFn) {
        this.validators = {};
        this.fetchDataFn = fetchDataFn;
    }

    addValidators(name, validators) {
        if (validators) {
            if (!Array.isArray(validators)) {
                validators = [validators];
            }
            this.validators[name] = validators.map(v => FormValidators.validatorMap[v]).filter(v => !!v);
        }
    }

    getValidators(name) {
        return this.validators[name] || [];
    }

    [checkFieldSymbol](validators, formData) {
        if (!validators) {
            return true;
        }

        let value = null;
        if (formData) {
            value = formData[name];
        }

        return validators.map(v => ({
            name: name,
            value: value,
            checkResult: v(value)
        }));
    }

    isFieldValid(name) {
        const formData = this.fetchDataFn();
        return this[checkFieldSymbol](name, formData).checkResult.status === 'success';
    }

    validate() {
        const formData = this.fetchDataFn();
        return Object.keys(this.validators).map(name => this[checkFieldSymbol](this.validators[name], formData));
    }
}


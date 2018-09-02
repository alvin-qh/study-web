import React from "react";
import MessageFormat from "messageformat";

const validatorsMapSymbol = Symbol('validators-map');
const checkFieldSymbol = Symbol('check-file-method');

function parseValidatorName(name) {
    function toStringOrNumber(s) {
        const groups = /^'(.+?)'$/.exec(s);
        if (groups) {
            return groups[1];
        }
        return parseFloat(s);
    }

    const groups = /^([A-Za-z0-9_]+)(\((([a-zA-Z0-9_]+=[a-zA-Z0-9_]+[,]?)+)\))?$/g.exec(name.replace(/\s/g, ''));
    if (!groups) {
        console.error('Invalid validate name: ' + name);
        return;
    }
    name = groups[1];
    const args = {};
    if (groups[3]) {
        groups[3].split(',').forEach(nv => {
            const arg = nv.trim().split('=');
            args[arg[0]] = toStringOrNumber(arg[1]);
        });
    }
    return {name, args};
}

class FormValidators {
    static [validatorsMapSymbol] = {};

    constructor(fetchDataFn) {
        this.validators = {};
        this.fetchDataFn = fetchDataFn;
    }

    add(fieldName, validatorNames) {
        if (validatorNames) {
            if (!Array.isArray(validatorNames)) {
                validatorNames = [validatorNames];
            }
            const validatorMap = FormValidators[validatorsMapSymbol];

            this.validators[fieldName] = validatorNames.map(name => {
                const r = parseValidatorName(name);
                const validator = validatorMap[r.name];
                return validator ? {
                    validator,
                    args: r.args
                } : {
                    validator: {
                        invoker: () => {
                        },
                        message: ''
                    },
                    args: null
                };
            });
        }
    }

    get(name) {
        return this.validators[name] || [];
    }

    [checkFieldSymbol](validators, value) {
        if (!validators || !validators.length) {
            return true;
        }
        return validators.map(v => v.validator.invoker(value || null, v.args));
    }

    isFieldValid(name) {
        const formData = this.fetchDataFn();
        return this[checkFieldSymbol](name, formData[name]).every(r => r);
    }

    validate() {
        const formData = this.fetchDataFn();
        const results = {};
        Object.keys(this.validators).forEach(name => {
            const validators = this.validators[name];
            const answers = this[checkFieldSymbol](validators, formData[name]).map((passed, n) => {
                if (passed) {
                    return null;
                }
                return validators[n].validator.message({
                    field: name,
                    ...validators[n].args
                });
            }).filter(r => !!r);
            if (answers && answers.length > 0) {
                results[name] = answers;
            }
        });
        return results;
    }

    static addValidator(name, func, message) {
        const msg = new MessageFormat();
        const validatorMap = FormValidators[validatorsMapSymbol];

        validatorMap[name] = {
            invoker: func,
            message: msg.compile(message)
        };
    }
}

FormValidators.addValidator('required', value => {
    if (typeof value === 'string') {
        return value.trim().length > 0;
    }
    if (value === null || typeof value === 'undefined') {
        return false;
    }
    if (typeof value.length !== 'undefined') {
        return value.length > 0;
    }
    if (typeof value.size !== 'undefined') {
        return value.size > 0;
    }
    return true;
}, '{field} is required');

FormValidators.addValidator('length', (value, args) => {
    let length = 0;
    if (value && value.length) {
        length = value.length;
    }
    if (args.max && args.min) {
        return length >= args.min && length <= args.max;
    } else if (args.max) {
        return length <= args.max;
    } else if (args.min) {
        return length >= args.min;
    }
    return true;
}, 'length of {field} must between {min} and {max}');

export default FormValidators;
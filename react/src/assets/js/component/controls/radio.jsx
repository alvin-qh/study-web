import React from "react";
import {decorateComponent} from "./utils";
import FormControl from "./form-control";

class Radio extends FormControl {
    static propTypes = {
        ...FormControl.propTypes
    };

    constructor(props) {
        super(props);
    }

    render() {
        return this.renderComponent(
            <input type="radio"
                   className="form-check-input"/>);
    }
}

export default decorateComponent(Radio, 'radio');
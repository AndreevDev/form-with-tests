import React from "react";
import { ControlWrapper, StyledError } from "../StyledComponents";

const NumberInput = React.forwardRef((props, ref) => {
    const {errors, ...inputProps} = props;

    return (
        <ControlWrapper errors={errors}>
            <label htmlFor={inputProps.name}>{inputProps.placeholder}</label>
            <input type="number" id={inputProps.name} {...inputProps} ref={ref} 
                onKeyPress={(e) => {
                    if (e.key === "e" || e.key === "+" || e.key === "-") {
                        e.preventDefault();
                    }
                }}/>
            {errors?.type === 'required' && <StyledError>This field is required</StyledError>}
        </ControlWrapper>
    );
});

export default NumberInput;
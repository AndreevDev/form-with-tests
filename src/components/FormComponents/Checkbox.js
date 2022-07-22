import React from "react";
import { ControlWrapper, StyledError } from "../StyledComponents";

const Checkbox = React.forwardRef((props, ref) => {
    
    const {errors, ...inputProps} = props;

    return (
        <ControlWrapper errors={errors} justifyContent="start">
            <input type="checkbox" id={inputProps.name} {...inputProps} ref={ref}/>
            <label htmlFor={inputProps.name}>{inputProps.placeholder}</label>
            {errors?.type === 'required' && <StyledError>This field is required</StyledError>}
        </ControlWrapper>
    );
});

export default Checkbox;
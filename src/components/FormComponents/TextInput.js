import React from "react";
import { ControlWrapper, StyledError } from "../StyledComponents";

const TextInput = React.forwardRef((props, ref) => {
    
    const {errors, ...inputProps} = props;

    return (
        <ControlWrapper errors={errors}>
            <label htmlFor={inputProps.name}>{inputProps.placeholder}</label>
            <input type="text" id={inputProps.name} {...inputProps} ref={ref}/>
            {errors?.type === 'required' && <StyledError>This field is required</StyledError>}
            {errors?.type === 'pattern' && <StyledError>{errors.message}</StyledError>}
        </ControlWrapper>
    );
});

export default TextInput;
import React from "react";
import { ControlWrapper, StyledError } from "../StyledComponents";

const Select = React.forwardRef((props, ref) => {

    const { options, errors, ...selectProps } = props;

    const selectOptions = props.options.map(({value, label}) => (
        <option key={value} value={value}>{label}</option>
    ));

    return (
        <>
            <ControlWrapper justifyContent="space-between" errors={errors}>
                <label htmlFor={selectProps.name}>{selectProps.placeholder}</label>
                <select id={selectProps.name} {...selectProps} ref={ref} defaultValue="">
                    <option value="" disabled hidden>{selectProps.default}...</option>
                    {selectOptions}
                </select>
                {errors?.type === 'required' && <StyledError>This field is required</StyledError>}
            </ControlWrapper>
        </>
        
    );
});

export default Select;
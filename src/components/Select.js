import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const StyledSelect = styled.select`
    padding: 5px;
    width: 180px;
    border: ${props => props.errors?.type === 'required' ? "1px solid red" : "1px solid black"}
`;

const StyledError = styled.p`
    text-align: right;
    color: red;
    margin: 0;
    margin-bottom: 10px;
`;

const Select = React.forwardRef((props, ref) => {

    const { options, errors, ...selectProps } = props;

    const selectOptions = props.options.map(({value, label}) => (
        <option key={value} value={value}>{label}</option>
    ));

    return (
        <>
            <StyledDiv>
                <label htmlFor={selectProps.name}>{selectProps.placeholder}</label>
                <StyledSelect {...selectProps} ref={ref} errors={errors}>
                    <option value="">Select gender...</option>
                    {selectOptions}
                </StyledSelect>
            </StyledDiv>
            {errors?.type === 'required' && <StyledError>This field is required</StyledError>}
        </>
        
    );
});

export default Select;
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent};
    margin-bottom: 10px;
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    width: ${props => props.width ? props.width : "auto"};
    padding: 5px;
    border: ${props => props.errors?.type === 'required' ? "1px solid red" : "1px solid black"}
`;

const StyledSubmit = styled(StyledInput)`
    color: green;
    background: transparent;
    border: 1px solid green;
    border-radius: 3px;
    padding: 7px 10px;
    font-size: 14px;
`;

const StyledLabel = styled.label`
    padding-right: 10px;
`;

const StyledError = styled.p`
    text-align: right;
    color: red;
    margin: 0;
    margin-bottom: 10px;
`;

const Input = React.forwardRef((props, ref) => {

    const {errors, ...inputProps} = props;

    let justifyContent = "";
    switch (inputProps.type) {
        case "checkbox":
            justifyContent = "start";
            break;
        case "submit": 
            justifyContent = "center";
            break;
        default:
            justifyContent = "space-between";
    }

    const renderInput = (type) => {
        switch (type) {
            case "checkbox":
                return (
                    <>
                        <StyledInput {...inputProps} ref={ref}/>
                        <StyledLabel htmlFor={inputProps.name}>{inputProps.placeholder}</StyledLabel>
                    </>
                );
            case "submit":
                return <StyledSubmit {...inputProps} ref={ref}/>;
            default: 
                return (
                    <>
                        <StyledLabel htmlFor={inputProps.name}>{inputProps.placeholder}</StyledLabel>
                        <StyledInput {...inputProps} ref={ref} width="180px" errors={errors}/>
                    </>
                );
        }
    }

    return (
        <>
            <StyledDiv justifyContent={justifyContent}>
                {renderInput(inputProps.type)}
            </StyledDiv>
            {errors?.type === 'required' && <StyledError>This field is required</StyledError>}
        </>
    );
});

export default Input;
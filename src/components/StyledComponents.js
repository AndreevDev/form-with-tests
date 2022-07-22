import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif !important;
`;

export const StyledForm = styled.form`
    box-shadow: 0px 0px 5px 1px #3c8a123b;
    padding: 20px 30px 10px 30px;
    margin-bottom: 20px;
    width: 25%;
    min-width: 400px;
`;

export const FormHeader = styled.h2`
    margin: 0 0 25px 0;
    text-align: center;
`;

export const ControlWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
    margin-bottom: 30px;
    font-size: 1em;
    &:last-child {
        margin-bottom: 15px;
    }

    label {
        padding-right: 10px;
    }

    input, select {
        box-sizing: border-box;
        width: 180px;
        padding: 5px;
        border: ${props => props.errors?.type === 'required' ? "1px solid #f40000" : "1px solid #000000"};
        font-size: 1em;
    }

    input[type="checkbox"] {
        width: auto;
        & + label {
            padding-left: 10px;
            padding-right: 0;
        }
    }

    input[type="submit"] {
        color: green;
        background: transparent;
        border: 1px solid green;
        border-radius: 3px;
        padding: 7px 10px;
        cursor: pointer;
    }
`;

export const StyledError = styled.p`
    color: #f40000;
    margin: 0;
    position: absolute;
    right: 0;
    bottom: -20px;
`;

export const StyledList = styled.ul`
    list-style-type: none;
    
    li {
        cursor: pointer;
        padding: 5px;
    }
`;

export const CenteredP = styled.p`
    text-align: center;
`;

export const StyledTable = styled.table`
    width: 50%;
    min-width: 400px;
    border: 1px solid #000000;
    border-spacing: 0 10px;
    font-size: 17px;
    padding: 0 5px;

    thead tr th {
        border-bottom: 1px solid #000000;
    }

    td {
        padding: 0 10px;
    }

    tbody tr {
        &:nth-child(even) {
            background: #dddddd;
        }
        &:nth-child(odd) {
            background: #ffffff;
        }
    }
`;
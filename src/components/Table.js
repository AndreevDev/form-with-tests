import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledTable = styled.table`
    width: 50%;
    min-width: 400px;
    border: 1px solid black;
    border-spacing: 0 10px;
    font-size: 17px;
    padding: 0 5px;
`;

const StyledTr = styled.tr`
    background: ${props => props.bg};
`;

const Table = () => {

    const { customers } = useSelector(state => state.customers);

    const content = customers?.map((customer, index) => {
        return (
            <StyledTr key={index} bg={index % 2 === 0 ? '#FFF' : '#DDD'}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.telNumber}</td>
                <td>{customer.email}</td>
                <td>{customer.gender}</td>
                <td>{customer.address}</td>
            </StyledTr>
        );
    });

    return (
        <StyledTable>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Gender</td>
                    <td>Address</td>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </StyledTable>
    );
}

export default Table;
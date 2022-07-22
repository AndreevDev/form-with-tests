import { useSelector } from "react-redux";
import { StyledTable } from "./StyledComponents";

const Table = () => {

    const { customers } = useSelector(state => state.customers);

    const content = customers?.map((customer, index) => {
        return (
            <tr key={index}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.telNumber}</td>
                <td>{customer.email}</td>
                <td>{customer.gender}</td>
                <td>{customer.address}</td>
            </tr>
        );
    });

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {customers && customers.length > 0 ? content : <tr><td>No customers yet</td></tr>}
            </tbody>
        </StyledTable>
    );
}

export default Table;
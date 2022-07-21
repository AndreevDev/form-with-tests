import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchLocations } from "../actions";

const StyledUl = styled.ul`
    list-style-type: none;
`;

const StyledLi = styled.li`
    cursor: pointer;
    padding: 5px;
`;

const AddressesHint = (props) => {

    const { addressFieldName, setValue } = props;

    const dispatch = useDispatch();

    const { locations } = useSelector(state => state.locations);

    const renderLocations = (locations) => {
        if (!locations || locations.length < 1) {
            return null;
        }
        return (
            locations.map((location, index) => {
                const address = location.address ? location.address.label : location.title;
                return (
                    <StyledLi 
                        key={index}
                        onClick={() => {
                            setValue(addressFieldName, address);
                            dispatch(fetchLocations(""));
                        }}
                    >
                        {address}
                    </StyledLi>
                );
            })
        );
    }

    return (
        <StyledUl>
            {renderLocations(locations)}
        </StyledUl>
    );
}

export default AddressesHint;
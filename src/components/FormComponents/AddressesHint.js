import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../actions";
import { StyledList, CenteredP } from "../StyledComponents";

const AddressesHint = (props) => {

    const { addressFieldName, setValue } = props;

    const dispatch = useDispatch();

    const { locations, status } = useSelector(state => state.locations);

    const renderLocations = (locations) => {
        if (!locations || locations.length < 1) {
            return null;
        }

        const items = locations.map((location, index) => {
            const address = location.address ? location.address.label : location.title;
            return (
                <li 
                    key={index}
                    onClick={() => {
                        setValue(addressFieldName, address);
                        dispatch(fetchLocations(""));
                    }}
                >
                    {address}
                </li>
            );
        });

        return (
            <StyledList>
                {items}
            </StyledList>
        );
    }

    const error = status === "error" ? <CenteredP>Error loading locations.</CenteredP> : null;
    const loading = status === "loading" ? <CenteredP>Loading...</CenteredP> : null;
    const content = !(error || loading) ? renderLocations(locations) : null;

    return (
        <>
            {error}
            {loading}
            {content}
        </>
    );
}

export default AddressesHint;
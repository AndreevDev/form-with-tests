import axios from "axios"

export const addCustomer = (data) => {
    return {
        type: "ADD_CUSTOMER", 
        payload: data
    }
}

export const fetchLocations = (query) => (dispatch) => {
    dispatch(locationsFetching());

    if (query === "") {
        dispatch(locationsFetched([]));
        return;
    }

    axios.get(`https://autosuggest.search.hereapi.com/v1/autosuggest?at=52.93175,12.77165&limit=5&lang=en&q=${query}&apiKey=d446XlGmi0TQw4g3g4JvFPZwYR3mFDaLDAez7g_5No4`)
        .then(data => {
            dispatch(locationsFetched(data.data.items))
        })
        .catch(() => dispatch(locationsFetchingError()));
}

export const locationsFetching = () => {
    return {
        type: 'LOCATIONS_FETCHING'
    }
}

export const locationsFetched = (locations) => {
    return {
        type: 'LOCATIONS_FETCHED',
        payload: locations
    }
}

export const locationsFetchingError = () => {
    return {
        type: 'LOCATIONS_FETCHING_ERROR'
    }
}
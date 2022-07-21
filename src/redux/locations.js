const initialState = {
    locations: [],
    locationsStatus: 'idle'
};

export const locations = (state = initialState, action) => {
    switch (action.type) {
        case 'LOCATIONS_FETCHING':
            return {
                ...state,
                locationsStatus: 'loading'
            }
        case 'LOCATIONS_FETCHED':
            return {
                ...state,
                locations: action.payload,
                locationsStatus: 'idle'
            }
        case 'LOCATIONS_FETCHING_ERROR':
            return {
                ...state,
                locations: [],
                locationsStatus: 'error'
            }
        default: 
            return state;
    }
};
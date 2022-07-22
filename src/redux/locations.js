const initialState = {
    locations: [],
    status: 'idle'
};

export const locations = (state = initialState, action) => {
    switch (action.type) {
        case 'LOCATIONS_FETCHING':
            return {
                ...state,
                status: 'loading'
            }
        case 'LOCATIONS_FETCHED':
            return {
                ...state,
                locations: action.payload,
                status: 'idle'
            }
        case 'LOCATIONS_FETCHING_ERROR':
            return {
                ...state,
                status: 'error'
            }
        case 'LOCATIONS_CLEARED': 
            return {
                ...state,
                locations: [],
                status: 'idle'
            }
        default: 
            return state;
    }
};
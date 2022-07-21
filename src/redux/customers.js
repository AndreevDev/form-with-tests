const initialState = {
    customers: []
};

export const customers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            let newCustomers = [...state.customers, action.payload];
            return {
                ...state,
                customers: newCustomers
            }
        default: 
            return state;
    }
};
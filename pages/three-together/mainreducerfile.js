export const initialstate = {
    name: "",
    price: 0,
}

export const reducerfunction = (state, action) => {
    switch (action.type) {
        case "CHANGENAME":
            return {
                ...state,
                name : action.payload,
            }
        case "PRICE" : 
            return {
                ...state,
                price : action.payload,
            }

        default : 
            return {state}
    }
}


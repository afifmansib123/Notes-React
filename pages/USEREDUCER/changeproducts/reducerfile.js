export const initialstate = {
    name : "",
    quantity : 0,
    price : 0,
}

export const reducerfunction = (state,action) => {
    switch(action.type){
        case "NAME" :
            return {
                ...state,
                name: action.payload
            }
        case "ADD":
            return {
                ...state,
                quantity: state.quantity + 1
            }
        case "SUB":
            return {
                ...state,
                quantity: state.quantity - 1
            }
        default : return {state}
    }
}
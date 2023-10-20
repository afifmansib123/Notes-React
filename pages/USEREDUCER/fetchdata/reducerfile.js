export const initialstate = {
    loading : false,
    coffees : [{}],
    error : false,
}

export const reducerfunction = (state, action) => {
    switch(action.type){
        case "LOAD":
            return {
                loading : true,
                coffees : [{}],
                error : false,
            }
        case "SUCCESS":
            return {
                loading: false,
                coffees : action.payload,
                error : false,
            }
        case "FAIL" :
            return {
                loading : false,
                coffees : [{}],
                error : true,
            }
        default:
            return state
    }
}
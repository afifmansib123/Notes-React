import { useReducer } from "react"
import { initialstate, reducerfunction } from "./reducerfile"

export default function Home () {

    const [state,dispatch] = useReducer(reducerfunction,initialstate)

    const setproduct = (e) => {
        const name = e.target.value
        dispatch({type: "NAME", payload: name})
    }

    const addquantity = (e) => {
        e.preventDefault()
        dispatch({type: "ADD"})
    }

    const delquantity = (e) => {
        e.preventDefault()
        dispatch({type: "SUB"})
    }
    return(
        <>
        <h1 className="flex justify-center">SELECT A PRODUCT</h1>
        <div className="flex justify-center">
        <select onChange={setproduct}>
            <option value="product1">Product1</option>
            <option value="product2">Product2</option>
            <option value="product3">Product3</option>
        </select>
        </div>
        <div className="flex justify-center">
        <button onClick={addquantity}>+</button>
        <span style={{color:"blue"}}>{state.quantity}</span>
        <button onClick={delquantity}>-</button>
        </div>
        <div className="flex justify-center">
        <button style={{color:"green"}} onClick={()=>{alert(JSON.stringify(state))}}>check state</button>
        </div>
        </>
    )
}
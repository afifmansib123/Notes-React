import { useEffect, useReducer, useState } from 'react'
import { initialstate, reducerfunction } from './mainreducerfile'
import usestateindex from '../gotouseeffect'

const page1 = () => {
    const [state, dispatch] = useReducer(reducerfunction, initialstate)

    const [name, setname] = useState('')
    const [price, setprice] = useState(0)

    const handlechange = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const handleprice = (e) => {
        setprice(e.target.value)
    }
    const handlepricechange = () => {
        dispatch({ type: "PRICE", payload: price })
    }
    const handleUpdateItem = () => {
        console.log(name)
        dispatch({ type: "CHANGENAME", payload: name })
    }
    const [statetodisplay, changestate] = useState(initialstate)
    useEffect(() => {
        changestate(state)
    })
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center'>
                <form className='flex justify-center'>
                    <label>NAME</label>
                    <input value={name} onChange={handlechange}></input>
                </form>
            </div>
            <button style={{ backgroundColor: "red" }} onClick={() => { alert(JSON.stringify(state)) }}>Check Item</button>
            <button style={{ backgroundColor: "green" }} onClick={handleUpdateItem}>UPADATE ITEM</button>
            <label>PRICE</label>
            <input value={price} onChange={handleprice}></input>
            <button style={{ backgroundColor: "green" }} onClick={handlepricechange}>UPADATE PRICE</button>

            <span>{JSON.stringify(statetodisplay)}</span>
        </div>
    )
}

export default page1
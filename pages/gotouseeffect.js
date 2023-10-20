import { useState } from "react"
import Link from "next/link"

export default function usestateindex(){
    const [product, setproduct] = useState()
    const selectproduct = (e) => {
        setproduct(e.target.value)
        console.log(product)
    }
    return(
        <>
        <h1 className="flex justify-center" style={{fontSize:"50px"}}>WITHOUT-USEEFFECT</h1>
        <h1 className="flex justify-center mb-10" style={{fontSize:"20px"}}>Select Product and open console</h1>
        <div className="flex justify-center" style={{color: "green", border:"2px solid"}}>
            <select onChange={selectproduct}>
                <option value="product1">Product1</option>
                <option value="product2">Product2</option>
                <option value="product3">Product3</option>
                <option value="product4">Product4</option>
            </select>
        </div>
        <div>
        <span className="flex justify-center">{`the product is ${product}`}</span>
        <Link href="/USEEFFECT/selectproduct" className="flex justify-center" style={{color: "green"}}>USE USEEFFECT HERE</Link>
        <Link href="/USEEFFECT/fetchdata" className="flex justify-center" style={{color: "red"}}>FETCH JSON OBJECTS EXAMPLE</Link>
        </div>
        </>
    )
}
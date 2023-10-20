import { useEffect, useState } from "react"

export default function usestateindex(){
    const [product, setproduct] = useState("EMPTY")
    const selectproduct = (e) => {
        setproduct(e.target.value)
    }
    useEffect(()=>{
        console.log(product)
    },[product])
    return(
        <>
        <h1 className="flex justify-center" style={{fontSize:"50px"}}>USEEFFECT(1)</h1>
        <h1 className="flex justify-center mb-10" style={{fontSize:"20px"}}>Select Product</h1>
        <div className="flex justify-center mb-10" style={{color: "green", border:"2px solid"}}>
            <select onChange={selectproduct}>
                <option value="TV-product1">Product1</option>
                <option value="Laptop-product2">Product2</option>
                <option value="Computer-product3">Product3</option>
                <option value="Macbook-product4">Product4</option>
            </select>
        </div>
        <span className="flex justify-center">{`THE PRODUCT YOU SELECTED IS : ${product}`}</span>
        </>
    )
}
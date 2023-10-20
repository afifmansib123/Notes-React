import { useEffect, useState } from "react"

const fetchdata = () => {
    const [data, setdata] = useState()
    useEffect(()=>{
        fetch("https://api.sampleapis.com/coffee/hot/1").then((res)=>{return res.json()})
        .then((res)=>{
            setdata(res)
        })
        .catch((err)=>{alert(err)})
    },[])
    return(
        <>
        <h1 className="flex justify-center" style={{fontSize:"50px"}}>USEEFFECT(2)</h1>
        <div className="flex justify-center">
            <button onClick={()=>{alert(JSON.stringify(data))}}>check fetched data</button>
        </div>
        </>
    )
}
export default fetchdata
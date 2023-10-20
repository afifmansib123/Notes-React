import { useState } from "react"

const fetchdata = () => {
    const [data, setdata] = useState()
    const fetchdata = () => {
        fetch("https://api.sampleapis.com/coffee/hot/1").then((res)=>{return res.json()})
        .then((res)=>{
            setdata(res)
        })
        .catch((err)=>{alert(err)})
    }
    return(
        <>
        <h1 className="flex justify-center" style={{fontSize:"50px"}}>USEEFFECT(2)</h1>
        <div className="flex justify-center">
            <button className="flex justify-center" style={{color: "green"}} onClick={fetchdata}>Fetch Data</button>
            <button className="flex justify-center ml-20" style={{color: "blue"}} onClick={()=>{alert(JSON.stringify(data))}}>Check Data</button>
        </div>
        </>
    )
}
export default fetchdata
import { useRouter } from "next/router"

export default function usestateindex(){
    const router = useRouter()
    const examples = ["fetchdata", "inputvalue"]
    return(
        <div className="flex justify-center">
        <h1 className="flex justify-center" style={{fontSize:"50px"}}>USESTATE</h1>
        {examples.map((x)=>(<button className="flex justify-center mt-20 mb-20 mr-20" onClick={()=>{router.push(`/USESTATE/${x}`)}}  style={{border: "2px solid", backgroundColor: "yellow"}}>{x}</button>))}
        </div>
    )
}
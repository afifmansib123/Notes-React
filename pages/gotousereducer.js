import { useRouter } from "next/router"

export default function useReducerindex(){
    const router = useRouter()
    const examples = ["fetchdata", "changeproducts"]
    return(
        <>
        <h1 className="flex justify-center" style={{fontSize:"50px"}}>USEREDUCER</h1>
        <div className="flex justify-center">
        {examples.map((x)=>(<button className="flex justify-center mt-20 mb-20 mr-20" onClick={()=>{router.push(`/USEREDUCER/${x}`)}}  style={{border: "2px solid", backgroundColor: "yellow"}}>{x}</button>))}
        </div>
        </>
    )
}
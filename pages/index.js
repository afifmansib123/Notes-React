import { useRouter } from "next/router"
export default function Home () {
  const buttonlist = ['usestate','useeffect','usereducer']
  const router = useRouter()
  return(
    <>
    <h1 className="flex justify-center" style={{fontSize:"50px"}}>REACT NOTES</h1>
    <p className="flex justify-center">Listed Below are the most common react functions to use in different applications</p>


    <div className='grid grid-cols-3  gap-20 md:grid-cols-3 lg:grid-cols-3 items-center'>
    {buttonlist.map((x)=>(
      <button className="flex justify-center" style={{border: "2px solid", backgroundColor: "yellow"}}
      onClick={()=>{
        let str = "goto" + x
        router.push(`/${str}`) 
      }}
      >{x}</button>
    ))}
    <button className="flex justify-center" style={{border: "2px solid", backgroundColor: "yellow"}} onClick={()=>{router.push('/three-together')}}>3 together</button>
    </div>
    </>
  )
}
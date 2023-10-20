import { useState } from "react"

const fetchdata = () => {
    const person = {
        name : "",
        age : 0,
        gender : "",
    }
    const [name,setname] = useState()
    const getname = (e) => {
        e.preventDefault()
        setname(e.target.value)
    }
    const [age,setage] = useState()
    const getage = (e) => {
        e.preventDefault()
        setage(e.target.value)
    }
    const [gender,setgender] = useState()
    const getgender = (e) => {
        e.preventDefault()
        setgender(e.target.value)
    }
    return(
        <>
        <h1 className="flex justify-center" style={{fontSize:"50px"}}>USESTATE(1)</h1>
        <form className="flex justify-center" onSubmit={(e)=>{
            e.preventDefault()
            person.name = name
            person.age = age
            person.gender = gender
            alert(`the person is ${JSON.stringify(person)}`)
        }}>
            <label>Name:</label>
            <input className="flex justify-center ml-5 mr-5" type="text" onChange={getname}></input>
            <label>Age: </label>
            <input className="flex justify-center ml-5 mr-5" type="number" onChange={getage}></input>
            <label>Gender:</label>
            <input className="flex justify-center ml-5 mr-5" type="text" onChange={getgender}></input>
            <button type="submit" style={{color: "green", backgroundColor:"yellow"}}>GET PERSON INFO</button>
        </form>
        </>
    )
}
export default fetchdata
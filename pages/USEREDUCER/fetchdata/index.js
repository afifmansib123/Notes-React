import { initialstate, reducerfunction } from "./reducerfile"
import { useReducer } from "react"

export default function Home() {
  const [state, dispatch] = useReducer(reducerfunction, initialstate)

  const fetchdata = () => {
    fetch("https://api.sampleapis.com/coffee/hot/1").then((res) => { return res.json() })
      .then((res) => { dispatch({ type: "SUCCESS", payload: [res] }) })
      .catch((error) => { dispatch({ type: "FAIL" }) })
  }

  const fetchalldata = () => {
    fetch("https://api.sampleapis.com/coffee/hot").then((res) => { return res.json() })
      .then((res) => { dispatch({ type: "SUCCESS", payload: res }) })
      .catch((error) => { dispatch({ type: "FAIL" }) })
    console.log(state.coffees)
  }
  return (
    <div>
      <h1 className="flex justify-center">Usereducer</h1>
      <div className="flex justify-center">
        <button onClick={fetchdata} style={{ color: "green", border: "2px solid" }} className="flex justify-center mt-10 mb-10 mr-10">Fetch a coffee</button><br />
        <button onClick={fetchalldata} style={{ color: "green", border: "2px solid" }} className="flex justify-center mt-10 mb-10">Fetch all coffees</button>
      </div>
      <div className="flex justify-center">
        <ul>
        {state.coffees.map((x)=>(<li><p>Title: {x.title}</p><br/> Ingredients: {x.ingredients} <br/><img src={x.image}></img></li>))}
        </ul>
        </div>
    </div>
  )
}
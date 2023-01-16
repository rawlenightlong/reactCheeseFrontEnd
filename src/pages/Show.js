import { useLoaderData } from "react-router-dom"

export default function Show(props){

    const cheese = useLoaderData()
    return (<>
    
    <div className="cheese">
        <h1>{cheese.name}</h1>
        <h2>{cheese.countryOfOrigin}</h2>
        <img src={cheese.image} alt={cheese.name}/>
    </div>
    
    </>)
}
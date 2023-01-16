import {Form, Link, useLoaderData,} from "react-router-dom"
import { useState } from "react"


export default function Index(props){

    const [name, setName] = useState("")
    const [countryOfOrigin, setCountryOfOrigin] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit= event => {

        const newName=[...name]
        setName(newName)
        const newCountry = [...countryOfOrigin]
        setCountryOfOrigin(newCountry)
        const newImage = [...image]
        setImage(newImage)
    }

    const cheeses = useLoaderData()



    return (
        <div>
        <h2>Create a Person</h2>
        <Form action="/create" method="post" onSubmit={handleSubmit}>
            <input type="input" id="form" name="name" placeholder="Cheese Name" onChange={event=>setName(event.target.value)}/>
            <input type="input" id="form" name="countryOfOrigin" placeholder="Country of Origin"onChange={event=>setCountryOfOrigin(event.target.value)}/>
            <input type="input" id="form" name="image" placeholder="Image Link"onChange={event=>setImage(event.target.value)}/>
            <button type="submit">Add Cheese</button>
        </Form>

        <h2>Cheeses</h2>
        {cheeses.map(cheese => (
        <div key={cheese._id} className="cheese">
            <Link to={`/${cheese._id}`}>
                <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name}/>
            <h3>{cheese.countryOfOrigin}</h3>
        </div>
    ))}
    </div>
    )
}
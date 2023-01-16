import {Form, Link, useLoaderData } from "react-router-dom"

export default function Index(props){

    const cheeses = useLoaderData()

    return (
        <div>
        <h2>Create a Person</h2>
        <Form action="/create" method="post">
            <input type="input" name="name" placeholder="Cheese Name"/>
            <input type="input" name="countryOfOrigin" placeholder="Country of Origin"/>
            <input type="input" name="image" placeholder="Image Link"/>
            <input type="submit" value="Add Cheese"/>
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
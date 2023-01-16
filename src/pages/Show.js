import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"

export default function Show(props){

    const cheese = useLoaderData()
    return (<>
    
    <div className="cheese">
        <h1>{cheese.name}</h1>
        <h2>Country of Origin: {cheese.countryOfOrigin}</h2>
        <img src={cheese.image} alt={cheese.name}/>

        <h2>Update {cheese.name}</h2>
        <Form action={`/update/${cheese._id}`} method="post">
            <input type="text" name="name" placeholder="Cheese Name"/>
            <input type="text" name="countryOfOrigin" placeholder="Country"/>
            <input type="text" name="image" placeholder="Image Link"/>
            <input type="submit" value={`update ${cheese.name}`}/>
        </Form>
        <h2>Delete {cheese.name}</h2>
        <Form action={`/delete/${cheese._id}`} method="post">
            <input type='submit' value={`Delete ${cheese.name}`}/>
        </Form>
    </div>
    
    </>)
}
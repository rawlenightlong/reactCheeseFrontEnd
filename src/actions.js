import { redirect } from "react-router-dom";

const URL = "https://reactcheesebackend.onrender.com"

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }

    await fetch(URL + "/cheeses", 
    {
        method: "post", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCheese),
        })
        return redirect("/")
}
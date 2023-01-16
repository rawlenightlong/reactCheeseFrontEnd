const URL = "https://reactcheesebackend.onrender.com"

export const cheesesLoader = async () => {
    const response = await fetch(URL + "/cheeses")
    const people = await response.json()
    return people
}
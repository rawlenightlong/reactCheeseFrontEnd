import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { cheesesLoader, cheeseLoader} from "./loaders"
import { createAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={cheesesLoader}/>
        <Route path=":id" element={<Show/>} loader={cheeseLoader}/>
        <Route path="create" action={createAction}/>
        <Route path="update/:id"/>
        <Route path="delete/:id"/>
    </Route>
))

export default router
import { Link } from "react-router-dom"

export default function Header(props){
    return (<>
    
    <nav className="nav">
        <Link to="/">
            <div>Cheese App</div>
        </Link>
    </nav>
    
    </>)
}
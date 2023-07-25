import { Link } from "react-router-dom"
export default function NavBar (){
    return(
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/CharacterGallery">
                <div>Charecters</div>
            </Link>

            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    )
}
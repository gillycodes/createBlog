import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <h2>The Gilly Blog</h2>
            <Link to="/">Home   </Link>
            <Link to="/create">New Blog</Link>
        </div>
     );
}
 
export default NavBar;
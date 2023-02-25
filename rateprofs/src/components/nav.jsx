import { Link } from "react-router-dom";

const NavBar= () =>{
    return (
    <div className="navhead">
        <div className="compName">
            <h1>RATEMUPROFESSORS</h1>
        </div>
        <div className="navLinks">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Schools</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
        </div>
        <div className="login">
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/">Sign Up</Link>
            </li>
        </div>
    </div>
    );
  }
  export default NavBar;
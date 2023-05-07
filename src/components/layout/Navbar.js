
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> Four Gs Application</h1>
            <div className="links">
                <Link to="/" className="links" style={{ color: 'white', fontSize: '12px', backgroundColor: 'green' }}   >Home </Link>
                <Link to="/users" className="links">Users </Link>


            </div>

        </nav>
    );
}

export default Navbar;
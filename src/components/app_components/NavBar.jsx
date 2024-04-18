import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <span>
                <Link to="/">Home</Link>
            </span>
            <span>
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contacts">Contact Us</Link>
                <Link to="/careers">Careers</Link>
            </span>
        </div>
    )
}

export default NavBar
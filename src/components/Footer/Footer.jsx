



import { Link } from 'react-router';

import './Footer.css';

function Footer() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "blue" }}>
            <p>Footer</p>
            <ul style={{ display: "flex", listStyle: "none", gap: "2rem" }}>
                <li>
                    <Link to="/">
                        Footer
                    </Link>
                </li>
               
            </ul>
            
        </nav>
    );
};

export default NavBar;
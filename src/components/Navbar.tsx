import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
    return (
        <div className="flex container-navbar">
            <Link to="/" className="link-main"> Library </Link>
            <Link to="/deckbuilder" className="link-main"> Deck Builder </Link>
            <Link to="/glossary" className="link-main"> Glossary </Link>
            <Link to="/about" className="link-main"> About </Link>
        </div>
    );
};
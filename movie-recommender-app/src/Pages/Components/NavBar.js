// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import Logo from "./images/Logo2.svg";

const NavBar = ({ isHome }) => {
    const gitRepoLink =
        "https://smdcup.me/";
    return (
        <div className="container header">
            <Link to="/ ">
                <img src={Logo} className="logo" alt="" />
            </Link>
            {/* if isHome then the button is the github button else its the home button*/}
            {isHome ? (
            <a href="/" className="header-btn1 bouncy">
                    <i className="fas fa-home"></i> Home
                </a>
            ) : (
                <a
                    href={gitRepoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="header-btn1 bouncy"
                >
                    <i className="fa fa-dedent"></i> Back
                </a>
            )}
        </div>
    );
};

export default NavBar;

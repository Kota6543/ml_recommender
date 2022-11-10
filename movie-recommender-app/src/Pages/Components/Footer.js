// Footer Component
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div id="row1" className="row ">
                    <a
                        href="https://smdcup.me/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a
                        href="https://smdcup.me/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://smdcup.me/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-youtube"></i>
                    </a>
                </div>
                <div id="row1" className="row">
                    Recommender system created by SMDCUP
                </div>
            </div>
        </footer>
    );
};

export default Footer;

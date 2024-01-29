import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contactInformation = [
    { key: 0, icon: faLinkedin, url: "" },
    { key: 1, icon: "", url: "" },
    { key: 2, icon: faSquareGithub, url: ""},
]

function Footer() {
    return (
        <footer className="footer">
            <p>Thanks for visiting my portfolio</p>
            <p>Let's connect</p>
            <div> 
                {contactInformation.map((link) => (
                    <a href={link.url} key={link.key} className="footer-icon">
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                ))} 
            </div>
        </footer>
    )
}

export default Footer;
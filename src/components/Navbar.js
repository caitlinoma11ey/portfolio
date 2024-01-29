const navigationLinks = [
    { key: 0, label: "Home", location: "/" },
    { key: 1, label: "About", location: "/about" },
    { key: 2, label: "Resume", location: "/" },
  ];

function Navbar() {
    return (
        <nav className="navbar">
            <p>Caitlin O'Malley</p>
            <ul className="navbar-links">
                {navigationLinks.map((link) => (
                    <li key={link.key}>
                        <a href={link.location} className="navbar-link">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;
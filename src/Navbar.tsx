export default function Navbar() {
    return (
        <>
            <header className="site-header">
                <nav className="nav-container" aria-label="Main navigation" >
                    <a className="brand" href="#home">AHMED HAARIS M</a>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export function NavbarGE() {
    return (
        <div className="nav-wrap">
            <nav className="container">
                <div className="brand flex items-center gap-2">
                    <img
                        src="/GeFINAL.png"
                        alt="Globeye logo"
                        style={{ height: "24px", width: "auto" }}
                    />
                    <div>Globeye</div>
                </div>
                <div className="nav-links">
                    <a href="#why">Why Globeye</a>
                    <a href="#how">How It Works</a>
                    <a href="#capabilities">Capabilities</a>
                    <a href="#deployment">Deployment</a>
                    <a href="#industries">Industries</a>
                </div>

                <div className="nav-actions">
                    <a href="#video" className="btn btn-secondary">View Demo</a>
                    <a href="#contact" className="btn btn-primary">Request Demo</a>
                </div>
            </nav>
        </div>
    );
}
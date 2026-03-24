import { DashboardGE } from './DashboardGE';
export function HeroGE() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div>
                    <div className="eyebrow">
                        Activity-Aware Monitoring • Digital Twin Intelligence
                    </div>

                    <h1>Turn Cameras Into Operational Intelligence</h1>

                    <p>
                        Globeye transforms existing camera infrastructure into a holistic
                        video security and operational intelligence platform.
                    </p>

                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Request Demo</a>
                        <a href="#dashboard" className="btn btn-secondary">View Dashboard</a>
                    </div>

                    <div className="hero-meta">
                        <span className="hero-chip">Cloud, Edge, or Hybrid</span>
                        <span className="hero-chip">Uses Existing Cameras</span>
                        <span className="hero-chip">Policy-Aware Alerts</span>
                        <span className="hero-chip">Digital Twin Mapping</span>
                    </div>
                </div>

                <DashboardGE />
            </div>
        </section>
    );
}
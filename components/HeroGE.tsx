export function HeroGE() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-content">
                    <div className="eyebrow">
                        Activity-Aware Monitoring & Digital Twin Intelligence
                    </div>

                    <h1 className="text-white">Turn Cameras Into Operational Intelligence</h1>

                    {/*<p>
                        Globeye transforms existing camera infrastructure into a holistic
                        video security and operational intelligence platform.
                    </p>*/}

                    {/* Look for chunky square like kinda font for the see more do more*/}
                    <p className="text-2xl leading-[1.5] text-gray-500 p-1 pb-5"> <span className="text-green-500">See More • </span>
                        <span className="text-red-700">Do More</span></p>

                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Request Demo</a>
                        <a href="#dashboard" className="btn btn-secondary">View Dashboard</a>
                    </div>

                    <div className="hero-meta">
                        <span className="hero-chip">Edgefirst AI</span>
                        <span className="hero-chip">Uses Existing Cameras</span>
                        <span className="hero-chip">Policy-Aware Alerts</span>
                        <span className="hero-chip">Digital Twin Mapping</span>
                    </div>
                </div>

                {/* add hint: "click to open" and click to open func*/}
                <div className="hero-image-wrap">
                    <img
                        src="/heroog.png"
                        alt="Globeye digital twin platform dashboard"
                        className="hero-image pl-10"
                    />
                </div>
            </div>
        </section>
    );
}
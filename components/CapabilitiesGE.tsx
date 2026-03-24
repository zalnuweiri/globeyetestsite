export function CapabilitiesGE() {
    return (
        <section className="block" id="capabilities">
            <div className="container">
                <div className="section-head">
                    <div className="label">Core Capabilities</div>
                    <h2>Operational Supervision Across the Facility</h2>
                    <p>
                        Globeye unifies live monitoring, analytics, alerting, and investigation into a single product layer.
                    </p>
                </div>

                <div className="cap-grid">
                    <div className="cap-card">
                        <h3>People Flow & Occupancy</h3>
                        <p>Monitor entries, exits, and congestion patterns.</p>
                    </div>

                    <div className="cap-card">
                        <h3>Vehicle Access</h3>
                        <p>Track movement and detect violations.</p>
                    </div>

                    <div className="cap-card">
                        <h3>Safety & Incidents</h3>
                        <p>Detect abnormal events with structured alerts.</p>
                    </div>

                    <div className="cap-card">
                        <h3>Service Monitoring</h3>
                        <p>Track operational conditions like waste zones.</p>
                    </div>

                    <div className="cap-card">
                        <h3>Search & Investigation</h3>
                        <p>Filter by zone, event, or time range.</p>
                    </div>

                    <div className="cap-card">
                        <h3>Analytics</h3>
                        <p>Turn detections into actionable insights.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export function DashboardGE() {
    return (
        <div className="hero-visual" id="dashboard">
            <div className="dashboard-frame">
                <div className="frame-top">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="frame-label">
            OPERATIONAL INTELLIGENCE DASHBOARD
          </span>
                </div>

                <div className="frame-body">
                    <div className="mock-grid">
                        <div className="mock-panel camera-feed">
                            <div className="mock-title">Main Live View</div>
                            <div className="live-badge">LIVE</div>
                            <div className="mini-alert">
                                Activity appears as structured signals.
                            </div>
                        </div>

                        <div className="mock-stack">
                            <div className="mock-panel">
                                <div className="mock-title">Operational KPIs</div>
                                <div className="mock-kpis">
                                    <div className="kpi">People<strong>1,284</strong></div>
                                    <div className="kpi">Occupancy<strong>246</strong></div>
                                    <div className="kpi">Alerts<strong>12</strong></div>
                                    <div className="kpi">Status<strong>Nominal</strong></div>
                                </div>
                            </div>

                            <div className="mock-panel">
                                <div className="mock-title">Alert Stream</div>
                                <div className="mini-alert">
                                    Vehicle violation • 10:43 AM<br />
                                    Congestion • 10:47 AM
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mock-panel mt">
                        <div className="mock-title">Digital Twin Map</div>
                        <div className="map-lines" />
                        <div className="map-dot one" />
                        <div className="map-dot two" />
                        <div className="map-dot three" />
                    </div>
                </div>
            </div>
        </div>
    );
}
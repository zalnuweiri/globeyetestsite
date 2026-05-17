export function IndustriesGE() {
    return (
        <section className="block" id="industries">
            <div className="container">
                <div className="section-head center">
                    <div className="label">Industry Solutions</div>
                    <h2>Designed for Real-World Operations</h2>
                </div>

                <div className="industry-grid">
                    <div className="industry">
                        <h3>Schools</h3>
                        <p>Occupancy, access, and safety monitoring.</p>
                    </div>

                    <div className="industry">
                        <h3>Retail</h3>
                        <p>Visitor flow and congestion detection.</p>
                    </div>

                    <div className="industry">
                        <h3>Warehouses</h3>
                        <p>Vehicle activity and zone control.</p>
                    </div>

                    <div className="industry">
                        <h3>Public Venues</h3>
                        <p>Crowd awareness and incident detection.</p>
                    </div>
                </div>
                <div className="flex justify-center px-4 pt-14">
                    <img
                        src="/dash5.png"
                        alt="Globeye dashboard preview"
                        className="w-[950px] max-w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
export function HowGE() {
    return (
        <section className="block" id="how">
            <div className="container">

                <div className="flex justify-center px-4 pb-10">
                    <img
                        src="/dash3.png"
                        alt="Globeye dashboard preview"
                        className="w-[950px] max-w-full h-auto object-contain"
                    />
                </div>

                {/* THIS WAS MISSING */}
                <div className="section-head center">
                    <div className="label">How It Works</div>
                    <h2>Designed to Fit Existing Operations</h2>
                    <p>
                        Globeye lowers adoption friction by working with existing camera infrastructure while adding
                        AI-driven interpretation, structured alerts, and centralized operational visibility.
                    </p>
                </div>

                <div className="steps">
                    <div className="step">
                        <div className="step-no">1</div>
                        <h3>Connect</h3>
                        <p>Use existing cameras.</p>
                    </div>

                    <div className="step">
                        <div className="step-no">2</div>
                        <h3>Analyze</h3>
                        <p>AI interprets activity.</p>
                    </div>

                    <div className="step">
                        <div className="step-no">3</div>
                        <h3>Act</h3>
                        <p>Receive insights + alerts.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
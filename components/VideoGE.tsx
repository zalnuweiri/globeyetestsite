export function VideoGE() {
    return (
        <section className="block" id="video">
            <div className="container">
                <div className="section-head center">
                    <div className="label">Platform Demonstration</div>
                    <h2>See Activity-Aware Monitoring in Action</h2>
                    <p>
                        Watch Globeye’s activity-aware monitoring, dashboard motion, and heatmap sequence in action.
                    </p>
                </div>

                <div className="video-wrap">
                    <div className="video-box">
                        <video
                            className="video-demo h-full w-full"
                            src="/factory.webm"
                            title="factory"
                            controls
                            muted
                            playsInline
                            autoPlay={true}
                            preload="metadata"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

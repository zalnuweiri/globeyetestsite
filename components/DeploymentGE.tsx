export function DeploymentGE() {
    const rowClass =
        "flex items-start gap-[18px] border-b border-[rgba(148,163,184,0.14)] py-[16px] last:border-b-0";

    const iconClass =
        "flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(59,130,246,0.12)]";

    const svgClass =
        "h-[18px] w-[18px] fill-none stroke-[#93c5fd] stroke-[1.9]";

    return (
        <section id="deployment" className="px-[60px] py-[60px] max-[1100px]:px-[28px]">
            <div
                className="relative mx-auto grid max-w-[1500px] grid-cols-[0.9fr_1.1fr] gap-[44px] overflow-hidden rounded-[30px] px-[42px] py-[34px] text-white shadow-[0_24px_60px_rgba(15,23,42,0.26)] max-[1100px]:grid-cols-1 max-[1100px]:gap-[30px] max-[1100px]:p-[30px]"
                style={{
                    background:
                        "radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 32%), linear-gradient(145deg,#050b16,#0b1424 58%,#101b2e)",
                }}
            >
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                    }}
                />

                <div className="relative z-[1]">
                    <div className="mb-[14px] text-[12px] font-extrabold tracking-[0.16em] text-[#60a5fa]">
                        EDGE-FIRST AI ARCHITECTURE
                    </div>

                    <h2 className="mb-[18px] text-[46px] font-medium leading-[1.02] tracking-[-0.045em] max-[1100px]:text-[36px]">
                        Real-Time Intelligence
                        <br />
                        On-Site
                    </h2>

                    <p className="max-w-[520px] text-[20px] leading-[1.5] text-[#dbeafe]">
                        Globeye runs AI close to the camera layer, enabling local detection, alerts, analytics, and
                        natural-language search across recorded video.
                    </p>
                </div>

                <div className="relative z-[1] flex flex-col justify-center gap-[18px]">
                    <div className={rowClass}>
                        <div className={iconClass}>
                            <svg viewBox="0 0 24 24" className={svgClass} strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="4" width="16" height="6" rx="2" />
                                <rect x="4" y="14" width="16" height="6" rx="2" />
                                <line x1="8" y1="7" x2="8.01" y2="7" />
                                <line x1="8" y1="17" x2="8.01" y2="17" />
                                <line x1="12" y1="7" x2="16" y2="7" />
                                <line x1="12" y1="17" x2="16" y2="17" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="mb-[4px] text-[20px] font-semibold">Local AI Processing</h3>
                            <p className="text-[20px] leading-[1.5] text-[#cbd5e1]">
                                AI inference, event detection, and alerts run directly on-site.
                            </p>
                        </div>
                    </div>

                    <div className={rowClass}>
                        <div className={iconClass}>
                            <svg viewBox="0 0 24 24" className={svgClass} strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="6" />
                                <line x1="16" y1="16" x2="21" y2="21" />
                                <path d="M8.5 11h5" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="mb-[4px] text-[20px] font-semibold">
                                Natural-Language Video Search
                            </h3>
                            <p className="text-[20px] leading-[1.5] text-[#cbd5e1]">
                                Search recorded video by people, vehicles, events, zones, or operational violations.
                            </p>
                        </div>
                    </div>

                    <div className={rowClass}>
                        <div className={iconClass}>
                            <svg viewBox="0 0 24 24" className={svgClass} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3z" />
                                <path d="M9.5 12l1.8 1.8L15 10" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="mb-[4px] text-[20px] font-semibold">Private Site Control</h3>
                            <p className="text-[20px] leading-[1.5] text-[#cbd5e1]">
                                Keep video and operational intelligence within the local environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
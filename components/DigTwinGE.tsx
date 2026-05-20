export function DigTwinGE() {
    const rowClass =
        "flex items-start gap-[18px] border-b border-[rgba(148,163,184,0.14)] py-[16px] last:border-b-0";

    const iconClass =
        "flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(59,130,246,0.12)]";

    const svgClass =
        "h-[18px] w-[18px] fill-none stroke-[#93c5fd] stroke-[1.9]";

    return (
        <section id="digital-twin" className="px-[60px] py-[60px] max-[1100px]:px-[28px]">
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
                        DIGITAL TWIN MAP
                    </div>

                    <h2 className="mb-[18px] text-[46px] font-medium leading-[1.02] tracking-[-0.045em] max-[1100px]:text-[36px]">
                        Spatial Intelligence
                        <br/>
                        For Every Event
                    </h2>

                    <p className="max-w-[500px] text-[20px] leading-[1.5] text-[#dbeafe]">
                        Globeye connects detections, alerts, and movement patterns to a live operational site map.
                    </p>
                </div>

                <div className="relative z-[1] flex flex-col justify-center gap-[18px]">
                    <div className={rowClass}>
                        <div className={iconClass}>
                            <svg viewBox="0 0 24 24" className={svgClass} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11z"/>
                                <circle cx="12" cy="10" r="2.2"/>
                            </svg>
                        </div>

                        <div>
                            <h3 className="mb-[4px] text-[20px] font-semibold">Locate</h3>
                            <p className="text-[20px] leading-[1.5] text-[#cbd5e1]">
                                Tie every detection to an exact place on the site map.
                            </p>
                        </div>
                    </div>

                    <div className={rowClass}>
                        <div className={iconClass}>
                            <svg viewBox="0 0 24 24" className={svgClass} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 15l4-4 4 3 5-6 3 4"/>
                            </svg>
                        </div>

                        <div>
                            <h3 className="mb-[4px] text-[20px] font-semibold">Understand</h3>
                            <p className="text-[20px] leading-[1.5] text-[#cbd5e1]">
                                Visualize movement, congestion, dwell time, and zone activity.
                            </p>
                        </div>
                    </div>

                    <div className={rowClass}>
                        <div className={iconClass}>
                            <svg viewBox="0 0 24 24" className={svgClass} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3l9 16H3L12 3z"/>
                                <line x1="12" y1="9" x2="12" y2="13"/>
                            </svg>
                        </div>

                        <div>
                            <h3 className="mb-[4px] text-[20px] font-semibold">Act</h3>
                            <p className="text-[20px] leading-[1.5] text-[#cbd5e1]">
                                Trigger alerts and operational workflows from one coordinated view.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

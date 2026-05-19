export function WhyGE() {
    const cardClass =
        "min-h-[210px] rounded-[22px] border border-[rgba(148,163,184,0.20)] bg-white px-[34px] py-[38px] shadow-[0_22px_55px_rgba(15,23,42,0.08)] max-[1100px]:min-h-0";

    const iconClass =
        "mb-[28px] flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#eaf3ff]";

    const svgClass =
        "h-[28px] w-[28px] fill-none stroke-[#0f172a] stroke-[2.2]";

    return (
        <section
            id="why"
            className="mx-auto max-w-[1500px] px-[48px] pb-[70px] pt-[90px] max-[1100px]:px-[28px] max-[1100px]:py-[64px]"
        >
            <div className="mb-[58px] text-center">
                <div className="mb-[12px] text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#2563eb]">
                    Why Globeye
                </div>

                <h2 className="mb-[22px] text-[64px] font-normal leading-[1.02] tracking-[-0.055em] text-[#0f172a] max-[1100px]:text-[46px] max-[640px]:text-[38px]">
                    More Than Video Monitoring
                </h2>
            </div>

            <div className="grid grid-cols-3 gap-[28px] max-[1100px]:grid-cols-1">
                <div className={cardClass}>
                    <div className={iconClass}>
                        <svg
                            viewBox="0 0 24 24"
                            className={svgClass}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 12h4l2-7 4 16 3-9h5" />
                        </svg>
                    </div>

                    <h3 className="mb-[18px] text-[30px] font-medium leading-[1.1] text-[#0f172a] max-[640px]:text-[24px]">
                        Activity Intelligence
                    </h3>

                    <p className="text-[22px] leading-[1.45] text-[#64748b] max-[640px]:text-[19px]">
                        Detect meaningful operational activity.
                    </p>
                </div>

                <div className={cardClass}>
                    <div className={iconClass}>
                        <svg
                            viewBox="0 0 24 24"
                            className={svgClass}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 4a6 6 0 0 1 4 10.5V20h-5" />
                            <path d="M9 20H5V4h7a6 6 0 0 1 3 11.2" />
                            <path d="M8 8h4" />
                            <path d="M8 12h6" />
                            <path d="M8 16h4" />
                            <circle cx="5" cy="8" r="1" />
                            <circle cx="5" cy="12" r="1" />
                            <circle cx="5" cy="16" r="1" />
                        </svg>
                    </div>

                    <h3 className="mb-[18px] text-[30px] font-medium leading-[1.1] text-[#0f172a] max-[640px]:text-[24px]">
                        Digital Twin Maps
                    </h3>

                    <p className="text-[22px] leading-[1.45] text-[#64748b] max-[640px]:text-[19px]">
                        Understand spatial context in real time.
                    </p>
                </div>

                <div className={cardClass}>
                    <div className={iconClass}>
                        <svg
                            viewBox="0 0 24 24"
                            className="h-[28px] w-[28px] fill-none stroke-[#e11d48] stroke-[2.2]"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 4a5 5 0 0 0-5 5v5l-2 3h14l-2-3V9a5 5 0 0 0-5-5z" />
                            <path d="M9 20h6" />
                            <path d="M4 8h1" />
                            <path d="M19 8h1" />
                            <path d="M6 3l1 1" />
                            <path d="M18 3l-1 1" />
                        </svg>
                    </div>

                    <h3 className="mb-[18px] text-[30px] font-medium leading-[1.1] text-[#0f172a] max-[640px]:text-[24px]">
                        Operational Alerts
                    </h3>

                    <p className="text-[22px] leading-[1.45] text-[#64748b] max-[640px]:text-[19px]">
                        Generate structured operational alerts.
                    </p>
                </div>
            </div>
        </section>
    );
}
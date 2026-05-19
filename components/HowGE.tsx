export function HowGE() {
    const cardClass =
        "min-h-[205px] rounded-[22px] border border-[rgba(148,163,184,0.20)] bg-white px-[34px] py-[36px] shadow-[0_22px_55px_rgba(15,23,42,0.08)] max-[1100px]:min-h-0";

    return (
        <section
            id="how"
            className="mx-auto max-w-[1500px] px-[48px] pb-[90px] pt-[70px] max-[1100px]:px-[28px] max-[1100px]:py-[64px]"
        >
            <div className="flex justify-center px-4 pb-10">
                <img
                    src="/dash3.png"
                    alt="Globeye dashboard preview"
                    className="w-[950px] max-w-full h-auto object-contain"
                />
            </div>
            <div className="mb-[58px] text-center">
                <div className="mb-[12px] text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#2563eb]">
                    How It Works
                </div>

                <h2 className="mb-[22px] text-[64px] font-normal leading-[1.02] tracking-[-0.055em] text-[#0f172a] max-[1100px]:text-[46px] max-[640px]:text-[38px]">
                    Designed to Fit Existing Operations
                </h2>

                <p className="mx-auto max-w-[920px] text-[26px] leading-[1.45] text-[#64748b] max-[1100px]:text-[21px] max-[640px]:text-[19px]">
                    Globeye lowers adoption friction by working with existing camera infrastructure while adding
                    AI-driven interpretation, structured alerts, and centralized operational visibility.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-[28px] max-[1100px]:grid-cols-1">
                <div className={cardClass}>
                    <div
                        className="mb-[28px] flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#eaf3ff] text-[22px] font-extrabold text-[#2563eb]">
                        1
                    </div>

                    <h3 className="mb-[18px] text-[30px] font-medium leading-[1.1] text-[#0f172a] max-[640px]:text-[24px]">
                        Connect
                    </h3>

                    <p className="text-[22px] leading-[1.45] text-[#64748b] max-[640px]:text-[19px]">
                        Use existing cameras.
                    </p>
                </div>

                <div className={cardClass}>
                    <div
                        className="mb-[28px] flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#eaf3ff] text-[22px] font-extrabold text-[#2563eb]">
                        2
                    </div>

                    <h3 className="mb-[18px] text-[30px] font-medium leading-[1.1] text-[#0f172a] max-[640px]:text-[24px]">
                        Analyze
                    </h3>

                    <p className="text-[22px] leading-[1.45] text-[#64748b] max-[640px]:text-[19px]">
                        AI interprets activity.
                    </p>
                </div>

                <div className={cardClass}>
                    <div
                        className="mb-[28px] flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#eaf3ff] text-[22px] font-extrabold text-[#2563eb]">
                        3
                    </div>

                    <h3 className="mb-[18px] text-[30px] font-medium leading-[1.1] text-[#0f172a] max-[640px]:text-[24px]">
                        Act
                    </h3>

                    <p className="text-[22px] leading-[1.45] text-[#64748b] max-[640px]:text-[19px]">
                        Receive insights and alerts.
                    </p>
                </div>
            </div>
        </section>
    );
}
import { Activity } from 'lucide-react';
import { Siren } from 'lucide-react';

export function WhyGE() {
    return (
        <section className="block" id="why">
            <div className="container">
                <div className="section-head center">
                    <div className="icon-volume-off">Why Globeye</div>
                    <h2>More Than Video Monitoring</h2>
                </div>

                <div className="three-up">
                    <div className="soft-card">
                        <div className="icon flex items-center justify-center">
                            <Activity className="" size={45} strokeWidth={2}/>
                        </div>
                        <h3>Activity-Aware</h3>
                        <p>Detect meaningful activity.</p>
                    </div>

                    <div className="soft-card">
                        <div className="icon flex items-center justify-center overflow-hidden">
                            <img
                                src="/icons/digital-twin.png"
                                alt="Digital Twin icon by Arkinasi"
                                className="w-[px] h-[20px] object-contain"
                            />
                        </div>
                        <h3>Digital Twin</h3>
                        <p>Understand spatial context.</p>
                    </div>

                    <div className="soft-card">
                        <div className="icon flex items-center justify-center">
                            <Siren
                                stroke="#d12e47"
                                size={43}
                                strokeWidth={2}
                                style={{ transform: "translateX(2px)" }}
                            />
                        </div>
                        <h3>Alerts</h3>
                        <p>Structured intelligence outputs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
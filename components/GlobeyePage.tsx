"use client";

import "../styles/globeye.css";

import { NavbarGE } from "../components/NavbarGE";
import { HeroGE } from "../components/HeroGE";
import { TrustGE } from "../components/TrustGE";
import { WhyGE } from "../components/WhyGE";
import { HowGE } from "../components/HowGE";
import { CTAGE } from "../components/CTAGE";
import { FooterGE } from "../components/FooterGE";
import { CapabilitiesGE } from "../components/CapabilitiesGE";
import { DigTwinGE } from "../components/DigTwinGE";
import { DeploymentGE } from "../components/DeploymentGE";
import { IndustriesGE } from "../components/IndustriesGE";
import { VideoGE } from "../components/VideoGE";

export function GlobeyePage() {
    return (
        <>
            <NavbarGE />
            <HeroGE />
            <TrustGE />
            <WhyGE />
            <HowGE />
            <CapabilitiesGE />
            <DigTwinGE/>
            <DeploymentGE/>
            <IndustriesGE/>
            <VideoGE/>
            <CTAGE />
            <FooterGE />
        </>
    );
}
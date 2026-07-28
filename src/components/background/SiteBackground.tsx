"use client";
import dynamic from "next/dynamic";
import { useCallback } from "react";

// three.js / postprocessing / face-api must only run on the client.
const GridScan = dynamic(
  () => import("../hero/GridScan").then((m) => m.GridScan),
  { ssr: false }
);

/** Latch + event the Intro overlay waits on, so it never uncovers a black page.
 *  The latch matters because GridScan can paint its first frame before Intro has
 *  mounted its listener — without it, a fast background would be missed and the
 *  intro would sit there until its timeout. */
export const SITE_BG_READY_EVENT = "sitebg:ready";

declare global {
  interface Window {
    __siteBgReady?: boolean;
  }
}

export default function SiteBackground() {
  const handleReady = useCallback(() => {
    window.__siteBgReady = true;
    window.dispatchEvent(new Event(SITE_BG_READY_EVENT));
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <GridScan
        sensitivity={0.55}
        lineThickness={1.1}
        linesColor="#2a2533"
        gridScale={0.1}
        scanColor="#338640"
        scanOpacity={0.18}
        enablePost
        bloomIntensity={0.35}
        chromaticAberration={0.003}
        noiseIntensity={0}
        lineJitter={0.14}
        scanGlow={0.7}
        scanSoftness={3.4}
        scanDirection="forward"
        scanDuration={2.5}
        scanDelay={6}
        enableWebcam
        showPreview={false}
        onReady={handleReady}
        className=""
        style={{}}
      />
    </div>
  );
}

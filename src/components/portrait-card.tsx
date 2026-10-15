"use client";

import Image from "next/image";
import { useRef } from "react";
import { portfolio } from "@/data/portfolio";

export function PortraitCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    cardRef.current?.style.setProperty("--rotate-x", `${y * -7}deg`);
    cardRef.current?.style.setProperty("--rotate-y", `${x * 7}deg`);
  }

  function resetTilt() {
    cardRef.current?.style.setProperty("--rotate-x", "0deg");
    cardRef.current?.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <div
      ref={cardRef}
      className="portrait-card relative aspect-[4/5] w-full max-w-[390px] overflow-hidden rounded-sm bg-elevated"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <Image
        src="/images/portrait.jpg"
        alt={portfolio.portraitAlt}
        fill
        priority
        sizes="(max-width: 768px) 82vw, 390px"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      <span className="absolute bottom-5 left-5 z-10 text-xs font-medium uppercase text-white/90">
        Usually outside, occasionally online
      </span>
    </div>
  );
}
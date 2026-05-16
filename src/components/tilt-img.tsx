"use client";

import { useRef, useState } from "react";

export function TiltImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width; // 0 → 1
    const y = (e.clientY - rect.top) / rect.height; // 0 → 1

    const normalX = x * 2 - 1; // -1 → 1
    const normalY = y * 2 - 1; // -1 → 1

    const rotateY = normalX * 12;
    const rotateX = normalY * -12;

    setStyle({
      transform: `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `,
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: div
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out will-change-transform"
      style={style}
    >
      <img
        src="https://pbs.twimg.com/profile_images/2052074094640693249/PyafNGkY_400x400.jpg"
        alt="Ted Brine"
        className="h-22 w-18 rounded-2xl object-cover"
      />
    </div>
  );
}

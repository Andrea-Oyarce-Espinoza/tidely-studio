"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

export default function HolidayScene() {
  const scene = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribe, () => window.matchMedia(motionQuery).matches, () => true);

  useEffect(() => {
    if (paused || reduced || !scene.current) return;
    const animations = Array.from(scene.current.querySelectorAll("[data-holiday-light]")).map((light, i) => light.animate(
      [{ opacity: 0.55, transform: "scale(.92)" }, { opacity: 1, transform: "scale(1.08)" }, { opacity: 0.55, transform: "scale(.92)" }],
      { duration: 3200 + (i % 3) * 600, delay: i * -370, iterations: Infinity, easing: "ease-in-out" },
    ));
    let visible = true;
    const sync = () => animations.forEach((animation) => { if (document.hidden || !visible) animation.pause(); else animation.play(); });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(scene.current);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync); animations.forEach((animation) => animation.cancel()); };
  }, [paused, reduced]);

  return <div className="holiday-scene" ref={scene}>
    <div className="holiday-drawings" aria-hidden="true">
      <div className="holiday-garland">{Array.from({ length: 9 }, (_, i) => <span className="holiday-bulb" data-holiday-light key={i} />)}</div>
      <div className="holiday-tree"><span className="holiday-star" data-holiday-light /><span className="tree-tier tier-top" /><span className="tree-tier tier-middle" /><span className="tree-tier tier-bottom" /><span className="tree-trunk" />{Array.from({ length: 5 }, (_, i) => <span className={`tree-bauble bauble-${i}`} data-holiday-light key={i} />)}</div>
      <div className="holiday-gifts"><span className="holiday-gift gift-one" /><span className="holiday-gift gift-two" /></div>
      <span className="holiday-spark spark-one" data-holiday-light /><span className="holiday-spark spark-two" data-holiday-light />
    </div>
    <button className="holiday-toggle" type="button" disabled={reduced} aria-pressed={paused || reduced} onClick={() => setPaused((value) => !value)}>{reduced ? "Movimiento reducido" : paused ? "Activar luces" : "Pausar luces"}</button>
  </div>;
}

"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import "./cat-companion.css";

const subscribeToMotion = (callback: () => void) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const getMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const serverMotion = () => true;

function CatDrawing() {
  return <svg viewBox="0 0 120 130" fill="none" aria-hidden="true" focusable="false">
    <g className="cat-body" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      <path className="cat-tail" d="M44 113C28 119 9 115 10 101C11 91 23 89 25 97C27 105 18 106 19 102" />
      <path className="cat-outline" d="M39 113C29 101 34 80 43 67L42 35Q42 26 47 31L60 42Q69 38 79 42L92 30Q97 25 97 36L96 66C105 83 107 103 97 113Q87 122 71 119" />
      <path d="M54 86Q51 102 58 118M79 87L77 118M65 104L66 119" />
      <g className="cat-eyes" strokeWidth="4.4"><path d="M60 58v2M81 58v2" /></g>
      <path className="cat-smile" d="M68 72q3 4 6 0" strokeWidth="1.8" />
      <path className="cat-whiskers" d="M46 70l-8-2M47 76l-8 1M91 70l9-2M91 76l8 1" strokeWidth="1.5" />
    </g>
  </svg>;
}

export default function CatCompanion() {
  const pathname = usePathname();
  const publicPage = !/^\/(admin|studio)(\/|$)/.test(pathname);
  const reduced = useSyncExternalStore(subscribeToMotion, getMotion, serverMotion);
  const [hidden, setHidden] = useState(false);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const [petted, setPetted] = useState(false);
  const [walking, setWalking] = useState(false);
  const [background, setBackground] = useState(false);
  const [side, setSide] = useState<"right" | "left" | "rest">("right");
  const companion = useRef<HTMLElement>(null);
  const homeControl = useRef<HTMLButtonElement>(null);
  const animationAllowed = !paused && !reduced && !background && !hidden;

  useEffect(() => {
    if (!publicPage || hidden) return;
    let idleTimer: ReturnType<typeof setTimeout>;
    let frame = 0;

    const findSpace = () => {
      if (open) return;
      if (document.activeElement?.matches("input, textarea, select, [contenteditable='true']")) { setSide("rest"); return; }
      // Only avoid controls/dialogs; no cursor tracking, global dragging or scroll interception.
      const mobile = window.innerWidth <= 600;
      const width = mobile && !open ? 48 : open ? 210 : 104;
      const height = mobile && !open ? 48 : open ? 285 : 130;
      const bottom = window.innerHeight - 16;
      const obstacles = Array.from(document.querySelectorAll<HTMLElement>("a, button, input, textarea, select, [contenteditable='true'], [role='dialog']"))
        .filter((element) => !element.closest(".cat-companion, .cat-companion-home") && element.getClientRects().length > 0)
        .map((element) => element.getBoundingClientRect());
      const occupied = (right: boolean) => {
        const left = right ? window.innerWidth - width - 16 : 16;
        return obstacles.some((rect) => rect.left < left + width + 8 && rect.right > left - 8 && rect.top < bottom + 8 && rect.bottom > bottom - height - 8);
      };
      setSide(!occupied(true) ? "right" : !occupied(false) ? "left" : "rest");
    };
    const checkSpace = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(findSpace); };
    const onScroll = () => {
      if (!paused && !reduced) setWalking(true);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setWalking(false), 700);
      checkSpace();
    };
    const visibility = () => setBackground(document.hidden);
    const onFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches("input, textarea, select, [contenteditable='true']")) setSide("rest");
      else checkSpace();
    };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape" && open && companion.current?.contains(document.activeElement)) { setOpen(false); companion.current.querySelector<HTMLButtonElement>(".cat-toggle")?.focus(); } };
    const onPointer = (event: PointerEvent) => { if (open && !companion.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkSpace);
    document.addEventListener("visibilitychange", visibility);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", checkSpace);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    checkSpace();
    const layoutTimer = setTimeout(checkSpace, 1000);
    return () => {
      clearTimeout(idleTimer); clearTimeout(layoutTimer); cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", checkSpace);
      document.removeEventListener("visibilitychange", visibility); document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", checkSpace); document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [publicPage, hidden, paused, reduced, open, pathname]);

  useEffect(() => {
    if (!petted) return;
    const timeout = setTimeout(() => setPetted(false), 2200);
    return () => clearTimeout(timeout);
  }, [petted]);

  useEffect(() => {
    if (open) companion.current?.querySelector<HTMLButtonElement>(".cat-panel button")?.focus({ preventScroll: true });
  }, [open]);

  if (!publicPage) return null;

  return <>
    <div className="cat-companion-home">
      <button ref={homeControl} type="button" onClick={() => { setHidden((value) => !value); setOpen(false); }}>
        {hidden ? "Mostrar gato acompañante" : "Ocultar gato acompañante"}
      </button>
      <span>Un poco de compañía, a tu ritmo.</span>
    </div>
    {!hidden ? <aside ref={companion} className="cat-companion" aria-label="Gato acompañante opcional" data-side={side} data-open={open} data-moving={animationAllowed} data-walking={walking && animationAllowed} data-petted={petted}>
      {open ? <div className="cat-panel" id="cat-companion-options">
        <p>Compañía, a tu ritmo.</p>
        <span className="cat-greeting" role="status">{petted ? "Prrr… gracias por la caricia ♡" : "Estoy aquí mientras exploras."}</span>
        <button type="button" onClick={() => setPetted(true)}>Darle una caricia <span aria-hidden="true">♡</span></button>
        <button type="button" aria-pressed={paused || reduced} disabled={reduced} onClick={() => setPaused((value) => !value)}>{reduced ? "Movimiento reducido activo" : paused ? "Reanudar movimientos" : "Pausar movimientos"}</button>
        <button type="button" onClick={() => { setHidden(true); setOpen(false); homeControl.current?.focus({ preventScroll: true }); }}>Ocultar gato</button>
        <small>Puedes recuperarlo al pie de la página.</small>
      </div> : null}
      <button type="button" className="cat-toggle" aria-label={open ? "Cerrar opciones del gato" : "Saludar al gato y abrir opciones"} aria-expanded={open} aria-controls={open ? "cat-companion-options" : undefined} onClick={() => setOpen((value) => !value)}>
        <span className="cat-heart" aria-hidden="true">♡</span>
        <CatDrawing />
        <span className="cat-mobile-label">Un gato por aquí</span>
      </button>
    </aside> : null}
  </>;
}

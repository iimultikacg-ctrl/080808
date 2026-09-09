import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Mark } from "./bits";
import { SLIDES } from "./slides";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const total = SLIDES.length;
  const current = SLIDES[index] ?? SLIDES[0];

  const go = useCallback(
    (next: number) => {
      setIndex(clamp(next, 0, total - 1));
      setOverview(false);
    },
    [total],
  );

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace("#", "");
      const n = Number.parseInt(raw, 10);
      if (Number.isFinite(n) && n >= 1 && n <= total) {
        setIndex(n - 1);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [total]);

  useEffect(() => {
    const desired = `#${index + 1}`;
    if (window.location.hash !== desired) {
      window.history.replaceState(null, "", desired);
    }
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(total - 1);
      } else if (e.key === "Escape") {
        setOverview(false);
      } else if (e.key === "o" || e.key === "O" || e.key === "g" || e.key === "G") {
        e.preventDefault();
        setOverview((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next, prev, total]);

  const onTouchStart = (e: TouchEvent) => {
    const t = e.changedTouches[0];
    if (!t) return;
    touch.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: TouchEvent) => {
    const start = touch.current;
    const t = e.changedTouches[0];
    touch.current = null;
    if (!start || !t) return;
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  const Slide = current.Component;
  const numLabel = String(index + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  return (
    <div
      className="relative h-dvh overflow-hidden bg-bg text-fg"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-ink"
      >
        К слайду
      </a>

      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="pointer-events-auto flex items-center gap-2.5">
          <Mark className="size-7" />
          <div className="hidden leading-tight sm:block">
            <p className="font-display text-kicker uppercase tracking-widest text-muted">
              Сбер · Корпоративный спорт
            </p>
            <p className="text-xs text-subtle">{current.title}</p>
          </div>
        </div>
        <div className="pointer-events-auto flex items-center gap-2">
          <p className="mr-1 hidden font-display text-xs tabular-nums text-muted sm:block">
            {numLabel} / {totalLabel}
          </p>
          <button
            type="button"
            onClick={() => setOverview((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full bg-surface text-fg transition-transform duration-150 ease-out hairline active:scale-[0.96]"
            aria-label={overview ? "Закрыть обзор" : "Обзор слайдов"}
          >
            {overview ? <X className="size-4" /> : <LayoutGrid className="size-4" />}
          </button>
        </div>
      </header>

      <button
        type="button"
        onClick={prev}
        disabled={index === 0}
        className="absolute left-2 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-fg transition-transform duration-150 ease-out hairline enabled:hover:bg-surface-2 disabled:opacity-30 sm:flex active:scale-[0.96]"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={next}
        disabled={index === total - 1}
        className="absolute right-2 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-fg transition-transform duration-150 ease-out hairline enabled:hover:bg-surface-2 disabled:opacity-30 sm:flex active:scale-[0.96]"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="size-5" />
      </button>

      <div id="content" className="h-full overflow-y-auto" aria-live="polite">
        {overview ? (
          <Overview index={index} onPick={go} />
        ) : (
          <div key={current.id} className="min-h-full">
            <Slide />
          </div>
        )}
      </div>

      <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <div className="pointer-events-auto flex sm:hidden">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            className="flex size-11 items-center justify-center rounded-full bg-surface text-fg hairline disabled:opacity-30"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft className="size-5" />
          </button>
        </div>
        <div className="pointer-events-auto mx-auto flex max-w-xl flex-1 items-center justify-center gap-1.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`${s.num}. ${s.title}`}
              aria-current={i === index ? "page" : undefined}
              className={cn(
                "h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out",
                i === index ? "w-6 bg-accent" : "w-1.5 bg-fg/20 hover:bg-fg/40",
              )}
            />
          ))}
        </div>
        <div className="pointer-events-auto flex sm:hidden">
          <button
            type="button"
            onClick={next}
            disabled={index === total - 1}
            className="flex size-11 items-center justify-center rounded-full bg-surface text-fg hairline disabled:opacity-30"
            aria-label="Следующий слайд"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
        <p className="pointer-events-none absolute right-6 hidden font-display text-kicker uppercase tracking-widest text-subtle lg:block">
          ← → · O — обзор
        </p>
      </footer>
    </div>
  );
}

function Overview({
  index,
  onPick,
}: {
  index: number;
  onPick: (i: number) => void;
}) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-5 pb-24 pt-20 sm:grid-cols-3 sm:px-10 lg:grid-cols-5">
      {SLIDES.map((s, i) => (
        <button
          key={s.id}
          type="button"
          onClick={() => onPick(i)}
          className={cn(
            "rounded-lg p-4 text-left transition-[box-shadow,background-color] duration-150 hairline",
            i === index ? "bg-accent-dim" : "bg-surface hover:bg-surface-2",
          )}
        >
          <p className="font-display text-kicker tabular-nums text-accent">{s.num}</p>
          <p className="mt-2 font-display text-sm font-medium leading-snug tracking-tight text-fg">
            {s.title}
          </p>
        </button>
      ))}
    </div>
  );
}

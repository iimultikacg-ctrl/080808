import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-accent", className)}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="9.25"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="2"
      />
      <path
        d="M16 6.75a9.25 9.25 0 0 1 0 18.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-display text-kicker font-medium uppercase tracking-widest text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Frame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-5 pb-24 pt-24 sm:px-10 lg:px-14",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "hairline hairline-hover rounded-xl bg-surface p-5 transition-[box-shadow] duration-150 sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function QrMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("text-ink", className)}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="4" fill="currentColor" />
      <rect x="4" y="4" width="12" height="12" fill="#21a038" />
      <rect x="32" y="4" width="12" height="12" fill="#21a038" />
      <rect x="4" y="32" width="12" height="12" fill="#21a038" />
      <rect x="7" y="7" width="6" height="6" fill="#08110c" />
      <rect x="35" y="7" width="6" height="6" fill="#08110c" />
      <rect x="7" y="35" width="6" height="6" fill="#08110c" />
      <rect x="22" y="6" width="4" height="4" fill="#21a038" />
      <rect x="22" y="14" width="4" height="4" fill="#21a038" />
      <rect x="30" y="22" width="4" height="4" fill="#21a038" />
      <rect x="22" y="22" width="4" height="4" fill="#21a038" />
      <rect x="14" y="22" width="4" height="4" fill="#21a038" />
      <rect x="38" y="22" width="6" height="4" fill="#21a038" />
      <rect x="22" y="30" width="4" height="4" fill="#21a038" />
      <rect x="30" y="30" width="4" height="4" fill="#21a038" />
      <rect x="38" y="30" width="6" height="4" fill="#21a038" />
      <rect x="22" y="38" width="4" height="6" fill="#21a038" />
      <rect x="30" y="38" width="4" height="6" fill="#21a038" />
      <rect x="38" y="38" width="6" height="6" fill="#21a038" />
    </svg>
  );
}

import { ReactNode } from "react";

interface UIFrameProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  badge?: string;
  badgeTone?: "neutral" | "flag" | "accent" | "red";
}

const badgeStyles = {
  neutral: "bg-hairline/60 text-ink-2",
  flag: "bg-flag-light text-flag",
  accent: "bg-accent-light text-accent",
  red: "bg-red-light text-red",
};

export function UIFrame({
  title,
  subtitle,
  children,
  badge,
  badgeTone = "neutral",
}: UIFrameProps) {
  return (
    <div className="rounded-xl border border-hairline bg-card overflow-hidden shadow-sm">
      <div className="border-b border-hairline bg-paper px-4 py-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink">{title}</p>
          {subtitle && (
            <p className="text-xs text-ink-3 mt-0.5">{subtitle}</p>
          )}
        </div>
        {badge && (
          <span
            className={`shrink-0 rounded px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider ${badgeStyles[badgeTone]}`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

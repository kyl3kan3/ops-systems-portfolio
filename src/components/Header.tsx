import Link from "next/link";

const nav = [
  { href: "/work/receipt-reconciliation", label: "Work" },
  { href: "/how-i-work", label: "How I Work" },
];

export function Header() {
  return (
    <header className="border-b border-hairline bg-paper/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="group">
          <span className="block font-serif text-lg font-semibold text-ink tracking-tight">
            Kyle Kane
          </span>
          <span className="block text-xs text-ink-3 group-hover:text-ink-2 transition-colors">
            AI Operations Systems Builder
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-2 hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:kyl3kan3@gmail.com"
            className="hidden sm:inline-flex items-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ink/90 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

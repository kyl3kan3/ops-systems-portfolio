import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper mt-16">
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-ink">Kyle Kane</p>
            <p className="mt-1 text-sm text-ink-2">Columbia, Illinois</p>
            <p className="mt-3 text-sm text-ink-3 max-w-sm">
              I build operational systems — intake, exceptions, handoff — not chatbot demos.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:kyl3kan3@gmail.com"
              className="text-accent hover:underline"
            >
              kyl3kan3@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kyl3kan3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
            <Link href="/how-i-work" className="text-ink-2 hover:text-ink">
              How I Work
            </Link>
          </div>
        </div>
        <p className="mt-8 text-xs text-ink-3 border-t border-hairline pt-6">
          © {new Date().getFullYear()} Kyle Kane
        </p>
      </div>
    </footer>
  );
}

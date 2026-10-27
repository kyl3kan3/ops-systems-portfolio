import Link from "next/link";

const caseStudies = [
  {
    slug: "receipt-reconciliation",
    title: "Receipt reconciliation",
    subtitle: "Document intake → confidence-scored extraction → exception queue → close package",
    tag: "Workflow design",
    description:
      "I designed a pre-accounting pipeline for solo operators: forward an invoice, photo a receipt, hand your accountant a clean monthly close. Matching logic, exception types, and close gate documented as a system design.",
  },
  {
    slug: "maintenease",
    title: "MaintenEase",
    subtitle: "CMMS for small maintenance teams: live at maintenease.com",
    tag: "Shipped product",
    description:
      "Work orders, assets, PM schedules, inspections, public request portal, and an AI assistant with confirmation gates: built for real maintenance operations, not a demo.",
  },
  {
    slug: "service-request",
    title: "Service request operations",
    subtitle: "Interactive demo of the sprint deliverable",
    tag: "Clickable demo",
    description:
      "Facility request submitted → information extracted → categorized → priority assessed → missing info flagged → record created → right person notified → exception queue → dashboard.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <p className="label-caps mb-4">Columbia, Illinois</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.08] max-w-3xl">
            I turn messy operational processes into working systems.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-2 max-w-2xl leading-relaxed">
            I&apos;m Kyle Kane: an AI operations systems builder. I don&apos;t install
            chatbots or hand you strategy decks. I take a real workflow, intake,
            exceptions, handoff, and ship something your team can run.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/work/receipt-reconciliation"
              className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/90 transition-colors"
            >
              Read the hero case study
            </Link>
            <Link
              href="/how-i-work"
              className="inline-flex items-center justify-center rounded-md border border-hairline px-6 py-3 text-sm font-medium text-ink hover:border-accent transition-colors"
            >
              How I Work
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="label-caps mb-2">What I do</p>
              <p className="text-ink-2 leading-relaxed">
                Map how work actually moves through your operation. Design the
                system: intake, extraction, routing, exception queue, close.
                Build it with human controls at every decision point.
              </p>
            </div>
            <div>
              <p className="label-caps mb-2">What I prove</p>
              <p className="text-ink-2 leading-relaxed">
                Case studies below show designed workflows and shipped products,
                not screenshots of someone else&apos;s app. Each one documents
                problem, exceptions, and what the operator actually touches.
              </p>
            </div>
            <div>
              <p className="label-caps mb-2">What I don&apos;t do</p>
              <p className="text-ink-2 leading-relaxed">
                Generic chatbot installs. AI strategy decks with no system behind
                them. Tool lists without operational behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <p className="label-caps mb-2">Case studies</p>
          <h2 className="text-2xl md:text-3xl text-ink mb-10">Work that shows the system</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group flex flex-col rounded-xl border border-hairline bg-card p-6 hover:border-accent/40 transition-colors"
              >
                <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded w-fit">
                  {cs.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink group-hover:text-accent transition-colors font-serif">
                  {cs.title}
                </h3>
                <p className="mt-1 text-sm text-ink-3">{cs.subtitle}</p>
                <p className="mt-3 text-sm text-ink-2 leading-relaxed flex-1">
                  {cs.description}
                </p>
                <span className="mt-4 text-sm font-medium text-accent">
                  Read case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl text-ink mb-4">
            Have a messy process that needs a system?
          </h2>
          <p className="text-ink-2 max-w-lg mx-auto mb-8">
            I run Operational AI Workflow Sprints: typically 1-2 weeks, one
            operational workflow, exception path and handoff included.
          </p>
          <a
            href="mailto:kyl3kan3@gmail.com"
            className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/90 transition-colors"
          >
            kyl3kan3@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}

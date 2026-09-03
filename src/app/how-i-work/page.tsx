import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Request Operations — Interactive Demo",
  description:
    "Clickable demo of a facility service request workflow: intake, extraction, categorization, priority, exceptions, notification, and dashboard.",
};

const METHOD_STEPS = [
  { step: "Diagnose", sentence: "I listen to how work actually moves — not the process diagram on the wall." },
  { step: "Map", sentence: "I document every handoff, exception, and place where information gets lost." },
  { step: "Design", sentence: "I specify intake, routing, human controls, and the exception queue before writing code." },
  { step: "Build", sentence: "I ship the workflow with real operational UI — not a chatbot wrapper." },
  { step: "Test", sentence: "I run it against real scenarios, including the ones that break." },
  { step: "Handle Exceptions", sentence: "I design what happens when data is missing, ambiguous, or wrong — before go-live." },
  { step: "Document", sentence: "I leave runbooks your team can follow without me in the room." },
  { step: "Handoff", sentence: "I transfer ownership with evidence, not a slide deck." },
];

const TAKES_ON = [
  "Request intake and routing",
  "Document and receipt matching",
  "Maintenance work orders",
  "Exception-heavy month-end close",
];

const DOES_NOT = [
  "Generic chatbot installs",
  "AI strategy decks with no system behind them",
  "Tool lists without operational behavior",
];

export default function HowIWorkPage() {
  return (
    <article>
      <header className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <p className="label-caps mb-3">How I Work</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-ink leading-tight max-w-3xl">
            Operational AI Workflow Sprint™
          </h1>
          <p className="mt-6 text-lg text-ink-2 max-w-2xl leading-relaxed">
            I take one messy operational workflow and turn it into a working system
            — with an exception path, human controls, and a clean handoff. Typical
            scope: 1–2 weeks.
          </p>
        </div>
      </header>

      {/* Method */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8">
          <p className="label-caps mb-2">Method</p>
          <h2 className="text-2xl md:text-3xl text-ink mb-8">Eight steps, in order</h2>
          <ol className="space-y-4">
            {METHOD_STEPS.map((item, i) => (
              <li key={item.step} className="flex gap-4 items-start">
                <span className="shrink-0 w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center text-sm font-semibold font-mono">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{item.step}</p>
                  <p className="text-ink-2 mt-0.5">{item.sentence}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Offer */}
      <section className="border-b border-hairline bg-stock">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8">
          <p className="label-caps mb-2">The offer</p>
          <h2 className="text-2xl md:text-3xl text-ink mb-6">What you get</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-hairline bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-ink">Operational AI Workflow Sprint™</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-2">
                <li>1 operational workflow — intake through handoff</li>
                <li>Exception path designed and built</li>
                <li>Operational UI your team can run</li>
                <li>Documentation and handoff session</li>
                <li>Typical timeline: 1–2 weeks</li>
              </ul>
              <p className="mt-6 text-sm">
                <span className="label-caps">Starting price</span>
                <br />
                <span className="text-ink font-medium">On request</span>
                {/* TODO_STARTING_PRICE */}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="label-caps mb-3">Problems I take on</p>
                <ul className="space-y-2">
                  {TAKES_ON.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-2">
                      <span className="text-accent">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-caps mb-3">What I don&apos;t do</p>
                <ul className="space-y-2">
                  {DOES_NOT.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-3">
                      <span className="text-red">×</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-ink-3 max-w-2xl">
            Versioned operating designs that connect evidence, system behavior,
            human controls, security, and measurable outcomes — not a slide deck
            about AI potential.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 text-center">
          <h2 className="text-2xl text-ink mb-4">Ready to talk?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:kyl3kan3@gmail.com" className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/90 transition-colors">
              kyl3kan3@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/kyl3kan3/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-hairline px-6 py-3 text-sm font-medium text-ink hover:border-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Link to demo */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8">
          <p className="label-caps mb-2">See the deliverable</p>
          <h2 className="text-xl text-ink mb-4">Service request operations demo</h2>
          <p className="text-ink-2 mb-4 max-w-2xl">
            The sprint produces systems like this — click through a facility request
            from submission to dashboard.
          </p>
          <Link href="/work/service-request" className="text-accent hover:underline text-sm font-medium">
            Open the interactive demo →
          </Link>
        </div>
      </section>
    </article>
  );
}

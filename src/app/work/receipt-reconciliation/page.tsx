import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudySection } from "@/components/CaseStudySection";
import { UIFrame } from "@/components/UIFrame";
import { ReceiptWorkflowDiagram } from "@/components/diagrams/ReceiptWorkflowDiagram";

export const metadata: Metadata = {
  title: "Receipt Reconciliation — Document Intake to Close Package",
  description:
    "How I designed a pre-accounting workflow: document intake, confidence-scored extraction, matching logic, exception queue, and monthly close package — without silent guesses.",
};

const sections = [
  { id: "problem", label: "Problem" },
  { id: "before", label: "Before" },
  { id: "what-i-built", label: "What I Built" },
  { id: "how-it-works", label: "How It Works" },
  { id: "exceptions", label: "Exceptions" },
  { id: "result", label: "Result" },
  { id: "tech-used", label: "Tech Used" },
  { id: "what-i-learned", label: "What I Learned" },
];

export default function ReceiptReconciliationPage() {
  return (
    <article>
      {/* Hero */}
      <header className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <p className="label-caps mb-3">Case study · Workflow design</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-ink leading-tight max-w-3xl">
            Receipt reconciliation: from shoebox to close package
          </h1>
          <p className="mt-6 text-lg text-ink-2 max-w-2xl leading-relaxed">
            I designed LedgerLens as a pre-accounting pipeline for solo operators —
            forward an invoice, photo a receipt, hand your accountant a clean monthly
            close package. This case study documents the operational system I mapped
            and built toward: intake, extraction with confidence flags, matching and
            review, exception handling, and close export.
          </p>
          <p className="mt-4 text-sm text-ink-3 max-w-2xl">
            This is a workflow case study of the designed system. MVP features remain
            in development — I am not claiming a live production customer or shipped
            bank-feed matching (cut from v1).
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-md border border-hairline bg-card px-3 py-1.5 text-xs text-ink-2 hover:border-accent hover:text-accent transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Workflow diagram */}
      <div className="border-b border-hairline bg-stock">
        <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
          <p className="label-caps mb-4">System flow</p>
          <ReceiptWorkflowDiagram />
        </div>
      </div>

      {/* Problem */}
      <CaseStudySection id="problem" title="Problem">
        <p>
          Solo operators — plumbers, freelancers, Etsy sellers, one-truck landscapers —
          run the same broken pipeline. Receipts pile up in a glovebox. Invoices rot
          in an email folder. Every January the whole mess gets dumped on an accountant
          who charges a cleanup fee to reconstruct twelve months of history from
          crumpled thermal paper.
        </p>
        <p>
          The operator does not want accounting software. QuickBooks Self-Employed and
          Wave exist and they still do not use them, because those tools ask for a
          bookkeeper&apos;s workflow: chart of accounts, reconciliation screens,
          double-entry concepts. What the operator actually does is <em>receive
          documents</em> — a receipt at the counter, an invoice in the inbox. What the
          accountant actually needs is <em>those documents, categorized, totaled, and
          exportable</em>. Everything between those two facts is ceremony.
        </p>
        <p>
          The real failure mode is not missing software — it is silent guesses. A wrong
          total in a tax export is worse than no product. Competitors write wrong numbers
          into the ledger and the accountant finds them in March.
        </p>
      </CaseStudySection>

      {/* Before */}
      <CaseStudySection
        id="before"
        title="Before"
        visual={
          <UIFrame
            title="The shoebox pipeline"
            subtitle="What I mapped in operator interviews"
            badge="Before"
          >
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-flag-light/50 border border-hairline">
                <span className="text-flag font-mono text-xs mt-0.5">01</span>
                <div>
                  <p className="font-medium text-ink">Capture is ad hoc</p>
                  <p className="text-ink-3 text-xs mt-0.5">
                    Glovebox, email folder, phone camera roll — no single inbox
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-flag-light/50 border border-hairline">
                <span className="text-flag font-mono text-xs mt-0.5">02</span>
                <div>
                  <p className="font-medium text-ink">Categories are guesses</p>
                  <p className="text-ink-3 text-xs mt-0.5">
                    Operator picks &quot;Meals&quot; when it was &quot;Fuel&quot; — no vendor memory
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-flag-light/50 border border-hairline">
                <span className="text-flag font-mono text-xs mt-0.5">03</span>
                <div>
                  <p className="font-medium text-ink">January is archaeology</p>
                  <p className="text-ink-3 text-xs mt-0.5">
                    Accountant reconstructs; deductions get missed on faded receipts
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-flag-light/50 border border-hairline">
                <span className="text-flag font-mono text-xs mt-0.5">04</span>
                <div>
                  <p className="font-medium text-ink">No exception path</p>
                  <p className="text-ink-3 text-xs mt-0.5">
                    Duplicates, ambiguous vendors, and low-confidence reads have nowhere to land
                  </p>
                </div>
              </div>
            </div>
          </UIFrame>
        }
      >
        <p>
          Before any system design, I mapped what actually happens. The operator
          receives documents through three channels — email forward, phone photo,
          occasional upload — and does nothing with them until tax season panic.
        </p>
        <p>
          The accountant receives a shoebox or a folder of PDFs with no structure.
          Categories are reconstructed from memory. Duplicates slip through. Missing
          receipts for recurring vendors (the Shell station every week, the monthly
          software subscription) only surface when the accountant asks &quot;where&apos;s
          October&apos;s invoice?&quot;
        </p>
        <p>
          No one owns the exception path. Low-confidence extractions get silently
          accepted or silently dropped. That is the gap I designed against.
        </p>
      </CaseStudySection>

      {/* What I Built */}
      <CaseStudySection
        id="what-i-built"
        title="What I Built"
        visual={
          <UIFrame
            title="Document inbox"
            subtitle="Designed UI — extraction in progress"
            badge="Designed"
            badgeTone="accent"
          >
            <div className="space-y-0 divide-y divide-hairline">
              {[
                { vendor: "Home Depot", amount: "$47.82", status: "confirmed", source: "photo · Mar 12" },
                { vendor: "Shell #4821", amount: "$62.15", status: "review", source: "forwarded · Mar 11" },
                { vendor: "Adobe", amount: "$54.99", status: "confirmed", source: "forwarded · Mar 10" },
                { vendor: "Unknown vendor", amount: "$—", status: "extracting", source: "photo · Mar 10" },
              ].map((row) => (
                <div key={row.vendor} className="flex items-center gap-3 py-2.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      row.status === "confirmed"
                        ? "bg-accent"
                        : row.status === "review"
                          ? "bg-flag"
                          : "bg-ink-3 animate-pulse"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{row.vendor}</p>
                    <p className="text-xs text-ink-3">{row.source}</p>
                  </div>
                  <span className="font-mono text-sm text-ink tabular-nums">{row.amount}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-3 border-t border-hairline pt-3">
              31 documents · 3 need review
            </p>
          </UIFrame>
        }
      >
        <p>
          I designed LedgerLens as a narrow pipeline — not accounting software, loudly.
          No chart of accounts, no reconciliation screens, no double entry. The
          artifact is a monthly close package: PDF summary, CSV in QBO- and
          Xero-importable formats, and a ZIP of source images.
        </p>
        <p>
          The system has five operational stages I specified in architecture docs:
        </p>
        <ul className="mt-4 space-y-2 text-ink-2 text-[1.0625rem]">
          <li className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">1.</span>
            <span><strong className="text-ink">Intake</strong> — per-org forwarding address, mobile photo capture, content-hash deduplication</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">2.</span>
            <span><strong className="text-ink">Extraction</strong> — vendor, date, total, tax, category; every field carries a confidence score</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">3.</span>
            <span><strong className="text-ink">Match + review</strong> — amount, date window, normalized vendor; auto-confirm only above a conservative threshold</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">4.</span>
            <span><strong className="text-ink">Exception queue</strong> — humans decide on mismatches, ambiguity, duplicates, and gaps</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-semibold shrink-0">5.</span>
            <span><strong className="text-ink">Close package</strong> — blocked until review queue is clean; accountant gets a share link</span>
          </li>
        </ul>
        <p className="mt-4">
          I also scoped ParseFlow as the developer-facing extraction API layer —
          document in, structured JSON with per-field confidence out — for teams
          that need the parsing primitive without the full close workflow.
        </p>
      </CaseStudySection>

      {/* How It Works */}
      <CaseStudySection
        id="how-it-works"
        title="How It Works"
        visual={
          <UIFrame
            title="Review sheet"
            subtitle="Low-confidence field flagged — provenance visible"
            badge="Needs review"
            badgeTone="flag"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-hairline/40 border border-hairline aspect-[3/4] flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-xs text-ink-3 uppercase tracking-wider">Source image</p>
                  <p className="text-sm text-ink-2 mt-2 font-mono">Shell receipt<br />thermal · partial</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="label-caps">Vendor</p>
                  <p className="text-sm font-medium text-ink mt-1">Shell #4821</p>
                  <p className="text-xs text-accent font-mono">98%</p>
                </div>
                <div className="border-l-2 border-flag pl-3">
                  <p className="label-caps">Total</p>
                  <p className="text-sm font-medium text-ink mt-1 font-mono">$62.15</p>
                  <p className="text-xs text-flag font-mono">61% — tap to see source crop</p>
                </div>
                <div>
                  <p className="label-caps">Category</p>
                  <p className="text-sm font-medium text-ink mt-1">Fuel</p>
                  <p className="text-xs text-accent font-mono">vendor rule applied</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <button type="button" className="flex-1 rounded-md bg-ink text-paper text-xs py-2 font-medium">
                    Accept
                  </button>
                  <button type="button" className="flex-1 rounded-md border border-hairline text-ink text-xs py-2">
                    Correct
                  </button>
                </div>
              </div>
            </div>
          </UIFrame>
        }
      >
        <p>
          <strong className="text-ink">Ingestion.</strong> The operator forwards an
          invoice to a per-org address like{" "}
          <code className="font-mono text-sm bg-hairline/50 px-1.5 py-0.5 rounded">
            docs+{"{slug}"}@in.ledgerlens.app
          </code>{" "}
          or photos a receipt through a mobile capture flow. Attachments stream to
          object storage; a content hash deduplicates within the org. The handler
          enqueues extraction and returns in under a second.
        </p>
        <p>
          <strong className="text-ink">Extraction.</strong> A worker calls the
          extraction model with a structured-output schema: vendor, doc type, date,
          total, tax, currency, line summary — each with a confidence score. Fields
          at or above threshold auto-populate a line item draft. Fields below threshold
          create review items and flip the document to needs-review. Nothing below
          threshold ever reaches an export.
        </p>
        <p>
          <strong className="text-ink">Matching logic.</strong> I designed matching
          on three axes: amount, date window, and normalized vendor name.
          Auto-confirm only fires above a conservative confidence threshold. The
          design also accounts for recurring vendors with no receipt (missing-document
          gaps inferred from history) — but receipts-to-bank matching was explicitly
          cut from v1 and deferred to a later phase.
        </p>
        <p>
          <strong className="text-ink">Vendor rules.</strong> A category correction
          (&quot;this Shell station is Fuel, not Meals&quot;) upserts a vendor rule.
          Next month&apos;s identical receipt skips review. The product gets quieter
          with use — that compounding quiet is retention.
        </p>
        <p>
          <strong className="text-ink">Monthly close.</strong> On the 1st, a cron
          job attempts to close the prior month. It refuses if unresolved review
          items exist — instead emailing &quot;3 items need review before your March
          close&quot; with a deep link. When clean, the job aggregates line items,
          renders a PDF cover (category totals, flagged list, missing-receipt gaps),
          writes QBO and Xero CSVs, zips with source images, and emails the operator.
          An accountant share link (hashed token, revocable, access-logged) delivers
          the package without requiring login.
        </p>
      </CaseStudySection>

      {/* Exceptions */}
      <CaseStudySection
        id="exceptions"
        title="Exceptions"
        visual={
          <UIFrame
            title="Exception queue"
            subtitle="Every item needs a human decision"
            badge="6 open"
            badgeTone="flag"
          >
            <div className="space-y-2">
              {[
                { type: "Amount mismatch", doc: "Office Depot · Mar 8", detail: "Extracted $127.40, expected ~$89" },
                { type: "Date window", doc: "Amazon · Mar 5", detail: "Receipt date 14 days before statement period" },
                { type: "Vendor ambiguity", doc: "AMZN Mktp · Mar 3", detail: "Matches 2 normalized vendors" },
                { type: "Duplicate", doc: "Shell #4821 · Mar 2", detail: "Same vendor + amount + date as Mar 1 entry" },
                { type: "Missing receipt", doc: "Adobe · recurring", detail: "Monthly vendor, no document for February" },
                { type: "Low confidence", doc: "Unknown · Mar 1", detail: "Overall extraction below floor — retake prompt" },
              ].map((ex) => (
                <div
                  key={ex.type + ex.doc}
                  className="flex items-start gap-3 p-2.5 rounded-lg border border-hairline hover:border-flag/40 transition-colors"
                >
                  <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-flag bg-flag-light px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                    {ex.type}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink">{ex.doc}</p>
                    <p className="text-xs text-ink-3 mt-0.5">{ex.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </UIFrame>
        }
      >
        <p>
          Exceptions are not edge cases — they are the product. I designed six
          exception types that route to the review queue instead of silently
          writing bad data:
        </p>
        <ul className="mt-4 space-y-2 text-ink-2">
          <li><strong className="text-ink">Amount mismatch</strong> — extracted total does not align with expected range or prior pattern</li>
          <li><strong className="text-ink">Date window</strong> — receipt date falls outside the statement or close period</li>
          <li><strong className="text-ink">Vendor ambiguity</strong> — normalized name matches multiple vendor records</li>
          <li><strong className="text-ink">Duplicate</strong> — same vendor + amount + date window as an existing entry</li>
          <li><strong className="text-ink">Recurring vendor, no receipt</strong> — vendor history shows monthly spend but no document arrived</li>
          <li><strong className="text-ink">Unreadable / low confidence</strong> — overall extraction below floor; prompt retake rather than queue garbage</li>
        </ul>
        <p>
          The close gate is deliberate: the package must be clean or not exist.
          An operator can force-close with flagged items explicitly marked
          &quot;unreviewed,&quot; but the default is block-and-notify. Trust in the
          export is the entire product.
        </p>
        <p>
          Corrections train vendor rules. One tap to accept, inline edit to correct.
          Batch confirms stagger so the operator sees progress without overwhelm.
          Every export and share access is audit-logged — these are financial records.
        </p>
      </CaseStudySection>

      {/* Result */}
      <CaseStudySection
        id="result"
        title="Result"
        visual={
          <UIFrame
            title="March close package"
            subtitle="Designed deliverable — accountant handoff"
            badge="Close ready"
            badgeTone="accent"
          >
            <p className="label-caps mb-3">March 2026 close</p>
            <div className="space-y-1.5 text-sm font-mono tabular-nums">
              {[
                ["Supplies", "$1,240.18"],
                ["Fuel", "$892.44"],
                ["Software", "$329.97"],
                ["Meals", "$186.22"],
                ["Other", "$412.85"],
              ].map(([cat, amt]) => (
                <div key={cat} className="flex justify-between border-b border-hairline pb-1.5">
                  <span className="text-ink-2 font-sans">{cat}</span>
                  <span className="text-ink">{amt}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 font-semibold">
                <span className="text-ink font-sans">Total</span>
                <span className="text-accent">$3,061.66</span>
              </div>
            </div>
            <div className="mt-4 space-y-2 border-t border-hairline pt-4">
              <p className="text-xs text-ink-3">Downloads</p>
              {["PDF summary", "CSV (QBO format)", "CSV (Xero format)", "Source images (ZIP)"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-ink-2">
                  <span className="w-4 h-4 border border-hairline rounded flex items-center justify-center text-[0.5rem]">↓</span>
                  {f}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-3">
              2 flagged items · 1 missing-receipt gap noted
            </p>
          </UIFrame>
        }
      >
        <p>
          The designed outcome is a monthly artifact the accountant actually wants —
          not a dashboard to visit. A PDF cover with category totals, a flagged-items
          list, missing-receipt gaps for recurring vendors, and importable CSVs plus
          source images in a single package.
        </p>
        <p>
          This case study documents the operational system design and architecture
          I built toward. The MVP feature checklist in the project README remains
          unchecked — auth, ingestion, extraction, review queue, close package, and
          billing are specified but not yet shipped as a production product.
        </p>
        <p>
          What this proves: I can take a messy, exception-heavy financial document
          workflow, map the real operator behavior, design matching logic with
          conservative auto-confirm thresholds, build a human exception path that
          blocks bad exports, and specify a close deliverable that respects the
          accountant handoff. The matching and exception design is the proof — not
          a match-rate percentage or a named customer.
        </p>
      </CaseStudySection>

      {/* Tech Used */}
      <CaseStudySection id="tech-used" title="Tech Used">
        <p>
          I chose the stack for operational reliability, not novelty. Each layer
          maps to a specific workflow requirement:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              layer: "Web app + API",
              choice: "Next.js 15, TypeScript",
              why: "Dashboard, webhooks, mobile capture PWA, accountant share pages in one deployable",
            },
            {
              layer: "Database",
              choice: "Postgres (Neon) + Drizzle",
              why: "Relational domain: orgs → documents → extractions → line items → close periods",
            },
            {
              layer: "Object storage",
              choice: "Cloudflare R2",
              why: "Originals kept forever; zero egress for close-package re-downloads",
            },
            {
              layer: "Queue + worker",
              choice: "BullMQ on Redis, standalone Node",
              why: "Extraction is 2–20s per doc; needs retries, rate limits, dead-letter queue",
            },
            {
              layer: "Extraction",
              choice: "Anthropic API (structured outputs)",
              why: "Vision handles crumpled thermal paper; per-field confidence in schema",
            },
            {
              layer: "Inbound email",
              choice: "Resend Inbound",
              why: "Per-org forwarding addresses, parsed MIME with attachments",
            },
            {
              layer: "Billing",
              choice: "Stripe Billing",
              why: "Three tiers with metered document counts",
            },
          ].map((item) => (
            <div
              key={item.layer}
              className="rounded-lg border border-hairline bg-card p-4"
            >
              <p className="label-caps">{item.layer}</p>
              <p className="text-sm font-semibold text-ink mt-1">{item.choice}</p>
              <p className="text-xs text-ink-3 mt-1 leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>
        <p className="mt-6">
          ParseFlow (the extraction API sibling) uses FastAPI, Celery, and the same
          confidence-scored structured-output pattern — document in, JSON out,
          per-field confidence, async webhooks for batch jobs.
        </p>
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection id="what-i-learned" title="What I Learned">
        <p>
          <strong className="text-ink">Confidence is the product.</strong> Every
          extracted field shows its score; anything below threshold lands in review.
          Competitors silently write wrong totals. Trust in the export is the brand —
          not extraction speed or model name.
        </p>
        <p>
          <strong className="text-ink">The close package is the artifact.</strong>{" "}
          Not a dashboard. A monthly deliverable designed to be received by an
          accountant. Nobody in the category treats the handoff as the product.
          I did.
        </p>
        <p>
          <strong className="text-ink">Cut bank-feed matching from v1.</strong>{" "}
          It is tempting to promise bidirectional matching early. I scoped it to
          Phase 3 and designed the missing-receipt gap report as a one-directional
          signal first. Shipping a half-working matcher would destroy the trust the
          confidence flags build.
        </p>
        <p>
          <strong className="text-ink">Vendor rules are retention.</strong> One
          correction becomes a permanent rule. Review volume drops month over month.
          The product gets quieter with use — that is the right retention curve for
          an ops tool.
        </p>
        <p>
          <strong className="text-ink">Block the close, don&apos;t warn and proceed.</strong>{" "}
          The monthly close job refuses to run with unresolved review items. Operators
          will always click &quot;close anyway&quot; if you let them. The gate has to
          be structural.
        </p>
      </CaseStudySection>

      {/* Footer CTA */}
      <section className="border-t border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16 text-center">
          <p className="label-caps mb-3">Next</p>
          <h2 className="text-2xl md:text-3xl text-ink mb-4">
            Need this for your operation?
          </h2>
          <p className="text-ink-2 max-w-lg mx-auto mb-8">
            I run Operational AI Workflow Sprints — one messy process, one working
            system, exception path included.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:kyl3kan3@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/90 transition-colors"
            >
              Email Kyle
            </a>
            <Link
              href="/how-i-work"
              className="inline-flex items-center justify-center rounded-md border border-hairline px-6 py-3 text-sm font-medium text-ink hover:border-accent transition-colors"
            >
              How I Work
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

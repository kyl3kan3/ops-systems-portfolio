import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudySection } from "@/components/CaseStudySection";
import { ServiceRequestDemo } from "@/components/ServiceRequestDemo";

export const metadata: Metadata = {
  title: "Service Request Operations: Interactive Demo",
  description:
    "Clickable demo of facility request intake: extraction, categorization, priority, missing-info exceptions, notification, and dashboard.",
};

export default function ServiceRequestPage() {
  return (
    <article>
      <header className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <p className="label-caps mb-3">Case study · Interactive demo</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-ink leading-tight max-w-3xl">
            Service request operations
          </h1>
          <p className="mt-6 text-lg text-ink-2 max-w-2xl leading-relaxed">
            This is a demo of what an Operational AI Workflow Sprint delivers: a
            clickable operational console built on local sample data: no auth, no
            database. Click through a facility request from submission to dashboard.
          </p>
          <p className="mt-4 text-sm text-ink-3">
            Sample scenario: HVAC not cooling in Warehouse 2, Dock 4, submitted by
            the night shift lead. Missing equipment ID routes to the exception queue.
          </p>
        </div>
      </header>

      {/* Interactive demo */}
      <section className="border-b border-hairline bg-stock">
        <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
          <ServiceRequestDemo />
        </div>
      </section>

      <CaseStudySection id="problem" title="Problem">
        <p>
          Facility and operations teams receive service requests through phone,
          email, text, and walk-ups. Each channel produces different information
          quality. Urgent and routine requests look the same until someone reads
          them. Missing details: which unit, which dock, which asset, only surface
          after a technician is dispatched.
        </p>
        <p>
          Without a system, requests live in inboxes. No audit trail. No exception
          path for incomplete submissions. No acknowledgment to the person who reported
          the issue.
        </p>
      </CaseStudySection>

      <CaseStudySection id="before" title="Before">
        <p>
          A night shift lead texts &quot;HVAC not working in warehouse 2.&quot; The
          message sits until morning. A coordinator guesses which unit, assigns the
          wrong technician, and the submitter has no idea if anyone received it.
        </p>
        <p>
          Three people report the same issue through different channels. Three work
          orders get created. No one merges them until the technician shows up twice.
        </p>
      </CaseStudySection>

      <CaseStudySection id="what-i-built" title="What I Built">
        <p>
          A ten-stage operational workflow the demo walks through:
        </p>
        <ol className="mt-4 space-y-1.5 text-ink-2 list-decimal list-inside">
          <li>Request submitted (public portal, no login)</li>
          <li>Information extracted with per-field confidence</li>
          <li>Categorized by routing rules</li>
          <li>Priority assessed from urgency signals</li>
          <li>Missing information identified: blocks auto-creation</li>
          <li>Record created after human resolves the gap</li>
          <li>Right person notified (on-call path for high priority)</li>
          <li>Acknowledgment sent to submitter</li>
          <li>Exception queue for items needing human decision</li>
          <li>Operations dashboard with open count, exceptions, and SLA</li>
        </ol>
        <p className="mt-4">
          This mirrors the request desk pattern from my agency operations work and
          the public request portal in MaintenEase: versioned operating designs
          that connect evidence, system behavior, human controls, and measurable
          outcomes.
        </p>
      </CaseStudySection>

      <CaseStudySection id="how-it-works" title="How It Works">
        <p>
          The demo uses the HVAC / Warehouse 2 scenario. When the night lead submits,
          the system extracts structured fields. Equipment ID comes back empty (0.00
          confidence) because the submitter did not specify which of three HVAC units
          is affected.
        </p>
        <p>
          Priority still assesses as High: &quot;product at risk&quot; is an urgency
          signal. But record creation is blocked until a coordinator selects
          W2-HVAC-02 (dock side). Then notification, acknowledgment, and dashboard
          update in sequence.
        </p>
      </CaseStudySection>

      <CaseStudySection id="exceptions" title="Exceptions">
        <p>
          Missing equipment ID is the designed exception in this demo. The system
          does not guess which asset: it routes to the exception queue and waits.
          Other exception types the sprint would design for your operation:
        </p>
        <ul className="mt-4 space-y-2 text-ink-2">
          <li>Duplicate submissions from multiple channels</li>
          <li>Ambiguous location (which dock, which floor)</li>
          <li>Urgent flag that needs coordinator verification</li>
          <li>Low-confidence extraction on any required field</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection id="result" title="Result">
        <p>
          This demo is the sprint deliverable proof: not a production deployment.
          It shows what your team would click through after a 1-2 week engagement:
          intake, extraction, routing, exception handling, notification, and a
          dashboard they can run without me in the room.
        </p>
      </CaseStudySection>

      <CaseStudySection id="tech-used" title="Tech Used">
        <p>
          The demo runs entirely in the browser with local sample data. A production
          sprint deliverable would typically use Next.js, a database for records and
          audit logs, webhook or queue-based notification, and role-scoped access
         : shaped by your existing stack.
        </p>
      </CaseStudySection>

      <CaseStudySection id="what-i-learned" title="What I Learned">
        <p>
          <strong className="text-ink">Block auto-creation on missing required fields.</strong>{" "}
          Guessing the asset is worse than waiting. The exception queue is the feature.
        </p>
        <p>
          <strong className="text-ink">Acknowledge immediately, resolve separately.</strong>{" "}
          The submitter needs to know someone received it: even while the exception
          is still open.
        </p>
        <p>
          <strong className="text-ink">Operations consoles beat chatbot UIs.</strong>{" "}
          Coordinators need state panels, exception queues, and audit trails: not a
          conversation thread.
        </p>
      </CaseStudySection>

      <section className="border-t border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 text-center">
          <p className="text-ink-2 mb-6 max-w-lg mx-auto">
            Want this built for your operation?
          </p>
          <a href="mailto:kyl3kan3@gmail.com" className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/90 transition-colors mr-3">
            Email Kyle
          </a>
          <Link href="/how-i-work" className="inline-flex items-center justify-center rounded-md border border-hairline px-6 py-3 text-sm font-medium text-ink hover:border-accent transition-colors">
            How I Work
          </Link>
        </div>
      </section>
    </article>
  );
}

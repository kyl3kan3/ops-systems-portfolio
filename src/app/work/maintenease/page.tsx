import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudySection } from "@/components/CaseStudySection";
import { UIFrame } from "@/components/UIFrame";

export const metadata: Metadata = {
  title: "MaintenEase: CMMS for Small Maintenance Teams",
  description:
    "A live CMMS I built: work orders, assets, PM schedules, inspections, public request portal, and AI assistant with confirmation gates. Early-stage, honest.",
};

function MaintenEaseWorkflowDiagram() {
  return (
    <svg
      viewBox="0 0 720 180"
      className="w-full h-auto"
      role="img"
      aria-label="MaintenEase workflow: request portal, work order queue, assignment, execution, close"
    >
      <defs>
        <marker id="me-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#949a91" />
        </marker>
      </defs>
      <rect x="20" y="78" width="680" height="2" fill="#e3e1d6" rx="1" />
      {[
        { x: 20, label: "Request", sub: "public portal" },
        { x: 148, label: "Triage", sub: "inbox review" },
        { x: 276, label: "Work order", sub: "assign · prioritize" },
        { x: 404, label: "Execute", sub: "mobile · checklist" },
        { x: 532, label: "Close", sub: "history · audit" },
      ].map((step, i) => (
        <g key={step.label}>
          <rect x={step.x} y="32" width="100" height="52" rx="8" fill="#fcfbf7" stroke={i === 0 ? "#3d5a52" : "#e3e1d6"} strokeWidth={i === 0 ? "1.5" : "1"} />
          <text x={step.x + 50} y="54" textAnchor="middle" fill="#1c211c" fontSize="11" fontWeight="600" fontFamily="system-ui">{step.label}</text>
          <text x={step.x + 50} y="70" textAnchor="middle" fill="#949a91" fontSize="9" fontFamily="system-ui">{step.sub}</text>
          <circle cx={step.x + 50} cy="90" r="6" fill="#3d5a52" />
          {i < 4 && (
            <line x1={step.x + 100} y1="58" x2={step.x + 128} y2="58" stroke="#949a91" strokeWidth="1.5" markerEnd="url(#me-arrow)" />
          )}
        </g>
      ))}
    </svg>
  );
}

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

export default function MaintenEasePage() {
  return (
    <article>
      <header className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <p className="label-caps mb-3">Case study · Shipped product</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-ink leading-tight max-w-3xl">
            MaintenEase: maintenance operations for small teams
          </h1>
          <p className="mt-6 text-lg text-ink-2 max-w-2xl leading-relaxed">
            I built a CMMS for teams that maintain assets, buildings, and fleets.
            Work orders, preventive maintenance, inspections, a public request
            portal, and an AI assistant that reads real work-order data: with a
            confirmation gate on every action. Live at{" "}
            <a href="https://maintenease.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              maintenease.com
            </a>.
          </p>
          <p className="mt-4 text-sm text-ink-3 max-w-2xl">
            MaintenEase is a live product in early stage: I am working with the
            earliest teams. I am not claiming
            customer counts, ROI, or downtime savings.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-md border border-hairline bg-card px-3 py-1.5 text-xs text-ink-2 hover:border-accent hover:text-accent transition-colors">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="border-b border-hairline bg-stock">
        <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
          <p className="label-caps mb-4">System flow</p>
          <MaintenEaseWorkflowDiagram />
        </div>
      </div>

      <CaseStudySection id="problem" title="Problem">
        <p>
          Small maintenance teams: facilities, fleet, building ops, run on
          clipboards, email chains, and shared spreadsheets. A tenant reports a
          leak. A technician gets a text. The work order lives in someone&apos;s
          inbox. PM schedules slip because there is no system generating them.
          Asset history is scattered across photos, PDFs, and memory.
        </p>
        <p>
          Enterprise CMMS tools exist but price per seat, require implementation
          projects, and overwhelm a 4-person team. The team needs work orders,
          assets, PM schedules, and a way for occupants to report problems,
          without a six-month rollout.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id="before"
        title="Before"
        visual={
          <UIFrame title="Typical small-team maintenance" subtitle="What I mapped" badge="Before">
            <div className="space-y-3 text-sm">
              {[
                { t: "Requests via text and email", d: "No structured intake, no priority, no audit trail" },
                { t: "PMs on a calendar reminder", d: "Missed when someone is out; no auto-generated work orders" },
                { t: "Asset info in folders", d: "Serial numbers, manuals, and photos disconnected from work history" },
                { t: "No occupant-facing channel", d: "Tenants call the front desk; requests get lost in translation" },
              ].map((item) => (
                <div key={item.t} className="p-3 rounded-lg bg-flag-light/50 border border-hairline">
                  <p className="font-medium text-ink">{item.t}</p>
                  <p className="text-ink-3 text-xs mt-0.5">{item.d}</p>
                </div>
              ))}
            </div>
          </UIFrame>
        }
      >
        <p>
          Before building, I mapped how a 4-8 person maintenance team actually
          operates. Requests arrive through phone, text, and email with inconsistent
          detail. A coordinator triages from memory. Technicians carry paper
          checklists or nothing. PM work is reactive because schedules are not
          connected to work-order generation.
        </p>
        <p>
          Occupants have no structured way to report issues. They call whoever
          they know. Urgent and routine requests look the same until someone
          reads them.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id="what-i-built"
        title="What I Built"
        visual={
          <UIFrame title="Work order queue" subtitle="Live product UI" badge="Live" badgeTone="accent">
            <div className="space-y-0 divide-y divide-hairline">
              {[
                { title: "HVAC not cooling: Warehouse 2", priority: "High", status: "In progress", assignee: "J. Martinez" },
                { title: "Dock 4 door sensor fault", priority: "Normal", status: "Open", assignee: "Unassigned" },
                { title: "Monthly PM: Compressor #3", priority: "Scheduled", status: "Open", assignee: "R. Chen" },
              ].map((wo) => (
                <div key={wo.title} className="flex items-center gap-3 py-2.5">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{wo.title}</p>
                    <p className="text-xs text-ink-3">{wo.assignee}</p>
                  </div>
                  <span className={`text-[0.625rem] font-semibold uppercase px-1.5 py-0.5 rounded ${wo.priority === "High" ? "bg-red-light text-red" : "bg-hairline/60 text-ink-2"}`}>
                    {wo.priority}
                  </span>
                </div>
              ))}
            </div>
          </UIFrame>
        }
      >
        <p>
          MaintenEase is a full CMMS I designed and shipped:
        </p>
        <ul className="mt-4 space-y-2 text-ink-2">
          <li><strong className="text-ink">Work orders</strong>: create, assign, prioritize, close; mobile-friendly execution</li>
          <li><strong className="text-ink">Assets</strong>: history, documents, photos attached to equipment records</li>
          <li><strong className="text-ink">PM schedules</strong>: recurring maintenance that auto-generates work orders</li>
          <li><strong className="text-ink">Inspections and checklists</strong>: structured completion with evidence</li>
          <li><strong className="text-ink">Vendors</strong>: service partner records linked to assets and work</li>
          <li><strong className="text-ink">Public request portal</strong>: branded link at maintenease.com/r/your-name; no login required for submitters</li>
          <li><strong className="text-ink">AI maintenance assistant</strong>: reads real work-order and asset data; confirmation gate on every write action</li>
          <li><strong className="text-ink">Predictive/risk scoring</strong>: on Pro and Business tiers</li>
          <li><strong className="text-ink">MCP/agent API</strong>: for automation integrations</li>
        </ul>
        <p className="mt-4">
        </p>
      </CaseStudySection>

      <CaseStudySection
        id="how-it-works"
        title="How It Works"
        visual={
          <UIFrame title="Public request portal" subtitle="maintenease.com/r/your-name" badge="No login">
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border border-hairline p-3">
                <p className="label-caps">Request type</p>
                <div className="flex gap-2 mt-2">
                  <span className="rounded px-2 py-1 text-xs bg-accent-light text-accent font-medium">Standard</span>
                  <span className="rounded px-2 py-1 text-xs border border-hairline text-ink-3">Urgent</span>
                </div>
              </div>
              <div className="rounded-lg border border-hairline p-3">
                <p className="label-caps">Description</p>
                <p className="text-ink-2 mt-1 text-xs">Water leak under sink, break room B</p>
              </div>
              <div className="rounded-lg border border-hairline p-3">
                <p className="label-caps">Location</p>
                <p className="text-ink-2 mt-1 text-xs">Building A · Floor 2</p>
              </div>
              <button type="button" className="w-full rounded-md bg-ink text-paper text-xs py-2 font-medium">
                Submit request
              </button>
            </div>
          </UIFrame>
        }
      >
        <p>
          <strong className="text-ink">Request intake.</strong> Every account gets
          a branded public portal. Submitters choose standard or urgent, describe
          the issue, add location and contact details, optionally attach photos.
          No app install, no login. Submissions land in the team&apos;s request inbox.
        </p>
        <p>
          <strong className="text-ink">Triage and work order creation.</strong> A
          coordinator reviews the inbox, confirms location and priority, associates
          the correct asset, and converts to a work order. Urgent requests trigger
          immediate notification to the maintenance team.
        </p>
        <p>
          <strong className="text-ink">PM generation.</strong> Recurring schedules
          auto-create work orders on interval. Technicians see them in the queue
          alongside reactive work: same history, same asset record.
        </p>
        <p>
          <strong className="text-ink">AI assistant.</strong> Reads real work-order
          and asset data. Can summarize open work, look up asset history, and
          propose actions: but every write requires explicit human confirmation.
          No silent database changes.
        </p>
      </CaseStudySection>

      <CaseStudySection
        id="exceptions"
        title="Exceptions"
        visual={
          <UIFrame title="Request inbox: needs review" subtitle="Before work order creation" badge="Triage" badgeTone="flag">
            <div className="space-y-2">
              {[
                { issue: "Missing asset association", req: "Leak: break room B", action: "Confirm asset or location" },
                { issue: "Duplicate submission", req: "HVAC not cooling: Warehouse 2", action: "Merge with WO #1042" },
                { issue: "Urgent flag: verify", req: "Elevator stuck: Floor 3", action: "Confirm before auto-notify" },
              ].map((ex) => (
                <div key={ex.issue} className="p-2.5 rounded-lg border border-hairline">
                  <p className="text-[0.625rem] font-semibold uppercase tracking-wider text-flag">{ex.issue}</p>
                  <p className="text-sm font-medium text-ink mt-1">{ex.req}</p>
                  <p className="text-xs text-ink-3 mt-0.5">{ex.action}</p>
                </div>
              ))}
            </div>
          </UIFrame>
        }
      >
        <p>
          Public portals create exception volume by design: that is the point.
          Not every submission becomes a work order immediately:
        </p>
        <ul className="mt-4 space-y-2 text-ink-2">
          <li><strong className="text-ink">Missing asset or location</strong>: request enters inbox; coordinator confirms before assignment</li>
          <li><strong className="text-ink">Duplicate reports</strong>: same issue submitted twice; merge before creating redundant work orders</li>
          <li><strong className="text-ink">Urgent flag abuse</strong>: urgent triggers immediate notification; coordinator can verify before escalation</li>
          <li><strong className="text-ink">AI-proposed actions</strong>: assistant suggests work-order creation or status change; human must confirm</li>
        </ul>
        <p>
          QR code submissions usually enter the request inbox first so maintenance
          can remove duplicates, confirm priority, and associate the correct asset
          before assignment.
        </p>
      </CaseStudySection>

      <CaseStudySection id="result" title="Result">
        <p>
          MaintenEase is a live product at{" "}
          <a href="https://maintenease.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            maintenease.com
          </a>.
          The marketing site describes the product as brand-new and working with
          the earliest teams: that is accurate. I am not inventing rollout size,
          customer counts, or downtime-dollar ROI.
        </p>
        <p>
          What this case study proves: I understand real maintenance operations,
          work orders, PM schedules, asset history, occupant intake, mobile
          execution, and I shipped a working system with exception paths and
          human controls, not a feature checklist demo.
        </p>
      </CaseStudySection>

      <CaseStudySection id="tech-used" title="Tech Used">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { layer: "Frontend", choice: "Vite + React 18 + TypeScript", why: "SPA with route-level code splitting; mobile-friendly work-order execution" },
            { layer: "Backend", choice: "Supabase", why: "Postgres, auth, storage, edge functions; RLS policies per company" },
            { layer: "State", choice: "TanStack Query", why: "Server state via domain services and hooks: no direct DB calls in components" },
            { layer: "UI", choice: "shadcn/ui + Tailwind CSS", why: "Consistent operational UI across work orders, assets, and portal" },
            { layer: "Monitoring", choice: "Sentry", why: "Client error tracking with route and session context" },
            { layer: "AI", choice: "Assistant + MCP API", why: "Reads real WO/asset data; confirmation gate on writes" },
          ].map((item) => (
            <div key={item.layer} className="rounded-lg border border-hairline bg-card p-4">
              <p className="label-caps">{item.layer}</p>
              <p className="text-sm font-semibold text-ink mt-1">{item.choice}</p>
              <p className="text-xs text-ink-3 mt-1">{item.why}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection id="what-i-learned" title="What I Learned">
        <p>
          <strong className="text-ink">The request portal is distribution.</strong>{" "}
          Every account gets a free public link. Occupants report problems without
          friction. The inbox is where exceptions live: not the work-order queue.
        </p>
        <p>
          <strong className="text-ink">AI needs a confirmation gate.</strong>{" "}
          An assistant that reads real maintenance data is useful. One that writes
          without asking destroys trust. Every proposed action waits for a human.
        </p>
        <p>
          <strong className="text-ink">Ship the inbox before the AI.</strong>{" "}
          Work orders, assets, and PM schedules are the foundation. The assistant
          and predictive scoring sit on top of data the team already trusts.
        </p>
      </CaseStudySection>

      <section className="border-t border-hairline bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 text-center">
          <a href="https://maintenease.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/90 transition-colors mr-3">
            Visit maintenease.com
          </a>
          <Link href="/how-i-work" className="inline-flex items-center justify-center rounded-md border border-hairline px-6 py-3 text-sm font-medium text-ink hover:border-accent transition-colors">
            How I Work
          </Link>
        </div>
      </section>
    </article>
  );
}

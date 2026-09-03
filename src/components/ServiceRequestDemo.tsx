"use client";

import { useState } from "react";

type DemoStep =
  | "submit"
  | "extract"
  | "categorize"
  | "priority"
  | "missing"
  | "create"
  | "notify"
  | "acknowledge"
  | "exception"
  | "dashboard";

interface StepConfig {
  id: DemoStep;
  label: string;
  short: string;
}

const STEPS: StepConfig[] = [
  { id: "submit", label: "Request submitted", short: "Submit" },
  { id: "extract", label: "Information extracted", short: "Extract" },
  { id: "categorize", label: "Categorized", short: "Category" },
  { id: "priority", label: "Priority assessed", short: "Priority" },
  { id: "missing", label: "Missing info identified", short: "Gaps" },
  { id: "create", label: "Record created", short: "Record" },
  { id: "notify", label: "Right person notified", short: "Notify" },
  { id: "acknowledge", label: "Acknowledgment sent", short: "Ack" },
  { id: "exception", label: "Exception queue", short: "Exception" },
  { id: "dashboard", label: "Dashboard", short: "Dashboard" },
];

const SAMPLE_REQUEST = {
  submitter: "Night shift lead — Dock 4",
  text: "HVAC not cooling in Warehouse 2. Temperature rising, product at risk. Dock 4 area worst affected. Started around 11 PM.",
  location: "Warehouse 2 · Dock 4",
  contact: "nightlead@facility.example",
};

export function ServiceRequestDemo() {
  const [currentStep, setCurrentStep] = useState<DemoStep>("submit");
  const [completedSteps, setCompletedSteps] = useState<Set<DemoStep>>(new Set());

  const currentIndex = STEPS.findIndex((s) => s.id === currentStep);

  const advance = () => {
    setCompletedSteps((prev) => new Set([...prev, currentStep]));
    if (currentIndex < STEPS.length - 1) {
      setCurrentStep(STEPS[currentIndex + 1].id);
    }
  };

  const goToStep = (step: DemoStep) => {
    const targetIndex = STEPS.findIndex((s) => s.id === step);
    const newCompleted = new Set<DemoStep>();
    for (let i = 0; i < targetIndex; i++) {
      newCompleted.add(STEPS[i].id);
    }
    setCompletedSteps(newCompleted);
    setCurrentStep(step);
  };

  const reset = () => {
    setCurrentStep("submit");
    setCompletedSteps(new Set());
  };

  return (
    <div className="rounded-xl border border-hairline bg-card overflow-hidden">
      {/* Demo banner */}
      <div className="bg-accent/10 border-b border-hairline px-4 py-2.5 flex items-center justify-between gap-3">
        <p className="text-xs text-accent font-medium">
          Demo — Operational AI Workflow Sprint™ deliverable (sample data, no backend)
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-xs text-ink-3 hover:text-ink underline shrink-0"
        >
          Reset
        </button>
      </div>

      {/* Step rail */}
      <div className="border-b border-hairline bg-paper px-4 py-3 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {STEPS.map((step, i) => {
            const isActive = step.id === currentStep;
            const isDone = completedSteps.has(step.id);
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => goToStep(step.id)}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[0.625rem] font-medium uppercase tracking-wider transition-colors ${
                  isActive
                    ? "bg-accent text-paper"
                    : isDone
                      ? "bg-accent-light text-accent"
                      : "text-ink-3 hover:text-ink-2"
                }`}
              >
                <span className="font-mono">{i + 1}</span>
                <span className="hidden sm:inline">{step.short}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Console body */}
      <div className="grid lg:grid-cols-5 min-h-[420px]">
        {/* Left: step detail */}
        <div className="lg:col-span-3 p-5 border-b lg:border-b-0 lg:border-r border-hairline">
          <p className="label-caps mb-1">Step {currentIndex + 1} of {STEPS.length}</p>
          <h3 className="text-lg font-semibold text-ink font-serif mb-4">
            {STEPS[currentIndex].label}
          </h3>
          <StepContent step={currentStep} />
          {currentIndex < STEPS.length - 1 && (
            <button
              type="button"
              onClick={advance}
              className="mt-6 inline-flex items-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ink/90 transition-colors"
            >
              Continue →
            </button>
          )}
        </div>

        {/* Right: live state panel */}
        <div className="lg:col-span-2 bg-stock p-5">
          <p className="label-caps mb-3">System state</p>
          <StatePanel step={currentStep} completedSteps={completedSteps} />
        </div>
      </div>
    </div>
  );
}

function StepContent({ step }: { step: DemoStep }) {
  switch (step) {
    case "submit":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            A night shift lead submits a facility request through the public portal.
            No login required.
          </p>
          <div className="rounded-lg border border-hairline bg-paper p-4 space-y-3 text-sm">
            <div>
              <p className="label-caps">Submitted by</p>
              <p className="text-ink mt-1">{SAMPLE_REQUEST.submitter}</p>
            </div>
            <div>
              <p className="label-caps">Description</p>
              <p className="text-ink-2 mt-1">{SAMPLE_REQUEST.text}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="label-caps">Location</p>
                <p className="text-ink mt-1">{SAMPLE_REQUEST.location}</p>
              </div>
              <div>
                <p className="label-caps">Contact</p>
                <p className="text-ink mt-1 text-xs">{SAMPLE_REQUEST.contact}</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "extract":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            The system extracts structured fields from the free-text submission.
            Each field carries a confidence score.
          </p>
          <div className="rounded-lg border border-hairline overflow-hidden text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-paper border-b border-hairline">
                  <th className="text-left px-3 py-2 label-caps">Field</th>
                  <th className="text-left px-3 py-2 label-caps">Value</th>
                  <th className="text-right px-3 py-2 label-caps">Conf.</th>
                </tr>
              </thead>
              <tbody className="font-mono text-xs">
                {[
                  ["issue_type", "HVAC failure", "0.96"],
                  ["location", "Warehouse 2, Dock 4", "0.94"],
                  ["urgency_signal", "product at risk", "0.88"],
                  ["time_reported", "~11:00 PM", "0.72"],
                  ["equipment_id", "—", "0.00"],
                ].map(([field, value, conf]) => (
                  <tr key={field} className="border-b border-hairline last:border-0">
                    <td className="px-3 py-2 text-ink-2 font-sans">{field}</td>
                    <td className={`px-3 py-2 ${value === "—" ? "text-red" : "text-ink"}`}>{value}</td>
                    <td className={`px-3 py-2 text-right ${Number(conf) < 0.8 ? "text-flag" : "text-accent"}`}>{conf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "categorize":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            Request is routed to the correct operational category based on extracted
            signals — not a generic &quot;other&quot; bucket.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Facilities", "HVAC", "Warehouse", "Environmental"].map((tag, i) => (
              <span
                key={tag}
                className={`rounded px-2.5 py-1 text-xs font-medium ${
                  i === 0 || i === 1 ? "bg-accent-light text-accent" : "bg-hairline/50 text-ink-3"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="rounded-lg border border-hairline bg-paper p-3 text-sm">
            <p className="label-caps">Routing rule matched</p>
            <p className="text-ink-2 mt-1 font-mono text-xs">
              category = HVAC AND location CONTAINS &quot;Warehouse&quot; → Facilities / HVAC queue
            </p>
          </div>
        </div>
      );

    case "priority":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            Priority is assessed from urgency signals, category, and time of day —
            not left for the submitter to guess.
          </p>
          <div className="rounded-lg border border-red/30 bg-red-light p-4">
            <div className="flex items-center gap-2">
              <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-red bg-red/10 px-2 py-0.5 rounded">
                High priority
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-2">
              <li>→ &quot;product at risk&quot; urgency signal detected</li>
              <li>→ HVAC failure in temperature-controlled warehouse</li>
              <li>→ Night submission — on-call path applies</li>
            </ul>
          </div>
        </div>
      );

    case "missing":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            Before creating a work record, the system checks required fields.
            Missing equipment ID blocks auto-creation and routes to the exception queue.
          </p>
          <div className="rounded-lg border-2 border-flag bg-flag-light p-4">
            <p className="text-sm font-semibold text-flag">Missing: Equipment ID</p>
            <p className="text-xs text-ink-2 mt-2">
              Warehouse 2 has 3 HVAC units. Submitter did not specify which unit.
              Auto-creation blocked — human must associate asset before assignment.
            </p>
            <div className="mt-3 space-y-1 text-xs font-mono text-ink-3">
              <p>W2-HVAC-01 — Rooftop unit, north end</p>
              <p>W2-HVAC-02 — Rooftop unit, dock side</p>
              <p>W2-HVAC-03 — Split system, office wing</p>
            </div>
          </div>
        </div>
      );

    case "create":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            After a coordinator selects W2-HVAC-02 (dock side), the system creates
            a work record with full audit trail.
          </p>
          <div className="rounded-lg border border-hairline bg-paper p-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="label-caps">Record</span>
              <span className="font-mono text-xs text-accent">SR-2026-0341</span>
            </div>
            <p className="font-medium text-ink">HVAC not cooling — Warehouse 2, Dock 4</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-ink-2">
              <div><span className="text-ink-3">Asset:</span> W2-HVAC-02</div>
              <div><span className="text-ink-3">Priority:</span> High</div>
              <div><span className="text-ink-3">Category:</span> HVAC / Facilities</div>
              <div><span className="text-ink-3">Status:</span> Open</div>
            </div>
          </div>
        </div>
      );

    case "notify":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            The right person is notified based on category, priority, and on-call
            schedule — not a blast to everyone.
          </p>
          <div className="space-y-2">
            <div className="rounded-lg border border-hairline bg-paper p-3 text-sm flex items-start gap-3">
              <span className="text-accent text-lg">→</span>
              <div>
                <p className="font-medium text-ink">R. Chen — HVAC technician (on-call)</p>
                <p className="text-xs text-ink-3 mt-0.5">SMS + in-app · High priority path</p>
              </div>
            </div>
            <div className="rounded-lg border border-hairline bg-paper p-3 text-sm flex items-start gap-3 opacity-60">
              <span className="text-ink-3 text-lg">○</span>
              <div>
                <p className="font-medium text-ink">Facilities supervisor</p>
                <p className="text-xs text-ink-3 mt-0.5">In-app · CC on high priority</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "acknowledge":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            The submitter receives an acknowledgment with the record ID and expected
            response window. Internal evidence is not exposed.
          </p>
          <div className="rounded-lg border border-hairline bg-paper p-4 text-sm">
            <p className="label-caps">To: nightlead@facility.example</p>
            <div className="mt-3 space-y-2 text-ink-2">
              <p>Your request <span className="font-mono text-accent">SR-2026-0341</span> has been received.</p>
              <p>HVAC technician R. Chen has been notified. Expected response: within 2 hours.</p>
              <p className="text-xs text-ink-3">Reply to this email to add information to the record.</p>
            </div>
          </div>
        </div>
      );

    case "exception":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            The missing equipment ID exception remains in the queue until resolved.
            Other requests with complete data auto-process; this one waits for a human.
          </p>
          <div className="rounded-lg border border-flag bg-flag-light p-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-flag">
                Open exception
              </span>
              <span className="font-mono text-xs text-ink-3">Resolved in step 6</span>
            </div>
            <p className="font-medium text-ink mt-2">Missing equipment ID</p>
            <p className="text-xs text-ink-3 mt-1">SR-2026-0341 · Resolved by coordinator asset selection</p>
          </div>
          <p className="text-xs text-ink-3">
            Exception queue shows all items needing human decision — not buried in a notification feed.
          </p>
        </div>
      );

    case "dashboard":
      return (
        <div className="space-y-4">
          <p className="text-sm text-ink-2">
            Operations dashboard: open requests, exception count, assignment status,
            and SLA tracking in one view.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Open", value: "7", colorClass: "text-accent" },
              { label: "Exceptions", value: "1", colorClass: "text-flag" },
              { label: "Resolved today", value: "4", colorClass: "text-ink" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-hairline bg-paper p-3 text-center">
                <p className={`text-2xl font-mono font-semibold ${stat.colorClass}`}>{stat.value}</p>
                <p className="text-[0.625rem] uppercase tracking-wider text-ink-3 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-hairline overflow-hidden text-xs">
            <div className="bg-paper px-3 py-2 border-b border-hairline label-caps">Recent records</div>
            {[
              { id: "SR-2026-0341", title: "HVAC — Warehouse 2", status: "Assigned", priority: "High" },
              { id: "SR-2026-0340", title: "Lighting — Dock 3", status: "Open", priority: "Normal" },
              { id: "SR-2026-0339", title: "Door sensor — Dock 4", status: "In progress", priority: "Normal" },
            ].map((row) => (
              <div key={row.id} className="flex items-center gap-2 px-3 py-2 border-b border-hairline last:border-0">
                <span className="font-mono text-ink-3 w-24 shrink-0">{row.id}</span>
                <span className="flex-1 text-ink truncate">{row.title}</span>
                <span className={`text-[0.625rem] uppercase ${row.priority === "High" ? "text-red" : "text-ink-3"}`}>{row.priority}</span>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

function StatePanel({
  step,
  completedSteps,
}: {
  step: DemoStep;
  completedSteps: Set<DemoStep>;
}) {
  const fields = [
    { key: "request_id", value: completedSteps.has("create") || step === "create" || completedSteps.has("notify") ? "SR-2026-0341" : "—" },
    { key: "category", value: completedSteps.has("categorize") ? "HVAC / Facilities" : "—" },
    { key: "priority", value: completedSteps.has("priority") ? "High" : "—" },
    { key: "equipment_id", value: completedSteps.has("create") ? "W2-HVAC-02" : completedSteps.has("missing") ? "MISSING" : "—" },
    { key: "assigned_to", value: completedSteps.has("notify") ? "R. Chen" : "—" },
    { key: "ack_sent", value: completedSteps.has("acknowledge") ? "Yes" : "No" },
    { key: "exceptions", value: completedSteps.has("exception") ? "0 open (1 resolved)" : completedSteps.has("missing") ? "1 open" : "0" },
  ];

  return (
    <div className="space-y-3">
      {fields.map((f) => (
        <div key={f.key} className="flex justify-between text-sm border-b border-hairline pb-2">
          <span className="text-ink-3 font-mono text-xs">{f.key}</span>
          <span className={`font-mono text-xs ${
            f.value === "MISSING" ? "text-flag" :
            f.value === "High" ? "text-red" :
            f.value === "—" ? "text-ink-3" : "text-ink"
          }`}>
            {f.value}
          </span>
        </div>
      ))}
      <p className="text-[0.625rem] text-ink-3 pt-2">
        State updates as you advance through the workflow. Click any step to jump.
      </p>
    </div>
  );
}

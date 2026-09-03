import { ReactNode } from "react";

interface CaseStudySectionProps {
  id: string;
  title: string;
  children: ReactNode;
  visual?: ReactNode;
}

export function CaseStudySection({
  id,
  title,
  children,
  visual,
}: CaseStudySectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-hairline py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className={visual ? "grid gap-10 lg:grid-cols-2 lg:gap-16" : ""}>
          <div>
            <h2 className="text-2xl md:text-3xl text-ink mb-6">{title}</h2>
            <div className="prose-case">{children}</div>
          </div>
          {visual && <div className="lg:pt-2">{visual}</div>}
        </div>
      </div>
    </section>
  );
}

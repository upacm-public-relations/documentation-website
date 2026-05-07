import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";
import { StatusBadge } from "@/components/doc-components/StatusBadge";

export default function RetrospectivesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institutional Knowledge" },
          { label: "Retrospectives (2425)" },
        ]}
        title="Retrospectives (2425)"
        description="End-of-year reflections and lessons learned from AY 2024–2025"
        badge={<StatusBadge status="completed" />}
      />

      <div className="space-y-6">
        <Callout type="info" title="For Incoming PR Heads">
          Reading these retrospectives is one of the most valuable things you can do when onboarding.
          They contain honest assessments of what worked, what didn&apos;t, and specific recommendations
          for the next batch.
        </Callout>

        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold text-lg mb-4" style={{ color: "var(--foreground)" }}>
            What Went Well
          </h2>
          <div
            className="rounded-lg p-4 border-2 border-dashed text-sm italic"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            Placeholder — Add retrospective highlights here (successes, wins, things that worked well).
          </div>
        </div>

        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold text-lg mb-4" style={{ color: "var(--foreground)" }}>
            Areas for Improvement
          </h2>
          <div
            className="rounded-lg p-4 border-2 border-dashed text-sm italic"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            Placeholder — Add areas that need improvement, pain points, and challenges faced.
          </div>
        </div>

        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold text-lg mb-4" style={{ color: "var(--foreground)" }}>
            Recommendations for Next Batch
          </h2>
          <div
            className="rounded-lg p-4 border-2 border-dashed text-sm italic"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            Placeholder — Add specific, actionable recommendations for the incoming PR Head and committee.
          </div>
        </div>
      </div>
    </div>
  );
}

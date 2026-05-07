import { PageHeader } from "@/components/doc-components/PageHeader";

const swotQuadrants = [
  {
    label: "Strengths",
    letter: "S",
    color: "#16a34a",
    bg: "rgba(34,197,94,0.07)",
    border: "rgba(34,197,94,0.2)",
    placeholder:
      "Add your committee's strengths here.\n\nExamples:\n• Strong existing partner relationships\n• Experienced team with automation skills\n• Clear documentation systems in place",
  },
  {
    label: "Weaknesses",
    letter: "W",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.06)",
    border: "rgba(220,38,38,0.18)",
    placeholder:
      "Add your committee's weaknesses here.\n\nExamples:\n• Limited manpower during peak event season\n• Turnover gaps in institutional knowledge\n• Dependency on specific tools or platforms",
  },
  {
    label: "Opportunities",
    letter: "O",
    color: "#2D9CDB",
    bg: "rgba(45,156,219,0.07)",
    border: "rgba(45,156,219,0.2)",
    placeholder:
      "Add your committee's opportunities here.\n\nExamples:\n• Expanding ACM chapter partnerships\n• Leveraging new AI tools for automation\n• Growing interest from tech companies in UP students",
  },
  {
    label: "Threats",
    letter: "T",
    color: "#d97706",
    bg: "rgba(217,119,6,0.07)",
    border: "rgba(217,119,6,0.2)",
    placeholder:
      "Add your committee's threats here.\n\nExamples:\n• Partner disengagement due to slow responses\n• Budget constraints from parent organization\n• Loss of key relationships after officer transitions",
  },
];

export default function SWOTPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institutional Knowledge" },
          { label: "SWOT Analysis" },
        ]}
        title="SWOT Analysis"
        description="Strengths, Weaknesses, Opportunities, and Threats for the PR Committee"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {swotQuadrants.map((q) => (
          <div
            key={q.label}
            className="rounded-xl p-6 min-h-64"
            style={{ background: q.bg, border: `1.5px solid ${q.border}` }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-9 w-9 rounded-full flex items-center justify-center font-bold text-lg text-white"
                style={{ background: q.color }}
              >
                {q.letter}
              </div>
              <h2 className="text-lg font-bold" style={{ color: q.color }}>
                {q.label}
              </h2>
            </div>

            {/* Editable content area */}
            <div
              className="rounded-lg p-4 min-h-40"
              style={{ background: "var(--card)", border: `1px solid ${q.border}` }}
            >
              <p
                className="text-sm whitespace-pre-line"
                style={{ color: "var(--muted-foreground)" }}
              >
                {q.placeholder}
              </p>
            </div>

            <p className="text-xs mt-3 italic" style={{ color: q.color, opacity: 0.7 }}>
              ✏️ Replace the placeholder text with your actual {q.label.toLowerCase()} analysis
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-8 rounded-xl p-5 text-sm"
        style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}
      >
        <strong style={{ color: "var(--foreground)" }}>How to use this page:</strong> Edit{" "}
        <code
          className="px-1 py-0.5 rounded text-xs"
          style={{ background: "var(--border)", fontFamily: "'DM Mono', monospace" }}
        >
          app/(docs)/knowledge/swot/page.tsx
        </code>{" "}
        and replace the <code className="px-1 py-0.5 rounded text-xs" style={{ background: "var(--border)", fontFamily: "'DM Mono', monospace" }}>placeholder</code> values in the{" "}
        <code className="px-1 py-0.5 rounded text-xs" style={{ background: "var(--border)", fontFamily: "'DM Mono', monospace" }}>swotQuadrants</code> array with your actual analysis.
      </div>
    </div>
  );
}

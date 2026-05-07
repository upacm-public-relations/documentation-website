import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";
import { ExternalLink } from "lucide-react";

// ✏️ ADD YOUR LINKS HERE — just fill in the name and href fields
const links = [
  { name: "UP ACM Google Drive", href: "#", category: "Internal" },
  { name: "PR Committee Email", href: "#", category: "Internal" },
  { name: "Partnership Tracking Sheet", href: "#", category: "Internal" },
  { name: "UP ACM Official Website", href: "#", category: "External" },
  { name: "ACM International", href: "https://www.acm.org", category: "External" },
  { name: "Placeholder Link", href: "#", category: "External" },
];

const categoryColor = (cat: string) => {
  if (cat === "Internal") return { bg: "rgba(45,156,219,0.1)", color: "#1a7ab5" };
  return { bg: "rgba(160,164,171,0.12)", color: "#6b7280" };
};

export default function RelevantLinksPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: "Relevant Links" },
        ]}
        title="Relevant Links"
        description="Quick reference table of important links and resources for PR Committee work"
      />

      <Callout type="info" title="Adding Links" className="mb-6">
        To add or update links, edit the <code style={{ fontFamily: "monospace" }}>links</code> array in{" "}
        <code style={{ fontFamily: "monospace" }}>app/(docs)/resources/links/page.tsx</code>.
        Categories: Internal, External.
      </Callout>

      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--secondary)" }}>
              <th
                className="text-left px-5 py-3 font-semibold"
                style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
              >
                Name
              </th>
              <th
                className="text-left px-5 py-3 font-semibold"
                style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
              >
                Category
              </th>
              <th
                className="text-left px-5 py-3 font-semibold"
                style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, i) => {
              const cc = categoryColor(link.category);
              return (
                <tr
                  key={i}
                  className="transition-colors"
                  style={{
                    background: i % 2 === 0 ? "var(--card)" : "var(--secondary)",
                    borderBottom: i < links.length - 1 ? "1px solid var(--border)" : undefined,
                  }}
                >
                  <td className="px-5 py-3.5 font-medium" style={{ color: "var(--foreground)" }}>
                    {link.name}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{ background: cc.bg, color: cc.color }}
                    >
                      {link.category}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                      style={{ color: "#2D9CDB" }}
                    >
                      Open link
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";

export default function ACMRelationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institutional Knowledge" },
          { label: "UP ACM to ACM Relations" },
        ]}
        title="UP ACM to ACM Relations"
        description="Overview of UP ACM's relationship with ACM International and affiliated organizations"
      />

      <div className="space-y-6">
        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>
            Relationship Overview
          </h2>
          <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
            Placeholder — Describe UP ACM&apos;s relationship with ACM International here.
            Include membership status, reporting structure, and any obligations.
          </p>
        </div>

        <Callout type="info" title="ACM Membership">
          Placeholder — Add information about UP ACM&apos;s ACM student chapter membership,
          dues, and renewal process.
        </Callout>

        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>
            Key Contacts at ACM
          </h2>
          <p className="text-sm italic" style={{ color: "var(--muted-foreground)" }}>
            Placeholder — Add ACM international contacts, regional coordinators, and other key relationships.
          </p>
        </div>
      </div>
    </div>
  );
}

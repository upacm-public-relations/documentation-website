import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";

const workflowSteps = [
  {
    step: 1,
    title: "Initial Contact",
    desc: "Partner or sponsor reaches out via email or referral. Log the inquiry in the partnership tracker.",
  },
  {
    step: 2,
    title: "Review & Assessment",
    desc: "Evaluate the proposal against UP ACM's partnership criteria, alignment with chapter goals, and mutual benefit.",
  },
  {
    step: 3,
    title: "Internal Deliberation",
    desc: "Present to the Executive Board if needed. Get approval from relevant parties before responding.",
  },
  {
    step: 4,
    title: "Draft & Send Proposal",
    desc: "Use the Partnership Response Automation system or draft a formal response. Include partnership terms.",
  },
  {
    step: 5,
    title: "Agreement & Onboarding",
    desc: "Finalize MOU or agreement. Add partner to the database and begin onboarding into UP ACM events.",
  },
  {
    step: 6,
    title: "Ongoing Management",
    desc: "Maintain regular check-ins. Document milestones and update partnership status in the tracking sheet.",
  },
];

export default function PartnershipsWorkflowPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Operations" },
          { label: "Partnerships Workflow" },
        ]}
        title="Partnerships Workflow"
        description="Step-by-step guide for managing partnership and sponsorship processes"
      />

      <Callout type="info" title="Tip" className="mb-8">
        Use the Partnership Response Automation project to speed up drafting responses to partnership
        proposals. See the Automation Projects section for setup instructions.
      </Callout>

      <div className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
          Partnership Workflow Steps
        </h2>
        {workflowSteps.map((s) => (
          <div
            key={s.step}
            className="flex items-start gap-4 rounded-xl p-5"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: "#0B1F3B" }}
            >
              {s.step}
            </div>
            <div>
              <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                {s.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-6"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <h2 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>
          Partnership Criteria
        </h2>
        <div className="space-y-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
          <p className="italic">
            Placeholder — Add partnership evaluation criteria here (e.g., alignment with ACM values,
            mutual benefit, capacity to deliver, reputation).
          </p>
        </div>
      </div>
    </div>
  );
}

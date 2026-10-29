import type { Metadata } from "next";
import { ClosingBand } from "@/components/closing-band";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Discovery, an agreed scope, secure onboarding, delivery, and review for international finance engagements.",
};

const steps = [
  {
    title: "Discovery and needs assessment",
    text: "We learn how the business operates, what the finance function has to produce, and which people and systems are already involved.",
  },
  {
    title: "Scope, deliverables and responsibilities",
    text: "The work, the outputs, and who is responsible for each part are written down. A service engagement and a dedicated professional are scoped separately, even when you use both.",
  },
  {
    title: "Proposal and engagement agreement",
    text: "You receive a proposal and an agreement before delivery starts. Fees follow that scope. Nothing on this website is a quote.",
  },
  {
    title: "Secure onboarding and system access",
    text: "Access is requested only for the systems the work needs, and only for the people who need it. Credentials are not shared more widely than the engagement requires.",
  },
  {
    title: "Delivery and review",
    text: "Work is produced on the agreed rhythm and reviewed with you. Material figures and commentary are checked by a person and tied back to source records.",
  },
  {
    title: "Ongoing improvement",
    text: "As volumes, entities, or reporting needs change, we revisit the scope and the way the work is done. Improvement is part of the relationship, not an open-ended promise.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="How we work"
        title="A clear engagement, from the first conversation to the review."
        lede="The process is the same shape for finance services and dedicated talent. The proposal is where the work, the responsibilities, and the commercial terms are actually set."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <ol>
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-12"
            >
              <p className="font-serif text-3xl text-teal md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-10">
                <h2 className="font-serif text-2xl text-navy">{step.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-paper" aria-labelledby="international-title">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12">
          <h2 id="international-title" className="font-serif text-3xl text-navy lg:col-span-5">
            Working with clients outside Kosovo
          </h2>
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted lg:col-span-7">
            <p>
              International work is coordinated around your reporting
              framework, the currencies you use, the time zones where decisions
              are made, and the systems you already run.
            </p>
            <p>
              Local statutory tax, audit, and other regulated activities
              require appropriately authorised professionals. FRSHX does not
              promise universal regulatory coverage, and does not guarantee a
              turnaround time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12" aria-labelledby="how-ai-title">
        <h2 id="how-ai-title" className="font-serif text-3xl text-navy lg:col-span-5">
          Automation inside the engagement
        </h2>
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted lg:col-span-7">
          <p>
            Tools may help with document extraction, coding suggestions,
            reconciliation exceptions, reporting preparation, draft commentary,
            forecasts, and close-task tracking. Each of those uses is available
            only when your systems, permissions, and the agreed scope allow it.
          </p>
          <p>
            AI does not independently approve payments, submit filings, or make
            material accounting decisions. A person reviews material outputs
            and reconciles them to the underlying records.
          </p>
        </div>
      </section>

      <ClosingBand
        title="Start with the work, not a package."
        text="A short description of the business is enough for a first conversation about scope."
        href="/contact"
        label="Discuss Your Requirements"
        secondaryHref="/dedicated-talent"
        secondaryLabel="Find Your Finance Professional"
      />
    </>
  );
}

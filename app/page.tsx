import { ButtonLink } from "@/components/button-link";
import { ClosingBand } from "@/components/closing-band";
import Link from "next/link";

const models = [
  {
    index: "01",
    title: "Defined finance services",
    text: "Accounting, financial planning, and CFO or Controller support with a written scope and agreed monthly deliverables.",
    href: "/finance-services",
    label: "Explore Finance Services",
  },
  {
    index: "02",
    title: "Dedicated professionals",
    text: "A finance professional who works closely with your team, or support to recruit someone for direct employment in your organisation.",
    href: "/dedicated-talent",
    label: "Hire Dedicated Talent",
  },
];

const services = [
  {
    index: "01",
    title: "Accounting",
    text: "The ledger, close, reconciliations, and reports that keep the numbers reliable.",
    href: "/finance-services#accounting",
  },
  {
    index: "02",
    title: "CFO Guide — FP&A",
    text: "Budgets, forecasts, cash, and the analysis managers use to look ahead.",
    href: "/finance-services#fpa",
  },
  {
    index: "03",
    title: "CFO / Controller",
    text: "Oversight of reporting, controls, and the decisions owners need to make.",
    href: "/finance-services#cfo",
  },
];

const aiUses = [
  "Document extraction and suggestions for transaction coding",
  "Reconciliation matching and exception identification",
  "Preparation of reporting data and dashboard refreshes",
  "Draft financial commentary for a professional to review",
  "Forecast and scenario assistance",
  "Workflow automation and close-task tracking",
];

const start = [
  {
    title: "Discovery",
    text: "We learn the business, the reporting need, and the systems already in place.",
  },
  {
    title: "Scope",
    text: "Deliverables and responsibilities are written down before work begins.",
  },
  {
    title: "Onboarding",
    text: "Access is limited to the systems and people the engagement requires.",
  },
  {
    title: "Delivery",
    text: "Work is reviewed with you. Material outputs are checked against source records.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-end lg:py-24">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.18em] text-teal uppercase">
              Financial intelligence & advisory
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
              Your finance function.
              <span className="mt-2 block">The right expertise behind it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Outsourced accounting, financial planning, CFO support and
              dedicated finance professionals for businesses worldwide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/finance-services" className="sm:min-w-60">
                Explore Finance Services
              </ButtonLink>
              <ButtonLink
                href="/dedicated-talent"
                tone="teal"
                className="sm:min-w-60"
              >
                Hire Dedicated Talent
              </ButtonLink>
            </div>
          </div>
          <aside className="border-t border-line pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="font-serif text-3xl leading-snug text-navy">
              Beyond Numbers. Beyond Borders.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A founder-led finance partner based in Kosovo, working with
              businesses worldwide. Accounting expertise, clear management
              information, and automation used under professional supervision.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24" aria-labelledby="ways-title">
        <h2 id="ways-title" className="max-w-2xl font-serif text-3xl text-navy sm:text-4xl">
          Two ways of working
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Some businesses need a defined service. Others need a person. Both
          are core to FRSHX, and either can be scoped on its own.
        </p>
        <div className="mt-10 grid border-y border-line md:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.index}
              className="border-b border-line py-8 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:border-l md:last:pr-0"
            >
              <p className="font-serif text-3xl text-teal">{model.index}</p>
              <h3 className="mt-4 font-serif text-2xl text-navy">{model.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                {model.text}
              </p>
              <Link
                href={model.href}
                className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-teal underline underline-offset-4"
              >
                {model.label}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper" aria-labelledby="services-title">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <h2 id="services-title" className="font-serif text-3xl text-navy sm:text-4xl">
            Finance services
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Three offerings, each with its own deliverables. They can be
            combined in a proposal. One does not automatically include the
            others.
          </p>
          <ol className="mt-10">
            {services.map((service) => (
              <li key={service.index} className="border-t border-line">
                <Link
                  href={service.href}
                  className="grid gap-3 py-6 transition-colors duration-200 hover:text-teal md:grid-cols-12 md:items-baseline"
                >
                  <span className="font-serif text-2xl text-teal md:col-span-2">
                    {service.index}
                  </span>
                  <span className="font-serif text-2xl text-navy md:col-span-4">
                    {service.title}
                  </span>
                  <span className="text-base leading-relaxed text-muted md:col-span-6">
                    {service.text}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12" aria-labelledby="ai-title">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.18em] text-amber uppercase">
            Technology in the work
          </p>
          <h2 id="ai-title" className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
            Practical automation, reviewed by people
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-base leading-relaxed text-muted">
            Where it helps, FRSHX uses automation and AI-assisted tools under
            professional supervision. What is available depends on your
            systems, the permissions you grant, and the scope we agree. These
            tools do not approve payments, submit filings, or make material
            accounting decisions.
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {aiUses.map((item) => (
              <li key={item} className="py-3 text-base leading-relaxed text-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Material outputs are reviewed by a person and reconciled to source
            records.
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="world-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12">
          <h2 id="world-title" className="font-serif text-3xl text-navy sm:text-4xl lg:col-span-5">
            International delivery, agreed locally with you
          </h2>
          <div className="max-w-xl text-base leading-relaxed text-muted lg:col-span-7">
            <p>
              FRSHX coordinates around your reporting framework, currencies,
              time zones, and existing systems. Local statutory tax, audit, and
              other regulated activities require professionals who are
              authorised for that work.
            </p>
            <p className="mt-4">
              We do not promise coverage of every jurisdiction, and we do not
              guarantee a turnaround time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper" aria-labelledby="start-title">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="start-title" className="font-serif text-3xl text-navy sm:text-4xl">
              How an engagement starts
            </h2>
            <Link
              href="/how-we-work"
              className="inline-flex min-h-11 items-center text-sm font-medium text-teal underline underline-offset-4"
            >
              Read the full process
            </Link>
          </div>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {start.map((step, index) => (
              <li key={step.title}>
                <p className="font-serif text-3xl text-teal">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-xl text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingBand
        title="Discuss what the business needs."
        text="Tell us whether you need a defined finance service, a dedicated professional, or both. We will respond with a scope, not a generic package."
        href="/contact"
        label="Discuss Your Requirements"
      />
    </>
  );
}

import type { Metadata } from "next";
import { ClosingBand } from "@/components/closing-band";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About FRSHX",
  description:
    "FRSHX is a founder-led finance partner based in Kosovo, working with businesses worldwide.",
};

const points = [
  {
    title: "Strong accounting foundations",
    text: "The work starts with a ledger that can be explained. Reports are only useful when the underlying records hold.",
  },
  {
    title: "Clear management information",
    text: "Owners need more than a closed month. They need figures, commentary, and a view of cash that they can use.",
  },
  {
    title: "Practical financial leadership",
    text: "CFO and Controller support is about control, priorities, and decisions, scoped to the business rather than a title alone.",
  },
  {
    title: "Technology that improves finance work",
    text: "Automation and AI-assisted tools are used where they remove manual effort. People still review material outputs.",
  },
  {
    title: "Flexible access to specialist talent",
    text: "When the need is a person rather than a defined service, FRSHX can introduce dedicated professionals or support a direct hire.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About FRSHX"
        title="A founder-led finance partner, based in Kosovo."
        lede="FRSHX serves businesses that want senior finance capability without building every role in-house, and businesses that want a dedicated professional matched to the way they work."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12">
        <p className="font-serif text-3xl leading-snug text-navy lg:col-span-5">
          Beyond Numbers. Beyond Borders.
        </p>
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted lg:col-span-7">
          <p>
            The practice is founder-led, with an international service focus.
            Clients may be anywhere. Coordination follows their reporting
            framework, currencies, time zones, and systems.
          </p>
          <p>
            The public site describes the work. It is not a proposal, and it
            does not stand in for an engagement agreement. Biographies,
            qualifications, registration details, and office information are
            published only when FRSHX has supplied them for that purpose.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-paper" aria-labelledby="emphasis-title">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <h2 id="emphasis-title" className="font-serif text-3xl text-navy">
            What the work rests on
          </h2>
          <ol className="mt-8">
            {points.map((point, index) => (
              <li
                key={point.title}
                className="grid gap-3 border-t border-line py-6 md:grid-cols-12"
              >
                <p className="font-serif text-2xl text-teal md:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-xl text-navy md:col-span-4">
                  {point.title}
                </h3>
                <p className="text-base leading-relaxed text-muted md:col-span-6">
                  {point.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingBand
        title="If the fit is unclear, start with a conversation."
        text="We would rather tell you the work sits outside our scope than stretch a description to cover it."
        href="/contact"
        label="Discuss Your Requirements"
      />
    </>
  );
}

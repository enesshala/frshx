import type { Metadata } from "next";
import { connection } from "next/server";
import Link from "next/link";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageIntro } from "@/components/page-intro";
import { isIntakeConfigured } from "@/lib/intake";
import { financeRoles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dedicated Talent & Recruitment",
  description:
    "Request a dedicated finance professional through FRSHX, or support to recruit someone for direct employment.",
};

const steps = [
  {
    title: "Understand the role",
    text: "We clarify responsibilities, systems, working arrangements, and what a good match looks like.",
  },
  {
    title: "Identify and assess",
    text: "Suitable candidates are identified and assessed against the role you described.",
  },
  {
    title: "Present shortlisted profiles",
    text: "You see relevant experience, technical skills, systems, languages, and availability. A profile is shared only with the candidate’s consent.",
  },
  {
    title: "Interviews and selection",
    text: "FRSHX coordinates client interviews and the selection conversation.",
  },
  {
    title: "Engagement and onboarding",
    text: "The engagement model is agreed, then onboarding is supported so the person can start cleanly.",
  },
];

async function TalentEnquiry() {
  await connection();

  return (
    <EnquiryForm
      idPrefix="talent"
      mode="fixed"
      defaultIntent="talent"
      intakeReady={isIntakeConfigured()}
    />
  );
}

export default function DedicatedTalentPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dedicated talent & recruitment"
        title="Dedicated finance professionals, matched to your business."
        lede="This is a staffing and recruitment service, equal to FRSHX finance services. You can ask for a dedicated professional who works with your team, or for help hiring someone into your own organisation."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24" aria-labelledby="models-title">
        <h2 id="models-title" className="font-serif text-3xl text-navy sm:text-4xl">
          Two engagement models
        </h2>
        <div className="mt-10 grid border-y border-line md:grid-cols-2">
          <article className="py-8 md:pr-10">
            <h3 className="font-serif text-2xl text-navy">
              Dedicated professionals through FRSHX
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Request a dedicated full-time professional who integrates with
              your team. Responsibilities, supervision, working arrangements,
              and continuity support are agreed in the proposal.
            </p>
          </article>
          <article className="border-t border-line py-8 md:border-t-0 md:border-l md:pl-10">
            <h3 className="font-serif text-2xl text-navy">
              Direct-hire recruitment
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              FRSHX supports you in identifying and selecting a professional
              for direct employment within your own organisation.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-paper" aria-labelledby="roles-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="roles-title" className="font-serif text-3xl text-navy">
              Roles we focus on first
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The initial focus is qualified finance work. If the role sits
              outside this list, say so in the enquiry and we will tell you
              whether we can help.
            </p>
          </div>
          <ul className="lg:col-span-8">
            {financeRoles.map((role, index) => (
              <li
                key={role}
                className="grid grid-cols-12 items-baseline gap-4 border-t border-line py-4"
              >
                <span className="col-span-2 font-serif text-lg text-teal sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 font-serif text-xl text-navy sm:col-span-11">
                  {role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24" aria-labelledby="process-title">
        <h2 id="process-title" className="font-serif text-3xl text-navy sm:text-4xl">
          How a search proceeds
        </h2>
        <ol className="mt-8">
          {steps.map((step, index) => (
            <li key={step.title} className="grid gap-3 border-t border-line py-6 md:grid-cols-12">
              <p className="font-serif text-2xl text-teal md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-10">
                <h3 className="font-serif text-xl text-navy">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
          This website does not display candidates, and it does not suggest
          that a live talent pool is already waiting. Profiles are prepared
          for a specific request and shared only with the right consent.
        </p>
      </section>

      <section className="border-t border-line bg-paper" aria-labelledby="talent-form-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="talent-form-title" className="font-serif text-3xl text-navy">
              Request a finance professional
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Tell us the role, the engagement model, and how the person would
              work with your team. If you are a candidate, use the separate
              application route.
            </p>
            <Link
              href="/join"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-teal underline underline-offset-4"
            >
              Join our talent network
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Suspense fallback={<p className="text-sm text-muted">Loading the form.</p>}>
              <TalentEnquiry />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}

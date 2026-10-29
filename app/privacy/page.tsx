import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ControllerDetails } from "@/components/controller-details";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FRSHX collects, uses, stores, and shares personal data from enquiries and candidate applications.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy Policy"
        title="How FRSHX handles personal data."
        lede="This policy explains what this website collects, why it is used, how long it is kept, and the rights you can exercise. It was last updated on 29 October 2026."
      />
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 text-base leading-relaxed sm:px-8 md:py-24">
        <Suspense
          fallback={
            <p className="text-muted">Loading controller details.</p>
          }
        >
          <ControllerDetails />
        </Suspense>

        <section aria-labelledby="collect-title">
          <h2 id="collect-title" className="font-serif text-2xl text-navy">
            What we collect
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>If you enquire about finance services, we ask for:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your name and work email.</li>
              <li>Your company and country.</li>
              <li>The services you are interested in and what you need.</li>
              <li>Your confirmation that we may use those details to reply.</li>
            </ul>
            <p>If you enquire about a dedicated professional, we also ask for:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>The role, engagement model, and working arrangement.</li>
              <li>Required systems and experience.</li>
              <li>Preferred time-zone overlap and expected start date.</li>
              <li>Any further requirements you choose to add.</li>
            </ul>
            <p>If you apply to the talent network, we ask for:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your name, email, country, and time zone.</li>
              <li>Your specialisation, experience, systems, languages, and availability.</li>
              <li>Your CV, as a PDF, DOC, or DOCX file of 5 MB or less.</li>
              <li>Your consent to store and review the application.</li>
            </ul>
            <p>
              Do not include information about health, religion, ethnicity, or
              other special-category data unless you decide it is necessary for
              the application. If you include it, it is used only to consider
              that application.
            </p>
            <p>
              This website does not use analytics or advertising cookies. It
              does not ask you to create an account. The hosting provider may
              keep short technical logs, such as an IP address and browser
              type, to operate and protect the site. Those logs are not used to
              build a marketing profile.
            </p>
          </div>
        </section>

        <section aria-labelledby="why-title">
          <h2 id="why-title" className="font-serif text-2xl text-navy">
            Why we use it, and the legal basis
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              Business enquiries are used to understand the request and to
              reply. The legal basis is that the enquiry is a step you asked
              for before a possible contract, and our legitimate interest in
              responding to a business request.
            </p>
            <p>
              Candidate applications are used to consider you for finance
              opportunities and, only with your further consent, to share a
              profile with a client. The application form is not that further
              consent. The legal basis for reviewing an application is your
              consent, and the steps needed before a possible engagement. You
              can withdraw consent at any time. Withdrawal does not affect
              processing that has already happened lawfully.
            </p>
            <p>
              We do not sell personal data. We do not use enquiry or
              application details for unrelated marketing. We do not make a
              decision about you by automated means that produces a legal
              effect or a similarly significant effect.
            </p>
          </div>
        </section>

        <section aria-labelledby="storage-title">
          <h2 id="storage-title" className="font-serif text-2xl text-navy">
            When a submission is received
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              A form is stored only when private intake storage has been
              configured. Until then, the form says that enquiry handling is
              pending configuration. Sending it in that state does not deliver
              your details, and nothing is stored. The site does not show a
              success message unless the submission has been received.
            </p>
            <p>
              Received files are stored outside the public website, under a
              random identifier. CVs and candidate details are not published
              and are not linked from any page. A profile is shared with a
              client only with the candidate’s consent, and only for a role
              that fits the application.
            </p>
            <p>
              People who work with FRSHX may see a submission when they need it
              to reply or to assess an application. A professional adviser or
              authority may receive information when the law requires it. The
              hosting and storage providers process it only so the site and the
              private intake can function.
            </p>
          </div>
        </section>

        <section aria-labelledby="transfer-title">
          <h2 id="transfer-title" className="font-serif text-2xl text-navy">
            International transfers
          </h2>
          <p className="mt-4 text-muted">
            FRSHX is based in Kosovo and works with businesses in other
            countries. Personal data may be handled in Kosovo. Where data about
            a person in the European Economic Area or the United Kingdom needs
            a transfer safeguard, FRSHX will put that safeguard in place before
            the transfer, or will not make the transfer.
          </p>
        </section>

        <section aria-labelledby="retention-title">
          <h2 id="retention-title" className="font-serif text-2xl text-navy">
            How long we keep it
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              An enquiry that does not become an engagement is kept for up to
              12 months after the last message, then deleted, unless a longer
              period is needed to establish, exercise, or defend a legal claim.
            </p>
            <p>
              Records of an agreed engagement are kept for the life of that
              engagement and afterwards for as long as accounting, tax, or
              other law requires those records to be kept.
            </p>
            <p>
              An application is kept for up to 12 months after a decision,
              unless you agree to remain in the talent network for longer. If
              you withdraw that agreement, the profile is not used for new
              introductions. It is deleted sooner when you ask, unless the law
              requires it to be kept.
            </p>
          </div>
        </section>

        <section aria-labelledby="rights-title">
          <h2 id="rights-title" className="font-serif text-2xl text-navy">
            Your rights
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>You can ask to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>See the personal data we hold about you.</li>
              <li>Correct data that is inaccurate.</li>
              <li>Delete data, or restrict how it is used.</li>
              <li>Receive data you provided, in a portable form, where the law gives that right.</li>
              <li>Object to processing based on legitimate interests.</li>
              <li>Withdraw consent, where consent is the basis.</li>
            </ul>
            <p>
              You can also complain to Kosovo’s Information and Privacy Agency.
              If you are in the European Economic Area or the United Kingdom,
              you can complain to the supervisory authority where you live or
              work.
            </p>
            <p>
              Use the published privacy contact when one is shown above. Until
              a direct contact is published, send a privacy request only
              through the contact form, and only after that form confirms the
              submission was received. Say that the message is a privacy
              request. Do not send identity documents unless FRSHX asks for
              them to confirm it is you.
            </p>
          </div>
        </section>

        <section aria-labelledby="children-title">
          <h2 id="children-title" className="font-serif text-2xl text-navy">
            Children
          </h2>
          <p className="mt-4 text-muted">
            This website is for businesses and adult finance professionals. It
            is not directed at anyone under 18, and we do not knowingly collect
            their personal data.
          </p>
        </section>

        <section aria-labelledby="changes-title">
          <h2 id="changes-title" className="font-serif text-2xl text-navy">
            Changes
          </h2>
          <p className="mt-4 text-muted">
            If this policy changes, the updated version will be published on
            this page with a new date. A change does not reduce a right you
            already have under the law.
          </p>
        </section>

        <p className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <Link href="/terms" className="font-medium text-teal underline underline-offset-4">
            Terms and Conditions
          </Link>
          <Link href="/contact" className="font-medium text-teal underline underline-offset-4">
            Contact
          </Link>
        </p>
      </div>
    </>
  );
}

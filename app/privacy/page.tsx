import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How FRSHX handles enquiry and application details, including candidate CVs.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="How enquiry and application details are handled."
        lede="This notice explains what the forms on this website are for. It does not invent a legal registration, a data-protection officer, or a contact address that FRSHX has not published."
      />
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 text-base leading-relaxed sm:px-8 md:py-24">
        <section aria-labelledby="what-title">
          <h2 id="what-title" className="font-serif text-2xl text-navy">
            What you can send
          </h2>
          <p className="mt-4 text-muted">
            Business enquiries ask for your name, work email, company, country,
            and the details of the finance service or role you need. Candidate
            applications ask for contact details, professional background,
            systems, languages, availability, and a CV.
          </p>
        </section>
        <section aria-labelledby="why-title">
          <h2 id="why-title" className="font-serif text-2xl text-navy">
            Why it is requested
          </h2>
          <p className="mt-4 text-muted">
            Client details are used to respond to an enquiry about finance
            services, dedicated staffing, or direct-hire recruitment. Candidate
            details, including the CV, are used to consider an application to
            the talent network. A candidate profile is shared with a client
            only with that candidate’s consent.
          </p>
        </section>
        <section aria-labelledby="storage-title">
          <h2 id="storage-title" className="font-serif text-2xl text-navy">
            When a submission is actually received
          </h2>
          <p className="mt-4 text-muted">
            Submissions are stored only when private intake storage has been
            configured. Until then, the form tells you that enquiry handling is
            pending configuration. Sending the form in that state does not
            deliver your details, and nothing is stored. The site never shows
            a success message unless the submission has been received.
          </p>
          <p className="mt-4 text-muted">
            Stored files sit outside the public website. CVs and personal
            candidate information are not published and are not linked from any
            page. Uploads are limited to PDF, DOC, and DOCX files of 5 MB or
            less.
          </p>
        </section>
        <section aria-labelledby="retention-title">
          <h2 id="retention-title" className="font-serif text-2xl text-navy">
            Retention and requests
          </h2>
          <p className="mt-4 text-muted">
            When storage is configured, information is kept so FRSHX can
            respond to the enquiry or consider the application. A dedicated
            privacy contact will be published when one has been supplied. Until
            then, do not send personal information except through these forms,
            and only after the form confirms that the submission was received.
          </p>
        </section>
        <p>
          <Link
            href="/contact"
            className="font-medium text-teal underline underline-offset-4"
          >
            Back to contact
          </Link>
        </p>
      </div>
    </>
  );
}

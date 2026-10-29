import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ControllerDetails } from "@/components/controller-details";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms for using the FRSHX website, sending an enquiry, and applying to the talent network.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms and Conditions"
        title="Terms for using this website."
        lede="These terms govern use of the FRSHX website, enquiries, and applications. They are not an engagement for finance services, staffing, or recruitment. They were last updated on 29 October 2026."
      />
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 text-base leading-relaxed sm:px-8 md:py-24">
        <section aria-labelledby="about-title">
          <h2 id="about-title" className="font-serif text-2xl text-navy">
            About these terms
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              This website is operated by FRSHX, a founder-led business based
              in Kosovo. By using the site, sending an enquiry, or submitting
              an application, you agree to these terms and to the{" "}
              <Link href="/privacy" className="text-teal underline underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              If you use the site for a company, you confirm that you are
              allowed to send that enquiry for the company.
            </p>
          </div>
        </section>

        <Suspense
          fallback={<p className="text-muted">Loading business details.</p>}
        >
          <ControllerDetails />
        </Suspense>

        <section aria-labelledby="not-engagement-title">
          <h2 id="not-engagement-title" className="font-serif text-2xl text-navy">
            The website is not an engagement
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              The pages describe the kinds of work FRSHX can discuss. They are
              not an offer, a quote, or a contract. No finance, staffing, or
              recruitment engagement exists until FRSHX and the client have
              agreed it in writing.
            </p>
            <p>
              Nothing on the site is legal, tax, audit, investment, or
              accounting advice for your situation. Local statutory tax, audit,
              and other regulated work require appropriately authorised
              professionals. FRSHX does not promise coverage of every
              jurisdiction, and does not guarantee a result or a turnaround
              time.
            </p>
            <p>
              Descriptions of automation and AI-assisted tools explain how work
              may be supported under professional review. They are not a
              promise that a particular tool will be used, and they do not mean
              that software approves payments, submits filings, or makes
              material accounting decisions.
            </p>
          </div>
        </section>

        <section aria-labelledby="services-title">
          <h2 id="services-title" className="font-serif text-2xl text-navy">
            Services and dedicated talent
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              Accounting, financial planning and analysis, and CFO or
              Controller support are separate offerings. One does not include
              the others unless a proposal says so. Scope depends on the
              business, entities, volumes, systems, and reporting.
            </p>
            <p>
              Dedicated staffing and direct-hire recruitment are also separate.
              A request does not mean a professional is available. This site
              does not display candidates and does not represent that a talent
              pool is waiting. Profiles are shared only with the candidate’s
              consent.
            </p>
            <p>
              People introduced through FRSHX are professionals. These terms do
              not treat them as goods for sale. Employment or engagement terms
              are those in the written agreement, not the wording of this
              website.
            </p>
          </div>
        </section>

        <section aria-labelledby="fees-title">
          <h2 id="fees-title" className="font-serif text-2xl text-navy">
            Fees
          </h2>
          <p className="mt-4 text-muted">
            This website does not publish prices, rates, or salaries. Any fee
            is set out in a proposal and reflects the agreed scope and
            deliverables. You do not owe a fee merely by reading the site or
            sending an enquiry.
          </p>
        </section>

        <section aria-labelledby="submissions-title">
          <h2 id="submissions-title" className="font-serif text-2xl text-navy">
            Enquiries and applications
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              You agree that the information you send is accurate to the best
              of your knowledge and that you have the right to send it,
              including a CV. You will not upload a file that contains malware
              or that you are not allowed to share.
            </p>
            <p>
              A submission is received only when the form confirms that it has
              been received. If enquiry storage is not configured, the
              submission is not delivered and nothing is stored. Do not rely on
              an unconfirmed form as notice to FRSHX.
            </p>
            <p>
              An application is a request to be considered. It is not an offer
              of work, employment, or placement, and FRSHX does not have to
              introduce you to a client.
            </p>
          </div>
        </section>

        <section aria-labelledby="use-title">
          <h2 id="use-title" className="font-serif text-2xl text-navy">
            Acceptable use
          </h2>
          <p className="mt-4 text-muted">
            Do not misuse the site. That includes attempting to break its
            security, sending automated or deceptive submissions, scraping it
            in a way that impairs it, or using it for an unlawful purpose. We
            may refuse or delete a submission that breaches these terms.
          </p>
        </section>

        <section aria-labelledby="ip-title">
          <h2 id="ip-title" className="font-serif text-2xl text-navy">
            Intellectual property
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              The text, design, and arrangement of this website belong to
              FRSHX or its licensors. You may read it and share a link to it.
              You may not copy it for a competing site or remove its meaning.
            </p>
            <p>
              Optio Digital designed and developed this website. Optio Digital
              is not a party to a finance, staffing, or recruitment engagement
              with FRSHX unless a separate agreement says so.
            </p>
          </div>
        </section>

        <section aria-labelledby="liability-title">
          <h2 id="liability-title" className="font-serif text-2xl text-navy">
            Liability
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              The website is provided for general information. FRSHX takes care
              to keep it accurate, but it may change, and it may not describe
              every limitation that would appear in a proposal.
            </p>
            <p>
              To the extent the law allows, FRSHX is not liable for a loss that
              comes from relying on the website alone, from a submission that
              was not received, or from an interruption of the site. Nothing in
              these terms excludes or limits liability that the law does not
              allow to be excluded or limited, including liability for fraud or
              for death or personal injury caused by negligence.
            </p>
            <p>
              Liability for an agreed engagement is governed by that
              engagement’s written terms, not by this website.
            </p>
          </div>
        </section>

        <section aria-labelledby="law-title">
          <h2 id="law-title" className="font-serif text-2xl text-navy">
            Law and changes
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              These terms are governed by the laws of Kosovo. The courts of
              Kosovo have jurisdiction, without limiting any right you have to
              bring a claim in a court that the law requires to remain
              available to you.
            </p>
            <p>
              FRSHX may update these terms by publishing a new version on this
              page. The date at the top of the page will change. The version
              in force when you send a submission applies to that submission.
              An engagement keeps the terms agreed in its own contract.
            </p>
          </div>
        </section>

        <p className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <Link href="/privacy" className="font-medium text-teal underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/contact" className="font-medium text-teal underline underline-offset-4">
            Contact
          </Link>
        </p>
      </div>
    </>
  );
}

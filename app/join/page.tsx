import type { Metadata } from "next";
import { connection } from "next/server";
import Link from "next/link";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageIntro } from "@/components/page-intro";
import { isIntakeConfigured } from "@/lib/intake";

export const metadata: Metadata = {
  title: "Join Our Talent Network",
  description:
    "Apply to the FRSHX talent network as a finance professional. Applications are not published.",
};

async function CandidateEnquiry() {
  await connection();

  return (
    <EnquiryForm
      idPrefix="join"
      mode="fixed"
      defaultIntent="candidate"
      intakeReady={isIntakeConfigured()}
    />
  );
}

export default function JoinPage() {
  return (
    <>
      <PageIntro
        eyebrow="Talent network"
        title="Join our talent network."
        lede="This route is for finance professionals. It is separate from client enquiries. An application is reviewed privately and is not displayed on this website."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12">
        <div className="max-w-md lg:col-span-4">
          <h2 className="font-serif text-3xl text-navy">Your application</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Tell us your specialisation, the systems you know, the languages
              you work in, and when you are available. Add a CV as a PDF, DOC,
              or DOCX file.
            </p>
            <p>
              Sharing a profile with a client happens only with your consent.
              Submitting this form does not place you with a client.
            </p>
            <p>
              If you are hiring, use{" "}
              <Link href="/dedicated-talent" className="text-teal underline underline-offset-4">
                Dedicated Talent
              </Link>{" "}
              instead.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Suspense fallback={<p className="text-sm text-muted">Loading the form.</p>}>
            <CandidateEnquiry />
          </Suspense>
        </div>
      </section>
    </>
  );
}

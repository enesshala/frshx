import type { Metadata } from "next";
import { connection } from "next/server";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageIntro } from "@/components/page-intro";
import { isEnquiryIntent, type EnquiryIntent } from "@/lib/enquiry-state";
import { isIntakeConfigured } from "@/lib/intake";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell FRSHX whether you need finance services, a dedicated professional, or to join the talent network.",
};

async function ContactEnquiry({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string | string[] }>;
}) {
  await connection();
  const params = await searchParams;
  const raw = Array.isArray(params.intent) ? params.intent[0] : params.intent;
  const intent: EnquiryIntent =
    raw && isEnquiryIntent(raw) ? raw : "services";

  return (
    <EnquiryForm
      key={intent}
      idPrefix="contact"
      mode="switch"
      defaultIntent={intent}
      intakeReady={isIntakeConfigured()}
    />
  );
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string | string[] }>;
}) {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell us what you need."
        lede="Choose the route that matches your enquiry. The form changes with that choice. Business requests and candidate applications are handled separately."
      />
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24" aria-labelledby="contact-form-title">
        <h2 id="contact-form-title" className="font-serif text-3xl text-navy">
          Your enquiry
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          No email address or telephone number is published here. Use this form
          once enquiry handling is configured. Until then, a submission is not
          received.
        </p>
        <div className="mt-10">
          <Suspense fallback={<p className="text-sm text-muted">Loading the form.</p>}>
            <ContactEnquiry searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

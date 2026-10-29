"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { submitEnquiry } from "@/app/actions/enquiry";
import {
  initialEnquiryState,
  type EnquiryIntent,
} from "@/lib/enquiry-state";
import { financeRoles, serviceOptions } from "@/lib/site";

const inputClass =
  "w-full min-h-12 border border-line bg-paper px-3 text-base text-ink";

const intents: { value: EnquiryIntent; label: string; detail: string }[] = [
  {
    value: "services",
    label: "I need finance services.",
    detail: "Accounting, financial planning, or CFO / Controller support.",
  },
  {
    value: "talent",
    label: "I need a dedicated professional.",
    detail: "Dedicated staffing through FRSHX, or direct-hire recruitment.",
  },
  {
    value: "candidate",
    label: "I want to join the talent network.",
    detail: "For finance professionals applying to FRSHX.",
  },
];

function fieldDescribedBy(id: string, error?: string, hint?: boolean) {
  return [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ") || undefined;
}

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: (props: {
    id: string;
    "aria-invalid"?: true;
    "aria-describedby"?: string;
  }) => React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm leading-relaxed text-muted">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">
        {children({
          id,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": fieldDescribedBy(id, error, Boolean(hint)),
        })}
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Group({
  id,
  legend,
  error,
  children,
}: {
  id: string;
  legend: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset aria-describedby={error ? `${id}-error` : undefined}>
      <legend className="text-sm font-medium text-ink">{legend}</legend>
      <div id={id} tabIndex={-1} className="mt-3 grid gap-2 outline-none">
        {children}
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export function EnquiryForm({
  idPrefix,
  mode,
  defaultIntent,
  intakeReady,
}: {
  idPrefix: string;
  mode: "fixed" | "switch";
  defaultIntent: EnquiryIntent;
  intakeReady: boolean;
}) {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialEnquiryState,
  );
  const [intent, setIntent] = useState<EnquiryIntent>(defaultIntent);
  const [arrangement, setArrangement] = useState(state.values.arrangement ?? "");
  const [specialisation, setSpecialisation] = useState(
    state.values.specialisation ?? "",
  );
  const startedAtRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const id = (name: string) => `${idPrefix}-${name}`;
  const matchesIntent = !state.values.intent || state.values.intent === intent;
  const showErrors = state.status === "invalid" && matchesIntent;
  const errorFor = (name: string) => (showErrors ? state.errors[name] : undefined);
  const selectedServices = new Set(
    (state.values.services ?? "").split(",").filter(Boolean),
  );

  useEffect(() => {
    const node = startedAtRef.current;
    if (!node) return;
    const previous = state.values.startedAt;
    if (previous && Number(previous) > 0) {
      node.value = previous;
      return;
    }
    if (!node.value) node.value = String(Date.now());
  }, [state.attempt, state.values.startedAt]);

  useEffect(() => {
    if (state.status === "idle" || state.status === "received") {
      if (state.status === "received") summaryRef.current?.focus();
      return;
    }
    if (!matchesIntent) return;
    summaryRef.current?.focus();
  }, [matchesIntent, state.attempt, state.status]);

  const submitLabel =
    intent === "services"
      ? "Request a Proposal"
      : intent === "talent"
        ? "Request a Finance Professional"
        : "Submit application";

  if (state.status === "received") {
    return (
      <div
        ref={summaryRef}
        tabIndex={-1}
        role="status"
        className="scroll-mt-28 border border-teal bg-paper px-5 py-6 outline-none"
      >
        <h2 className="font-serif text-2xl text-navy">Submission received</h2>
        <p className="mt-3 text-base leading-relaxed text-ink">{state.message}</p>
      </div>
    );
  }

  const summaryTitle =
    state.status === "invalid" ? "There is a problem" : "Submission not received";

  return (
    <div className="scroll-mt-28">
      {!intakeReady ? (
        <div className="mb-8 border border-line border-l-4 border-l-teal bg-paper px-4 py-4">
          <p className="text-sm font-medium text-navy">
            Enquiry handling is pending configuration
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            This form is not delivering submissions yet. If you send it, your
            details will not be received and nothing will be stored.
          </p>
        </div>
      ) : null}
      <form
        key={state.attempt}
        action={formAction}
        noValidate
        className="relative grid gap-6"
      >
        <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />
        <div className="h-0 overflow-hidden" aria-hidden="true">
          <label htmlFor={id("company-website")}>Company website</label>
          <input
            id={id("company-website")}
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        {state.status !== "idle" && matchesIntent ? (
          <div
            ref={summaryRef}
            tabIndex={-1}
            role="alert"
            className="scroll-mt-28 border border-danger bg-paper px-4 py-4 outline-none"
          >
            <h2 className="text-base font-medium text-danger">{summaryTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink">{state.message}</p>
            {showErrors && state.summary.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {state.summary.map((item) => (
                  <li key={item.id}>
                    <a className="text-danger underline underline-offset-2" href={`#${id(item.id)}`}>
                      {item.message}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        {mode === "switch" ? (
          <Group id={id("intent")} legend="What do you need?" error={errorFor("intent")}>
            {intents.map((option) => (
              <label
                key={option.value}
                className="flex min-h-12 cursor-pointer items-start gap-3 border border-line bg-paper px-3 py-3"
              >
                <input
                  className="mt-1"
                  type="radio"
                  name="intent"
                  value={option.value}
                  checked={intent === option.value}
                  onChange={() => setIntent(option.value)}
                />
                <span>
                  <span className="block text-sm font-medium text-ink">{option.label}</span>
                  <span className="mt-1 block text-sm text-muted">{option.detail}</span>
                </span>
              </label>
            ))}
          </Group>
        ) : (
          <input type="hidden" name="intent" value={intent} />
        )}

        <Field id={id("name")} label="Name" error={errorFor("name")}>
          {(props) => (
            <input
              {...props}
              className={inputClass}
              name="name"
              type="text"
              autoComplete="name"
              defaultValue={state.values.name ?? ""}
            />
          )}
        </Field>

        <Field
          id={id("email")}
          label={intent === "candidate" ? "Email" : "Work email"}
          error={errorFor("email")}
          hint={intent === "candidate" ? undefined : "Use your business email address."}
        >
          {(props) => (
            <input
              {...props}
              className={inputClass}
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={state.values.email ?? ""}
            />
          )}
        </Field>

        {intent !== "candidate" ? (
          <Field id={id("company")} label="Company" error={errorFor("company")}>
            {(props) => (
              <input
                {...props}
                className={inputClass}
                name="company"
                type="text"
                autoComplete="organization"
                defaultValue={state.values.company ?? ""}
              />
            )}
          </Field>
        ) : null}

        <Field
          id={id("country")}
          label="Country"
          error={errorFor("country")}
          hint={
            intent === "candidate"
              ? undefined
              : "The country where the business operates."
          }
        >
          {(props) => (
            <input
              {...props}
              className={inputClass}
              name="country"
              type="text"
              autoComplete="country-name"
              defaultValue={state.values.country ?? ""}
            />
          )}
        </Field>

        {intent === "services" ? (
          <>
            <Group id={id("services")} legend="Services of interest" error={errorFor("services")}>
              {serviceOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-paper px-3"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={option.value}
                    defaultChecked={selectedServices.has(option.value)}
                  />
                  <span className="text-sm text-ink">{option.label}</span>
                </label>
              ))}
            </Group>
            <Field
              id={id("requirements")}
              label="What do you need?"
              error={errorFor("requirements")}
              hint="Entities, systems, reporting, and the outcome you want from the engagement."
            >
              {(props) => (
                <textarea
                  {...props}
                  className={`${inputClass} min-h-32 py-3`}
                  name="requirements"
                  rows={5}
                  defaultValue={state.values.requirements ?? ""}
                />
              )}
            </Field>
          </>
        ) : null}

        {intent === "talent" ? (
          <>
            <Field
              id={id("role")}
              label="Role required"
              error={errorFor("role")}
              hint="For example, Financial Controller, FP&A Analyst, or Accounts Payable Specialist."
            >
              {(props) => (
                <input
                  {...props}
                  className={inputClass}
                  name="role"
                  type="text"
                  defaultValue={state.values.role ?? ""}
                />
              )}
            </Field>
            <Group id={id("engagement")} legend="Engagement model" error={errorFor("engagement")}>
              <label className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-paper px-3">
                <input
                  type="radio"
                  name="engagement"
                  value="dedicated"
                  defaultChecked={state.values.engagement === "dedicated"}
                />
                <span className="text-sm text-ink">Dedicated staffing through FRSHX</span>
              </label>
              <label className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-paper px-3">
                <input
                  type="radio"
                  name="engagement"
                  value="direct-hire"
                  defaultChecked={state.values.engagement === "direct-hire"}
                />
                <span className="text-sm text-ink">Direct-hire recruitment</span>
              </label>
            </Group>
            <Group id={id("arrangement")} legend="Working arrangement" error={errorFor("arrangement")}>
              <label className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-paper px-3">
                <input
                  type="radio"
                  name="arrangement"
                  value="full-time"
                  checked={arrangement === "full-time"}
                  onChange={() => setArrangement("full-time")}
                />
                <span className="text-sm text-ink">Full-time</span>
              </label>
              <label className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-paper px-3">
                <input
                  type="radio"
                  name="arrangement"
                  value="other"
                  checked={arrangement === "other"}
                  onChange={() => setArrangement("other")}
                />
                <span className="text-sm text-ink">Another arrangement</span>
              </label>
            </Group>
            {arrangement === "other" ? (
              <Field
                id={id("arrangementDetail")}
                label="Preferred arrangement"
                error={errorFor("arrangementDetail")}
              >
                {(props) => (
                  <input
                    {...props}
                    className={inputClass}
                    name="arrangementDetail"
                    type="text"
                    defaultValue={state.values.arrangementDetail ?? ""}
                  />
                )}
              </Field>
            ) : null}
            <Field
              id={id("systems")}
              label="Required systems and experience"
              error={errorFor("systems")}
            >
              {(props) => (
                <textarea
                  {...props}
                  className={`${inputClass} min-h-28 py-3`}
                  name="systems"
                  rows={4}
                  defaultValue={state.values.systems ?? ""}
                />
              )}
            </Field>
            <Field
              id={id("timezone")}
              label="Preferred time-zone overlap"
              error={errorFor("timezone")}
              hint="For example, CET or UTC-5."
            >
              {(props) => (
                <input
                  {...props}
                  className={inputClass}
                  name="timezone"
                  type="text"
                  defaultValue={state.values.timezone ?? ""}
                />
              )}
            </Field>
            <Field id={id("start")} label="Expected start date" error={errorFor("start")}>
              {(props) => (
                <input
                  {...props}
                  className={inputClass}
                  name="start"
                  type="text"
                  defaultValue={state.values.start ?? ""}
                />
              )}
            </Field>
            <Field
              id={id("additional")}
              label="Additional requirements"
              error={errorFor("additional")}
              hint="Optional."
            >
              {(props) => (
                <textarea
                  {...props}
                  className={`${inputClass} min-h-28 py-3`}
                  name="additional"
                  rows={4}
                  defaultValue={state.values.additional ?? ""}
                />
              )}
            </Field>
          </>
        ) : null}

        {intent === "candidate" ? (
          <>
            <Field
              id={id("timezone")}
              label="Time zone"
              error={errorFor("timezone")}
              hint="For example, CET or UTC-5."
            >
              {(props) => (
                <input
                  {...props}
                  className={inputClass}
                  name="timezone"
                  type="text"
                  defaultValue={state.values.timezone ?? ""}
                />
              )}
            </Field>
            <Field id={id("specialisation")} label="Professional specialisation" error={errorFor("specialisation")}>
              {(props) => (
                <select
                  {...props}
                  className={inputClass}
                  name="specialisation"
                  value={specialisation}
                  onChange={(event) => setSpecialisation(event.target.value)}
                >
                  <option value="">Select a specialisation</option>
                  {financeRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              )}
            </Field>
            {specialisation === "Other" ? (
              <Field
                id={id("specialisationDetail")}
                label="Describe your specialisation"
                error={errorFor("specialisationDetail")}
              >
                {(props) => (
                  <input
                    {...props}
                    className={inputClass}
                    name="specialisationDetail"
                    type="text"
                    defaultValue={state.values.specialisationDetail ?? ""}
                  />
                )}
              </Field>
            ) : null}
            <Field id={id("experience")} label="Relevant experience" error={errorFor("experience")}>
              {(props) => (
                <textarea
                  {...props}
                  className={`${inputClass} min-h-32 py-3`}
                  name="experience"
                  rows={5}
                  defaultValue={state.values.experience ?? ""}
                />
              )}
            </Field>
            <Field
              id={id("systems")}
              label="Accounting and ERP systems"
              error={errorFor("systems")}
            >
              {(props) => (
                <textarea
                  {...props}
                  className={`${inputClass} min-h-28 py-3`}
                  name="systems"
                  rows={4}
                  defaultValue={state.values.systems ?? ""}
                />
              )}
            </Field>
            <Field id={id("languages")} label="Languages" error={errorFor("languages")}>
              {(props) => (
                <input
                  {...props}
                  className={inputClass}
                  name="languages"
                  type="text"
                  defaultValue={state.values.languages ?? ""}
                />
              )}
            </Field>
            <Field id={id("availability")} label="Availability" error={errorFor("availability")}>
              {(props) => (
                <input
                  {...props}
                  className={inputClass}
                  name="availability"
                  type="text"
                  defaultValue={state.values.availability ?? ""}
                />
              )}
            </Field>
            <Field
              id={id("cv")}
              label="CV"
              error={errorFor("cv")}
              hint="PDF, DOC, or DOCX. Maximum 5 MB. If you need to send the form again, choose the file once more."
            >
              {(props) => (
                <input
                  {...props}
                  className={`${inputClass} py-2 file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-navy`}
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />
              )}
            </Field>
          </>
        ) : null}

        <fieldset>
          <legend className="text-sm font-medium text-ink">Consent</legend>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Read the{" "}
            <Link href="/privacy" className="text-teal underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-teal underline underline-offset-4">
              Terms and Conditions
            </Link>
            .
          </p>
          <label className="mt-3 flex min-h-12 cursor-pointer items-start gap-3 border border-line bg-paper px-3 py-3">
            <input
              id={id("consent")}
              className="mt-1"
              type="checkbox"
              name="consent"
              value="yes"
              defaultChecked={state.values.consent === "yes"}
              aria-invalid={errorFor("consent") ? true : undefined}
              aria-describedby={errorFor("consent") ? id("consent-error") : undefined}
            />
            <span className="text-sm leading-relaxed text-ink">
              {intent === "candidate"
                ? "I agree that FRSHX may store and review this application, including my CV, to consider me for finance opportunities. I understand that my CV will not be published, and that a profile will be shared with a client only with my consent."
                : "I agree that FRSHX may use these details to respond to this enquiry."}
            </span>
          </label>
          {errorFor("consent") ? (
            <p id={id("consent-error")} className="mt-2 text-sm text-danger">
              {errorFor("consent")}
            </p>
          ) : null}
        </fieldset>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-12 cursor-pointer items-center justify-center bg-navy px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : submitLabel}
        </button>
      </form>
    </div>
  );
}

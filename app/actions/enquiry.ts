"use server";

import { randomUUID } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  initialEnquiryState,
  isEnquiryIntent,
  type EnquiryIntent,
  type EnquiryState,
  type FieldError,
} from "@/lib/enquiry-state";
import { resolveIntakeDir } from "@/lib/intake";
import { financeRoles } from "@/lib/site";

const textKeys = [
  "intent",
  "name",
  "email",
  "company",
  "country",
  "requirements",
  "role",
  "engagement",
  "arrangement",
  "arrangementDetail",
  "systems",
  "timezone",
  "start",
  "additional",
  "specialisation",
  "specialisationDetail",
  "experience",
  "languages",
  "availability",
  "consent",
  "startedAt",
] as const;

const serviceValues = new Set(["accounting", "fpa", "cfo"]);
const roles = new Set<string>(financeRoles);

function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function collectValues(formData: FormData) {
  const values: Record<string, string> = {};
  for (const key of textKeys) values[key] = readText(formData, key);
  values.services = formData
    .getAll("services")
    .filter((value): value is string => typeof value === "string")
    .filter((value) => serviceValues.has(value))
    .join(",");
  if (values.consent !== "yes") values.consent = "";
  return values;
}

function result(
  prev: EnquiryState,
  status: EnquiryState["status"],
  message: string,
  values: Record<string, string>,
  errors: Record<string, string> = {},
  summary: FieldError[] = [],
): EnquiryState {
  return {
    status,
    attempt: prev.attempt + 1,
    message,
    errors,
    summary,
    values,
  };
}

function addError(
  errors: Record<string, string>,
  summary: FieldError[],
  id: string,
  message: string,
) {
  if (errors[id]) return;
  errors[id] = message;
  summary.push({ id, message });
}

function tooLong(value: string, max: number) {
  return value.length > max;
}

function checkLength(
  errors: Record<string, string>,
  summary: FieldError[],
  id: string,
  value: string,
  max: number,
) {
  if (tooLong(value, max)) {
    addError(errors, summary, id, `Use ${max} characters or fewer.`);
  }
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isUpload(value: FormDataEntryValue | null): value is File {
  return typeof File !== "undefined" && value instanceof File && value.size > 0;
}

function extensionOf(name: string) {
  const base = name.replaceAll("\\", "/").split("/").pop() ?? "";
  const match = base.toLowerCase().match(/(\.[a-z0-9]+)$/);
  return match?.[1] ?? "";
}

function matchesType(ext: string, bytes: Uint8Array) {
  if (bytes.length < 4) return false;
  if (ext === ".pdf") {
    return bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46;
  }
  if (ext === ".docx") return bytes[0] === 0x50 && bytes[1] === 0x4b;
  if (ext === ".doc") {
    return bytes[0] === 0xd0 && bytes[1] === 0xcf && bytes[2] === 0x11 && bytes[3] === 0xe0;
  }
  return false;
}

function safeOriginalName(name: string) {
  const base = name.replaceAll("\\", "/").split("/").pop() ?? "cv";
  const cleaned = base.replace(/[^\w.\- ()]/g, "").slice(0, 180);
  return cleaned || "cv";
}

function validate(intent: EnquiryIntent, values: Record<string, string>, file: File | null) {
  const errors: Record<string, string> = {};
  const summary: FieldError[] = [];
  const requireText = (id: string, message: string) => {
    if (!values[id]) addError(errors, summary, id, message);
  };

  requireText("name", "Enter your name.");
  checkLength(errors, summary, "name", values.name, 120);

  if (!values.email) addError(errors, summary, "email", "Enter an email address.");
  else if (!isEmail(values.email)) {
    addError(errors, summary, "email", "Enter an email address in the format name@company.com.");
  }
  checkLength(errors, summary, "email", values.email, 200);

  if (intent === "candidate") {
    requireText("country", "Enter your country.");
    checkLength(errors, summary, "country", values.country, 80);
    requireText("timezone", "Enter your time zone.");
    checkLength(errors, summary, "timezone", values.timezone, 80);
    if (!values.specialisation || (values.specialisation !== "Other" && !roles.has(values.specialisation))) {
      addError(errors, summary, "specialisation", "Select your professional specialisation.");
    }
    if (values.specialisation === "Other") {
      requireText("specialisationDetail", "Describe your specialisation.");
      checkLength(errors, summary, "specialisationDetail", values.specialisationDetail, 160);
    }
    requireText("experience", "Describe your relevant experience.");
    checkLength(errors, summary, "experience", values.experience, 4000);
    requireText("systems", "List the accounting and ERP systems you use.");
    checkLength(errors, summary, "systems", values.systems, 2000);
    requireText("languages", "List the languages you work in.");
    checkLength(errors, summary, "languages", values.languages, 400);
    requireText("availability", "Describe your availability.");
    checkLength(errors, summary, "availability", values.availability, 400);
    if (!file) {
      addError(errors, summary, "cv", "Add a CV as a PDF, DOC, or DOCX file under 5 MB.");
    } else if (file.size > 5 * 1024 * 1024) {
      addError(errors, summary, "cv", "The CV must be 5 MB or smaller.");
    } else if (![".pdf", ".doc", ".docx"].includes(extensionOf(file.name))) {
      addError(errors, summary, "cv", "Add a CV as a PDF, DOC, or DOCX file.");
    }
  } else {
    requireText("company", "Enter your company name.");
    checkLength(errors, summary, "company", values.company, 160);
    requireText("country", "Enter the country where the business operates.");
    checkLength(errors, summary, "country", values.country, 80);
  }

  if (intent === "services") {
    if (!values.services) {
      addError(errors, summary, "services", "Select at least one service.");
    }
    requireText("requirements", "Describe what you need from the engagement.");
    checkLength(errors, summary, "requirements", values.requirements, 4000);
  }

  if (intent === "talent") {
    requireText("role", "Enter the role you need.");
    checkLength(errors, summary, "role", values.role, 160);
    if (values.engagement !== "dedicated" && values.engagement !== "direct-hire") {
      addError(errors, summary, "engagement", "Choose dedicated staffing or direct-hire recruitment.");
    }
    if (values.arrangement !== "full-time" && values.arrangement !== "other") {
      addError(errors, summary, "arrangement", "Choose full-time or another arrangement.");
    }
    if (values.arrangement === "other") {
      requireText("arrangementDetail", "Describe the arrangement you prefer.");
      checkLength(errors, summary, "arrangementDetail", values.arrangementDetail, 400);
    }
    requireText("systems", "Describe the systems and experience you need.");
    checkLength(errors, summary, "systems", values.systems, 2000);
    requireText("timezone", "Enter the time-zone overlap you need.");
    checkLength(errors, summary, "timezone", values.timezone, 80);
    requireText("start", "Enter the expected start date.");
    checkLength(errors, summary, "start", values.start, 80);
    checkLength(errors, summary, "additional", values.additional, 4000);
  }

  if (values.consent !== "yes") {
    addError(
      errors,
      summary,
      "consent",
      intent === "candidate"
        ? "Confirm that FRSHX may process this application."
        : "Confirm that FRSHX may use these details to respond.",
    );
  }

  return { errors, summary };
}

export async function submitEnquiry(
  prev: EnquiryState = initialEnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const values = collectValues(formData);
  const notReceived = "This submission was not received.";

  if (readText(formData, "company_website")) {
    return result(prev, "rejected", notReceived, values);
  }

  if (!isEnquiryIntent(values.intent)) {
    return result(prev, "invalid", "Choose what you need.", values, {
      intent: "Choose what you need.",
    }, [{ id: "intent", message: "Choose what you need." }]);
  }

  const upload = formData.get("cv");
  const file = isUpload(upload) ? upload : null;
  const { errors, summary } = validate(values.intent, values, file);
  let cvBytes: Uint8Array | null = null;

  if (file && !errors.cv) {
    cvBytes = new Uint8Array(await file.arrayBuffer());
    if (!matchesType(extensionOf(file.name), cvBytes)) {
      errors.cv = "Add a CV as a PDF, DOC, or DOCX file under 5 MB.";
      summary.push({ id: "cv", message: errors.cv });
      cvBytes = null;
    }
  }

  if (summary.length > 0) {
    return result(prev, "invalid", "Check the fields below and try again.", values, errors, summary);
  }

  const started = Number(values.startedAt);
  if (Number.isFinite(started) && started > 0) {
    const elapsed = Date.now() - started;
    if (elapsed >= 0 && elapsed < 1000) {
      return result(prev, "rejected", notReceived, values);
    }
  }

  const intake = resolveIntakeDir();
  if (!intake.ok) {
    return result(
      prev,
      "unconfigured",
      "Enquiry handling is not configured yet. This submission was not received, and nothing was stored.",
      values,
    );
  }

  const id = randomUUID();
  const dest = path.join(intake.dir, id);
  const relative = path.relative(intake.dir, dest);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    return result(prev, "rejected", notReceived, values);
  }

  const storedFile = file
    ? {
        storedAs: `cv${extensionOf(file.name)}`,
        originalName: safeOriginalName(file.name),
        size: file.size,
        type: file.type,
      }
    : null;

  const payload = {
    id,
    receivedAt: new Date().toISOString(),
    intent: values.intent,
    fields: {
      name: values.name,
      email: values.email,
      company: values.company,
      country: values.country,
      services: values.services ? values.services.split(",") : [],
      requirements: values.requirements,
      role: values.role,
      engagement: values.engagement,
      arrangement: values.arrangement,
      arrangementDetail: values.arrangementDetail,
      systems: values.systems,
      timezone: values.timezone,
      start: values.start,
      additional: values.additional,
      specialisation: values.specialisation,
      specialisationDetail: values.specialisationDetail,
      experience: values.experience,
      languages: values.languages,
      availability: values.availability,
      consent: values.consent === "yes",
    },
    cv: storedFile,
  };

  try {
    await mkdir(dest, { recursive: true });
    await writeFile(path.join(dest, "enquiry.json"), JSON.stringify(payload, null, 2), {
      flag: "wx",
    });
    if (cvBytes && storedFile) {
      await writeFile(path.join(dest, storedFile.storedAs), cvBytes, { flag: "wx" });
    }
  } catch {
    await rm(dest, { recursive: true, force: true }).catch(() => undefined);
    return result(
      prev,
      "rejected",
      "This submission was not received. Nothing was stored.",
      values,
    );
  }

  const message =
    values.intent === "candidate"
      ? "Your application has been received. Your CV is stored privately and is not published."
      : "Your enquiry has been received.";

  return result(prev, "received", message, {});
}

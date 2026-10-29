export const enquiryIntents = ["services", "talent", "candidate"] as const;

export type EnquiryIntent = (typeof enquiryIntents)[number];

export type EnquiryStatus =
  | "idle"
  | "invalid"
  | "unconfigured"
  | "rejected"
  | "received";

export type FieldError = {
  id: string;
  message: string;
};

export type EnquiryState = {
  status: EnquiryStatus;
  attempt: number;
  message: string;
  errors: Record<string, string>;
  summary: FieldError[];
  values: Record<string, string>;
};

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  attempt: 0,
  message: "",
  errors: {},
  summary: [],
  values: {},
};

export function isEnquiryIntent(value: string): value is EnquiryIntent {
  return enquiryIntents.includes(value as EnquiryIntent);
}

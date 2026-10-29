export const primaryNav = [
  { href: "/finance-services", label: "Finance Services" },
  { href: "/dedicated-talent", label: "Dedicated Talent" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/about", label: "About" },
] as const;

export const financeRoles = [
  "Accountant",
  "Senior Accountant",
  "Accounts Payable Specialist",
  "Accounts Receivable Specialist",
  "Financial Reporting Specialist",
  "FP&A Analyst",
  "Finance Manager",
  "Financial Controller",
  "CFO",
] as const;

export const serviceOptions = [
  { value: "accounting", label: "Accounting" },
  {
    value: "fpa",
    label: "CFO Guide — financial planning and analysis",
  },
  { value: "cfo", label: "CFO / Controller" },
] as const;

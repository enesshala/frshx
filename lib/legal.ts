export type LegalIdentity = {
  name?: string;
  address?: string;
  email?: string;
};

function clean(value: string | undefined) {
  const text = value?.replace(/\s+/g, " ").trim();
  return text ? text : undefined;
}

function cleanEmail(value: string | undefined) {
  const email = value?.trim();
  if (!email || email.length > 200) return undefined;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return undefined;
  return email;
}

export function getLegalIdentity(): LegalIdentity {
  return {
    name: clean(process.env.FRSHX_LEGAL_NAME),
    address: clean(process.env.FRSHX_LEGAL_ADDRESS),
    email: cleanEmail(process.env.FRSHX_PRIVACY_EMAIL),
  };
}

import { ArrowRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";

const tones = {
  navy: "bg-navy text-white hover:bg-navy-deep",
  teal: "bg-teal text-white hover:bg-teal-deep",
  ghost: "border border-white/40 bg-transparent text-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  tone = "navy",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 px-5 text-sm font-medium transition-colors duration-200 ${tones[tone]} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} weight="regular" />
    </Link>
  );
}

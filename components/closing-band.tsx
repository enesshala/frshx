import { ButtonLink } from "@/components/button-link";

export function ClosingBand({
  title,
  text,
  href,
  label,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-navy text-white" aria-labelledby="closing-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 md:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2
            id="closing-title"
            className="font-serif text-3xl leading-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={href} tone="teal" className="bg-teal">
            {label}
          </ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} tone="ghost">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <p className="text-xs font-medium tracking-[0.18em] text-teal uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.12] text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {lede}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </header>
  );
}

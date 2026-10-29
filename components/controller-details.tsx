import { connection } from "next/server";
import { getLegalIdentity } from "@/lib/legal";

export async function ControllerDetails() {
  await connection();
  const identity = getLegalIdentity();
  const published = identity.name || identity.address || identity.email;

  return (
    <section aria-labelledby="controller-title">
      <h2 id="controller-title" className="font-serif text-2xl text-navy">
        Who is responsible
      </h2>
      <div className="mt-4 space-y-4 text-muted">
        <p>
          FRSHX is a founder-led business based in Kosovo. For personal data
          collected through this website, FRSHX is the controller.
        </p>
        <p>
          Kosovo’s Law No. 06/L-082 on Protection of Personal Data applies to
          that processing. Where FRSHX offers services to people in the
          European Economic Area or the United Kingdom, the GDPR or UK GDPR
          also applies to that processing.
        </p>
        {published ? (
          <dl className="space-y-3 border-y border-line py-4 text-ink">
            {identity.name ? (
              <div>
                <dt className="text-sm font-medium text-navy">Legal name</dt>
                <dd className="mt-1">{identity.name}</dd>
              </div>
            ) : null}
            {identity.address ? (
              <div>
                <dt className="text-sm font-medium text-navy">Address</dt>
                <dd className="mt-1">{identity.address}</dd>
              </div>
            ) : null}
            {identity.email ? (
              <div>
                <dt className="text-sm font-medium text-navy">Privacy contact</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${identity.email}`}
                    className="text-teal underline underline-offset-4"
                  >
                    {identity.email}
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        ) : (
          <p>
            The registered legal name, postal address, and a direct privacy
            contact are published in this section only after FRSHX has supplied
            them. They are not guessed here.
          </p>
        )}
      </div>
    </section>
  );
}

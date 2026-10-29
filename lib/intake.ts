import path from "node:path";

export type IntakeResolution =
  | { ok: true; dir: string }
  | { ok: false; reason: "missing" | "relative" | "unsafe" };

function isInside(parent: string, child: string) {
  const relative = path.relative(parent, child);
  return (
    relative === "" ||
    (!relative.startsWith("..") && !path.isAbsolute(relative))
  );
}

export function resolveIntakeDir(): IntakeResolution {
  const raw = process.env.FRSHX_INTAKE_DIR?.trim();
  if (!raw) return { ok: false, reason: "missing" };
  if (!path.isAbsolute(raw)) return { ok: false, reason: "relative" };

  const dir = path.resolve(/*turbopackIgnore: true*/ raw);
  const root = path.resolve(/*turbopackIgnore: true*/ process.cwd());
  const blocked = ["public", ".next", "out"].map((segment) =>
    path.resolve(/*turbopackIgnore: true*/ root, segment),
  );

  if (blocked.some((parent) => isInside(parent, dir))) {
    return { ok: false, reason: "unsafe" };
  }

  return { ok: true, dir };
}

export function isIntakeConfigured() {
  return resolveIntakeDir().ok;
}

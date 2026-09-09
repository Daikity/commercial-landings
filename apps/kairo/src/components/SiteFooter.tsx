import { site } from '@/data/content';

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] py-14">
      <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-3xl tracking-tight">{site.name}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{site.address}</p>
          <p className="text-sm text-[var(--color-text-muted)]">{site.hours}</p>
        </div>
        <div className="text-sm">
          <a href={`mailto:${site.email}`} className="block underline-offset-2 hover:underline">
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="mt-1 block text-[var(--color-text-muted)]"
          >
            {site.phone}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[var(--shell-max)] px-4 text-xs text-[var(--color-text-muted)] sm:px-6">
        All brands and business concepts shown here are fictional and created for portfolio
        demonstration purposes.
      </p>
    </footer>
  );
}

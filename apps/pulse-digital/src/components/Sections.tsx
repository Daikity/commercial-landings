'use client';

import { BookingForm } from '@/components/BookingForm';
import { ProcessScrub } from '@/components/ProcessScrub';
import { Reveal } from '@/components/Reveal';
import { capabilities, clients, services, site, team, work } from '@/data/content';
import { assetPath } from '@/lib/asset-path';
import { MagneticButton } from '@/components/MagneticButton';

export function Sections() {
  return (
    <>
      <section id="work" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto mb-8 max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Selected work
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-6xl">
              Signal made visible
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.06}>
          <div className="flex gap-4 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:px-6 [&::-webkit-scrollbar]:hidden">
            {work.map((item) => (
              <figure
                key={item.title}
                className="group min-w-[78vw] shrink-0 border border-[var(--color-line)] sm:min-w-[46vw] lg:min-w-[34vw]"
              >
                <div className="overflow-hidden">
                  <img
                    src={assetPath(item.image)}
                    alt={item.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 md:motion-safe:group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-3 border-t border-[var(--color-line)] p-4">
                  <span className="font-[family-name:var(--font-display)] text-lg font-medium">{item.title}</span>
                  <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {item.type}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-2 px-4 font-[family-name:var(--font-body)] text-[0.6rem] uppercase tracking-[0.25em] text-[var(--color-text-muted)] sm:px-6 md:hidden">
            Swipe
          </p>
        </Reveal>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Services
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              What we ship
            </h2>
          </Reveal>
          <div className="grid gap-0 sm:grid-cols-2">
            {services.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="border-t border-[var(--color-line)] py-7 sm:border-r sm:px-6 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:pr-0 sm:[&:nth-child(odd)]:pl-0">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-sm font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessScrub />

      <section id="capabilities" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Capabilities
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Stack we run
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((cap, i) => (
              <Reveal key={cap} delay={i * 0.03}>
                <span className="border border-[var(--color-line)] px-3 py-2 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                  {cap}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-elevated)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Clients
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              In orbit with
            </h2>
          </Reveal>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((name, i) => (
              <Reveal key={name} delay={i * 0.04}>
                <li className="border border-[var(--color-line)] px-3 py-4 text-center font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                  {name}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto max-w-[var(--shell-max)] px-4 sm:px-6">
          <Reveal>
            <p className="mb-2 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Team
            </p>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Operators
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
            {team.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <figure>
                  <div className="overflow-hidden border border-[var(--color-line)]">
                    <img
                      src={assetPath(person.image)}
                      alt={person.alt}
                      className="aspect-[3/4] w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-[family-name:var(--font-display)] text-xl font-medium">{person.name}</p>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      {person.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-[var(--color-line)] py-[var(--section-space)]">
        <div className="mx-auto grid max-w-[var(--shell-max)] items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-2">
          {/* Левая колонка тянется по высоте формы; картинка заполняет остаток */}
          <div className="flex min-h-0 flex-col">
            <Reveal>
              <p className="mb-2 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Contact
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
                {site.cta}
              </h2>
              <p className="mb-6 max-w-md font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--color-text-muted)]">
                Tell us the project type — we reply with fit and timing within two business days.
              </p>
              <MagneticButton
                href="#contact-form"
                className="mb-6 inline-block border border-[var(--color-accent)] px-5 py-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
              >
                Jump to form
              </MagneticButton>
              <div className="mb-6 space-y-1 font-[family-name:var(--font-body)] text-xs text-[var(--color-text-muted)]">
                <p>{site.address}</p>
                <p>{site.hours}</p>
                <a href={`mailto:${site.email}`} className="block text-[var(--color-accent)]">
                  {site.email}
                </a>
              </div>
            </Reveal>
            <Reveal
              delay={0.1}
              className="relative mt-auto hidden min-h-[14rem] flex-1 overflow-hidden border border-[var(--color-line)] lg:block"
            >
              <img
                src={assetPath('/images/contact.png')}
                alt="Digital agency lounge with cyan light"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1} className="overflow-hidden border border-[var(--color-line)] lg:hidden">
              <img
                src={assetPath('/images/contact.png')}
                alt="Digital agency lounge with cyan light"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
          <Reveal delay={0.12} className="h-full">
            <div
              id="contact-form"
              className="scroll-mt-28 h-full border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 sm:p-8"
            >
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] py-12">
        <div className="mx-auto flex max-w-[var(--shell-max)] flex-col gap-4 px-4 sm:px-6 md:flex-row md:justify-between">
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
            {site.fullName}
          </p>
          <p className="max-w-md font-[family-name:var(--font-body)] text-[0.6rem] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            All brands and business concepts shown here are fictional and created for portfolio demonstration
            purposes.
          </p>
        </div>
      </footer>
    </>
  );
}

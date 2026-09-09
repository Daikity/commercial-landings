import { Reveal } from '@/components/Reveal';
import { OrderForm } from '@/components/OrderForm';
import {
  benefits,
  categories,
  products,
  reviews,
  site,
} from '@/data/content';
import { assetPath } from '@/lib/asset-path';

export function Sections() {
  return (
    <>
      <section id="assortment" className="scroll-mt-24 px-4 py-[var(--section-space)] sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Assortment
            </h2>
            <p className="mb-10 max-w-xl text-[var(--color-text-muted)]">
              From daily bread to weekend viennoiserie — baked in small batches.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <img
                src={assetPath('/images/assortment-bread.png')}
                alt="Assortment of artisan bread loaves on a bakery counter"
                className="aspect-[4/3] w-full rounded-[var(--radius-md)] object-cover"
                loading="lazy"
              />
            </Reveal>
            <ul className="grid gap-5 sm:grid-cols-2">
              {categories.map((item, i) => (
                <Reveal key={item.title} delay={0.05 * i}>
                  <li className="border-t border-[var(--color-line)] pt-4">
                    <h3 className="mb-1 font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="popular" className="scroll-mt-24 bg-[var(--color-bg-elevated)] px-4 py-[var(--section-space)] sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Popular today
            </h2>
            <p className="mb-10 max-w-xl text-[var(--color-text-muted)]">
              Favorites that leave the case first.
            </p>
          </Reveal>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.name} delay={0.06 * i}>
                <li className="group">
                  <div className="mb-4 overflow-hidden rounded-[var(--radius-md)]">
                    <img
                      src={assetPath(product.image)}
                      alt={product.alt}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-medium">{product.name}</h3>
                    <span className="text-sm text-[var(--color-text-muted)]">{product.price}</span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-[var(--section-space)] sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Why Maison Crumb
            </h2>
          </Reveal>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <li>
                  <h3 className="mb-2 font-medium">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="story" className="scroll-mt-24 bg-[var(--color-bg-elevated)] px-4 py-[var(--section-space)] sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <Reveal>
            <img
              src={assetPath('/images/story-interior.png')}
              alt="Warm bakery interior with bread shelves and wooden counters"
              className="aspect-[4/3] w-full rounded-[var(--radius-md)] object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Our story
            </h2>
            <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
              Maison Crumb began as a two-person oven on Grove Street. We still mill flavor the slow
              way: long fermentation, European butter, and flour from mills we trust.
            </p>
            <p className="leading-relaxed text-[var(--color-text-muted)]">
              Come for the croissant. Stay for the loaf you take home warm.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-[var(--section-space)] sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Neighbors say
            </h2>
          </Reveal>
          <ul className="grid gap-8 md:grid-cols-3">
            {reviews.map((item, i) => (
              <Reveal key={item.author} delay={0.05 * i}>
                <li className="border-t border-[var(--color-line)] pt-5">
                  <blockquote className="mb-4 text-[var(--color-text)] leading-relaxed">
                    “{item.quote}”
                  </blockquote>
                  <cite className="not-italic text-sm text-[var(--color-text-muted)]">{item.author}</cite>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="delivery" className="scroll-mt-24 bg-[var(--color-bg-elevated)] px-4 py-[var(--section-space)] sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Pickup & delivery
            </h2>
            <p className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
              Order online for same-day pickup after 3pm, or neighborhood delivery within 3 miles
              Tuesday through Saturday.
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">{site.hours}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <img
              src={assetPath('/images/delivery-bag.png')}
              alt="Kraft bakery bag and wrapped loaf ready for delivery"
              className="aspect-[4/3] w-full rounded-[var(--radius-md)] object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section
        id="order"
        className="scroll-mt-24 px-4 py-[var(--section-space)] sm:px-6"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent, rgba(154,78,43,0.06)), url(${assetPath('/images/texture-flour.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-xl rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)]/95 p-6 shadow-sm sm:p-8">
          <Reveal>
            <h2 className="mb-2 font-[family-name:var(--font-display)] text-3xl tracking-tight">
              Order now
            </h2>
            <p className="mb-6 text-sm text-[var(--color-text-muted)]">
              Tell us what you need — we will confirm by email or phone.
            </p>
            <OrderForm />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-[var(--color-line)] px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="mb-2 font-[family-name:var(--font-display)] text-2xl">{site.name}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{site.address}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{site.hours}</p>
          </div>
          <div className="text-sm">
            <a
              className="block text-[var(--color-text)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              href={`tel:${site.phone.replace(/\s/g, '')}`}
            >
              {site.phone}
            </a>
            <a
              className="mt-1 block text-[var(--color-text)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-[var(--color-text-muted)]">
          All brands and business concepts shown here are fictional and created for portfolio
          demonstration purposes.
        </p>
      </section>
    </>
  );
}

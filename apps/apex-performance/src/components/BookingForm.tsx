'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormValues } from '@/lib/booking-schema';
import { site } from '@/data/content';

type Status = 'idle' | 'loading' | 'success' | 'error';

const GOALS = [
  { value: 'map' as const, label: 'ECU map' },
  { value: 'dyno' as const, label: 'Dyno' },
  { value: 'track' as const, label: 'Track' },
];

const field =
  'w-full border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]';

export function BookingForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { goal: 'dyno', name: '', email: '', vehicle: '', note: '' },
  });

  const goal = watch('goal');

  const onSubmit = handleSubmit(async () => {
    setStatus('loading');
    try {
      await new Promise((r) => setTimeout(r, 800));
      if (Math.random() < 0.08) throw new Error('mock');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <p className="border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
        Demo form — submissions are mocked locally and are not sent to a server.
      </p>

      <div>
        <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-wider">
          Name
        </label>
        <input id="name" autoComplete="name" className={field} {...register('name')} />
        {errors.name ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-wider">
          Email
        </label>
        <input id="email" type="email" autoComplete="email" className={field} {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="vehicle" className="mb-1 block text-xs uppercase tracking-wider">
          Vehicle
        </label>
        <input id="vehicle" className={field} placeholder="Make / model / year" {...register('vehicle')} />
        {errors.vehicle ? (
          <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.vehicle.message}</p>
        ) : null}
      </div>

      <fieldset>
        <legend className="mb-2 text-xs uppercase tracking-wider">Goal</legend>
        <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Goal">
          {GOALS.map((option) => {
            const selected = goal === option.value;
            return (
              <label
                key={option.value}
                className={`cursor-pointer border px-2 py-2.5 text-center text-sm uppercase tracking-wide transition-colors ${
                  selected
                    ? 'border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_20%,transparent)]'
                    : 'border-[var(--color-line)] bg-[var(--color-bg)] text-[var(--color-text-muted)]'
                }`}
              >
                <input type="radio" value={option.value} className="sr-only" {...register('goal')} />
                {option.label}
              </label>
            );
          })}
        </div>
        {errors.goal ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.goal.message}</p> : null}
      </fieldset>

      <div>
        <label htmlFor="note" className="mb-1 block text-xs uppercase tracking-wider">
          Note (optional)
        </label>
        <textarea id="note" rows={3} className={field} {...register('note')} />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[var(--color-accent)] px-4 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[var(--color-accent-hover)] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {status === 'loading' ? 'Sending…' : site.cta}
      </button>

      {status === 'success' ? (
        <p role="status" className="text-sm text-[var(--color-accent)]">
          Request received — bay confirmation by email (demo).
        </p>
      ) : null}
      {status === 'error' ? (
        <p role="alert" className="text-sm text-[var(--color-accent)]">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}

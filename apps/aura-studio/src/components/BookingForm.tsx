'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormValues } from '@/lib/booking-schema';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SERVICES = [
  { value: 'hair' as const, label: 'Hair' },
  { value: 'skin' as const, label: 'Skin' },
  { value: 'nails' as const, label: 'Nails' },
];

const field =
  'w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]';

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
    defaultValues: { service: 'hair', name: '', email: '', note: '' },
  });

  const service = watch('service');

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
      <p className="rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
        Demo form — submissions are mocked locally and are not sent to a server.
      </p>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input id="name" autoComplete="name" className={field} {...register('name')} />
        {errors.name ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input id="email" type="email" autoComplete="email" className={field} {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.email.message}</p> : null}
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium">Service</legend>
        <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Service">
          {SERVICES.map((option) => {
            const selected = service === option.value;
            return (
              <label
                key={option.value}
                className={`cursor-pointer rounded-[var(--radius-sm)] border px-2 py-2.5 text-center text-sm transition-colors ${
                  selected
                    ? 'border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_12%,white)]'
                    : 'border-[var(--color-line)] bg-[var(--color-bg-elevated)]'
                }`}
              >
                <input type="radio" value={option.value} className="sr-only" {...register('service')} />
                {option.label}
              </label>
            );
          })}
        </div>
        {errors.service ? (
          <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.service.message}</p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor="note" className="mb-1 block text-sm font-medium">
          Note (optional)
        </label>
        <textarea id="note" rows={3} className={field} {...register('note')} />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {status === 'loading' ? 'Sending…' : 'Book a visit'}
      </button>

      {status === 'success' ? (
        <p role="status" className="text-sm text-[var(--color-success)]">
          Request received — we will confirm by email (demo).
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

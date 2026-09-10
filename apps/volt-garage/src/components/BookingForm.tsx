'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormValues } from '@/lib/booking-schema';
import { site } from '@/data/content';

type Status = 'idle' | 'loading' | 'success' | 'error';

const field =
  'w-full border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-text)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]';

export function BookingForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: '', email: '', vehicle: '', note: '' },
  });

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
      <p className="border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-2 font-[family-name:var(--font-body)] text-[0.65rem] leading-relaxed text-[var(--color-text-muted)]">
        Demo form — submissions are mocked locally and are not sent to a server.
      </p>

      <div>
        <label htmlFor="name" className="mb-1 block font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.18em]">
          Name
        </label>
        <input id="name" autoComplete="name" className={field} {...register('name')} />
        {errors.name ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.18em]">
          Email
        </label>
        <input id="email" type="email" autoComplete="email" className={field} {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="vehicle" className="mb-1 block font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.18em]">
          Vehicle
        </label>
        <input id="vehicle" className={field} placeholder="Make / model / year" {...register('vehicle')} />
        {errors.vehicle ? (
          <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.vehicle.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="note" className="mb-1 block font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.18em]">
          Note (optional)
        </label>
        <textarea id="note" rows={3} className={field} {...register('note')} />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-4 py-3 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {status === 'loading' ? 'Sending…' : site.cta}
      </button>

      {status === 'success' ? (
        <p role="status" className="font-[family-name:var(--font-body)] text-xs text-[var(--color-success)]">
          Request received — bay confirmation by email (demo).
        </p>
      ) : null}
      {status === 'error' ? (
        <p role="alert" className="font-[family-name:var(--font-body)] text-xs text-[var(--color-accent)]">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}

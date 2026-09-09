'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { interests } from '@/data/content';
import { viewingSchema, type ViewingValues } from '@/lib/viewing-schema';

type Status = 'idle' | 'loading' | 'success' | 'error';

const field =
  'w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]';

export function ViewingForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ViewingValues>({
    resolver: zodResolver(viewingSchema),
    defaultValues: { name: '', email: '', interest: 'any', note: '' },
  });
  const interest = watch('interest');

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
      <p className="rounded-[var(--radius-sm)] border border-[var(--color-line)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
        Demo form — viewing requests are mocked and not sent to a server.
      </p>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input id="name" className={field} autoComplete="name" {...register('name')} />
        {errors.name ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input id="email" type="email" className={field} autoComplete="email" {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.email.message}</p> : null}
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium">Interest</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {interests.map((opt) => {
            const selected = interest === opt.value;
            return (
              <label
                key={opt.value}
                className={`cursor-pointer rounded-[var(--radius-sm)] border px-3 py-3 text-sm transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--color-accent)] ${
                  selected
                    ? 'border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_10%,white)]'
                    : 'border-[var(--color-line)] bg-[var(--color-bg-elevated)]'
                }`}
              >
                <input type="radio" value={opt.value} className="sr-only" {...register('interest')} />
                {opt.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="note" className="mb-1 block text-sm font-medium">
          Note <span className="text-[var(--color-text-muted)]">(optional)</span>
        </label>
        <textarea id="note" rows={3} className={`${field} resize-y`} {...register('note')} />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] disabled:opacity-70"
      >
        {status === 'loading' ? 'Sending…' : 'Book a viewing'}
      </button>

      {status === 'success' ? (
        <p className="text-sm text-[var(--color-success)]" role="status">
          Request received (demo) — we will pretend to confirm by email.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="text-sm text-[var(--color-accent)]" role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}

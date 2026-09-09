'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { consultSchema, type ConsultFormValues } from '@/lib/consult-schema';

type Status = 'idle' | 'loading' | 'success' | 'error';

const INTERESTS = [
  { value: 'consult' as const, label: 'Consult' },
  { value: 'facial' as const, label: 'Facial' },
  { value: 'peel' as const, label: 'Peel' },
  { value: 'laser' as const, label: 'Light' },
];

const field =
  'w-full border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2.5 text-sm outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]';

export function ConsultForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ConsultFormValues>({
    resolver: zodResolver(consultSchema),
    defaultValues: { interest: 'consult', name: '', email: '', note: '' },
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
      <p className="border border-[var(--color-line)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
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
      <fieldset>
        <legend className="mb-2 text-xs uppercase tracking-wider">Interest</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {INTERESTS.map((opt) => (
            <label
              key={opt.value}
              className={`cursor-pointer border px-2 py-2 text-center text-sm ${
                interest === opt.value
                  ? 'border-[var(--color-text)] bg-[var(--color-text)] text-[var(--color-bg)]'
                  : 'border-[var(--color-line)]'
              }`}
            >
              <input type="radio" value={opt.value} className="sr-only" {...register('interest')} />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="note" className="mb-1 block text-xs uppercase tracking-wider">
          Note
        </label>
        <textarea id="note" rows={3} className={field} {...register('note')} />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full border border-[var(--color-text)] bg-[var(--color-text)] px-4 py-3 text-sm tracking-wide text-[var(--color-bg)] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {status === 'loading' ? 'Sending…' : 'Request a consult'}
      </button>
      {status === 'success' ? (
        <p role="status" className="text-sm text-[var(--color-success)]">
          Received — we will reply by email (demo).
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

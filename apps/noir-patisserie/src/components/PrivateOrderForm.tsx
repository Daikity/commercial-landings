'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { privateOrderSchema, type PrivateOrderValues } from '@/lib/order-schema';

type Status = 'idle' | 'loading' | 'success' | 'error';

const fieldClass =
  'w-full border border-[var(--color-line)] bg-transparent px-3 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)]/60 focus-visible:border-[var(--color-accent)]';

export function PrivateOrderForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PrivateOrderValues>({
    resolver: zodResolver(privateOrderSchema),
    defaultValues: { name: '', email: '', occasion: '', message: '' },
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
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <p className="border border-[var(--color-line)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
        Demo form — inquiries are mocked and not sent to a server.
      </p>

      <div>
        <label htmlFor="name" className="mb-2 block text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Name
        </label>
        <input id="name" className={fieldClass} autoComplete="name" {...register('name')} />
        {errors.name ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Email
        </label>
        <input id="email" type="email" className={fieldClass} autoComplete="email" {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="occasion" className="mb-2 block text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Occasion
        </label>
        <input id="occasion" className={fieldClass} placeholder="Anniversary, tasting, private dinner…" {...register('occasion')} />
        {errors.occasion ? (
          <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.occasion.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Details
        </label>
        <textarea id="message" rows={4} className={`${fieldClass} resize-y`} {...register('message')} />
        {errors.message ? (
          <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.message.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-3 text-xs uppercase tracking-[0.22em] text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
      >
        {status === 'loading' ? 'Sending…' : 'Request private order'}
      </button>

      {status === 'success' ? (
        <p className="text-sm text-[var(--color-success)]" role="status">
          Thank you — your demo inquiry was received.
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

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { briefTypes } from '@/data/content';
import { briefSchema, type BriefValues } from '@/lib/brief-schema';

type Status = 'idle' | 'loading' | 'success' | 'error';

const field =
  'w-full border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-3 text-sm outline-none focus-visible:border-[var(--color-accent)] focus-visible:ring-1 focus-visible:ring-[var(--color-accent)]';

export function BriefForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<BriefValues>({
    resolver: zodResolver(briefSchema),
    defaultValues: { name: '', email: '', type: 'house', note: '' },
  });
  const type = watch('type');

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
        Demo form — briefs are mocked and not sent to a server.
      </p>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-[10px] uppercase tracking-[0.2em]">
          Name
        </label>
        <input id="name" className={field} autoComplete="name" {...register('name')} />
        {errors.name ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-[10px] uppercase tracking-[0.2em]">
          Email
        </label>
        <input id="email" type="email" className={field} autoComplete="email" {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.email.message}</p> : null}
      </div>

      <fieldset>
        <legend className="mb-2 text-[10px] uppercase tracking-[0.2em]">Project type</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {briefTypes.map((opt) => {
            const selected = type === opt.value;
            return (
              <label
                key={opt.value}
                className={`cursor-pointer border px-3 py-3 text-sm focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--color-accent)] ${
                  selected
                    ? 'border-[var(--color-text)] bg-[var(--color-text)] text-[var(--color-bg)]'
                    : 'border-[var(--color-line)] bg-[var(--color-bg-elevated)]'
                }`}
              >
                <input type="radio" value={opt.value} className="sr-only" {...register('type')} />
                {opt.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="note" className="mb-1.5 block text-[10px] uppercase tracking-[0.2em]">
          Site / brief note
        </label>
        <textarea id="note" rows={4} className={`${field} resize-y`} {...register('note')} />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3.5 text-xs uppercase tracking-[0.18em] text-[var(--color-bg)] hover:bg-transparent hover:text-[var(--color-text)] disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Brief the studio'}
      </button>

      {status === 'success' ? (
        <p className="text-sm text-[var(--color-success)]" role="status">
          Received (demo) — we will pretend to reply with next steps.
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

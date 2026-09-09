'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema, type OrderFormValues } from '@/lib/order-schema';

type Status = 'idle' | 'loading' | 'success' | 'error';

const ORDER_TYPES = [
  { value: 'pickup' as const, label: 'Pickup', hint: 'Same-day after 3pm' },
  { value: 'delivery' as const, label: 'Delivery', hint: 'Within 3 miles' },
];

export function OrderForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: { orderType: 'pickup', name: '', contact: '', message: '' },
  });

  const orderType = watch('orderType');

  const onSubmit = handleSubmit(async () => {
    setStatus('loading');
    try {
      // Demo mock submit — backend не подключён
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
        <input
          id="name"
          autoComplete="name"
          className="w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          {...register('name')}
        />
        {errors.name ? <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="contact" className="mb-1 block text-sm font-medium">
          Email or phone
        </label>
        <input
          id="contact"
          autoComplete="email"
          className="w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          {...register('contact')}
        />
        {errors.contact ? (
          <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.contact.message}</p>
        ) : null}
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium">Order type</legend>
        <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Order type">
          {ORDER_TYPES.map((option) => {
            const selected = orderType === option.value;
            return (
              <label
                key={option.value}
                className={`relative cursor-pointer rounded-[var(--radius-sm)] border px-3 py-3 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--color-accent)] ${
                  selected
                    ? 'border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_10%,white)]'
                    : 'border-[var(--color-line)] bg-[var(--color-bg-elevated)] hover:border-[var(--color-text)]/30'
                }`}
              >
                <input
                  type="radio"
                  value={option.value}
                  className="sr-only"
                  {...register('orderType')}
                />
                <span className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                      selected
                        ? 'border-[var(--color-accent)]'
                        : 'border-[var(--color-line)]'
                    }`}
                    aria-hidden
                  >
                    <span
                      className={`h-2 w-2 rounded-full bg-[var(--color-accent)] transition-opacity ${
                        selected ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-[var(--color-text)]">
                      {option.label}
                    </span>
                    <span className="block text-xs text-[var(--color-text-muted)]">{option.hint}</span>
                  </span>
                </span>
              </label>
            );
          })}
        </div>
        {errors.orderType ? (
          <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.orderType.message}</p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Your order
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full resize-y rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          {...register('message')}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-[var(--color-accent)]">{errors.message.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {status === 'loading' ? 'Sending…' : 'Order now'}
      </button>

      {status === 'success' ? (
        <p className="text-sm text-[var(--color-success)]" role="status">
          Thanks — your demo order was received.
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

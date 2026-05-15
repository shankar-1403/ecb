import { useId } from "react";
import Button from "./ui/button";
import { Send, MessageSquare } from "lucide-react";

const fieldBase =
  "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-foreground placeholder:text-gray-400 shadow-sm outline-none transition " +
  "hover:border-gray-300 hover:bg-white focus:border-[#143973] focus:bg-white focus:ring-4 focus:ring-[#143973]/15";

function Label({ htmlFor, children, optional }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-gray-800">
      {children}
      {optional ? <span className="ml-1 font-normal text-gray-400">(optional)</span> : null}
    </label>
  );
}

/**
 * Shared contact form UI for Home and Contact pages.
 * @param {{ name: string, email: string, phone: string, message: string }} formData
 * @param {React.Dispatch<React.SetStateAction<object>>} setFormData
 * @param {(e: React.FormEvent) => void} [onSubmit]
 * @param {boolean} [requireFields] — HTML5 required on name, email, message (e.g. Contact page).
 */
export function ContactFormCard({ formData, setFormData, onSubmit, submitLabel = "Send message", requireFields = false }) {
  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-[0_24px_60px_-15px_rgba(29,47,79,0.18)] md:rounded-[1.75rem]"
    >
      <div className="h-1.5 w-full bg-linear-to-r from-[#143973] via-white to-[#143973]" aria-hidden />
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#143973]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#1D2F4F]/5 blur-3xl pointer-events-none" />

      <div className="relative border-b border-gray-100 bg-linear-to-br from-gray-50/90 to-white px-6 py-5 md:px-8 md:py-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#143973] to-[#143973] text-white shadow-lg shadow-[#143973]/25">
            <MessageSquare className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1D2F4F] md:text-xl">Send us a message</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Share your details and connect with the right support for your business.
            </p>
          </div>
        </div>
      </div>

      <div className="relative space-y-5 px-6 py-6 md:space-y-6 md:px-8 md:py-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor={`${id}-name`}>Full name *</Label>
            <input
              id={`${id}-name`}
              name="name"
              autoComplete="name"
              required={requireFields}
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={fieldBase}
              maxLength={100}
            />
          </div>
          <div>
            <Label htmlFor={`${id}-email`}>Email *</Label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required={requireFields}
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={fieldBase}
              maxLength={255}
            />
          </div>
        </div>

        <div>
          <Label htmlFor={`${id}-phone`}>Phone *</Label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={fieldBase}
            maxLength={20}
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <Label htmlFor={`${id}-message`}>Message</Label>
          </div>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={3}
            required={requireFields}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${fieldBase} min-h-[140px] resize-y leading-relaxed`}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full rounded-lg bg-[#143973] text-base font-semibold text-white shadow-lg shadow-[#143973]/30 transition hover:bg-[#143973] hover:shadow-[#143973]/40"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

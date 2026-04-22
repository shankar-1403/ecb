import { useId } from "react";
import Button from "./ui/button";
import { Send, MessageSquare } from "lucide-react";

const fieldBase =
  "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-foreground placeholder:text-gray-400 shadow-sm outline-none transition " +
  "hover:border-gray-300 hover:bg-white focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/15";

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
      <div className="h-1.5 w-full bg-linear-to-r from-amber-500 via-white to-green-600" aria-hidden />
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#1D2F4F]/5 blur-3xl pointer-events-none" />

      <div className="relative border-b border-gray-100 bg-linear-to-br from-gray-50/90 to-white px-6 py-5 md:px-8 md:py-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25">
            <MessageSquare className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1D2F4F] md:text-xl">Send us a message</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Share a few details and we&apos;ll get back to you as soon as we can.
            </p>
          </div>
        </div>
      </div>

      <div className="relative space-y-5 px-6 py-6 md:space-y-6 md:px-8 md:py-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor={`${id}-name`}>Full name</Label>
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
            <Label htmlFor={`${id}-email`}>Email</Label>
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
          <Label htmlFor={`${id}-phone`} optional>
            Phone
          </Label>
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
            <span className="text-xs text-gray-400 tabular-nums">{formData.message.length}/1000</span>
          </div>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            required={requireFields}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${fieldBase} min-h-[140px] resize-y leading-relaxed`}
            maxLength={1000}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full rounded-lg bg-amber-500 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:bg-amber-600 hover:shadow-amber-500/40"
        >
          <Send className="mr-2 h-4 w-4" />
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

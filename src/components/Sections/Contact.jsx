import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import Reveal from '../Common/Reveal';
import SectionHeading from '../Common/SectionHeading';

const CopyEmail = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Email copied' : 'Copy email address'}
      className="icon-btn h-9 w-9"
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
};

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    extra: <CopyEmail email={personalInfo.email} />,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phoneDisplay,
    href: personalInfo.phoneHref,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: personalInfo.githubUrl.replace('https://', ''),
    href: personalInfo.githubUrl,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: personalInfo.linkedinUrl.replace('https://www.', ''),
    href: personalInfo.linkedinUrl,
  },
];

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  subject: Yup.string().min(4, 'Subject must be at least 4 characters').required('Subject is required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

const Contact = () => {
  const [sent, setSent] = useState(false);

  const formik = useFormik({
    initialValues: { name: '', email: '', subject: '', message: '' },
    validationSchema,
    onSubmit: (values) => {
      const body = `${values.message}\n\n— ${values.name}\n${values.email}`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(body)}`;
      setSent(true);
      formik.resetForm();
    },
  });

  const fieldError = (id) => formik.touched[id] && formik.errors[id];

  return (
    <section id="contact" className="section bg-slate-100/70 dark:bg-slate-900/40">
      <div className="contained">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to opportunities, collaborations, and technical conversations."
        />

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact details */}
          <Reveal>
            <div className="space-y-3">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="card flex items-center gap-4 p-4 transition-shadow hover:shadow-md"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {card.label}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith('tel') || card.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="block truncate text-sm font-medium text-slate-800 transition-colors hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                        {card.value}
                      </p>
                    )}
                  </div>
                  {card.extra}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={1}>
            <form onSubmit={formik.handleSubmit} noValidate className="card p-6 sm:p-8">
              <h3 className="text-lg font-bold tracking-tight">Send a message</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                This opens your email app with the message pre-filled.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className={`field ${fieldError('name') ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30' : ''}`}
                    placeholder="Your name"
                    {...formik.getFieldProps('name')}
                  />
                  {fieldError('name') && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`field ${fieldError('email') ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30' : ''}`}
                    placeholder="you@example.com"
                    {...formik.getFieldProps('email')}
                  />
                  {fieldError('email') && (
                    <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  className={`field ${fieldError('subject') ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30' : ''}`}
                  placeholder="What's this about?"
                  {...formik.getFieldProps('subject')}
                />
                {fieldError('subject') && (
                  <p className="mt-1 text-xs text-red-500">{formik.errors.subject}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`field resize-none ${fieldError('message') ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30' : ''}`}
                  placeholder="Write your message…"
                  {...formik.getFieldProps('message')}
                />
                {fieldError('message') && (
                  <p className="mt-1 text-xs text-red-500">{formik.errors.message}</p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-primary">
                  <Send className="h-4 w-4" />
                  Send message
                </button>
                {sent && (
                  <p className="flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400">
                    <Check className="h-4 w-4" /> Opening your email app…
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
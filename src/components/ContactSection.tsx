import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

const serviceOptions = [
  "Penetration Testing", "Virtual CISO", "SOC as a Service",
  "SOC 2 Compliance", "Zero Trust Access", "ISO 27001",
  "HIPAA Compliance", "Managed Detection & Response", "Other",
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="font-mono-label text-primary">[ CONTACT ]</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Request Security Consultation
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our security architects respond within 24 hours. All consultations begin with a confidential assessment of your current security posture.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              <span>All communications are encrypted and confidential.</span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="glass-panel flex flex-col items-center rounded-sm p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="font-mono-label text-primary"
                >
                  [ TICKET_GENERATED ]
                </motion.div>
                <h3 className="mt-4 font-display text-2xl font-semibold">Consultation Requested</h3>
                <p className="mt-2 text-muted-foreground">A security architect will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel space-y-5 rounded-sm p-8 sm:p-10">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="font-mono-label mb-2 block text-muted-foreground">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="font-mono-label mb-2 block text-muted-foreground">Company</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="font-mono-label mb-2 block text-muted-foreground">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="john@acme.com"
                    />
                  </div>
                  <div>
                    <label className="font-mono-label mb-2 block text-muted-foreground">Phone</label>
                    <input
                      type="tel"
                      className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono-label mb-2 block text-muted-foreground">Service Needed</label>
                  <select
                    required
                    className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-mono-label mb-2 block text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-sm border border-border bg-secondary/50 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Describe your security needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-mono-label text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
                >
                  Request Security Consultation
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

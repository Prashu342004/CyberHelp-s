import { motion } from "framer-motion";

const logos = [
  "Accenture", "Deloitte", "JPMorgan", "Goldman Sachs", "Microsoft",
  "AWS", "Palantir", "CrowdStrike", "Palo Alto", "Mandiant",
];

const certifications = [
  "SOC 2 Type II", "ISO 27001", "HIPAA", "PCI DSS", "NIST CSF", "FedRAMP",
];

const TrustSection = () => (
  <section id="about" className="relative z-10 py-32">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono-label text-primary">[ TRUST ]</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Trusted by Industry Leaders
        </h2>
      </motion.div>

      {/* Client logos */}
      <div className="mt-16 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12"
        >
          {[...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-12 shrink-0 items-center rounded-sm border border-border/50 px-8 font-mono-label text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16"
      >
        <span className="font-mono-label text-muted-foreground">Compliance Frameworks</span>
        <div className="mt-6 flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="glass-panel rounded-sm px-5 py-2.5 font-mono-label text-accent"
            >
              {cert}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 glass-panel rounded-sm p-8 sm:p-12"
      >
        <blockquote className="max-w-2xl text-lg leading-relaxed text-foreground/90">
          "CyberHelp transformed our security posture from reactive to proactive. Their SOC team detected and neutralized threats we didn't know existed. The ROI was evident within the first quarter."
        </blockquote>
        <div className="mt-6">
          <div className="font-display font-semibold text-foreground">Sarah Chen</div>
          <div className="font-mono-label mt-1 text-muted-foreground">CISO, Series C Fintech</div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;

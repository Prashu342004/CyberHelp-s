import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stealthCurve = [0.2, 0, 0, 1] as [number, number, number, number];

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden pt-16">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:py-32 lg:py-40">
      {/* Left content — Col 1-7 */}
      <div className="relative z-10 md:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: stealthCurve }}
          className="font-mono-label mb-6 text-primary"
        >
          [ ENTERPRISE SECURITY ]
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: stealthCurve }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-display font-bold leading-[0.95] tracking-tight"
        >
          Defend the Perimeter.{" "}
          <span className="text-gradient-primary">Secure the Future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: stealthCurve }}
          className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed"
        >
          Protect your infrastructure, meet compliance standards, and stay ahead of evolving threats with enterprise-grade cybersecurity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: stealthCurve }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono-label text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Book a Security Consultation
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-mono-label text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            View Case Studies
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { value: "500+", label: "Assessments" },
            { value: "99.99%", label: "Detection Rate" },
            { value: "24/7", label: "SOC Monitoring" },
            { value: "200+", label: "Enterprise Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold tabular-nums text-foreground">{stat.value}</div>
              <div className="font-mono-label mt-1 text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right visual — Col 8-12 */}
      <div className="relative hidden md:col-span-5 md:flex md:items-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative h-[500px] w-full"
        >
          {/* Network visualization */}
          <svg viewBox="0 0 400 500" className="h-full w-full" fill="none">
            {/* Grid lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0" y1={i * 65 + 20} x2="400" y2={i * 65 + 20}
                stroke="hsl(228 80% 60% / 0.08)" strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={i * 80 + 20} y1="0" x2={i * 80 + 20} y2="500"
                stroke="hsl(228 80% 60% / 0.08)" strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
            {/* Connection lines */}
            {[
              { x1: 100, y1: 85, x2: 260, y2: 150 },
              { x1: 260, y1: 150, x2: 180, y2: 280 },
              { x1: 180, y1: 280, x2: 340, y2: 345 },
              { x1: 340, y1: 345, x2: 100, y2: 410 },
              { x1: 100, y1: 85, x2: 180, y2: 280 },
              { x1: 260, y1: 150, x2: 340, y2: 345 },
            ].map((line, i) => (
              <motion.line
                key={`c-${i}`}
                {...line}
                stroke="hsl(185 60% 65% / 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.15 }}
              />
            ))}
            {/* Nodes */}
            {[
              { cx: 100, cy: 85 },
              { cx: 260, cy: 150 },
              { cx: 180, cy: 280 },
              { cx: 340, cy: 345 },
              { cx: 100, cy: 410 },
            ].map((node, i) => (
              <motion.g key={`n-${i}`}>
                <motion.circle
                  {...node} r="20"
                  fill="hsl(228 80% 60% / 0.08)"
                  stroke="hsl(228 80% 60% / 0.3)"
                  strokeWidth="1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                />
                <motion.circle
                  {...node} r="3"
                  fill="hsl(185 60% 65%)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

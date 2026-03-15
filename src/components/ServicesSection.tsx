import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection = () => (
  <section id="services" className="relative z-10 py-32">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono-label text-primary">[ CAPABILITIES ]</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Security Services
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Comprehensive cybersecurity solutions engineered for enterprise resilience.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

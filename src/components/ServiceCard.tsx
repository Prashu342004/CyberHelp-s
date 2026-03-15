import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import type { Service } from "@/data/services";

const stealthCurve = [0.2, 0, 0, 1] as const;

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: stealthCurve }}
      className="glass-panel group relative cursor-pointer overflow-hidden rounded-sm p-6 transition-colors hover:bg-[rgba(255,255,255,0.05)] sm:p-8"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono-label text-primary">[ {service.index} ]</span>
        <motion.div
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-muted-foreground"
        >
          {expanded ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </motion.div>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {service.title}
      </h3>
      <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: stealthCurve }}
            className="overflow-hidden"
          >
            <div className="mt-6 border-t border-border pt-6">
              <span className="font-mono-label text-accent">CASE_STUDY</span>

              <div className="mt-4 space-y-4">
                <div>
                  <span className="font-mono-label text-muted-foreground">Problem</span>
                  <p className="mt-1 text-sm text-foreground/80">{service.caseStudy.problem}</p>
                </div>
                <div>
                  <span className="font-mono-label text-muted-foreground">Strategy</span>
                  <p className="mt-1 text-sm text-foreground/80">{service.caseStudy.strategy}</p>
                </div>
                <div>
                  <span className="font-mono-label text-primary">Result</span>
                  <p className="mt-1 text-sm font-medium text-foreground">{service.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!expanded && (
        <div className="mt-6 font-mono-label text-accent opacity-0 transition-opacity group-hover:opacity-100">
          View Case Study →
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;

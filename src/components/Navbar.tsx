import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Services", "Case Studies", "About", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-foreground">
          CyberHelp<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="font-mono-label text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-primary px-5 py-2 font-mono-label text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono-label text-muted-foreground"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 rounded-sm bg-primary px-5 py-2.5 text-center font-mono-label text-primary-foreground">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

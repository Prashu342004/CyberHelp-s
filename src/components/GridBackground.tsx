import { motion } from "framer-motion";

const nodes = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
}));

const GridBackground = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div className="grid-bg absolute inset-0 opacity-60" />
    {nodes.map((node) => (
      <motion.div
        key={node.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, delay: node.delay }}
        className="absolute h-1.5 w-1.5 rounded-full bg-primary"
        style={{
          left: `${node.x}%`,
          top: `${node.y}%`,
          boxShadow: "0 0 12px 4px hsl(228 80% 60% / 0.4)",
        }}
      />
    ))}
  </div>
);

export default GridBackground;

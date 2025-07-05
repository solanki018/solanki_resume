import { motion } from "framer-motion";
import { Code, MonitorCheck, Palette, Rocket, ChevronRight } from "lucide-react";

const services = [
  {
    service: "Full Stack Development",
    icon: Code,
    description:
      "From frontend interfaces to backend APIs, I build robust, scalable full-stack applications.",
  },
  {
    service: "UI/UX Design",
    icon: Palette,
    description:
      "Crafting pixel-perfect, accessible, and interactive designs that users love.",
  },
  {
    service: "Website Optimization",
    icon: MonitorCheck,
    description:
      "I optimize performance, SEO, and accessibility for high-impact digital experiences.",
  },
  {
    service: "AI-Powered Tools",
    icon: Rocket,
    description:
      "Integrating intelligent features with LLMs and ML for modern web applications.",
  },
];

const Services = () => {
  return (
    <section id="services" data-scroll-section className="py-32 bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
          }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2 xl:grid-cols-3"
        >
          {/* Section Heading */}
          <div className="md:col-span-2 xl:col-span-1">
            <h2 className="text-4xl xl:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500">
              Let's build something <br />
              <span className="clash-grotesk font-bold">exceptional.</span>
            </h2>
            <p className="mt-4 text-white/70 tracking-tight">
              Here’s what I bring to the table. From sleek UIs to smart systems, I help you craft digital experiences that stand out.
            </p>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => {
            const Icon = service.icon; // ✅ Capitalize component reference

            return (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full shadow-md">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">
                  {service.service}
                </h3>
                <p className="mt-2 text-sm text-white/70 tracking-tight">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

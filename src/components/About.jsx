import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden py-28 bg-[#121212]">
      {/* Textura de grano, igual que el Hero */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden="true">
        <filter id="grain-about">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-about)" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-[#c1272d] font-semibold text-sm">
            Conoceme
          </p>

          <h2
            className="mt-3 text-5xl lg:text-6xl uppercase text-white"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Sobre <span className="text-[#c1272d]">mí</span>
          </h2>

          <div className="w-28 h-1 bg-[#c1272d] mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/10 bg-[#181818] p-10 lg:p-14"
        >
          <p className="text-xl leading-10 text-slate-300 text-center">
            Desarrollo
            <span className="text-[#c1272d] font-semibold"> aplicaciones web modernas</span>,
            funcionales y orientadas a brindar una
            <span className="text-[#c1272d] font-semibold"> excelente experiencia de usuario</span>.
            Me motiva resolver problemas, aprender nuevas tecnologías y
            transformar ideas en
            <span className="text-[#c1272d] font-semibold"> soluciones reales</span>{" "}
            mediante código limpio, organizado y mantenible.
            <br />
            <br />
            Busco seguir creciendo como desarrollador y aportar valor en cada
            proyecto en el que participe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
  FaCode,
} from "react-icons/fa";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center bg-[#121212] pt-24 lg:pt-0"
    >
      {/* Textura de grano — sutil, no un fondo con foto */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Línea de acento sutil */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#c1272d]" aria-hidden="true" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-12">
          {/* TEXTO */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
           <span className="inline-flex items-center mb-6 text-xs font-semibold tracking-[0.3em] uppercase text-[#c1272d]">
              Portafolio 2026
           </span>

            <h1
              className="leading-[0.9] text-white uppercase"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              <span className="block text-6xl sm:text-7xl lg:text-8xl">
                Mateo
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl text-[#c1272d]">
                Montero
              </span>
            </h1>

            <h2 className="mt-10 text-2xl lg:text-3xl font-bold text-slate-200">
              Desarrollador Full Stack Junior
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400 max-w-xl">
              Construyo aplicaciones web con{" "}
              <span className="font-semibold text-slate-200">
                React, Next.js, C#, .NET, JavaScript, Prisma y SQLite
              </span>
              . Foco en código prolijo, interfaces rápidas y una buena
              experiencia de usuario.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="flex items-center gap-3 rounded-md bg-[#c1272d] px-8 py-4 font-bold text-white transition hover:bg-[#a8211f] hover:-translate-y-0.5"
              >
                <FaCode />
                Ver proyectos
              </a>

              <a
                href="/C.V-Mateo-Montero.pdf"
                className="flex items-center gap-3 rounded-md border-2 border-white/20 px-8 py-4 font-bold text-white transition hover:border-white hover:-translate-y-0.5"
              >
                <FaDownload />
                Descargar CV
              </a>
            </div>

            <div className="flex gap-6 mt-10">
              <a
                href="https://github.com/MateoMont"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Mateo Montero"
                className="text-2xl text-slate-500 transition hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mateo-montero-chaves-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Mateo Montero"
                className="text-2xl text-slate-500 transition hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* FOTO */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex flex-col items-center lg:items-end"
          >
            <div className="relative w-80 sm:w-[26rem] lg:w-[30rem] aspect-square">
              {/* Disco: surcos + texto circular, esto sí gira */}
              <motion.div
                animate={prefersReduced ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "repeating-radial-gradient(circle at center, #1c1c1c 0px, #1c1c1c 3px, #141414 4px, #141414 7px)",
                }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                  <defs>
                    <path
                      id="vinylLabelText"
                      d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text fill="#c1272d" fontSize="8" letterSpacing="3" fontWeight="700">
                    <textPath href="#vinylLabelText">
                      MATEO MONTERO • FULL STACK DEVELOPER • MATEO MONTERO • FULL STACK DEVELOPER •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Foto fija — no gira, así la cara se ve bien siempre */}
              <div className="absolute inset-[21%] rounded-full overflow-hidden border-4 border-[#0d0d0d] shadow-2xl z-10">
                <img
                  src="/mateo2.png"
                  alt="Mateo Montero"
                  fetchPriority="high"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.05]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={prefersReduced ? {} : { y: [0, 14, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-3xl"
        aria-hidden="true"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}

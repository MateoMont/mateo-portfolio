import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 bg-[#121212]"
    >
      {/* Textura de grano */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        aria-hidden="true"
      >
        <filter id="grain-about">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter="url(#grain-about)"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-8">

        {/* Encabezado */}
        <motion.div
          initial={
            prefersReduced
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[4px] text-[#c1272d] font-semibold text-sm">
            Conoceme
          </p>

          <h2
            className="mt-3 text-5xl md:text-6xl uppercase text-white"
            style={{
              fontFamily: "'Anton', sans-serif",
            }}
          >
            Sobre <span className="text-[#c1272d]">mí</span>
          </h2>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={
            prefersReduced
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="mt-14 max-w-4xl"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-slate-300">
            Soy Mateo, desarrollador.
          </p>

          <p className="mt-7 text-lg md:text-xl leading-relaxed text-slate-400">
            Me gusta aprender programando y llevar las ideas a algo que pueda
            funcionar de verdad. Cada proyecto me permite probar cosas nuevas,
            equivocarme, buscar soluciones y aprender en el proceso.
          </p>

          <p className="mt-7 text-lg md:text-xl leading-relaxed text-slate-400">
            Día a día sigo creando nuevas ideas mientras voy ganando
            experiencia y mejorando mi forma de trabajar.
          </p>

          <p className="mt-9 text-lg md:text-xl leading-relaxed text-white font-semibold">
            Busco seguir aprendiendo y hacer cada proyecto un poco mejor que
            el anterior.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
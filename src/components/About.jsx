import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 bg-[#071426]"
    >
      {/* Luces de fondo */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[220px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Conoceme
          </p>

          <h2 className="mt-3 text-5xl lg:text-6xl font-black text-white">
            Sobre <span className="text-cyan-400">mí</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mt-16
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-10
            lg:p-14
          "
        >
          <p className="text-xl leading-10 text-slate-300 text-center">
            Desarrollo
            <span className="text-cyan-400 font-semibold">
              {" "}aplicaciones web modernas
            </span>,
            funcionales y orientadas a brindar una
            <span className="text-cyan-400 font-semibold">
              {" "}excelente experiencia de usuario
            </span>.
            Me motiva resolver problemas, aprender nuevas tecnologías y
            transformar ideas en
            <span className="text-cyan-400 font-semibold">
              {" "}soluciones reales
            </span>
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


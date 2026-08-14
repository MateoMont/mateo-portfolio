import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const prefersReduced = useReducedMotion();

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 px-6 py-8">

      <motion.div
        initial={
          prefersReduced
            ? false
            : {
                opacity: 0,
                y: 15,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        "
      >

        {/* Nombre */}
        <div className="text-center md:text-left">
          <p className="text-white font-semibold">
            Mateo <span className="text-[#c1272d]">Montero</span>
          </p>

          <p className="text-slate-600 text-xs mt-1">
            © {new Date().getFullYear()} Mateo Montero
          </p>
        </div>


        {/* Redes */}
        <div className="flex items-center gap-5 text-xl text-slate-500">

          <a
            href="https://github.com/MateoMont"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub de Mateo Montero"
            className="
              transition
              hover:text-[#c1272d]
              hover:-translate-y-0.5
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mateo-montero-chaves-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn de Mateo Montero"
            className="
              transition
              hover:text-[#c1272d]
              hover:-translate-y-0.5
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:mateomonterochaves@gmail.com"
            aria-label="Enviar email a Mateo Montero"
            className="
              transition
              hover:text-[#c1272d]
              hover:-translate-y-0.5
            "
          >
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

    </footer>
  );
}
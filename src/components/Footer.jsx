import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const prefersReduced = useReducedMotion();

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 py-8 px-6">
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col items-center gap-5"
      >
        <h3
          className="text-xl md:text-2xl uppercase text-white"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Mateo <span className="text-[#c1272d]">Montero</span>
        </h3>

        <p className="text-slate-400 text-sm text-center">
          Desarrollador Web Junior | React | Next.js
        </p>

        <div className="flex gap-5 text-2xl text-slate-400">
          <a
            href="https://github.com/MateoMont"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub de Mateo Montero"
            className="hover:text-[#c1272d] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mateo-montero-chaves-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn de Mateo Montero"
            className="hover:text-[#c1272d] transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:mateomonterochaves@gmail.com"
            aria-label="Enviar email a Mateo Montero"
            className="hover:text-[#c1272d] transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-slate-600 text-xs mt-3">
          © {new Date().getFullYear()} Mateo Montero. Todos los derechos reservados.
        </p>
      </motion.div>
    </footer>
  );
}

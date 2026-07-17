import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-[#020617]
        border-t
        border-white/10
        py-8
        px-6
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{
          once: true,
        }}
        className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          items-center
          gap-5
        "
      >

        <h3
          className="
            text-xl
            md:text-2xl
            font-bold
            text-white
          "
        >
          Mateo{" "}
          <span className="text-cyan-400">
            Montero
          </span>
        </h3>


        <p
          className="
            text-gray-400
            text-sm
            text-center
          "
        >
          Desarrollador Web Junior | React | Next.js
        </p>



        <div
          className="
            flex
            gap-5
            text-2xl
          "
        >

          <a
            href="https://github.com/MateoMont"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-cyan-400
              transition
            "
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/mateo-montero-chaves-/"
            className="
              text-gray-400
              hover:text-cyan-400
              transition
            "
          >
            <FaLinkedin />
          </a>


          <a
            href="mailto:mateomonterochaves@gmail.com"
            className="
              text-gray-400
              hover:text-cyan-400
              transition
            "
          >
            <FaEnvelope />
          </a>


        </div>



        <p
          className="
            text-gray-600
            text-xs
            mt-3
          "
        >
          © {new Date().getFullYear()} Mateo Montero. Todos los derechos reservados.
        </p>


      </motion.div>

    </footer>
  );
}
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        bg-[#050816]
        py-24
        px-6
        overflow-hidden
      "
    >

      <div className="max-w-5xl mx-auto text-center">


        {/* Título */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              mb-5
            "
          >
            Contacta{" "}
            <span className="text-cyan-400">
              conmigo
            </span>
          </h2>


          <p
            className="
              text-gray-400
              text-lg
              max-w-2xl
              mx-auto
              mb-12
            "
          >
            Estoy abierto a nuevas oportunidades laborales,
            proyectos y desafíos donde pueda seguir creciendo
            como desarrollador web.
          </p>

        </motion.div>




        {/* Tarjetas */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          "
        >


          {/* Email */}
          <motion.a
            href="mailto:mateomonterochaves@gmail.com"
            whileHover={{
              y: -8,
            }}
            className="
              p-8
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:border-cyan-400/50
              transition
            "
          >

            <FaEnvelope
              className="
                text-cyan-400
                text-4xl
                mx-auto
                mb-5
              "
            />

            <h3
              className="
                text-white
                text-xl
                font-semibold
                mb-2
              "
            >
              Email
            </h3>

            <p
              className="
                text-gray-400
                text-sm
                break-all
              "
            >
              mateomonterochaves@gmail.com
            </p>

          </motion.a>




          {/* GitHub */}
          <motion.a
            href="https://github.com/MateoMont"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -8,
            }}
            className="
              p-8
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:border-cyan-400/50
              transition
            "
          >

            <FaGithub
              className="
                text-cyan-400
                text-4xl
                mx-auto
                mb-5
              "
            />

            <h3
              className="
                text-white
                text-xl
                font-semibold
                mb-2
              "
            >
              GitHub
            </h3>

            <p className="text-gray-400 text-sm">
              Ver proyectos
            </p>

          </motion.a>





          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/mateo-montero-chaves-/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -8,
            }}
            className="
              p-8
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:border-cyan-400/50
              transition
            "
          >

            <FaLinkedin
              className="
                text-cyan-400
                text-4xl
                mx-auto
                mb-5
              "
            />

            <h3
              className="
                text-white
                text-xl
                font-semibold
                mb-2
              "
            >
              LinkedIn
            </h3>

            <p className="text-gray-400 text-sm">
              Perfil profesional
            </p>

          </motion.a>



        </div>


      </div>


    </section>
  );
}
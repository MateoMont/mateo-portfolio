import { motion, useReducedMotion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const prefersReduced = useReducedMotion();

  const links = [
    {
      href: "mailto:mateomonterochaves@gmail.com",
      icon: FaEnvelope,
      title: "Email",
      text: "mateomonterochaves@gmail.com",
      external: false,
    },
    {
      href: "https://github.com/MateoMont",
      icon: FaGithub,
      title: "GitHub",
      text: "Ver mis proyectos",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/mateo-montero-chaves-/",
      icon: FaLinkedin,
      title: "LinkedIn",
      text: "Ver mi perfil profesional",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0d0d0d] py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Encabezado */}
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[5px] text-[#c1272d] font-semibold text-sm">
            Hablemos
          </span>

          <h2
            className="mt-3 text-5xl md:text-6xl uppercase text-white"
            style={{
              fontFamily: "'Anton', sans-serif",
            }}
          >
            Contacta <span className="text-[#c1272d]">conmigo</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400">
            Si querés hablar sobre un proyecto, una oportunidad laboral o
            simplemente conocer más sobre lo que hago, podés encontrarme en
            los siguientes medios.
          </p>
        </motion.div>


        {/* Contactos */}
        <div className="mt-14 border-t border-white/10">

          {links.map(
            ({ href, icon: Icon, title, text, external }, index) => (
              <motion.a
                key={title}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={
                  prefersReduced
                    ? false
                    : {
                        opacity: 0,
                        x: -20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-6
                  py-7
                  border-b
                  border-white/10
                  transition-colors
                  hover:bg-white/[0.02]
                "
              >
                <div className="flex items-center gap-5 min-w-0">

                  <Icon
                    className="
                      shrink-0
                      text-[#c1272d]
                      text-2xl
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <div className="text-left min-w-0">
                    <h3 className="text-white font-semibold">
                      {title}
                    </h3>

                    <p className="mt-1 text-slate-500 text-sm truncate">
                      {text}
                    </p>
                  </div>

                </div>

                <span
                  className="
                    shrink-0
                    text-slate-600
                    text-xl
                    transition-all
                    duration-300
                    group-hover:text-[#c1272d]
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </motion.a>
            )
          )}

        </div>

      </div>
    </section>
  );
}
import { motion, useReducedMotion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const prefersReduced = useReducedMotion();

  const cards = [
    {
      href: "mailto:mateomonterochaves@gmail.com",
      icon: FaEnvelope,
      title: "Email",
      subtitle: "mateomonterochaves@gmail.com",
      external: false,
    },
    {
      href: "https://github.com/MateoMont",
      icon: FaGithub,
      title: "GitHub",
      subtitle: "Ver proyectos",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/mateo-montero-chaves-/",
      icon: FaLinkedin,
      title: "LinkedIn",
      subtitle: "Perfil profesional",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0d0d0d] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Título */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl uppercase text-white mb-5"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Contacta <span className="text-[#c1272d]">conmigo</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Estoy abierto a nuevas oportunidades laborales, proyectos y
            desafíos donde pueda seguir creciendo como desarrollador web.
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ href, icon: Icon, title, subtitle, external }) => (
            <motion.a
              key={title}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              whileHover={prefersReduced ? {} : { y: -8 }}
              className="p-8 rounded-2xl bg-[#181818] border border-white/10 hover:border-[#c1272d]/50 transition"
            >
              <Icon className="text-[#c1272d] text-4xl mx-auto mb-5" />
              <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm break-all">{subtitle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

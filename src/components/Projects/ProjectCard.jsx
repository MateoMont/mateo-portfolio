import { motion, useReducedMotion } from "framer-motion";
import ProjectCarousel from "./ProjectCarousel";
import TechnologyBadge from "./TechnologyBadge";

export default function ProjectCard({ project }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={prefersReduced ? {} : { y: -5 }}
      className="
        relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-10
        rounded-2xl bg-[#181818] border border-white/10 shadow-2xl transition
      "
    >
      {/* Carrusel */}
      <div className="flex items-center">
        <ProjectCarousel project={project} />
      </div>

      {/* Información */}
      <div className="flex flex-col justify-center">
        <h3
          className="text-3xl md:text-5xl uppercase text-white mb-4"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {project.title}
        </h3>

        <p className="text-[#c1272d] text-lg font-medium mb-6">
          {project.subtitle}
        </p>

        <p className="text-slate-300 leading-relaxed mb-8 max-w-xl">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.technologies.map((tech) => (
            <TechnologyBadge key={tech} technology={tech} />
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-wrap gap-4">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            whileTap={prefersReduced ? {} : { scale: 0.95 }}
            className="px-7 py-3 rounded-lg bg-[#c1272d] text-white font-semibold shadow-lg hover:bg-[#a8211f] transition"
          >
            🚀 Ver aplicación
          </motion.a>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            whileTap={prefersReduced ? {} : { scale: 0.95 }}
            className="px-7 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
          >
            💻 GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import projects from "./projectData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0d0d0d] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl uppercase text-white"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Mis <span className="text-[#c1272d]">Proyectos</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Aplicaciones web desarrolladas aplicando tecnologías modernas,
            enfocadas en resolver problemas reales y mejorar la experiencia
            del usuario.
          </p>
        </motion.div>

        {/* Lista de proyectos */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

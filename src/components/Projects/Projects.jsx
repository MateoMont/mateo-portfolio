import { motion } from "framer-motion";
import projects from "./projectData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#050816] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Mis <span className="text-cyan-400">Proyectos</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Aplicaciones web desarrolladas aplicando tecnologías modernas,
            enfocadas en resolver problemas reales y mejorar la experiencia del usuario.
          </p>
        </motion.div>


        {/* Lista de proyectos */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
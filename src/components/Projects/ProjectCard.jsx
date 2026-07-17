import { motion } from "framer-motion";
import ProjectCarousel from "./ProjectCarousel";
import TechnologyBadge from "./TechnologyBadge";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10
        p-6
        md:p-10
        rounded-3xl
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        shadow-xl
      "
    >

      {/* Imagen / Carrusel */}
      <div>
        <ProjectCarousel project={project} />
      </div>


      {/* Información */}
      <div className="flex flex-col justify-center">

        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-cyan-400 text-lg mb-5">
          {project.subtitle}
        </p>


        <p className="text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>


        {/* Tecnologías */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.technologies.map((tech) => (
            <TechnologyBadge
              key={tech}
              technology={tech}
            />
          ))}
        </div>


        {/* Botones */}
        <div className="flex flex-wrap gap-4">

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              text-black
              font-semibold
              hover:bg-cyan-400
              transition
            "
          >
            🚀 Ver aplicación
          </a>


          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-white/20
              text-white
              hover:bg-white/10
              transition
            "
          >
            💻 GitHub
          </a>

        </div>

      </div>

    </motion.article>
  );
}
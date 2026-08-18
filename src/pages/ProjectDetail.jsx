import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import projects from "../components/Projects/projectData";
import ProjectCarousel from "../components/Projects/ProjectCarousel";

export default function ProjectDetail() {
  const { slug } = useParams();
  const prefersReduced = useReducedMotion();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6">
        <div className="text-center">

          <p className="text-[#c1272d] text-sm uppercase tracking-[0.3em] mb-4">
            Error 404
          </p>

          <h1 className="text-4xl font-bold mb-8">
            Proyecto no encontrado
          </h1>

          <Link
            to="/"
            className="text-slate-400 hover:text-white transition"
          >
            ← Volver al portfolio
          </Link>

        </div>
      </div>
    );
  }

  const logo = project.logo;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">

      {/* HERO */}

      <header className="relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">

          <Link
            to="/#projects"
            className="inline-flex items-center gap-3 text-sm text-slate-500 hover:text-white transition group"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">
              ←
            </span>

            Volver a proyectos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center mt-16 md:mt-20">

            {/* TEXTO */}

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 25 }}
              animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-[#c1272d] text-sm uppercase tracking-[0.25em] mb-5">
                Proyecto
              </p>

              <h1
                className="text-6xl sm:text-7xl md:text-8xl uppercase leading-[0.85] tracking-tight"
                style={{
                  fontFamily: "'Anton', sans-serif",
                }}
              >
                {project.title}
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mt-8 max-w-xl leading-relaxed">
                {project.subtitle}
              </p>

              <div className="mt-8">

                <p className="text-sm text-slate-500 mb-3">
                  Tecnologías
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-300">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>

            {/* LOGO */}

            {logo && (
              <motion.div
                initial={
                  prefersReduced
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.85,
                      }
                }
                animate={
                  prefersReduced
                    ? {}
                    : {
                        opacity: 1,
                        scale: 1,
                      }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex justify-center lg:justify-end"
              >

                <motion.img
                  src={logo}
                  alt={project.title}
                  animate={
                    prefersReduced
                      ? {}
                      : {
                          y: [0, -8, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-[240px] md:w-[330px] max-h-[330px] object-contain"
                />

              </motion.div>
            )}

          </div>

        </div>

      </header>


      {/* SOBRE EL PROYECTO */}

      <section className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-24">

          <div className="max-w-4xl">

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 25 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <h2
                className="text-4xl md:text-5xl uppercase mb-8"
                style={{
                  fontFamily: "'Anton', sans-serif",
                }}
              >
                Sobre el proyecto
              </h2>

              <p className="text-slate-300 text-lg leading-8 max-w-3xl">
                {project.description}
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* LO QUE HICE */}

      {project.contribution && (
        <section className="border-t border-white/5 bg-[#101010]">

          <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-24">

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 25 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <h2
                className="text-4xl md:text-5xl uppercase mb-10"
                style={{
                  fontFamily: "'Anton', sans-serif",
                }}
              >
                Lo que hice
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">

                {project.contribution.map((item, index) => (

                  <motion.div
                    key={item}
                    initial={
                      prefersReduced
                        ? false
                        : {
                            opacity: 0,
                            y: 15,
                          }
                    }
                    whileInView={
                      prefersReduced
                        ? {}
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04,
                    }}
                    className="py-5 border-b border-white/10"
                  >

                    <span className="text-slate-300">
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>

        </section>
      )}


      {/* FUNCIONALIDADES */}

      <section className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-24">

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 25 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h2
              className="text-4xl md:text-5xl uppercase mb-10"
              style={{
                fontFamily: "'Anton', sans-serif",
              }}
            >
              Funcionalidades
            </h2>

            <div className="max-w-4xl">

              {project.features.map((feature) => (

                <div
                  key={feature}
                  className="py-5 border-b border-white/10"
                >

                  <span className="text-lg text-slate-300">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>


      {/* TECNOLOGÍAS */}

      <section className="border-t border-white/5 bg-[#101010]">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-24">

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 25 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h2
              className="text-4xl md:text-5xl uppercase mb-10"
              style={{
                fontFamily: "'Anton', sans-serif",
              }}
            >
              Tecnologías
            </h2>

            <div className="flex flex-wrap gap-3">

              {project.technologies.map((technology) => (

                <span
                  key={technology}
                  className="px-4 py-2 border border-white/10 rounded-full text-sm text-slate-300"
                >
                  {technology}
                </span>

              ))}

            </div>

            {project.decision && (
              <div className="mt-12 max-w-3xl">

                <p className="text-sm text-slate-500 mb-3">
                  Una decisión del proyecto
                </p>

                <p className="text-slate-400 leading-7">
                  {project.decision}
                </p>

              </div>
            )}

          </motion.div>

        </div>

      </section>


      {/* APLICACIÓN */}

      <section className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-24">

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 25 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

              <div>

                <p className="text-[#c1272d] text-sm uppercase tracking-[0.25em] mb-3">
                  En funcionamiento
                </p>

                <h2
                  className="text-4xl md:text-5xl uppercase"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                  }}
                >
                  El proyecto
                </h2>

              </div>

              <p className="text-slate-500 max-w-md">
                Algunas capturas y una demostración del proyecto para ver cómo funciona en la práctica.
              </p>

            </div>

            <ProjectCarousel project={project} />

          </motion.div>

        </div>

      </section>


      {/* RESULTADO */}

      <section className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 25 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >

            <p className="text-[#c1272d] text-sm uppercase tracking-[0.25em] mb-5">
              Resultado
            </p>

            <h2
              className="text-4xl md:text-6xl uppercase leading-[0.95] mb-8"
              style={{
                fontFamily: "'Anton', sans-serif",
              }}
            >
              Un proyecto que
              <br />
              puedo mostrar.
            </h2>

            <p className="text-slate-400 text-lg leading-8 max-w-2xl mb-10">

              {project.outcome ||
                "Un proyecto funcional que puedo presentar como parte de mi experiencia de desarrollo."}

            </p>

            <div className="flex flex-wrap gap-6">

              {project.demo && (

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-white border-b border-[#c1272d] pb-2"
                >

                  {project.demoLabel || "Ver aplicación"}

                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>

                </a>

              )}

              {project.github && (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-slate-400 hover:text-white border-b border-white/10 pb-2 transition"
                >

                  {project.githubLabel || "Ver código"}

                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>

                </a>

              )}

            </div>

          </motion.div>

        </div>

      </section>


      {/* VOLVER */}

      <section className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">

          <Link
            to="/#projects"
            className="group inline-flex items-center gap-3 text-slate-500 hover:text-white transition"
          >

            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>

            Volver a proyectos

          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/5 py-8 px-6 text-center">

        <p className="text-xs text-slate-600">
          Mateo Montero · Portfolio
        </p>

      </footer>

    </div>
  );
}
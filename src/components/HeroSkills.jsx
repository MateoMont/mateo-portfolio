import { motion, useReducedMotion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDatabase,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiDotnet,
  SiNextdotjs,
  SiPrisma,
  SiSqlite,
  SiVercel,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
        color: "text-sky-400",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "text-yellow-400",
      },
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        color: "text-blue-500",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        color: "text-violet-500",
      },
    ],
  },

  {
    title: "Backend",
    technologies: [
      {
        name: "C#",
        icon: <span className="font-bold text-2xl">C#</span>,
        color: "text-purple-400",
      },
      {
        name: ".NET",
        icon: <SiDotnet />,
        color: "text-violet-400",
      },
    ],
  },

  {
    title: "Bases de datos",
    technologies: [
      {
        name: "SQL Server",
        icon: <FaDatabase />,
        color: "text-red-400",
      },
      {
        name: "Prisma",
        icon: <SiPrisma />,
        color: "text-slate-200",
      },
      {
        name: "SQLite",
        icon: <SiSqlite />,
        color: "text-sky-300",
      },
    ],
  },

  {
    title: "Herramientas",
    technologies: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        color: "text-white",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "text-white",
      },
    ],
  },
];

function Technology({ technology, index, prefersReduced }) {
  return (
    <motion.div
      initial={
        prefersReduced
          ? false
          : {
              opacity: 0,
              y: 15,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      whileHover={
        prefersReduced
          ? {}
          : {
              y: -4,
            }
      }
      className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-[#181818] transition-all duration-300 hover:border-[#c1272d]/50"
    >
      <span
        className={`text-2xl ${technology.color} transition-transform duration-300 group-hover:scale-110`}
      >
        {technology.icon}
      </span>

      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
        {technology.name}
      </span>
    </motion.div>
  );
}

export default function HeroSkills() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden py-28 bg-[#121212]"
    >
      {/* Textura de grano */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        aria-hidden="true"
      >
        <filter id="grain-skills">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter="url(#grain-skills)"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-8">

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
            Tech Stack
          </span>

          <h2
            className="mt-3 text-5xl md:text-6xl uppercase text-white"
            style={{
              fontFamily: "'Anton', sans-serif",
            }}
          >
            Tecnologías
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Tecnologías y herramientas que utilizo para desarrollar y dar
            vida a mis proyectos.
          </p>
        </motion.div>


        {/* Tecnologías */}
        <div className="mt-16 space-y-12">

          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={
                prefersReduced
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.08,
              }}
              viewport={{ once: true }}
            >

              <h3 className="mb-5 text-sm uppercase tracking-[3px] font-semibold text-slate-500">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.technologies.map((technology, index) => (
                  <Technology
                    key={technology.name}
                    technology={technology}
                    index={index}
                    prefersReduced={prefersReduced}
                  />
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
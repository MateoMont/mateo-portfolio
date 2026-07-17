import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDatabase,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiDotnet,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "text-sky-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-violet-500" },
  { name: "C#", icon: <FaCode />, color: "text-purple-400" },
  { name: ".NET", icon: <SiDotnet />, color: "text-violet-400" },
  { name: "SQL Server", icon: <FaDatabase />, color: "text-red-500" },
  { name: "Java", icon: <FaJava />, color: "text-orange-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
];

function Skill({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        h-44
        flex
        flex-col
        justify-center
        items-center
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-[0_0_40px_rgba(34,211,238,.30)]
      "
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent" />

      <div
        className={`
          relative
          z-10
          text-6xl
          ${skill.color}
          transition-all
          duration-300
          group-hover:scale-125
          group-hover:rotate-6
        `}
      >
        {skill.icon}
      </div>

      <h3
        className="
          relative
          z-10
          mt-5
          text-lg
          font-semibold
          text-white
          opacity-0
          translate-y-3
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        {skill.name}
      </h3>
    </motion.div>
  );
}

export default function HeroSkills() {
  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden py-28 bg-[#08111F]"
    >
      {/* Luces */}
      <div className="absolute -top-44 -left-44 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute -bottom-44 -right-44 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[220px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Tech Stack
          </span>

          <h2 className="mt-4 text-5xl lg:text-6xl font-black text-white">
            Tecnologías
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto my-6" />

          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Herramientas que utilizo para desarrollar aplicaciones modernas,
            rápidas y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
          {skills.map((skill, index) => (
            <Skill
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-[#07131f]/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

       {/* Logo */}
<h1 className="hidden sm:block text-2xl font-black tracking-wider text-cyan-400 select-none">
  {"<MM />"}
</h1>

        {/* Menú */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider">

          <Link
            to="hero"
            smooth
            duration={600}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Inicio
          </Link>

          <Link
            to="about"
            smooth
            duration={600}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Sobre mí
          </Link>

          <Link
            to="projects"
            smooth
            duration={600}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Proyectos
          </Link>

          <Link
            to="contact"
            smooth
            duration={600}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Contacto
          </Link>

        </nav>

        {/* Redes */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/MateoMont"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </header>
  );
}
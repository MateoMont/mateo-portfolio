import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "hero", label: "Inicio" },
    { to: "about", label: "Sobre mí" },
    { to: "projects", label: "Proyectos" },
    { to: "contact", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#121212]/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="hidden sm:block text-2xl tracking-wider text-[#c1272d] select-none"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {"<MM />"}
        </h1>

        {/* Menú */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider text-slate-200">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              className="cursor-pointer hover:text-[#c1272d] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Redes */}
        <div className="flex items-center gap-5 text-slate-300">
          <a
            href="https://github.com/MateoMont"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de GitHub de Mateo Montero"
            className="text-xl hover:text-[#c1272d] transition"
          >
            <FaGithub />
          </a>
          <a
           href="https://www.linkedin.com/in/mateo-montero-chaves-/"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de LinkedIn de Mateo Montero"
            className="text-xl hover:text-[#c1272d] transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#121212]/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl tracking-wider text-[#c1272d] select-none"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {"<MM />"}
        </h1>

        {/* Menú desktop */}
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

        {/* Redes + botón móvil */}
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

          {/* Botón hamburguesa */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-xl hover:text-[#c1272d] transition"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-8 pb-6 pt-2 flex flex-col gap-5 bg-[#121212]/95 backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              onClick={closeMenu}
              className="cursor-pointer text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-[#c1272d] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
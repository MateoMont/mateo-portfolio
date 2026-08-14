import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HeroSkills from "./components/HeroSkills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <div className="bg-red-500 min-h-screen">

      <Navbar />

      <main>

        <Hero />

        <section id="about">
          <About />
        </section>

        <section id="tecnologias">
          <HeroSkills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>

      </main>

    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/proyectos/:slug"
          element={<ProjectDetail />}
        />

      </Routes>
    </>
  );
}
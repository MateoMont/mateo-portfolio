import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectCarousel({ project }) {
  const prefersReduced = useReducedMotion();

  const slides = useMemo(() => {
    if (!project) return [];

    const result = [];

    if (project.video) {
      result.push({
        type: "video",
        src: project.video,
      });
    }

    if (Array.isArray(project.images)) {
      project.images.forEach((image) => {
        if (image) {
          result.push({
            type: "image",
            src: image,
          });
        }
      });
    }

    return result;
  }, [project]);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [project]);

  if (slides.length === 0) {
    return (
      <div className="w-full border border-white/10 rounded-2xl p-10 text-center">
        <p className="text-slate-500">
          No hay contenido disponible para mostrar.
        </p>
      </div>
    );
  }

  const currentSlide = slides[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">

        {/* CONTENIDO */}

        <motion.div
          key={`${currentSlide.type}-${currentSlide.src}`}
          initial={
            prefersReduced
              ? false
              : {
                  opacity: 0,
                  scale: 0.98,
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
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {currentSlide.type === "video" ? (
            <video
              src={currentSlide.src}
              controls
              playsInline
              className="block w-full max-h-[700px] object-contain bg-black"
            />
          ) : (
            <img
              src={currentSlide.src}
              alt={`${project.title} - captura ${current + 1}`}
              className="block w-full max-h-[700px] object-contain bg-black"
            />
          )}
        </motion.div>

        {/* FLECHA ANTERIOR */}

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ←
            </button>

            {/* FLECHA SIGUIENTE */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* INDICADORES */}

      {slides.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-5">
          {slides.map((slide, index) => (
            <button
              key={`${slide.type}-${slide.src}-${index}`}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Mostrar contenido ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* CONTADOR */}

      {slides.length > 1 && (
        <div className="text-center mt-3">
          <span className="text-xs text-slate-600">
            {current + 1} / {slides.length}
          </span>
        </div>
      )}
    </div>
  );
}
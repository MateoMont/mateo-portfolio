import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCarousel({ project }) {
  const slides = [
    ...project.images,
    project.video,
  ];

  const [current, setCurrent] = useState(0);


  useEffect(() => {

    const isVideo = slides[current].endsWith(".mp4");

    const duration = isVideo ? 10000 : 4000;


    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );

    }, duration);


    return () => clearInterval(interval);


  }, [current, slides]);



  const currentSlide = slides[current];

  const isVideo = currentSlide.endsWith(".mp4");



  return (
    <div className="relative">


      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-black/40
          aspect-video
          flex
          items-center
          justify-center
        "
      >


        {isVideo && (
          <div
            className="
              absolute
              top-4
              left-4
              z-20
              px-4
              py-2
              rounded-full
              bg-cyan-400
              text-black
              text-sm
              font-semibold
              shadow-lg
            "
          >
            🎥 Demo en funcionamiento
          </div>
        )}



        <AnimatePresence mode="wait">

          <motion.div
            key={currentSlide}
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              w-full
              h-full
              flex
              items-center
              justify-center
            "
          >


            {isVideo ? (

              <video
                src={currentSlide}
                autoPlay
                muted
                controls
                className="
                  w-full
                  h-full
                  object-contain
                "
              />

            ) : (

              <img
                src={currentSlide}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-contain
                "
              />

            )}


          </motion.div>

        </AnimatePresence>


      </div>



      <div
        className="
          flex
          justify-center
          gap-2
          mt-5
        "
      >

        {slides.map((slide, index) => (

          <button
            key={slide}
            onClick={() => setCurrent(index)}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300

              ${
                current === index
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-white/30"
              }
            `}
          />

        ))}

      </div>


    </div>
  );
}
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  const [isFlipping, setIsFlipping] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  /*
   * ================================
   * MOVIMIENTO 3D CON EL MOUSE
   * ================================
   */

  const handleMouseMove = (event) => {
    if (isFlipping || prefersReduced) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotationY = ((x - centerX) / centerX) * 12;
    const rotationX = ((centerY - y) / centerY) * 12;

    setRotateX(rotationX);
    setRotateY(rotationY);
  };

  /*
   * ================================
   * RESET DEL MOVIMIENTO
   * ================================
   */

  const handleMouseLeave = () => {
    if (isFlipping) return;

    setRotateX(0);
    setRotateY(0);
  };

  /*
   * ================================
   * CLICK
   * ================================
   */

  const handleClick = () => {
    if (isFlipping) return;

    /*
     * Si el usuario tiene activado
     * "reduced motion", navegamos
     * directamente.
     */

    if (prefersReduced) {
      navigate(`/proyectos/${project.slug}`);
      return;
    }

    setIsFlipping(true);

    /*
     * Esperamos a que termine
     * la animación antes de navegar.
     */

    setTimeout(() => {
      navigate(`/proyectos/${project.slug}`);
    }, 1100);
  };

  /*
   * ================================
   * LOGOS
   * ================================
   */

  const logo =
    project.slug === "cookie-ju"
      ? "/projects/logoCookie-ju.png"
      : "/projects/logoTotora.png";

  return (
    <motion.div
      initial={
        prefersReduced
          ? false
          : {
              opacity: 0,
              y: 50,
              scale: 0.85,
            }
      }
      whileInView={
        prefersReduced
          ? {}
          : {
              opacity: 1,
              y: 0,
              scale: 1,
            }
      }
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex justify-center"
    >

      {/* ================================
          CONTENEDOR 3D
         ================================ */}

      <div
        className="relative w-full max-w-[380px] aspect-square cursor-pointer"
        style={{
          perspective: "1400px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >

        {/* ================================
            RESPLANDOR
           ================================ */}

        <motion.div
          animate={
            isFlipping
              ? {
                  scale: 1.5,
                  opacity: 0.8,
                }
              : {
                  scale: 1,
                  opacity: 0.25,
                }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute inset-[20%] rounded-full bg-[#c1272d] blur-[70px]"
        />

        {/* ================================
            SOMBRA
           ================================ */}

        <motion.div
          animate={
            isFlipping
              ? {
                  scaleX: 0.4,
                  opacity: 0,
                }
              : {
                  scaleX: 1,
                  opacity: 0.5,
                }
          }
          transition={{
            duration: 0.9,
          }}
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black blur-2xl rounded-full"
        />

        {/* ================================
            OBJETO 3D
           ================================ */}

        <motion.div
          animate={
            isFlipping
              ? {
                  rotateY: 540,
                  rotateX: 18,
                  rotateZ: -8,
                  scale: 1.35,
                  y: -30,
                  x: 20,
                }
              : {
                  rotateX,
                  rotateY,
                  rotateZ: 0,
                  scale: 1,
                  y: 0,
                  x: 0,
                }
          }
          transition={
            isFlipping
              ? {
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                }
              : {
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
          style={{
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full flex items-center justify-center"
        >

          {/* ================================
              PROFUNDIDAD
             ================================ */}

          <div
            className="absolute inset-[12%] rounded-3xl border border-white/10 bg-white/[0.02]"
            style={{
              transform: "translateZ(-50px)",
            }}
          />

          {/* ================================
              LOGO
             ================================ */}

          <motion.div
            animate={
              isFlipping
                ? {
                    scale: 1.05,
                    filter:
                      "brightness(1.3) drop-shadow(0 0 40px rgba(193,39,45,0.8))",
                  }
                : {
                    scale: 1,
                    filter:
                      "brightness(1) drop-shadow(0 25px 35px rgba(0,0,0,0.5))",
                  }
            }
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative w-[78%] h-[78%] flex items-center justify-center"
            style={{
              transform: "translateZ(80px)",
              backfaceVisibility: "hidden",
            }}
          >

            <img
              src={logo}
              alt={project.title}
              draggable="false"
              className="max-w-full max-h-full object-contain select-none"
            />

          </motion.div>

          {/* ================================
              BRILLO FRONTAL
             ================================ */}

          <motion.div
            animate={
              isFlipping
                ? {
                    opacity: 0.7,
                    x: "120%",
                  }
                : {
                    opacity: 0,
                    x: "-120%",
                  }
            }
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-[-40%] w-[35%] h-full bg-white/20 blur-2xl skew-x-[-20deg] pointer-events-none"
          />

        </motion.div>

        {/* ================================
            TEXTO
           ================================ */}

        <motion.div
          animate={
            isFlipping
              ? {
                  opacity: 0,
                  y: 20,
                }
              : {
                  opacity: 0,
                  y: 0,
                }
          }
          whileHover={
            !isFlipping
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.3,
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] pointer-events-none whitespace-nowrap"
        >
          Ver proyecto
        </motion.div>

      </div>

    </motion.div>
  );
}
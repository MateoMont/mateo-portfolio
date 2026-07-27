"use client";

import { motion } from "framer-motion";

import {

  FaGithub,

  FaLinkedin,

  FaDownload,

  FaArrowDown,

  FaCode,

} from "react-icons/fa";



export default function Hero() {

  return (

    <section

      id="hero"

      className="

        relative

        min-h-screen

        overflow-hidden

        flex

        items-center

        bg-gradient-to-br

        from-[#020617]

        via-[#071426]

        to-[#020617]

      "

    >



      {/* Luces de fondo */}

      <div

        className="

          absolute

          top-[-180px]

          left-[-180px]

          w-[420px]

          h-[420px]

          bg-cyan-500/20

          rounded-full

          blur-[180px]

        "

      />



      <div

        className="

          absolute

          bottom-[-220px]

          right-[-220px]

          w-[520px]

          h-[520px]

          bg-blue-500/20

          rounded-full

          blur-[200px]

        "

      />





      <div className="container mx-auto px-8 lg:px-16 relative z-10">



        <div

          className="

            grid

            grid-cols-1

            lg:grid-cols-2

            items-center

            gap-10

            lg:gap-20

          "

        >





          {/* TEXTO */}

          <motion.div

            initial={{ opacity: 0, x: -60 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8 }}

          >



            <span

              className="

                inline-block

                mb-6

                px-5

                py-2

                rounded-full

                border

                border-cyan-400/30

                bg-cyan-400/10

                text-cyan-400

                font-semibold

                tracking-widest

                uppercase

                text-sm

              "

            >

              👋 Hola, soy

            </span>





            <h1 className="font-black leading-none tracking-tight">



              <span className="block text-5xl sm:text-6xl lg:text-8xl text-white">
                             MATEO
                               </span>

              <span className="block text-5xl sm:text-6xl lg:text-8xl text-cyan-400 mt-2">
                            MONTERO
                   </span>



            </h1>





            <h2 className="mt-8 text-3xl lg:text-4xl font-bold text-white">

              Desarrollador Full Stack Junior

            </h2>





            <p className="mt-8 text-xl leading-9 text-slate-300 max-w-xl">



              Desarrollo aplicaciones web modernas utilizando{" "}



              <span className="font-bold text-cyan-400">

                React, Next.js, C#, .NET, JavaScript, Prisma y SQLite

              </span>



              . Me apasiona construir productos rápidos, intuitivos y con una

              excelente experiencia de usuario.



            </p>







            {/* Botones */}

            <div className="flex flex-wrap gap-6 mt-12">





              <a

                href="#projects"

                className="

                  group

                  flex

                  items-center

                  gap-3

                  rounded-2xl

                  bg-cyan-500

                  px-10

                  py-5

                  font-bold

                  text-lg

                  text-black

                  shadow-[0_0_40px_rgba(34,211,238,.45)]

                  transition

                  duration-300

                  hover:scale-105

                  hover:bg-cyan-400

                "

              >

                <FaCode />

                VER PROYECTOS

              </a>







              <a

                href="/C.V-Mateo-Montero.pdf"

                className="

                  flex

                  items-center

                  gap-3

                  rounded-2xl

                  border-2

                  border-white/20

                  px-10

                  py-5

                  text-lg

                  font-bold

                  text-white

                  transition

                  hover:border-cyan-400

                  hover:bg-cyan-500

                  hover:text-black

                  hover:scale-105

                "

              >

                <FaDownload />

                DESCARGAR CV

              </a>





            </div>







            {/* Redes */}

            <div className="flex gap-8 mt-12">



              <a

                href="https://github.com/MateoMont"

                target="_blank"

                rel="noopener noreferrer"

                className="

                  text-4xl

                  text-slate-400

                  transition

                  hover:text-cyan-400

                  hover:scale-125

                "

              >

                <FaGithub />

              </a>





              <a

                href="https://linkedin.com/in/"

                target="_blank"

                rel="noopener noreferrer"

                className="

                  text-4xl

                  text-slate-400

                  transition

                  hover:text-cyan-400

                  hover:scale-125

                "

              >

                <FaLinkedin />

              </a>





            </div>





          </motion.div>









          {/* FOTO */}

          <motion.div

            initial={{ opacity: 0, x: 80 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.9 }}

            className="

              relative

              flex

              justify-center

              lg:justify-end

            "

          >





            {/* Glow */}

            <div

              className="

                absolute

                w-[380px]

                h-[380px]

                rounded-full

                bg-cyan-500/20

                blur-[140px]

              "

            />





            {/* Círculo */}

            <div

              className="

                absolute

                w-[450px]

                h-[450px]

                rounded-full

                border

                border-cyan-400/20

                animate-pulse

              "

            />





            <motion.img

              src="/mateo2.png"

              alt="Mateo Montero"

              initial={{ y: 20 }}

              animate={{ y: [-10, 10, -10] }}

              transition={{

                duration: 6,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                relative

                z-10

                w-[320px]

                sm:w-[380px]

                lg:w-[500px]

                object-contain

                select-none

                drop-shadow-[0_35px_60px_rgba(34,211,238,.35)]

              "

            />



          </motion.div>





        </div>









        {/* Flecha */}

        <motion.div

          animate={{ y: [0, 14, 0] }}

          transition={{

            duration: 2,

            repeat: Infinity,

          }}

          className="

            absolute

            bottom-10

            left-1/2

            -translate-x-1/2

            text-cyan-400

            text-4xl

          "

        >

          <FaArrowDown />

        </motion.div>





      </div>



    </section>

  );

} 


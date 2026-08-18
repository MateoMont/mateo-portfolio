const projects = [
  {
    id: 1,

    slug: "cookie-ju",

    title: "Cookie-Ju",

    subtitle: "Aplicación web para gestión de pedidos online",

    description:
      "Cookie-Ju es una aplicación web desarrollada para un emprendimiento de galletas artesanales que se encontraba en etapa de crecimiento. La necesidad principal era contar con una herramienta sencilla que permitiera a sus clientes realizar pedidos de forma rápida y organizada, sin depender exclusivamente de mensajes manuales. La aplicación fue diseñada priorizando una experiencia simple e intuitiva, facilitando la gestión de ventas y acompañando la evolución del negocio.",

    technologies: [
      "React",
      "Next.js",
      "Prisma",
      "SQLite",
      "JavaScript",
      "CSS",
      "Vercel",
    ],

    images: [
      "/projects/cookiewho-1.png",
      "/projects/cookiewho-2.png",
      "/projects/cookiewho-3.png",
      "/projects/cookiewho-4.png",
    ],

    video: "/projects/cookiewho-demo.mp4",

    features: [
      "Catálogo de productos",
      "Personalización de pedidos",
      "Carrito de compras",
      "Formulario de cliente",
      "Gestión de pedidos",
      "Diseño responsive",
    ],

    demo: "https://galletas-app.vercel.app/",

    github: "https://github.com/MateoMont/galletas-app",
  },

  {
    id: 2,

    slug: "verdeo-real-estate",

    title: "VERDEO",

    subtitle: "Real Estate Landing Page",

    description:
      "Landing page inmobiliaria boutique enfocada en arquitectura, naturaleza y una experiencia visual editorial.",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "Framer Motion",
      "Lucide React",
    ],

    logo: "/projects/verdeo-hero-house.png",

    cardImageClass:
      "max-w-[72%] max-h-[60%] object-contain rounded-xl border border-white/10",

    images: [

      "/projects/verdeo-hero.png",
      "/projects/verdeo-properties.png",
      "/projects/verdeo-about.png",
      "/projects/verdeo-contact.png",
    ],

    contribution: [
      "Diseño de experiencia visual editorial",
      "Desarrollo de la landing page",
      "Animaciones con Framer Motion",
      "Diseño responsive",
      "Integración de iconos con Lucide React",
    ],

    features: [
      "Presentación editorial de propiedades",
      "Experiencia visual centrada en arquitectura y naturaleza",
      "Animaciones y transiciones fluidas",
      "Diseño adaptable a todos los dispositivos",
    ],

    outcome:
      "VERDEO combina arquitectura, naturaleza y una narrativa visual cuidada en una experiencia inmobiliaria boutique.",

    demo: "https://verdeo-real-estate.vercel.app/",

    github: "https://github.com/MateoMont/verdeo-real-estate",

    demoLabel: "Ver Demo",

    githubLabel: "GitHub",
  },

  {
    id: 3,

    slug: "totora",

    title: "Totora",

    subtitle: "Sistema de gestión y facturación desktop + API REST",

    description:
      "Sistema de gestión y facturación full stack, compuesto por una API REST desarrollada en ASP.NET Core y una aplicación de escritorio en WPF. Permite administrar clientes y productos, generar facturas con cálculo automático de subtotal, IVA y total, y exportarlas a PDF con un diseño de marca personalizado. El proyecto está pensado para digitalizar procesos de facturación de pequeños negocios.",

    technologies: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "WPF",
      "QuestPDF",
    ],

    images: [
      "/projects/clientes.png.jpg",
      "/projects/pruductos.png",
      "/projects/facturacion.png",
      "/projects/pdf.png.png",
    ],

    features: [
      "Gestión de clientes y productos",
      "Cálculo automático de subtotal, IVA y total",
      "Historial de facturas",
      "Exportación a PDF con diseño de marca",
      "Arquitectura API REST + cliente de escritorio",
    ],

    github: "https://github.com/MateoMont/sistema-facturacion",
  },
];

export default projects;

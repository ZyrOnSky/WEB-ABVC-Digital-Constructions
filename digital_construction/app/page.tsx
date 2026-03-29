import {
  ContactSection,
  IntroHighlights,
  LogosMarquee,
  SiteHeader,
  AutomationDashboardUi,
} from "./components/site-sections";
import MatrixBackground from "./components/MatrixBackground";

const services = [
  {
    id: "ai-implementation",
    title: "Implementacion de IA",
    description:
      "Integramos IA en tu flujo actual de trabajo para optimizar la toma de decisiones y automatizar tareas repetitivas.",
  },
  {
    id: "b2b-automations",
    title: "Automatizaciones B2B",
    description:
      "Operaciones entre negocios automatizadas con IA, reduce el esfuerzo manual y aumenta la eficiencia.",
  },
  {
    id: "custom-app-development",
    title: "Desarrollo de Aplicaciones Custom",
    description:
      "Software a medida, escalable y seguro para procesos críticos de tu negocio.",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: 
      "Infraestructura de datos lista para escalar: pipelines, lagos y BI."
  },
  { 
    id: "system-integration", 
    title: "Integracion de Sistemas", 
    description: 
    "Conectamos tus sistemas actuales para que la informacion fluya sin friccion.", 
  },
  {
    id: "analisis-data",
    title: "Analisis de Datos",
    description: 
    "Analizamos tus datos para extraer informacion valiosa y tomar decisiones informadas."
  },
];

const projects = [
  {
    title: "Proyecto 01",
    description:
      "Placeholder para imagen y breve descripcion del caso de exito.",
  },
  {
    title: "Proyecto 02",
    description: "Espacio listo para captura, mockup o visual del proyecto.",
  },
  {
    title: "Proyecto 03",
    description:
      "Area preparada para agregar nombre, resultado e imagen manualmente.",
  },
];

export default function Home() {
  return (
    <main className="w-full pt-[132px] relative z-0">
      <MatrixBackground />
      <section className="bg-background px-[clamp(20px,6vw,72px)] py-10 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(120,119,198,0.15)] via-transparent to-transparent pointer-events-none"></div>
        <SiteHeader />

        <div className="flex flex-col items-center justify-center text-center mt-3 w-[min(100%,1080px)] mx-auto min-h-[60vh] py-16" id="inicio">
          <div className="flex flex-col items-center relative z-10 w-full max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-10 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <span className="text-[0.7rem] font-bold tracking-[0.1em] text-gray-400 uppercase">NEXT-GEN SOFTWARE DEVELOPMENT</span>
            </div>

            {/* Efecto de resplandor azul difuminado de fondo */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-[100%] pointer-events-none -z-10 max-w-[80vw]"></div>

            <h1 className="m-0 font-display text-[clamp(4rem,10vw,7.5rem)] leading-[0.9] font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-[#888888] pb-2">
              Digital
              <br />
              Construction
            </h1>
            
            <p className="mt-8 mb-0 text-[#888888] text-[clamp(1.1rem,2vw,1.4rem)] max-w-[800px] leading-relaxed">
              Mision de la empresa o propuesta principal.
            </p>
          </div>          
        </div>
      </section>

      <section
        className="bg-transparent px-[clamp(20px,6vw,72px)] py-24 relative z-10 overflow-hidden"
        id="servicios"
      >
        <div className="w-[min(100%,1200px)] mx-auto mb-16 text-center">
          <h2 className="m-0 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-[#888888] pb-2">
            SOLUCIONES INTELIGENTES PARA TU EMPRESA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left w-[min(100%,1200px)] mx-auto mb-16">
          {services.map((service) => (
            <article 
              className="flex flex-col bg-[#111111]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1" 
              id={service.id} 
              key={service.id}
            >
              <h3 className="m-0 mb-4 text-white text-[1.4rem] font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="m-0 text-[#999999] text-[1.05rem] leading-[1.7]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <a className="display-flex items-center justify-center px-7 py-3.5 border-0 rounded-full font-bold text-center bg-button text-white hover:bg-button-hover w-fit mx-auto flex" href="#contacto">
          TODOS NUESTROS SERVICIOS
        </a>
        <section className="bg-transparent px-[clamp(20px,6vw,72px)] py-10 relative z-10">
          <LogosMarquee />
        </section>
      </section>
      <section className="bg-transparent px-[clamp(20px,6vw,72px)] relative z-8" id="proyectos">
        {/* <div className="w-[min(100%,980px)] mx-auto mb-9 text-center">
          <p className="m-0 text-title text-[clamp(1.8rem,3vw,3rem)] font-extrabold">PROYECTOS DESTACADOS</p>
        </div>

        <div className="grid grid-cols-3 max-[920px]:grid-cols-1 gap-7 w-[min(100%,980px)] mx-auto">
          {projects.map((project) => (
            <article className="grid gap-4" key={project.title}>
              <div className="flex items-center justify-center border-2 border-line bg-white/10 text-text-secondary text-center min-h-[120px] p-4">
                <span className="max-w-[18ch]">Imagen</span>
              </div>
              <h3 className="m-0 mb-3 text-text text-[1.5rem]">{project.title}</h3>
              <p className="m-0 text-text-secondary text-base leading-[1.6]">{project.description}</p>
            </article>
          ))}
        </div> */}
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr] gap-12 lg:gap-24 items-center w-[min(100%,1200px)] mx-auto py-12">

          <IntroHighlights
            title="Conecta todo tu ecosistema de negocios"
            items={[
              "Reduce costos operativos",
              "Aumenta la eficiencia",
              "Mejora la experiencia del cliente",
              "Reduce ingresar manualmente datos",
              "Automatiza tareas repetitivas",
              "Integra tus sistemas actuales",
              "Obten informacion valiosa de tus datos",
              "Toma decisiones informadas",
            ]}
          />

          <div className="w-full relative">
            <AutomationDashboardUi />
          </div>
        </div>
      </section>

      <section className="bg-transparent px-[clamp(20px,6vw,72px)] py-10 relative z-10">
        <div className="w-[min(100%,980px)] mx-auto mb-9 text-left">
          <p className="m-0 font-display text-[clamp(2rem,3vw,6rem)] leading-[0.9] font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-[#888888] pb-2">
            PORQUE SOMOS DIFERENTES?
          </p>
        </div>

        <div className="w-[min(100%,980px)] mx-auto p-[18px_20px] border-2 border-line text-text-secondary text-base leading-[1.7]">
          Aqui puedes resumir tu ventaja competitiva, metodologia de trabajo y
          el valor que aporta la IA dentro del negocio.
        </div>
      </section>

      <section className="bg-transparent px-[clamp(20px,6vw,72px)] py-10 relative z-10" id="contacto">
        <ContactSection title="CONTACTANOS" />
      </section>
    </main>
  );
}

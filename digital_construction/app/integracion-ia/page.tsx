import { ContactSection, IntroHighlights, LogosMarquee, SiteHeader } from "../components/site-sections";

export default function IntegracionIAPage() {
  return (
    <main className="w-full pt-[132px]">
      <section className="bg-background px-[clamp(20px,6vw,72px)] py-10 min-h-[360px]">
        <SiteHeader />

        <div className="flex justify-start w-[min(100%,980px)] mx-auto p-[32px_0_24px]">
          <div className="w-[min(100%,980px)]">
            <p className="m-0 mb-3.5 text-text-secondary text-[0.95rem] font-bold tracking-[0.08em]">DIGITAL CONSTRUCTION</p>
            <h1 className="m-0 text-title font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.95]">
              INTEGRACION IA
              <span className="block mt-2 text-[0.7em] text-text font-medium">en tu trabajo</span>
            </h1>
            <p className="max-w-[30ch] mt-6 mb-0 text-text-secondary text-[1.2rem] max-[640px]:text-[1rem] leading-[1.4]">
              Lleva tu negocio al siguiente nivel con IA, integrando asistentes,
              automatizaciones y analitica dentro de tu operacion real.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background-2 px-[clamp(20px,6vw,72px)] py-10">
        <LogosMarquee />

        <div className="w-[min(100%,980px)] mx-auto">
          <div className="max-w-[720px]">
            <IntroHighlights
              title="Cuentanos en que deseas integrar la IA y nosotros lo hacemos realidad."
              items={[
                "CHATBOTS",
                "AUTOMATIZACION DE PROCESOS",
                "INTEGRACION DE IA A LOS PROCESOS DE TU EMPRESA",
                "Asistentes de IA personalizados para tareas especificas",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-background px-[clamp(20px,6vw,72px)] py-10" id="contacto">
        <ContactSection title="COTIZA TU INTEGRACION" />
      </section>
    </main>
  );
}

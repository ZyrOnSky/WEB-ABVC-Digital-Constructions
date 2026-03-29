import Link from "next/link";
import Image from "next/image";

const logos = [
  { name: "ChatGPT", src: "/logos/chatgpt.svg" },
  { name: "Claude", src: "/logos/claude.svg" },
  { name: "DeepSeek", src: "/logos/deepseek.svg" },
  { name: "Gemini", src: "/logos/gemini-logo.svg" },
  { name: "Copilot", src: "/logos/microsoft-copilot-logo.svg" },
];

const marqueeLogos = [...logos, ...logos];

type HeaderProps = {
  contactHref?: string;
};

type IntroProps = {
  title: string;
  items: string[];
};

type ContactSectionProps = {
  title: string;
};

export function SiteHeader({ contactHref = "#contacto" }: HeaderProps) {
  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[20] flex items-center justify-between gap-6 w-[min(100%,980px)] mx-auto my-0 px-6 py-[18px] border-2 border-[rgba(59,130,246,0.65)] rounded-[22px] bg-[rgba(24,24,24,0.92)] backdrop-blur-[2px]">
      <Link className="flex items-center justify-center border-2 border-line bg-white/10 text-text-secondary text-center w-20 h-[46px] p-2 text-[0.85rem]" href="/">
        <span>Logo</span>
      </Link>

      <nav className="flex items-center gap-7 flex-wrap" aria-label="Principal">
        <details className="relative group">
          <summary className="flex items-center gap-3 min-w-[168px] px-[18px] py-3.5 border-2 border-line rounded-md list-none cursor-pointer text-text text-base after:content-[''] after:w-2 after:h-2 after:ml-auto after:border-r-2 after:border-b-2 after:border-current after:rotate-45">Servicios</summary>
          <div className="absolute top-[calc(100%+10px)] left-0 grid min-w-[220px] p-2.5 border border-line-soft rounded-[10px] bg-[#161616] z-[5]">
            <Link href="/#servicios" className="p-[10px_12px] color-text-secondary hover:text-text hover:bg-[rgba(59,130,246,0.12)]">Integracion IA</Link>
            <Link href="/#servicios" className="p-[10px_12px] color-text-secondary hover:text-text hover:bg-[rgba(59,130,246,0.12)]">Automatizacion</Link>
            <Link href="/#servicios" className="p-[10px_12px] color-text-secondary hover:text-text hover:bg-[rgba(59,130,246,0.12)]">Analisis con IA</Link>
          </div>
        </details>
        <Link href="/#proyectos" className="text-text text-base">Proyectos</Link>
        <Link href="/integracion-ia" className="text-text text-base">Integracion IA</Link>
        <Link href="/automatizacion" className="text-text text-base">Automatizacion</Link>
        <a className="inline-flex items-center justify-center px-7 py-3.5 border-0 rounded-full font-bold text-center bg-button text-white hover:bg-button-hover min-w-[140px]" href={contactHref}>
          Contacto
        </a>
      </nav>
    </div>
  );
}

export function LogosMarquee() {
  return (
    <div className="w-[min(100%,1200px)] mx-auto mb-12 overflow-hidden" aria-label="Logos destacados">
      <div className="flex gap-6 w-max animate-marquee-scroll hover:[animation-play-state:paused]">
        {marqueeLogos.map((logo, index) => (
          <div className="flex justify-center min-w-[180px] max-[920px]:min-w-[150px]" key={`${logo.name}-${index}`}>
            <div className="w-full min-h-[110px] p-3 flex flex-col justify-center gap-[10px] border-2 border-line bg-white/10 text-text-secondary text-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={56}
                className="w-auto max-w-full h-12 object-contain"
              /> 
              <span className="text-text text-[0.9rem] font-semibold text-center">{logo.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntroHighlights({ title, items }: IntroProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="m-0 font-display text-[clamp(2rem,5vw,7.5rem)] leading-[0.9] font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-[#888888] pb-2">
        {title}
      </h3>
      <ul className="mt-4 mb-0 p-0 flex flex-col gap-5 list-none">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-4 text-[#999999] text-[1.1rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 shrink-0"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AutomationDashboardUi() {
  return (
    <div className="w-full bg-[#070707] rounded-[1.5rem] border border-white/5 p-6 md:p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
      {/* Resplandor sutil interior */}
      <div className="absolute -top-10 -right-10 w-[80%] h-[100%] bg-teal-500/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="flex items-center justify-between relative z-10 font-bold tracking-wide">
        <div className="flex items-center gap-2 text-white text-[1rem]">
          <div className="px-3 py-2 bg-[#111111] rounded-xl border border-white/5 uppercase">ERP</div>
          <div className="h-[2px] w-6 md:w-16 bg-gradient-to-r from-gray-700 to-teal-800"></div>
          <div className="px-3 py-2 bg-[#111111] rounded-xl border border-white/5 uppercase">CRM</div>
        </div>
        <div className="px-3 py-1.5 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full text-xs font-mono tracking-wider">
          Sync Active
        </div>
      </div>

      <div className="flex flex-col gap-3 font-mono text-[0.85rem] relative z-10 w-full mt-2">
        {[{
          label: "Order #8921 Processed",
          status: "Success",
          color: "text-[#00e676]"
        }, {
          label: "Inventory Updated",
          status: "Success",
          color: "text-[#00e676]"
        }, {
          label: "Invoice Generated",
          status: "Success",
          color: "text-[#00e676]"
        }, {
          label: "Awaiting next trigger...",
          status: "Pending",
          color: "text-[#333333]"
        }].map((item, i) => (
          <div key={i} className="flex justify-between items-center p-3.5 rounded-xl bg-[#111111] border border-white/5 text-gray-400">
            <span className="truncate mr-4">{item.label}</span>
            <span className={`shrink-0 ${item.color}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactSection({ title }: ContactSectionProps) {
  return (
    <section>
      <div className="w-[min(100%,980px)] mx-auto mb-9 text-center">
        <p className="m-0 font-display text-[clamp(2rem,5vw,6rem)] leading-[0.9] font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-[#888888] pb-2">
          {title}</p>
      </div>

      <div className="grid grid-cols-[minmax(320px,1.1fr)_minmax(260px,0.75fr)] max-[920px]:grid-cols-1 gap-9 items-start w-[min(100%,980px)] mx-auto">
        <form className="grid gap-[18px] p-[22px] border-2 border-line">
          <div className="grid grid-cols-2 max-[920px]:grid-cols-1 gap-[18px]">
            <label className="grid gap-[18px]">
              <span className="inline-flex w-fit mb-2 px-4 py-2 border-2 border-line text-text">NOMBRE</span>
              <input type="text" placeholder="" className="w-full border-0 bg-[#f3f3f3] color-[#111111] p-[14px_16px]" />
            </label>
            <label className="grid gap-[18px]">
              <span className="inline-flex w-fit mb-2 px-4 py-2 border-2 border-line text-text">EMAIL</span>
              <input type="email" placeholder="" className="w-full border-0 bg-[#f3f3f3] color-[#111111] p-[14px_16px]" />
            </label>
          </div>

          <label className="grid gap-[18px]">
            <span className="inline-flex w-fit mb-2 px-4 py-2 border-2 border-line text-text">TELEFONO (opcional)</span>
            <input type="tel" placeholder="" className="w-full border-0 bg-[#f3f3f3] color-[#111111] p-[14px_16px]" />
          </label>

          <label className="grid gap-[18px]">
            <span className="inline-flex w-fit mb-2 px-4 py-2 border-2 border-line text-text">ASUNTO</span>
            <input type="text" placeholder="" className="w-full border-0 bg-[#f3f3f3] color-[#111111] p-[14px_16px]" />
          </label>

          <label className="grid gap-[18px]">
            <span className="inline-flex w-fit mb-2 px-4 py-2 border-2 border-line text-text">MENSAJE</span>
            <textarea rows={6} placeholder="" className="w-full border-0 bg-[#f3f3f3] color-[#111111] p-[14px_16px] resize-vertical min-h-[140px]" />
          </label>
        </form>

        <div className="grid gap-[18px] pt-16 max-[920px]:pt-0">
          <a
            className="flex items-center gap-[18px]"
            href="https://wa.me/593000000000"
            target="_blank"
            rel="noreferrer"
          >
            <Image
                src="/logos/whatsapp.svg"
                alt="WhatsApp"
                width={140}
                height={56}
                className="w-auto max-w-full h-12 object-contain"
              />
              <span className="text-text-secondary p-[10px_16px] border-2 border-line">+593 0000000</span> 
          </a>

          <a className="flex items-center gap-[18px]" href="mailto:abvcdigitalconstruction@ia.com">
            <Image
                src="/logos/gmail.svg"
                alt="email"
                width={140}
                height={56}
                className="w-auto max-w-full h-12 object-contain"
              />
              <span className="text-text-secondary p-[10px_16px] border-2 border-line">correo@ia.com</span> 
          </a>
        </div>

        <a className="inline-flex items-center justify-center px-7 py-3.5 border-0 rounded-full font-bold text-center bg-button text-white hover:bg-button-hover w-[min(100%,980px)] mx-auto" href="#contacto">
          Enviar mensaje
        </a>
      </div>
    </section>
  );
}

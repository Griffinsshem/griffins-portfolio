import { personal, social, site } from "@/config/portfolio";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="shell section-tight border-t border-line">
      <div className="grid-12 gap-y-10">
        <div className="col-span-12 flex flex-col gap-1 md:col-span-5">
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-ink">
            {personal.fullName}
          </p>
          <p className="text-[15px] text-muted">{personal.role}</p>
          <p className="text-[15px] text-faint">{personal.location}</p>
        </div>

        <nav aria-label="Footer" className="col-span-12 md:col-span-7 md:justify-self-end">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {social.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="link text-[15px] text-muted hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-12 mt-6 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="meta">
            © {year} {personal.fullName}
          </p>
          <p className="meta text-faint">{site.footerLine}</p>
        </div>
      </div>
    </footer>
  );
}

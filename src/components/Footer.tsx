import { Linkedin } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M4 6h16M4 10h12M4 14h16M4 18h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="text-lg font-heading font-bold text-brand-gold-light tracking-tight">stas</span>
                <span className="text-lg font-heading font-bold text-white tracking-tight">pack</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-6">
              Your dedicated procurement partner, bridging UK and European businesses
              with vetted manufacturers across Europe and Turkey.
            </p>
            <a
              href="https://www.linkedin.com/company/staspack-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 cursor-pointer transition-colors duration-200 hover:text-white/80"
              aria-label="Staspack on LinkedIn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-white/80 mb-4">Quick Links</h4>
            <nav className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/45 cursor-pointer transition-colors duration-200 hover:text-white/75"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-white/80 mb-4">Contact</h4>
            <div className="space-y-2.5 text-sm text-white/45">
              <a href="mailto:sales@staspack.com" className="block cursor-pointer transition-colors duration-200 hover:text-white/75">
                sales@staspack.com
              </a>
              <a href="tel:+447890823840" className="block cursor-pointer transition-colors duration-200 hover:text-white/75">
                +44 (0)7890 823840
              </a>
              <p>
                4 Ash Way, Didcot<br />
                OX11 6AN, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Staspack Procurement Services Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Company No. 15361486 | Registered in England & Wales
          </p>
        </div>
      </div>
    </footer>
  );
}

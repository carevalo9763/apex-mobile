import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrench, Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'Home',     href: '/'        },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about'    },
  { label: 'Contact',  href: '/contact'  },
];

export default function Nav() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#08080C]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
              <Wrench className="w-4 h-4 text-black" />
            </div>
            <span className="font-display font-bold text-white text-xl tracking-wide">
              APEX<span className="text-cyan-400"> MOBILE</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${
                  pathname === href ? 'text-cyan-400' : 'text-white/40 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:18005555555"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs rounded transition-colors btn-cyan"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
            <button onClick={() => setOpen(v => !v)} className="md:hidden text-white/60 hover:text-white transition-colors">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#08080C]/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="font-display font-bold text-5xl text-white/70 hover:text-cyan-400 transition-colors tracking-widest uppercase"
            >
              {label}
            </Link>
          ))}
          <a href="tel:18005555555" className="mt-4 inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded btn-cyan">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      )}
    </>
  );
}

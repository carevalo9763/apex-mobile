
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Wrench, Zap, Disc, Flame, Shield, Star, CheckCircle } from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: '2,400+', label: 'Cars Serviced',     ghost: '2K' },
  { value: '< 90',   label: 'Min On-Site',        ghost: '90' },
  { value: '4.9★',   label: 'Average Rating',     ghost: '4.9' },
  { value: '8yr',    label: 'In Business',         ghost: '8'  },
];

const services = [
  {
    icon: Zap,
    label: 'Diagnostic',
    desc: 'Full OBD-II scan and system check. We find the problem before you spend a dollar on parts.',
    accent: 'amber',
    photo: 'https://images.unsplash.com/photo-1632733711679-529326f6db12?auto=format&fit=crop&w=800&q=80',
    serviceKey: 'diagnostic',
  },
  {
    icon: Disc,
    label: 'Brake Service',
    desc: 'Pads, rotors, and calipers replaced at your location. Stop safely — every time.',
    accent: 'red',
    photo: 'https://images.unsplash.com/photo-1770834807387-820280f8270b?auto=format&fit=crop&w=800&q=80',
    serviceKey: 'brakes',
  },
  {
    icon: Flame,
    label: 'Spark Plugs',
    desc: 'Worn plugs rob your engine of power and fuel economy. We swap them fast, anywhere you are.',
    accent: 'amber',
    photo: 'https://images.unsplash.com/photo-1552656967-7a0991a13906?auto=format&fit=crop&w=800&q=80',
    serviceKey: 'spark-plugs',
  },
  {
    icon: Wrench,
    label: 'Bumper Swap',
    desc: 'Front or rear bumper replacement without the body shop wait. Parts + labor, at your door.',
    accent: 'amber',
    photo: 'https://images.unsplash.com/photo-1592665311898-70bc9126028e?auto=format&fit=crop&w=800&q=80',
    serviceKey: 'bumper',
  },
];

const marqueeItems = [
  '"Fixed my brakes in my parking garage" — Kevin M.',
  '2,400+ Cars Serviced',
  '"Showed up in 70 minutes, professional and clean." — Sofia L.',
  '4.9 ★  Average Rating',
  'Certified Mobile Technicians',
  '"Saved me a week at the shop" — Marcus T.',
  '< 90 Min On-Site',
  '8 Years in the Field',
  '"Best mobile mechanic in LA" — Priya N.',
];

const reviews = [
  { name: 'Kevin M.',  location: 'Downtown LA',    text: 'Fixed my brakes right in my parking garage. Done in under 2 hours. Absolutely wild how convenient this is.', service: 'Brake Service' },
  { name: 'Sofia L.',  location: 'West Hollywood', text: 'Showed up in 70 minutes, professional and clean. Ran the diagnostic and explained everything clearly.', service: 'Diagnostic' },
  { name: 'Marcus T.', location: 'Culver City',    text: 'Saved me a week waiting at the dealership. Got my spark plugs done in my driveway for half the price.', service: 'Spark Plugs' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#08080C]">

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Sports car background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1800&q=80&fit=crop"
            alt=""
            className="w-full h-full object-cover object-center opacity-50 scale-105"
            style={{ filter: 'grayscale(20%) brightness(0.65)' }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-[#08080C]/40" />
          {/* Amber glow */}
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/8 blur-[150px] rounded-full pointer-events-none" />
        </div>

        {/* Scroll placeholder — swap this with ScrollVideoEffect later */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400">Mobile Mechanic · Los Angeles</span>
            </div>

            <h1
              className="font-display text-white leading-[1.0] mb-8"
              style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
            >
              <span className="font-normal text-white/50">Your car.</span><br />
              <span className="font-extrabold text-white">Your driveway.</span><br />
              <span className="font-normal text-white/50">Our </span>
              <span className="font-extrabold text-cyan-400">tools.</span>
            </h1>

            <p className="text-white/45 text-lg max-w-lg leading-relaxed mb-12">
              Certified mobile mechanics that come to you — home, office, or parking garage.
              No tow trucks. No waiting rooms. No markup.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-cyan inline-flex items-center justify-center gap-2 px-9 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded transition-all text-sm tracking-wide"
              >
                Book a Mechanic <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:18005555555"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-cyan-500/20 text-white/60 hover:text-white hover:border-cyan-500/50 rounded font-bold transition-all text-sm"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#08080C] to-transparent" />
      </section>

      {/* 2. STATS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label, ghost }) => (
              <div
                key={label}
                className="relative p-8 border border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/25 transition-all duration-300 text-center overflow-hidden group rounded"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-500" />
                <span className="absolute inset-0 flex items-center justify-center font-display font-black text-white/[0.04] select-none pointer-events-none" style={{ fontSize: '80px' }}>
                  {ghost}
                </span>
                <div className="relative z-10">
                  <div className="font-display text-4xl font-bold text-white mb-2 group-hover:text-white/50 transition-colors">{value}</div>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-4">What We Do</p>
              <h2 className="font-display text-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}>
                <span className="font-normal text-white/40">Four services.</span><br />
                <span className="font-extrabold">Zero excuses.</span>
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/30 hover:text-cyan-400 font-bold text-sm transition-colors group shrink-0">
              View all services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, label, desc, accent, photo, serviceKey }) => (
              <Link
                key={label}
                to={`/contact?service=${serviceKey}`}
                className={`relative overflow-hidden rounded group transition-all duration-500 ${
                  accent === 'red'
                    ? 'border border-red-500/20 hover:border-red-500/40'
                    : 'border border-white/8 hover:border-cyan-500/30'
                }`}
              >
                {/* Background photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${photo})` }}
                />
                {/* Dark overlay */}
                <div className={`absolute inset-0 ${
                  accent === 'red'
                    ? 'bg-gradient-to-b from-black/40 via-black/60 to-black/88'
                    : 'bg-gradient-to-b from-black/35 via-black/55 to-black/88'
                }`} />

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className={`w-10 h-10 rounded flex items-center justify-center mb-5 ${
                    accent === 'red'
                      ? 'bg-red-500/20 border border-red-500/30'
                      : 'bg-cyan-500/20 border border-cyan-500/30'
                  }`}>
                    <Icon className={`w-5 h-5 ${accent === 'red' ? 'text-red-400' : 'text-cyan-400'}`} />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl uppercase tracking-wide mb-3">{label}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MARQUEE */}
      <div className="py-5 border-y border-white/5" style={{ overflow: 'hidden', background: 'linear-gradient(90deg, #08080C 0%, rgba(8,8,12,0.5) 10%, rgba(8,8,12,0.5) 90%, #08080C 100%)' }}>
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8 px-12">
              <span className="text-white/30 text-sm tracking-wide whitespace-nowrap">{item}</span>
              <span className="text-cyan-400/50 text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CAR BACKGROUND FEATURE — "We come to you" */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Car image right side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=1200&q=80&fit=crop"
            alt=""
            className="w-full h-full object-cover object-left"
            style={{ filter: 'grayscale(10%) brightness(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/40 to-transparent" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-6">No Shop. No Problem.</p>
            <h2 className="font-display text-white leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
              <span className="font-normal text-white/40">We bring the shop</span><br />
              <span className="font-extrabold">to your car.</span>
            </h2>
            <p className="text-white/35 text-base leading-relaxed mb-10 max-w-md">
              Whether you're at home, stuck at work, or in a parking structure — our certified technicians arrive fully equipped and ready to fix the problem on the spot.
            </p>
            <ul className="flex flex-col gap-4 mb-12">
              {[
                'Fully equipped service van — no waiting for parts',
                'Certified ASE technicians',
                'Transparent pricing before we start',
                'Available 7 days a week',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/50 text-sm">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="btn-cyan inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded transition-all text-sm"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS + CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — CTA */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-6">Free Estimate · No Commitment</p>
              <h2 className="font-display text-white leading-tight mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}>
                <span className="font-normal text-white/40">Ready to book</span><br />
                <span className="font-extrabold">a mechanic?</span>
              </h2>
              <p className="text-white/30 text-sm max-w-sm mb-10 leading-relaxed">
                Tell us your car and your problem — we'll give you a quote and show up ready to fix it.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['ASE Certified', '4.9★ Google', '7 Days a Week'].map(b => (
                  <div key={b} className="flex items-center gap-2 px-4 py-2 border border-white/8 bg-white/[0.03] rounded text-white/40 text-xs font-bold">
                    <Shield className="w-3 h-3 text-cyan-400" /> {b}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="btn-cyan inline-flex items-center gap-2 px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded font-bold transition-all text-sm"
              >
                Book a Mechanic <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — Reviews */}
            <div className="flex flex-col gap-4">
              {reviews.map(({ name, location, text, service }) => (
                <div key={name} className="p-6 border border-white/6 bg-white/[0.02] rounded hover:border-cyan-500/25 transition-all">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-white/50 fill-cyan-400" />
                    ))}
                    <span className="ml-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">{service}</span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">"{text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-[10px] font-black">
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-cyan-400 text-xs font-bold">{name}</p>
                      <p className="text-white/25 text-[10px]">{location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-amber-500 rounded flex items-center justify-center">
                <Wrench className="w-3.5 h-3.5 text-black" />
              </div>
              <span className="font-display font-bold text-white text-lg">APEX<span className="text-cyan-400"> MOBILE</span></span>
            </div>
            <p className="text-white/25 text-xs leading-relaxed mb-4">
              Certified mobile mechanics serving Los Angeles. We come to you — 7 days a week.
            </p>
            <span className="text-white/20 text-[11px]">ASE Certified Technicians</span>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-4">Services</p>
            <ul className="flex flex-col gap-2.5">
              {['Diagnostic', 'Brake Service', 'Spark Plugs', 'Bumper Swap'].map(s => (
                <li key={s}><Link to="/services" className="text-white/35 hover:text-white text-xs transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {[['Book', '/book'], ['Contact', '/contact'], ['Services', '/services']].map(([l, h]) => (
                <li key={l}><Link to={h} className="text-white/35 hover:text-white text-xs transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5">
              <li><a href="tel:18005555555" className="text-white/35 hover:text-white text-xs transition-colors">1-800-555-5555</a></li>
              <li><a href="mailto:hello@apexmobile.com" className="text-white/35 hover:text-white text-xs transition-colors">hello@apexmobile.com</a></li>
              <li className="text-white/35 text-xs leading-relaxed">Los Angeles, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 px-6 py-5 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-xs">© {new Date().getFullYear()} APEX Mobile Mechanics. All rights reserved.</p>
          <p className="text-white/15 text-xs">Los Angeles, CA · 7 Days a Week</p>
        </div>
      </footer>

    </div>
  );
}


import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Heart, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    label: 'Passion First',
    desc: 'We didn\'t get into this for the money. We got into it because cars are in our blood. That obsession is why we care about every job.',
  },
  {
    icon: Shield,
    label: 'Honest Work',
    desc: 'No upsells, no scare tactics. We tell you exactly what\'s wrong, what it costs, and what can wait — straight up.',
  },
  {
    icon: Wrench,
    label: 'Built for the Road',
    desc: 'From daily drivers to weekend warriors, we treat every car like it matters. Because to its owner, it does.',
  },
  {
    icon: Users,
    label: 'Community Roots',
    desc: 'We grew up here. LA is home. When we help you, we\'re helping our city — one car at a time.',
  },
];

export default function About() {
  return (
    <div className="bg-[#08080C] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* E36 background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1636974352227-f2d53dde5a9a?auto=format&fit=crop&w=1800&q=80"
            alt="BMW E36 M3"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'grayscale(5%) brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/50 to-[#08080C]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080C]/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-40 w-full">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-5">Our Story</p>
          <h1 className="font-display font-bold text-white leading-none uppercase mb-6" style={{ fontSize: 'clamp(48px, 8vw, 110px)' }}>
            <span className="font-normal text-white/45">Two brothers.</span><br />
            <span className="font-extrabold">One obsession.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-lg leading-relaxed">
            Born and raised in Los Angeles. Raised on BMWs, grease, and the idea that doing what you love is the only way to live.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-6">How It Started</p>
            <h2 className="font-display font-bold text-white leading-tight mb-8" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
              <span className="font-normal text-white/40">It wasn't a business plan.</span><br />
              <span className="font-extrabold">It was a driveway.</span>
            </h2>
            <div className="space-y-5 text-white/45 text-base leading-relaxed">
              <p>
                Growing up in LA, we didn't have a lot — but we had cars. Our dad had an old E30 he'd been fixing for years, and we'd spend weekends underneath it learning what made it tick. That's where the obsession started.
              </p>
              <p>
                As we got older, friends kept asking us to look at their cars. Word spread. One day we looked at each other and said — why not make this real? Why not build something that lets people get quality work done without the dealership runaround?
              </p>
              <p>
                APEX Mobile was born out of that driveway mentality. We come to you, we're straight with you, and we do the work right. That's it. That's always been it.
              </p>
            </div>
          </div>

          {/* E30 photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1707406767383-5aa5effb5620?auto=format&fit=crop&w=900&q=80"
                alt="BMW E30 M3"
                className="w-full h-[580px] object-cover"
                style={{ filter: 'grayscale(5%) brightness(0.9)', objectPosition: '50% 40%' }}
              />
              {/* Label */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">The Car That Started It All</p>
                  <p className="text-white font-bold text-sm">BMW E30 M3</p>
                </div>
              </div>
            </div>
            {/* Accent line */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-sm pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-sm pointer-events-none" />
          </div>

        </div>
      </section>

      {/* ── TWO BMW PANELS ── */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">

            {/* E30 Panel */}
            <div className="relative overflow-hidden rounded-sm group h-[580px]">
              <img
                src="https://images.unsplash.com/photo-1707406767383-5aa5effb5620?auto=format&fit=crop&w=900&q=80"
                alt="BMW E30 M3"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'grayscale(5%) brightness(0.85)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-2">The Legend</p>
                <h3 className="font-display font-bold text-white text-3xl uppercase leading-none mb-3">BMW E30 M3</h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                  The car our dad drove. The car that made us fall in love with machines. There's nothing like it.
                </p>
              </div>
            </div>

            {/* E36 Panel */}
            <div className="relative overflow-hidden rounded-sm group h-[580px]">
              <img
                src="https://images.unsplash.com/photo-1636974352227-f2d53dde5a9a?auto=format&fit=crop&w=900&q=80"
                alt="BMW E36 M3"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'grayscale(5%) brightness(0.85)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-2">Our Generation</p>
                <h3 className="font-display font-bold text-white text-3xl uppercase leading-none mb-3">BMW E36 M3</h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                  The one we built ourselves. Saved up, wrenched on it every weekend. Still drives to this day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-4">What We Stand For</p>
            <h2 className="font-display font-bold text-white leading-none" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
              <span className="font-normal text-white/40">Same values.</span><br />
              <span className="font-extrabold">Every single job.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="p-6 border border-white/6 bg-white/[0.02] hover:border-cyan-500/25 hover:bg-white/[0.04] transition-all duration-300 rounded group">
                <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-display font-bold text-white text-lg uppercase mb-3">{label}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-6">Ready to Work With Us?</p>
          <h2 className="font-display font-bold text-white leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
            <span className="font-normal text-white/40">Let's get your</span><br />
            <span className="font-extrabold">car sorted.</span>
          </h2>
          <p className="text-white/30 text-base leading-relaxed mb-10 max-w-md mx-auto">
            We bring the same passion we have for BMWs to every single car we touch. Book with us and see the difference.
          </p>
          <Link
            to="/contact"
            className="btn-cyan inline-flex items-center gap-2 px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded font-bold transition-all text-sm"
          >
            Book a Mechanic <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

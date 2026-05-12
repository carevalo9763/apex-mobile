
import { Link } from 'react-router-dom';
import { Zap, Disc, Flame, Wrench, ArrowRight, Phone } from 'lucide-react';

const services = [
  {
    icon: Zap,
    label: 'Diagnostic',
    accent: 'amber' as const,
    tagline: 'Know exactly what\'s wrong before spending a dollar.',
    items: ['Full OBD-II system scan', 'Check engine light diagnosis', 'Battery & charging test', 'Pre-purchase inspection'],
    photo: 'https://images.unsplash.com/photo-1632733711679-529326f6db12?auto=format&fit=crop&w=800&q=80',
    serviceKey: 'diagnostic',
  },
  {
    icon: Disc,
    label: 'Brake Service',
    accent: 'red' as const,
    tagline: 'Pads, rotors, and calipers — at your location.',
    items: ['Brake pad replacement', 'Rotor resurfacing or swap', 'Caliper replacement', 'Brake fluid flush'],
    photo: 'https://images.unsplash.com/photo-1770834807387-820280f8270b?auto=format&fit=crop&w=800&q=80',
    serviceKey: 'brakes',
  },
  {
    icon: Flame,
    label: 'Spark Plugs',
    accent: 'amber' as const,
    tagline: 'Restore lost power and fuel economy in under an hour.',
    items: ['Standard & iridium plugs', 'Ignition coil check', 'All makes and models', 'Before & after performance test'],
    photo: 'https://images.unsplash.com/photo-1552656967-7a0991a13906?auto=format&fit=crop&w=800&q=80',
    serviceKey: 'spark-plugs',
  },
  {
    icon: Wrench,
    label: 'Bumper Swap',
    accent: 'amber' as const,
    tagline: 'Front or rear — no body shop, no week-long wait.',
    items: ['OEM & aftermarket fitment', 'Paint-matched options', 'Sensor & camera reinstall', 'Same-day in most cases'],
    photo: 'https://images.unsplash.com/photo-1592665311898-70bc9126028e?auto=format&fit=crop&w=800&q=80',
    serviceKey: 'bumper',
  },
];

export default function Services() {
  return (
    <div className="bg-[#08080C] min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-4">What We Offer</p>
          <h1 className="font-display font-bold text-white leading-none uppercase mb-4" style={{ fontSize: 'clamp(40px, 7vw, 88px)' }}>
            Our Services
          </h1>
          <p className="text-white/35 text-base max-w-md leading-relaxed">
            Four focused services. Certified techs. Done at your location — no tow, no waiting room.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {services.map(({ icon: Icon, label, accent, tagline, items, photo, serviceKey }) => (
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
              {/* Dark overlay — lighter at top to show photo, heavier at bottom for readability */}
              <div className={`absolute inset-0 ${
                accent === 'red'
                  ? 'bg-gradient-to-b from-black/40 via-black/60 to-black/88'
                  : 'bg-gradient-to-b from-black/35 via-black/55 to-black/88'
              }`} />

              {/* Content */}
              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded flex items-center justify-center shrink-0 ${
                    accent === 'red'
                      ? 'bg-red-500/20 border border-red-500/30'
                      : 'bg-cyan-500/20 border border-cyan-500/30'
                  }`}>
                    <Icon className={`w-4 h-4 ${accent === 'red' ? 'text-red-400' : 'text-cyan-400'}`} />
                  </div>
                  <p className={`text-[9px] font-black uppercase tracking-[0.35em] ${accent === 'red' ? 'text-red-400' : 'text-cyan-400'}`}>
                    {label}
                  </p>
                </div>
                <h2 className="text-white font-bold text-lg leading-snug mb-5">{tagline}</h2>
                <ul className="flex flex-col gap-2.5">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                      <span className={`w-1 h-1 rounded-full shrink-0 ${accent === 'red' ? 'bg-red-400' : 'bg-cyan-400'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-white/6">
          <div>
            <p className="text-white/60 font-bold text-sm mb-1">Ready to book?</p>
            <p className="text-white/25 text-xs">Free estimate · We come to you · 7 days a week.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:18005555555" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-white/50 hover:text-white hover:border-cyan-500/25 rounded font-bold transition-colors text-sm">
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
            <Link to="/contact" className="btn-cyan inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black rounded font-bold transition-colors text-sm">
              Book a Mechanic <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

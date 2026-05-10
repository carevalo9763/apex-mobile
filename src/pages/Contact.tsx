import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight, ChevronLeft, CheckCircle2, User, Car, Calendar, Tag } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const pricing: Record<string, { label: string; price: string; note: string }> = {
  diagnostic:  { label: 'Diagnostic',   price: 'Custom Estimate',   note: 'Every car is different — we\'ll assess on-site and give you a full breakdown before any work begins.' },
  brakes:      { label: 'Brake Service', price: '$100 per brake',    note: 'Includes brake pad replacement. Rotors, calipers, and fluid flush quoted separately if needed.' },
  'spark-plugs': { label: 'Spark Plugs', price: '$80 full service',  note: 'All plugs replaced in one visit. Iridium or standard — your choice. All makes and models.' },
  bumper:      { label: 'Bumper Swap',   price: '$100 – $150 / piece', note: 'Front or rear. Price varies by fitment and part. We\'ll confirm the exact number before we start.' },
};

const info = [
  { icon: Phone,  label: 'Phone',   value: '1-800-555-5555',            href: 'tel:18005555555' },
  { icon: Mail,   label: 'Email',   value: 'hello@apexmobile.com',      href: 'mailto:hello@apexmobile.com' },
  { icon: MapPin, label: 'Area',    value: 'Los Angeles & Surrounding',  href: null },
  { icon: Clock,  label: 'Hours',   value: '7 Days a Week · 8am – 7pm', href: null },
];

type Step = 1 | 2 | 3 | 4;

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [mapActive, setMapActive]   = useState(false);
  const [step, setStep]             = useState<Step>(1);
  const [loading, setLoading]       = useState(false);
  const [form, setForm]             = useState({
    name: '', email: '', phone: '',
    year: '', make: '', model: '',
    service: searchParams.get('service') ?? '', location: '', description: '',
    date: '', time: '',
  });
  const lastActivity = useRef<number>(Date.now());

  useEffect(() => {
    const onActivity = () => { lastActivity.current = Date.now(); };
    document.addEventListener('mousemove', onActivity);
    document.addEventListener('keydown',   onActivity, true);
    document.addEventListener('keyup',     onActivity, true);

    const interval = setInterval(() => {
      const active   = document.activeElement;
      const isTyping = active && ['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName as string);
      const idleMs   = Date.now() - lastActivity.current;

      if (isTyping) {
        lastActivity.current = Date.now();
        setMapActive(false);
      } else if (idleMs > 5000) {
        setMapActive(true);
      } else {
        setMapActive(false);
      }
    }, 500);

    return () => {
      document.removeEventListener('mousemove', onActivity);
      document.removeEventListener('keydown',   onActivity, true);
      document.removeEventListener('keyup',     onActivity, true);
      clearInterval(interval);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const next = () => {
    if (step === 3) {
      setLoading(true);
      setTimeout(() => { setLoading(false); setStep(4); }, 1200);
    } else {
      setStep(s => Math.min(s + 1, 4) as Step);
    }
  };
  const prev = () => setStep(s => Math.max(s - 1, 1) as Step);
  const progress = (step / 4) * 100;

  return (
    <div className="relative bg-[#08080C] min-h-screen overflow-hidden">

      {/* ── Google Maps — always in background ── */}
      <iframe
        title="Los Angeles Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106508!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
        className="absolute inset-0 w-full h-full"
        style={{
          border: 0,
          filter: 'invert(92%) hue-rotate(180deg) brightness(0.95) saturate(0.8)',
          pointerEvents: mapActive ? 'auto' : 'none',
          transition: 'opacity 0.7s ease',
          opacity: mapActive ? 1 : 0.7,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* ── Dark overlay — fades when map is active ── */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #08080C 0%, rgba(8,8,12,0.7) 40%, rgba(8,8,12,0.4) 100%)', opacity: mapActive ? 0 : 1 }}
      />

      {/* ── Page content ── */}
      <div
        className="relative z-10 transition-all duration-700"
        style={{ opacity: mapActive ? 0 : 1, pointerEvents: mapActive ? 'none' : 'auto' }}
      >
        {/* Header */}
        <div className="pt-36 pb-12 px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-5">Get in Touch</p>
          <h1 className="font-display font-bold text-white leading-none uppercase mb-5" style={{ fontSize: 'clamp(42px, 7vw, 96px)' }}>
            Let's talk.
          </h1>
          <p className="text-white/35 text-base max-w-md mx-auto">
            Questions, quotes, or just not sure what's wrong — we respond fast.
          </p>
        </div>

        {/* Content */}
        <section className="px-6 pb-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Left: info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start p-5 border border-white/6 bg-black/40 backdrop-blur-sm rounded">
                  <div className="w-9 h-9 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-1">{label}</p>
                    {href
                      ? <a href={href} className="text-white/65 hover:text-white text-sm transition-colors">{value}</a>
                      : <p className="text-white/65 text-sm">{value}</p>
                    }
                  </div>
                </div>
              ))}

              {/* Callout */}
              <div className="p-5 border border-cyan-500/20 bg-black/40 backdrop-blur-sm rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan-400">Same-Day Availability</span>
                </div>
                <p className="text-white/40 text-sm mb-4 leading-relaxed">
                  Need someone today? Call us directly — we'll check availability on the spot.
                </p>
                <a href="tel:18005555555" className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm rounded transition-colors btn-cyan">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>

            {/* Right: 3-step form */}
            <div className="lg:col-span-3">

              {/* Pricing callout — only shows when a service is pre-selected */}
              {form.service && pricing[form.service] && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-5 border border-cyan-500/25 bg-cyan-500/5 backdrop-blur-sm rounded flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Tag className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-1">
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400">{pricing[form.service].label}</p>
                      <span className="text-white font-bold text-lg leading-none">{pricing[form.service].price}</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed">{pricing[form.service].note}</p>
                  </div>
                </motion.div>
              )}

              {/* Progress bar */}
              {step < 4 && (
                <div className="h-1 bg-white/5 rounded-full mb-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-cyan-500 rounded-full"
                    style={{ boxShadow: '0 0 16px rgba(6,182,212,0.6)' }}
                  />
                </div>
              )}

              {/* Step indicators */}
              {step < 4 && (
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map(s => (
                    <div key={s} className={`flex items-center gap-2 ${s < step ? 'text-white/50' : s === step ? 'text-white' : 'text-white/20'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border ${
                        s < step ? 'bg-cyan-500 border-cyan-500 text-black' : s === step ? 'border-white/40 bg-white/5' : 'border-white/10'
                      }`}>
                        {s < step ? '✓' : s}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] hidden sm:block">
                        {s === 1 ? 'Your Info' : s === 2 ? 'Your Car' : 'Schedule'}
                      </span>
                      {s < 3 && <div className="w-6 h-px bg-white/10 ml-1" />}
                    </div>
                  ))}
                </div>
              )}

              <div className="border border-white/6 bg-black/40 backdrop-blur-sm rounded p-8">
                <AnimatePresence mode="wait">

                  {/* Step 1 — Contact Info */}
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-5">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-2">Step 01 of 03</p>
                        <h2 className="font-display font-bold text-white text-2xl uppercase mb-1">Your Info</h2>
                        <p className="text-white/30 text-sm">How do we reach you?</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2 flex items-center gap-2"><User className="w-3 h-3" /> Full Name *</label>
                          <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                            className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2 flex items-center gap-2"><Phone className="w-3 h-3" /> Phone *</label>
                          <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="(555) 000-0000"
                            className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2 flex items-center gap-2"><Mail className="w-3 h-3" /> Email *</label>
                        <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@example.com"
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2 flex items-center gap-2"><MapPin className="w-3 h-3" /> Your Location *</label>
                        <input name="location" value={form.location} onChange={handleChange} required placeholder="Address where you need service"
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2 — Vehicle + Service */}
                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-5">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-2">Step 02 of 03</p>
                        <h2 className="font-display font-bold text-white text-2xl uppercase mb-1">Your Car</h2>
                        <p className="text-white/30 text-sm">Tell us about the vehicle.</p>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2">Year</label>
                          <input name="year" value={form.year} onChange={handleChange} placeholder="2019"
                            className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2">Make</label>
                          <input name="make" value={form.make} onChange={handleChange} placeholder="Toyota"
                            className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2">Model</label>
                          <input name="model" value={form.model} onChange={handleChange} placeholder="Camry"
                            className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2 flex items-center gap-2"><Car className="w-3 h-3" /> Service Needed</label>
                        <div className="relative">
                          <select name="service" value={form.service} onChange={handleChange}
                            className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer">
                            <option value="" className="bg-[#08080C]">Select a service…</option>
                            <option value="diagnostic"  className="bg-[#08080C]">Diagnostic</option>
                            <option value="brakes"      className="bg-[#08080C]">Brake Service</option>
                            <option value="spark-plugs" className="bg-[#08080C]">Spark Plugs</option>
                            <option value="bumper"      className="bg-[#08080C]">Bumper Swap</option>
                          </select>
                          <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none rotate-90" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2">Describe the Issue</label>
                        <textarea name="description" value={form.description} onChange={handleChange} rows={3}
                          placeholder="Any details that help us prepare the right parts…"
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none" />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3 — Schedule */}
                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-5">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-2">Step 03 of 03</p>
                        <h2 className="font-display font-bold text-white text-2xl uppercase mb-1">Schedule</h2>
                        <p className="text-white/30 text-sm">When works best for you?</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2 flex items-center gap-2"><Calendar className="w-3 h-3" /> Preferred Date</label>
                          <input type="date" name="date" value={form.date} onChange={handleChange}
                            className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors [color-scheme:dark]" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-black uppercase tracking-[0.25em] text-white/25 mb-2 flex items-center gap-2"><Clock className="w-3 h-3" /> Preferred Time</label>
                          <div className="relative">
                            <select name="time" value={form.time} onChange={handleChange}
                              className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer">
                              <option value="" className="bg-[#08080C]">Select a time…</option>
                              <option value="morning"   className="bg-[#08080C]">Morning (8am – 12pm)</option>
                              <option value="afternoon" className="bg-[#08080C]">Afternoon (12pm – 4pm)</option>
                              <option value="evening"   className="bg-[#08080C]">Evening (4pm – 7pm)</option>
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none rotate-90" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border border-cyan-500/20 bg-cyan-500/5 rounded flex gap-3">
                        <Car className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <p className="text-white/40 text-sm leading-relaxed">
                          A technician will call to confirm your window. Most bookings are confirmed within 30 minutes.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4 — Confirmed */}
                  {step === 4 && (
                    <motion.div key="s4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-6">
                      <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto" style={{ boxShadow: '0 0 40px rgba(6,182,212,0.4)' }}>
                        <CheckCircle2 className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-white text-3xl uppercase mb-3">You're Booked.</h2>
                        <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
                          Thanks, <span className="text-white font-bold">{form.name.split(' ')[0] || 'there'}</span>! We'll call <span className="text-white font-bold">{form.phone}</span> within 30 minutes to confirm.
                        </p>
                      </div>
                      <button onClick={() => { setStep(1); setForm({ name:'',email:'',phone:'',year:'',make:'',model:'',service:'',location:'',description:'',date:'',time:'' }); }}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-bold transition-colors">
                        Submit another request
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Nav buttons */}
                {step < 4 && (
                  <div className="flex justify-between mt-8 pt-6 border-t border-white/6">
                    <button onClick={prev} disabled={step === 1}
                      className={`flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.4em] transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-white/25 hover:text-white'}`}>
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button onClick={next} disabled={loading}
                      className="btn-cyan inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-black rounded font-bold transition-all text-sm">
                      {loading ? 'Booking…' : step === 3 ? 'Confirm Booking' : 'Continue'} <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}

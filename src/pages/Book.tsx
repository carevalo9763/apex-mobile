import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, Wrench, User, Phone, Mail, MapPin, Car, Calendar, Clock, Star, Shield } from 'lucide-react';

type Step = 1 | 2 | 3 | 4;

const reviews = [
  { name: 'Kevin M.',  text: 'Fixed my brakes in my parking garage. Done in under 2 hours.',   service: 'Brake Service' },
  { name: 'Sofia L.',  text: 'Showed up in 70 min, professional and clean. Explained everything.', service: 'Diagnostic' },
  { name: 'Marcus T.', text: 'Saved me a week at the dealership. Done in my driveway.',          service: 'Spark Plugs' },
];

const trust = [
  { icon: Shield, label: 'ASE Certified',    sub: 'Licensed techs' },
  { icon: Star,   label: '4.9★ Google',      sub: '600+ reviews' },
  { icon: Clock,  label: '< 90 Min On-Site', sub: '7 days a week' },
];

export default function Book() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    year: '', make: '', model: '',
    service: searchParams.get('service') ?? '', location: '', description: '',
    date: '', time: '',
  });

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
    <div className="bg-[#08080C] min-h-screen pt-20 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-3">Free Estimate</p>
          <h1 className="font-display font-bold text-white leading-none uppercase" style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}>
            Book a Mechanic
          </h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Left: Form ── */}
          <div className="lg:col-span-3">
            {/* Progress */}
            <div className="h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
                className="h-full bg-cyan-500 rounded-full"
                style={{ boxShadow: '0 0 16px rgba(6,182,212,0.6)' }}
              />
            </div>

            {/* Step indicators */}
            {step < 4 && (
              <div className="flex items-center gap-2 mb-8">
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

            {/* Form card */}
            <div className="border border-white/6 bg-white/[0.02] rounded p-8 md:p-10">
              <AnimatePresence mode="wait">

                {/* Step 1 — Contact */}
                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-6">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-2">Step 01 of 03</p>
                      <h2 className="font-display font-bold text-white text-3xl uppercase mb-1">Your Info</h2>
                      <p className="text-white/30 text-sm">How do we reach you?</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2 flex items-center gap-2"><User className="w-3 h-3" /> Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2 flex items-center gap-2"><Phone className="w-3 h-3" /> Phone *</label>
                        <input name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="(555) 000-0000"
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2 flex items-center gap-2"><Mail className="w-3 h-3" /> Email *</label>
                      <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@example.com"
                        className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2 flex items-center gap-2"><MapPin className="w-3 h-3" /> Your Location *</label>
                      <input name="location" value={form.location} onChange={handleChange} required placeholder="Address where you need service"
                        className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                    </div>
                  </motion.div>
                )}

                {/* Step 2 — Vehicle */}
                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-6">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-2">Step 02 of 03</p>
                      <h2 className="font-display font-bold text-white text-3xl uppercase mb-1">Your Car</h2>
                      <p className="text-white/30 text-sm">Tell us about the vehicle.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2">Year</label>
                        <input name="year" value={form.year} onChange={handleChange} placeholder="2019"
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2">Make</label>
                        <input name="make" value={form.make} onChange={handleChange} placeholder="Toyota"
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2">Model</label>
                        <input name="model" value={form.model} onChange={handleChange} placeholder="Camry"
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2 flex items-center gap-2"><Wrench className="w-3 h-3" /> Service Needed</label>
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
                      <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2">Describe the Issue</label>
                      <textarea name="description" value={form.description} onChange={handleChange} rows={3}
                        placeholder="Any details that help us prepare the right parts…"
                        className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white placeholder-white/15 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none" />
                    </div>
                  </motion.div>
                )}

                {/* Step 3 — Schedule */}
                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="space-y-6">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-400 mb-2">Step 03 of 03</p>
                      <h2 className="font-display font-bold text-white text-3xl uppercase mb-1">Schedule</h2>
                      <p className="text-white/30 text-sm">When works best for you?</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2 flex items-center gap-2"><Calendar className="w-3 h-3" /> Preferred Date</label>
                        <input type="date" name="date" value={form.date} onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/8 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors [color-scheme:dark]" />
                      </div>
                      <div>
                        <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-2 flex items-center gap-2"><Clock className="w-3 h-3" /> Preferred Time</label>
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
                      <h2 className="font-display font-bold text-white text-4xl uppercase mb-3">You're Booked.</h2>
                      <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
                        Thanks, <span className="text-white font-bold">{form.name.split(' ')[0]}</span>! We'll call <span className="text-white font-bold">{form.phone}</span> within 30 minutes to confirm your appointment.
                      </p>
                    </div>
                    <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded font-bold transition-colors text-sm btn-cyan">
                      Back to Home
                    </Link>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Nav */}
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

          {/* ── Right: Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:sticky lg:top-24">

            {/* Trust */}
            <div className="border border-white/6 bg-white/[0.02] rounded p-5">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-4">Why APEX</p>
              <div className="flex flex-col gap-3">
                {trust.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-cyan-400 text-xs font-bold">{label}</p>
                      <p className="text-white/25 text-[10px]">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="border border-white/6 bg-white/[0.02] rounded p-5">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-4">What customers say</p>
              <div className="flex flex-col gap-4">
                {reviews.map(({ name, text, service }) => (
                  <div key={name} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 text-white/50 fill-cyan-400" />
                      ))}
                      <span className="ml-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">{service}</span>
                    </div>
                    <p className="text-white/45 text-xs leading-relaxed mb-3">"{text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-[9px] font-black">
                        {name[0]}
                      </div>
                      <p className="text-white/60 text-[11px] font-bold">{name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call */}
            <div className="p-5 border border-white/8 bg-white/[0.02] rounded">
              <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] mb-2">Prefer to call?</p>
              <a href="tel:18005555555" className="text-cyan-400 hover:text-cyan-300 font-bold text-sm transition-colors flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> 1-800-555-5555
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 lg:pt-36 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1.5 backdrop-blur-sm text-fuchsia-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Live Alpha Now Available
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
            Command the Arcane Arena
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-fuchsia-100/80 leading-relaxed">
            A modern MOBA where neon mysticism meets competitive mastery. Forge your legend with spellbound classes, fluid combat, and seasonal ladders.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-fuchsia-600/25 ring-1 ring-white/10 hover:brightness-110 transition">
              Play Free
            </a>
            <a href="#features" className="inline-flex justify-center items-center rounded-xl bg-white/10 px-6 py-3 text-sm sm:text-base font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/15 transition">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

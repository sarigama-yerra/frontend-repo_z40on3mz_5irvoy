import { motion } from 'framer-motion';
import { Zap, Shield, Swords, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Hyper-fluid Combat',
    desc: 'Cancel chains, blink skills, and responsive movement tuned for precision play.'
  },
  {
    icon: Shield,
    title: 'Tactical Depth',
    desc: 'Lane pressure, arcane objectives, and dynamic fog shape every match.'
  },
  {
    icon: Swords,
    title: 'Class Alchemy',
    desc: 'Fuse runes to evolve roles mid-match and counter enemy comps.'
  },
  {
    icon: Sparkles,
    title: 'Arcane Aesthetic',
    desc: 'Purple neon, reactive VFX, and immersive sound design inspired by modern fantasy.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed for Competitive Flow</h2>
          <p className="mt-3 text-fuchsia-100/80">Every system is built to reward skill expression and team creativity.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur-xl hover:bg-white/7 transition group"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 grid place-items-center mb-4 shadow-[0_0_25px_rgba(168,85,247,0.45)]">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-fuchsia-100/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

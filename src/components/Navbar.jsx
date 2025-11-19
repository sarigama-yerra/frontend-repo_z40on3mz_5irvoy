import { Menu, Sword, Gamepad2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 ring-1 ring-white/10 grid place-items-center shadow-[0_0_35px_rgba(168,85,247,0.55)]">
            <Gamepad2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold leading-none tracking-tight">Arcane MOBA</p>
            <p className="text-xs text-fuchsia-200/70">A modern arena of sorcery</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
          <a href="#classes" className="text-sm text-white/80 hover:text-white transition">Classes</a>
          <a href="#modes" className="text-sm text-white/80 hover:text-white transition">Modes</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 ring-1 ring-white/10 hover:brightness-110 transition">
            <Sword className="h-4 w-4" /> Play Alpha
          </a>
        </div>

        <button onClick={() => setOpen(v => !v)} className="md:hidden rounded-xl ring-1 ring-white/10 p-2 text-white/90 hover:text-white">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-4 space-y-3">
          <a href="#features" className="block text-white/80">Features</a>
          <a href="#classes" className="block text-white/80">Classes</a>
          <a href="#modes" className="block text-white/80">Modes</a>
          <a href="#" className="block text-white font-medium">Play Alpha</a>
        </div>
      )}
    </header>
  );
}

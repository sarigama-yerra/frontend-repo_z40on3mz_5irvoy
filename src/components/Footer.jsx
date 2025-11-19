export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-fuchsia-100/70">© 2025 Arcane MOBA. All rights reserved.</p>
        <div className="flex items-center gap-6 text-xs text-fuchsia-100/70">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>
      </div>
    </footer>
  );
}

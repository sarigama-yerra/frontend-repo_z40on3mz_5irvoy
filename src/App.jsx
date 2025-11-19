import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* subtle background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(124,58,237,0.08),transparent_70%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  )
}

export default App

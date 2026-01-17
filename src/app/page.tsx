import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F0FDF4] text-zinc-900 selection:bg-emerald-500/30 overflow-hidden relative font-sans">
      {/* Premium Gradient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/50 blur-[150px] rounded-full -mr-48 -mt-48 opacity-70" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/50 blur-[150px] rounded-full -ml-48 -mb-48 opacity-70" />

      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
            <span className="text-white font-black text-xl italic">N</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-emerald-900 uppercase">NairaFlow</span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold text-emerald-800">
          <Link href="#" className="hover:text-emerald-600 transition-colors">How it Works</Link>
          <Link href="/proofs" className="hover:text-emerald-600 transition-colors">Payment Proofs</Link>
          <Link href="/api/auth/twitter" className="px-6 py-3 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200/50 active:scale-95">Claim Bonus</Link>
        </div>
      </nav>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Limited Offer: Claim ₦2,000 Signup Bonus
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 max-w-4xl mx-auto text-zinc-900 leading-[1.05]">
          Make Money With Your <span className="text-emerald-600 italic">X Account</span> Daily
        </h1>

        <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          Join 50k+ Nigerians earning daily rewards. No manual tasks, no complex setup. Claim your <span className="text-emerald-700 font-bold underline decoration-emerald-200 underline-offset-4">₦2,000 bonus</span> instantly.
        </p>

        <div className="w-full max-w-md bg-white p-10 rounded-[48px] shadow-[0_48px_80px_-24px_rgba(5,150,105,0.15)] border border-emerald-100/50 relative hover:shadow-[0_48px_80px_-24px_rgba(5,150,105,0.25)] transition-shadow duration-500">
          <div className="absolute -top-5 -right-5 bg-yellow-400 text-black font-black text-sm px-5 py-2.5 rounded-2xl transform rotate-12 shadow-xl border-4 border-white animate-bounce">
            INSTANT WITHDRAWAL
          </div>

          <h2 className="text-3xl font-black mb-8 text-zinc-800 tracking-tight">Claim Your Bonus</h2>

          <Link
            href="/api/auth/twitter"
            className="group w-full py-6 bg-black text-white rounded-[28px] font-bold text-xl hover:bg-zinc-800 transition-all duration-300 shadow-2xl shadow-black/20 flex items-center justify-center gap-3 overflow-hidden active:scale-[0.98]"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Sign Up with X
          </Link>

          <div className="mt-8 pt-8 border-t border-zinc-50 space-y-4">
            <div className="flex items-center gap-3 text-zinc-500 text-sm font-semibold">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Password Required
            </div>
            <div className="flex items-center gap-3 text-zinc-500 text-sm font-semibold">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Instant Wallet Activation
            </div>
          </div>

          <p className="mt-8 text-zinc-400 text-[11px] font-bold uppercase tracking-widest leading-[1.6]">
            SECURED BY OAUTH 1.0A • 100% VERIFIED
          </p>
        </div>

        {/* Status Preview */}
        <div className="mt-24 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-emerald-600 mb-1">54.2K</span>
            <span className="text-zinc-500 font-bold text-sm uppercase tracking-wider">Active Earners</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-emerald-600 mb-1">₦15.8M</span>
            <span className="text-zinc-500 font-bold text-sm uppercase tracking-wider">Total Paid Out</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-emerald-600 mb-1">4.9/5</span>
            <span className="text-zinc-500 font-bold text-sm uppercase tracking-wider">User Trust Score</span>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-16 border-t border-emerald-100/50 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 grayscale brightness-50 opacity-50">
            <span className="font-black text-xl tracking-tighter">NairaFlow</span>
          </div>
          <p className="text-emerald-800 text-sm font-bold tracking-widest uppercase">
            &copy; 2026 NairaFlow Technologies Ltd • Nigeria
          </p>
          <div className="flex gap-6 text-xs font-bold text-emerald-700/50 uppercase tracking-widest">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

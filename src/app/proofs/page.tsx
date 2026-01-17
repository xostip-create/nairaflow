import Link from 'next/link';

const payments = [
    { name: "Oluwaseun A.", bank: "Access Bank", amount: "₦15,000", time: "2 mins ago" },
    { name: "Chinedu O.", bank: "Zenith Bank", amount: "₦8,500", time: "15 mins ago" },
    { name: "Blessing T.", bank: "Kuda Bank", amount: "₦12,000", time: "24 mins ago" },
    { name: "Ibrahim K.", bank: "GTBank", amount: "₦25,000", time: "1 hour ago" },
    { name: "Adebayo S.", bank: "First Bank", amount: "₦5,000", time: "2 hours ago" },
    { name: "Nkechi E.", bank: "UBA", amount: "₦10,000", time: "3 hours ago" },
    { name: "Tunde O.", bank: "Access Bank", amount: "₦3,500", time: "5 hours ago" },
    { name: "Ehimare J.", bank: "Moniepoint", amount: "₦45,000", time: "6 hours ago" },
    { name: "Zainab M.", bank: "Stanbic IBTC", amount: "₦18,000", time: "8 hours ago" },
    { name: "Chisom P.", bank: "Opay", amount: "₦7,200", time: "10 hours ago" },
];

export default function PaymentProofs() {
    return (
        <main className="min-h-screen bg-[#F0FDF4] text-zinc-900 selection:bg-emerald-500/30 overflow-hidden relative font-sans">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/50 blur-[150px] rounded-full -mr-48 -mt-48 opacity-70" />

            <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
                        <span className="text-white font-black text-xl italic">N</span>
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-emerald-900 uppercase">NairaFlow</span>
                </Link>
            </nav>

            <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-zinc-900 mb-4 tracking-tight">Recent Payouts</h1>
                    <p className="text-zinc-600 font-medium text-lg">Verified transfers to our active earners across Nigeria.</p>
                </div>

                <div className="bg-white rounded-[40px] shadow-[0_48px_80px_-24px_rgba(5,150,105,0.12)] border border-emerald-100/50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-widest border-b border-emerald-100">
                                    <th className="px-8 py-6 uppercase">Receiver</th>
                                    <th className="px-8 py-6 uppercase">Bank</th>
                                    <th className="px-8 py-6 uppercase">Amount</th>
                                    <th className="px-8 py-6 uppercase">Status</th>
                                    <th className="px-8 py-6 uppercase text-right">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-50">
                                {payments.map((p, i) => (
                                    <tr key={i} className="hover:bg-emerald-50/30 transition-colors">
                                        <td className="px-8 py-6 font-bold text-zinc-800">{p.name}</td>
                                        <td className="px-8 py-6 font-semibold text-zinc-500">{p.bank}</td>
                                        <td className="px-8 py-6 font-black text-emerald-600">{p.amount}</td>
                                        <td className="px-8 py-6">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-full border border-emerald-200 shadow-sm">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                                Successful
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right font-medium text-zinc-400 text-xs">{p.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-1 bg-white rounded-3xl shadow-xl border border-emerald-50">
                        <Link
                            href="/api/auth/twitter"
                            className="flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-[20px] font-bold text-lg hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-200"
                        >
                            Start Earning Now
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                    <p className="mt-6 text-zinc-400 text-xs font-bold uppercase tracking-widest">Join 54,203 others making money daily</p>
                </div>
            </section>

            <footer className="relative z-10 py-16 text-center">
                <p className="text-emerald-800 text-[10px] font-black tracking-[0.2em] uppercase opacity-50">
                    &copy; 2026 NairaFlow Technologies Ltd • Nigeria
                </p>
            </footer>
        </main>
    );
}

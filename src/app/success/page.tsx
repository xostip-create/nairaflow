import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "System Error | 503 Service Unavailable",
    description: "A technical error occurred while processing your request.",
};

export default function ErrorPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#FDF2F2] text-zinc-900 overflow-hidden relative font-sans">
            <div className="max-w-md w-full bg-white p-12 rounded-[48px] shadow-[0_48px_80px_-24px_rgba(239,68,68,0.1)] border border-red-100 text-center relative">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-red-50">
                    <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <h1 className="text-3xl font-black mb-4 text-red-900 tracking-tight">
                    System Error 503
                </h1>

                <div className="bg-red-50 text-red-700 font-bold text-sm py-2 px-4 rounded-xl inline-block mb-8 border border-red-100">
                    Internal Server Timeout
                </div>

                <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
                    We encountered a technical issue while finalizing your account setup. Your request could not be completed at this time due to high traffic on our servers.
                </p>

                <p className="text-zinc-600 mb-10 font-bold text-sm">
                    Please do not attempt to reconnect for the next 24 hours to avoid account flagging.
                </p>

                <Link
                    href="/"
                    className="inline-block px-10 py-5 bg-black text-white rounded-[24px] font-bold text-lg hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-black/10 active:scale-95"
                >
                    Return to Home
                </Link>

                <p className="mt-8 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    Error Log: ERR_NEXT_FINALIZE_TIMEOUT_NGA
                </p>
            </div>
        </main>
    );
}

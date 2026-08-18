import Link from "next/link"

export default function Footer() {
    return(
        <footer className="mt-20 bg-neutral-950 text-white border-t border-neutral-800">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
                <div>
                    <h2 className="text-2xl font-bold">YourFit</h2>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">Find the perfect fitness plan for you</p>
                </div>
                <div>
                    <h3 className="mb-4 font-semibold">Navigation</h3>
                    <nav className="flex flex-col gap-3">
                        <Link href="/" className="text-sm text-gray-400 transition hover:text-white">Home</Link>
                        <Link href="/future-work" className="text-sm text-gray-400 transition hover:text-white">Future Work</Link>
                    </nav>
                </div>
                <div className="mb-4 font-semibold">
                    <h3>Follow Us</h3>

                    <div className="flex gap-4 text-sm text-gray-400">
                        <a href="#" className="transition hover:text-white">Facebook</a>
                        <a href="#" className="transition hover:text-white">TikTok</a>
                        <a href="#" className="transition hover:text-white">Instagram</a>
                    </div>
                </div>

                
            </div>
            <div>
                    <div className="mx-auto max-w-7xl px-6 py-6">
                        <p className="text-center text-sm text-gray-500">&copy; 2026 YourFit. Jorge Omar Lopez Gemigniani 9049992</p>
                    </div>
                </div>
        </footer>
    )
}
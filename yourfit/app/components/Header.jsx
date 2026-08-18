import Link from "next/link"

export default function Header() {
    return(
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <Link href="/" className="text-2xl font-bold tracking-tight text-black">
                    YourFit
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-sm font-medium text-gray-700 transition hover:text-black">Home</Link>
                    <Link href="/future-work" className="text-sm font-medium text-gray-700 transition hover:text-black">Future Work</Link>
                </nav>
            </div>
        </header>
    )
}
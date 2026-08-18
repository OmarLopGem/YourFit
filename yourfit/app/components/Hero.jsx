export default function Hero() {
    return(
        <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/hero_background.jpg')" }}>
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-5 py-20 text-center text-white">
                <div className="max-w-3xl">
                    <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                        Discover the <span className="text-green-500">best</span> way to achive your fitness goals
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray">YourFit is a platform for everyone who seeks to find the correct fitness path.
                        Helping you to build healthy habits, discover workouts that fit your lifestyle.
                    </p>
                </div>
                
                <div className="mt-12 grid w-full gap-6 md:grid-cols-3 text-black">
                    <div className="rounded-2xl bg-white p-6 text-center">
                        <h3 className="text-xl font-semibold">Personalized</h3>
                        <p className="mt-2 text-gray-600">Find fitness options based on your personal goals.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 text-center">
                        <h3 className="text-xl font-semibold">Simple</h3>
                        <p className="mt-2 text-gray-600">Keep your fitness journey organized and easy to follow.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 text-center">
                        <h3 className="text-xl font-semibold">Effective</h3>
                        <p className="mt-2 text-gray-600">Focus on actions that help you move toward your goals.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
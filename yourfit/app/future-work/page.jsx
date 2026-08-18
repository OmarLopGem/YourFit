export default function FutureWork() {
    return(
        <div>
            <div className="relative flex min-h-[500px] w-full items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/images/futurework_hero_background.jpg')" }}>
                <div className="absolute inset-0 bg-black/55"></div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
                    <p className="mb-4 font-semibold uppercase tracking-widest text-cta">Future Technology</p>
                    <h1 className="text-5xl font-bold md:text-6xl">The Future of YourFit</h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">Exploring how modern web technologies could transform YourFit into a smarter,
                        more accessible, and scalable fitness platform.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6 py-20 text-center">
                <h2 className="text-4xl font-bold">Future Vision</h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">The current version of YourFit provides users with information about different training
                    styles and allows them to register their interest on their desired workout. In the future, the platoform could be expanded into a complete digital fitness
                    experience by using technologies such as Progressive Web Aspps and Cloud Computing.
                </p>
            </div>

            <div className="bg-gray-100 px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-4xl font-bold text-black">Future Technologies</h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl bg-white p-8 shadow-sm">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cta text-xl font-bold text-white">
                                01
                            </div>
                            <h3 className="text-2xl font-bold text-black">Progressive Web App</h3>
                            <p className="mt-4 leading-7 text-gray-600">A future version of YourFit could be transformed into a Progressive Web App, allowing usersto install
                                the platform directly on supported devices and access it with an app-like experience.
                            </p>
                            <p className="mt-4 leading-7 text-gray-600">This would be especially useful for a fitness platform because users could quickly access their workouts,
                                training information, and fitness profile directly from their mobile device.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-black">Installable</span>
                                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-black">Mobile Experience</span>
                                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-black">Fast Access</span>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-sm">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cta text-xl font-bold text-white">
                                02
                            </div>
                            <h3 className="text-2xl font-bold text-black">Cloud Computing</h3>
                            <p className="mt-4 leading-7 text-gray-600">Cloud Computing could allow YourFit to store and manage application data remotely instead of relying only
                                on information available in the browser.
                            </p>
                            <p className="mt-4 leading-7 text-gray-600">User accounts, workout preferences, registration information, and fitness progress could be stored in a
                                could-hosted database and accessed securely from different devices.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-black">Cloud Database</span>
                                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-black">User Profiles</span>
                                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-black">Data Synchronization</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 py-20">
                <h2 className="text-center text-4xl font-bold">How It Could Work</h2>
                <p className="mx-auto mt-4 max-w-2xl text-center">These technologies could work together to create a more personalized fitness experience.</p>

                <div className="mt-12 grid gap-8 text-center md:grid-cols-3">
                    <div>
                        <p className="text-5xl font-bold text-cta">01</p>
                        <h3 className="mt-4 text-xl font-semibold">Create a Profile</h3>
                        <p className="mt-2">Users create an account and select their preferred workout style and fitness goals.</p>
                    </div>

                    <div>
                        <p className="text-5xl font-bold text-cta">02</p>
                        <h3 className="mt-4 text-xl font-semibold">Store Data in the Cloud</h3>
                        <p className="mt-2">Preferences, registrations, and progress are stored remotely and connected to the user's account.</p>
                    </div>

                    <div>
                        <p className="text-5xl font-bold text-cta">03</p>
                        <h3 className="mt-4 text-xl font-semibold">Access YourFit Anywhere</h3>
                        <p className="mt-2">Users access their fitness information through an installable web application from diffrente supported devices.</p>
                    </div>
                </div>
            </div>
        </div>
    )

        
}
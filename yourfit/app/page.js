import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="mx-auto mt-10">
        <h1 className="text-4xl text-center font-bold">Workouts</h1>
        <div className="grid w-full gap-8 md:grid-cols-3">
          <div className="p-6 flex flex-col justify-center items-center">
            <Image src="/images/hyrox_workout.jpg" alt="Hyrox" width={600} height={400} />
            <h2 className="mt-4 text-xl font-semibold">Hyrox</h2>
            <p className="mt-2 text-center">Combine endurance and fuctional strength through challenging workouts designed to push your limits.</p>
            <a href="#registration-form" className="mt-5 rounded-lg bg-cta px-5 py-2 text-white transition hover:bg-cta-hover cursor-pointer">Register Now</a>
          </div>
          <div className="p-6 flex flex-col justify-center items-center">
            <Image src="/images/gym_workout.jpg" alt="Gym" width={600} height={400} />
            <h2 className="mt-4 text-xl font-semibold">Gym Training</h2>
            <p className="mt-2 text-center">Build strength and muscle with structured workouts tailored to your fitness goals and experience level.</p>
            <a href="#registration-form" className="mt-5 rounded-lg bg-cta px-5 py-2 text-white transition hover:bg-cta-hover cursor-pointer">Register Now</a>
          </div>
          <div className="p-6 flex flex-col justify-center items-center">
            <Image src="/images/calisthenics_workout.jpg" alt="Hyrox" width={600} height={400} />
            <h2 className="mt-4 text-xl font-semibold">Calisthenics</h2>
            <p className="mt-2 text-center">Improve strength, mobility, and body control using effective bodyweight-based training.</p>
            <a href="#registration-form" className="mt-5 rounded-lg bg-cta px-5 py-2 text-white transition hover:bg-cta-hover cursor-pointer">Register Now</a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex">
        <div className="p-6">
          <Image src="/images/hyrox_gallery.jpg" alt="Hyrox Image" width={600} height={400}/>
        </div>
        <div className="p-6">
          <Image src="/images/gym_gallery.jpg" alt="Gym Image" width={600} height={400}/>
        </div>
        <div className="p-6">
          <Image src="/images/calisthenics_gallery.jpg" alt="Hyrox Image" width={600} height={400}/>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-20 mt-10" id="registration-form">
        
        <form className="rounded-xl max-w-xl bg-white gap-4 text-black p-8">
          <h1 className="mb-8 text-4xl text-center font-bold">Registration Form</h1>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">Name</label>
                <input id="name" name="name" type="text" placeholder="Name" className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-cta"/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="last-name" className="font-medium">Last Name</label>
                <input id="last-name" name="last-name" type="text" placeholder="Last Name" className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-cta"/>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">Email</label>
                <input id="email" name="email" type="email" placeholder="example@email.com" className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-cta"/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone-number" className="font-medium">Phone Number</label>
                <input id="phone-number" name="phone-number" type="number" placeholder="Phone Number" className="rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-cta"/>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="workout-type" className="font-medium">Workout Type</label>
              <select id="workout-type" name="workout-name" className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-cta">
                <option value="" disabled>Select an option</option>
                <option value="hyrox">Hyrox</option>
                <option value="gym">Gym</option>
                <option value="calisthenics">Calisthenics</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 cursor-pointer accent-green-600"/>
              <label htmlFor="terms" className="text-sm text-gray-600">I agree to the Terms and Conditions</label>
            </div>

            <button type="submit" className="mt-2 rounded-lg bg-cta px-5 py-2 text-white transition hover:bg-cta-hover cursor-pointer">Create Account</button>
          
          </div>
        </form>
          
      </div>
      
      
    </div>
  );
}

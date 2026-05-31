import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
          About OneDrop
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mx-10 items-center">
          <div className="shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-500 leading-relaxed">
              OneDrop connects blood donors with patients in need,
              making emergency response faster and more reliable.
            </p>
          </div>

          <div className="shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Why Blood Donation Matters
            </h2>
            <p className="text-gray-500">
              Every 2 seconds someone needs blood. Your donation
              can save up to 3 lives.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
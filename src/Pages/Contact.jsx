import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-20">
        <div className="shadow-xl rounded-2xl p-10">
          <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
            Contact Us
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg"
            />
            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Contact OneDrop
          </h1>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Have questions, feedback, or need urgent assistance?
            We're here to help you save lives.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're a donor, patient, volunteer, or
              organization partner, feel free to reach out.
              Our team is always ready to assist you.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4 bg-white shadow-lg p-5 rounded-xl">
                <div className="bg-red-100 p-4 rounded-full">
                  <FaPhoneAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Phone Number
                  </h3>
                  <p className="text-gray-500">
                    +880 1234 567890
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white shadow-lg p-5 rounded-xl">
                <div className="bg-red-100 p-4 rounded-full">
                  <FaEnvelope className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Email Address
                  </h3>
                  <p className="text-gray-500">
                    support@onedrop.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white shadow-lg p-5 rounded-xl">
                <div className="bg-red-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Office Location
                  </h3>
                  <p className="text-gray-500">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-2xl rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Every Drop Counts
          </h2>

          <p className="text-red-100 mb-6">
            Join our mission and help connect blood donors with
            patients in need across Bangladesh.
          </p>

          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            Become a Donor
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
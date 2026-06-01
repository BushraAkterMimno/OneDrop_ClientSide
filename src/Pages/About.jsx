import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  FaHeartbeat,
  FaUsers,
  FaTint,
  FaHandHoldingHeart,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About OneDrop
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
            Connecting blood donors with patients in need and
            making emergency blood support faster, safer, and
            more accessible across Bangladesh.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to build a trusted platform where
              blood donors and patients can connect instantly
              during emergencies. We aim to reduce the time
              required to find donors and help save lives through
              community support.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We envision a future where no patient suffers due
              to blood shortages. Through technology and
              community engagement, OneDrop strives to create a
              nationwide network of active blood donors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <FaUsers className="text-5xl text-red-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-gray-500 mt-2">Active Donors</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <FaTint className="text-5xl text-red-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-gray-500 mt-2">Blood Requests</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <FaHeartbeat className="text-5xl text-red-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">800+</h3>
              <p className="text-gray-500 mt-2">Lives Impacted</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <FaHandHoldingHeart className="text-5xl text-red-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-gray-500 mt-2">Support System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose OneDrop?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Fast Response
            </h3>
            <p className="text-gray-600">
              Quickly connect with nearby blood donors during
              emergencies.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Trusted Community
            </h3>
            <p className="text-gray-600">
              Verified donors and a growing network of
              volunteers.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Life Saving Impact
            </h3>
            <p className="text-gray-600">
              Every donation can help save multiple lives and
              strengthen communities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Be Someone's Lifeline Today
          </h2>

          <p className="text-lg mb-8">
            Join our community of blood donors and help save
            lives when it matters most.
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
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaTint, FaUsers, FaHeartbeat, FaHandHoldingHeart } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Donate Blood,
              <br />
              Save Lives ❤️
            </h1>

            <p className="py-6 text-lg md:text-xl text-red-100">
              Every drop of blood is a gift of life. Connect blood donors and
              recipients instantly through OneDrop.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-warning btn-lg">
                Find Donor
              </button>

              <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-red-600">
                Become Donor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
            <FaUsers className="text-5xl mx-auto text-red-600 mb-4" />
            <h2 className="text-4xl font-bold">5K+</h2>
            <p className="text-gray-500">Registered Donors</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
            <FaTint className="text-5xl mx-auto text-red-600 mb-4" />
            <h2 className="text-4xl font-bold">1200+</h2>
            <p className="text-gray-500">Blood Donations</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
            <FaHeartbeat className="text-5xl mx-auto text-red-600 mb-4" />
            <h2 className="text-4xl font-bold">3500+</h2>
            <p className="text-gray-500">Lives Saved</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
            <FaHandHoldingHeart className="text-5xl mx-auto text-red-600 mb-4" />
            <h2 className="text-4xl font-bold">100%</h2>
            <p className="text-gray-500">Community Support</p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Why Choose OneDrop?
            </h2>

            <p className="text-gray-500 mt-3">
              Fast, secure and reliable blood donation platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🩸</div>
              <h3 className="text-2xl font-bold mb-3">
                Search Blood Donors
              </h3>

              <p className="text-gray-600">
                Easily find blood donors by district, upazila and blood group.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🚑</div>

              <h3 className="text-2xl font-bold mb-3">
                Emergency Requests
              </h3>

              <p className="text-gray-600">
                Create urgent blood requests and notify nearby donors instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">❤️</div>

              <h3 className="text-2xl font-bold mb-3">
                Save Lives
              </h3>

              <p className="text-gray-600">
                One donation can save up to three lives. Become a hero today.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">

          <h2 className="text-4xl md:text-5xl font-bold">
            Need Blood Urgently?
          </h2>

          <p className="mt-5 text-lg text-red-100">
            Submit an emergency blood request and connect with available donors
            immediately.
          </p>

          <button className="btn btn-warning btn-lg mt-8">
            Create Blood Request
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto py-20 px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-3xl font-bold mx-auto">
              1
            </div>

            <h3 className="text-2xl font-semibold mt-5">
              Register
            </h3>

            <p className="text-gray-500 mt-2">
              Create your donor account in minutes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-3xl font-bold mx-auto">
              2
            </div>

            <h3 className="text-2xl font-semibold mt-5">
              Find / Request Blood
            </h3>

            <p className="text-gray-500 mt-2">
              Search donors or create blood requests.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-3xl font-bold mx-auto">
              3
            </div>

            <h3 className="text-2xl font-semibold mt-5">
              Save Life
            </h3>

            <p className="text-gray-500 mt-2">
              Connect and help save someone's life.
            </p>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Become A Lifesaver Today
          </h2>

          <p className="mt-4 text-gray-300">
            Join thousands of donors and help those in need.
          </p>

          <button className="btn btn-error btn-lg mt-8">
            Join Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
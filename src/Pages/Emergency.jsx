import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function Emergency() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-20">
        <div className="shadow-xl rounded-2xl p-10">
          <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
            Emergency Blood Request
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              className="w-full border p-3 rounded-lg"
            />

            <select className="w-full border p-3 rounded-lg">
              <option>Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>

            <input
              type="text"
              placeholder="Hospital Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Location"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="date"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Additional Details"
              className="w-full border p-3 rounded-lg"
            />

            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
              Submit Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
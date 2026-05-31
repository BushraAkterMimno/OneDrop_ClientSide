import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Search = () => {
  const [donors, setDonors] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://onedrop-server-side.onrender.com/users?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`
      );
      const data = await res.json();
      setDonors(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 mt-15 md:p-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-500">
              Find a <span className="text-red-600">Donor</span>
            </h1>
          </motion.div>

          {/* SEARCH FORM */}
          <div className="p-8 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="font-bold mb-1 block">Blood Group</label>
              <select
                className="select select-bordered w-full"
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="">Select</option>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold mb-1 block">District</label>
              <input
                type="text"
                placeholder="Dhaka"
                className="input input-bordered w-full"
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>

            <div>
              <label className="font-bold mb-1 block">Upazila</label>
              <input
                type="text"
                placeholder="Savar"
                className="input input-bordered w-full"
                onChange={(e) => setUpazila(e.target.value)}
              />
            </div>

            <button
              onClick={handleSearch}
              className="btn bg-red-600 text-white border-none hover:bg-red-700 w-full"
            >
              {loading ? "Searching..." : "Search Now"}
            </button>
          </div>

          {/* RESULTS */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading && (
              <p className="col-span-3 text-center text-gray-400">Loading...</p>
            )}

            {!loading && donors.length === 0 && (
              <p className="col-span-3 text-center text-gray-400 italic">
                No donor found
              </p>
            )}

            {donors.map((donor) => (
              <div
                key={donor._id}
                className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <img
                  src={donor.photoURL || "https://i.ibb.co/ZYW3VTp/blood.png"}
                  className="w-20 h-20 rounded-full mx-auto"
                  alt=""
                />
                <h3 className="text-center font-bold mt-4">{donor.name}</h3>
                <p className="text-center text-red-600 font-bold">
                  {donor.bloodGroup}
                </p>
                <p className="text-center text-gray-500 text-sm">
                  {donor.district}, {donor.upazila}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
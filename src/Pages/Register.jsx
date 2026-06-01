import React, { useState, useContext, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    // Fetch Districts
    fetch("/districts.json") 
      .then(res => res.json())
      .then(data => setDistricts(data.districts)) 
      .catch(err => console.log("District load error", err));

    // Fetch Upazilas
    fetch("/upazilas.json")
      .then(res => res.json())
      .then(data => setUpazilas(data.upazilas)) 
      .catch(err => console.log("Upazila load error", err));
  }, []);

  // Filter logic
  const filteredUpazilas = upazilas.filter(u => u.district_id === selectedDistrict);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const bloodGroup = form.bloodGroup.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoFile = form.photoURL.files[0];

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }


    const districtName = districts.find(d => d.id === form.district.value)?.name || "";
    const upazilaName = upazilas.find(u => u.id === form.upazila.value)?.name || "";

    try {
      const formData = new FormData();
      formData.append("image", photoFile);

      const res = await axios.post(`https://api.imgbb.com/1/upload?key=ee5bd40be4a98635c57eeecf57f1a70b`, formData);

      if (res.data.success) {
        const mainPhotoURL = res.data.data.display_url;
        await registerUser(name, email, password, mainPhotoURL);

        const userInfo = { name, email, bloodGroup, district: districtName, upazila: upazilaName, photoURL: mainPhotoURL, status: 'active' };
        await axios.post('https://onedrop-serverside-1.onrender.com/users', userInfo);
        
        alert("Registration Successful!");
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-10 px-4">
      <form onSubmit={handleRegister} className="w-full max-w-2xl p-8 space-y-4 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-purple-700">Join Us</h2>
        {error && <p className="text-red-500 text-center bg-red-50 py-2 rounded-md">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <input name="name" type="text" required placeholder="Your Name" className="input-field" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Email Address</label>
            <input name="email" type="email" required placeholder="example@mail.com" className="input-field" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Blood Group</label>
            <select name="bloodGroup" required className="input-field">
              <option value="">Select Group</option>
              {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Avatar Image</label>
            <input name="photoURL" type="file" required className="input-field pt-1" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">District</label>
            <select 
              name="district" 
              required 
              className="input-field"
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">Select District</option>
              {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Upazila</label>
            <select name="upazila" required className="input-field" disabled={!selectedDistrict}>
              <option value="">Select Upazila</option>
              {filteredUpazilas.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Select Role</label>
            <select defaultValue="Choose Role" className="input-field" name="role" required>
                <option disabled>Choose Role</option>
                <option value="donor">Donor</option>
                <option value="receiver">Receiver</option>
            </select>
          </div>

          <div className="space-y-1 relative">
            <label className="text-sm font-bold text-gray-700">Password</label>
            <input 
              name="password" 
              type={showPassword ? "text" : "password"} 
              required 
              className="input-field" 
            />
            <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="space-y-1 relative">
            <label className="text-sm font-bold text-gray-700">Confirm Password</label>
            <input 
              name="confirmPassword" 
              type={showConfirmPassword ? "text" : "password"} 
              required 
              className="input-field" 
            />
            <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        <button type="submit" className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition">
          Complete Registration
        </button>
      </form>

      <style>{`
        .input-field {
          width: 100%;
          padding: 12px;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Register;
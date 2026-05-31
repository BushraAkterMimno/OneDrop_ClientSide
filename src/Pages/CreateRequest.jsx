import { useState } from "react";
import { motion } from "framer-motion";
import { BiSolidDonateBlood } from "react-icons/bi";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const CreateRequest = () => {
    const axiosSecure = useAxiosSecure();
    const [formData, setFormData] = useState({
        recipientName: "",
        bloodGroup: "",
        hospital: "",
        donationDate: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosSecure.post("/requests", {
                ...formData,
                status: "pending",
            });

            if (res.data?.insertedId) {
                Swal.fire("Success!", "Blood request created successfully", "success");
                setFormData({
                    recipientName: "",
                    bloodGroup: "",
                    hospital: "",
                    donationDate: "",
                    address: "",
                });
            }
        } catch (error) {
            console.error("Submission Error:", error);
            Swal.fire("Error!", error.response?.data?.message || "Failed to create request", "error");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-lg border mt-10"
        >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <BiSolidDonateBlood />
                </span>
                Create Blood Request
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="recipientName" placeholder="Recipient Name" value={formData.recipientName} onChange={handleChange} className="input input-bordered w-full" required />
                
                <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="select select-bordered w-full" required>
                    <option value="">Select Blood Group</option>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                        <option key={bg} value={bg}>{bg}</option>
                    ))}
                </select>

                <input type="text" name="hospital" placeholder="Hospital Name" value={formData.hospital} onChange={handleChange} className="input input-bordered w-full" required />
                <input type="date" name="donationDate" value={formData.donationDate} onChange={handleChange} className="input input-bordered w-full" required />

                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input input-bordered w-full" required />

                <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} className="textarea textarea-bordered md:col-span-2 w-full" required />

                <button type="submit" className="btn bg-red-600 hover:bg-red-700 text-white md:col-span-2 border-none">
                    Submit Request
                </button>
            </form>
        </motion.div>
    );
};

export default CreateRequest;
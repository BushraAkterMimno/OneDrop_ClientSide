import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";

const Funding = () => {
  const { user } = useContext(AuthContext);

  const [amount, setAmount] = useState(100);
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "https://onedrop-serverside-1.onrender.com/create-payment-checkout",
        {
          amount,
          donorName: user?.displayName || "Anonymous",
          donorEmail: user?.email || "anonymous@gmail.com",
        }
      );

      window.location.href = res.data.url;
    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">

          <h2 className="text-3xl font-bold text-center text-red-600">
            ❤️ Support OneDrop
          </h2>

          <p className="text-center text-gray-500">
            Your donation can help save lives.
          </p>

          <div className="mt-4">
            <label className="label">
              <span className="label-text">
                Donation Amount (BDT)
              </span>
            </label>

            <input
              type="number"
              min="100"
              value={amount}
              onChange={(e) =>
                setAmount(Number(e.target.value))
              }
              className="input input-bordered w-full"
            />
          </div>

          <button
            onClick={handleDonate}
            disabled={loading}
            className="btn btn-error text-white mt-6"
          >
            {loading
              ? "Redirecting..."
              : "Donate Now"}
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">
            Secure payment powered by Stripe
          </p>

        </div>
      </div>
    </div>
  );
};

export default Funding;
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";

const MyRequest = () => {
  const { user } = useContext(AuthContext);

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);

        if (!user?.email) return;

        let url = "";

        // ADMIN → all requests
        if (user?.role === "admin") {
          url = "https://onedrop-serverside-1.onrender.com/requests";
        }

        // USER → own requests
        else {
          url = `https://onedrop-serverside-1.onrender.com/my-requests/${user.email}`;
        }

        const res = await axios.get(url);

        setRequests(res.data || []);
      } catch (err) {
        console.log(err);
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        {user?.role === "admin"
          ? "All Donation Requests"
          : "My Donation Requests"}
      </h2>

      {requests.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          No Donation Request Found
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Recipient</th>
                <th>Blood Group</th>
                <th>Phone</th>
                <th>Hospital</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request, index) => (
                <tr key={request._id}>
                  <td>{index + 1}</td>
                  <td>{request.recipientName}</td>

                  <td>
                    <span className="badge">
                      {request.bloodGroup}
                    </span>
                  </td>

                  <td>{request.phone}</td>

                  {/* 🔥 FIXED FIELD */}
                  <td>{request.hospital}</td>

                  <td>{request.donationDate}</td>

                  <td>
                    <span className="badge badge-success">
                      {request.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRequest;
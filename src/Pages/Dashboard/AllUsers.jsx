import { useEffect, useState } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const usersPerPage = 5;

  // ========== FETCH USERS ==========
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const res = await axios.get("https://onedrop-serverside-1.onrender.com/users");

        console.log("API RESPONSE:", res.data); // 🔥 DEBUG

        // ✅ SAFE RESPONSE HANDLING
        const userList =
          res.data?.users || res.data || [];

        setUsers(Array.isArray(userList) ? userList : []);

      } catch (err) {
        console.error("Fetch error:", err);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // ========== ACTIONS ==========
  const handleBlock = async (id) => {
    try {
      await axios.patch(`https://onedrop-serverside-1.onrender.com/users/block/${id}`);

      setUsers(prev =>
        prev.map(u =>
          u._id === id ? { ...u, status: "blocked" } : u
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnblock = async (id) => {
    try {
      await axios.patch(`https://onedrop-serverside-1.onrender.com/users/unblock/${id}`);

      setUsers(prev =>
        prev.map(u =>
          u._id === id ? { ...u, status: "active" } : u
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleRoleChange = async (id, role) => {
    try {
      await axios.patch(
        `https://onedrop-serverside-1.onrender.com/users/role/${id}`,
        { role }
      );

      setUsers(prev =>
        prev.map(u =>
          u._id === id ? { ...u, role } : u
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  // ========== FILTER ==========
  const filteredUsers =
    filter === "all"
      ? users
      : users.filter(u => (u.status || "active") === filter);

  // ========== PAGINATION ==========
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
  );

  return (
    <div className="p-4 md:p-6 bg-white rounded shadow overflow-x-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        All Users
      </h1>

      {/* FILTER */}
      <div className="mb-4 flex flex-wrap gap-2 md:gap-3">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("blocked")}>Blocked</button>
      </div>

      {/* LOADING */}
      {loading ? (
        <p className="text-center py-6">Loading users...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Avatar</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Role</th>
                <th className="border p-2">Status</th>
                {/* <th className="border p-2">Actions</th> */}
              </tr>
            </thead>

            <tbody>
              {currentUsers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    No users found
                  </td>
                </tr>
              ) : (
                currentUsers.map(user => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="border p-2">
                      <img
                        src={
                          user.photoURL ||
                          "https://i.ibb.co/2kRZ8ZD/user.png"
                        }
                        className="w-10 h-10 rounded-full mx-auto"
                        alt="avatar"
                      />
                    </td>

                    <td className="border text-center p-2">{user.name}</td>
                    <td className="border text-center p-2 break-words">
                      {user.email}
                    </td>
                    <td className="border text-center p-2">
                      {user.role || "user"}
                    </td>
                    <td className="border text-center p-2">
                      {user.status || "active"}
                    </td>

                    {/* <td className="border p-2 flex gap-2 justify-center flex-wrap">
                      {user.status === "active" ? (
                        <button
                          onClick={() => handleBlock(user._id)}
                        >
                          Block
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnblock(user._id)}
                        >
                          Unblock
                        </button>
                      )}

                      <button
                        onClick={() =>
                          handleRoleChange(user._id, "volunteer")
                        }
                      >
                        Volunteer
                      </button>

                      <button
                        onClick={() =>
                          handleRoleChange(user._id, "admin")
                        }
                      >
                        Admin
                      </button>
                    </td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* PAGINATION */}
      <div className="mt-4 flex gap-2 justify-center flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={
              currentPage === i + 1
                ? "bg-blue-600 text-white px-2"
                : "px-2"
            }
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
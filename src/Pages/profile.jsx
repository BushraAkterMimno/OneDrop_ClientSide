import { useState, useContext, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:5000/users/${user.email}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedUser = {
      name: form.name.value,
      bloodGroup: form.bloodGroup.value,
      district: form.district.value,
      upazila: form.upazila.value,
      photoURL: form.photoURL.value,
    };

    try {
      await axios.put(
        `http://localhost:5000/users/${user.email}`,
        updatedUser
      );

      setUserData({
        ...userData,
        ...updatedUser,
      });

      Swal.fire(
        "Success",
        "Profile Updated Successfully",
        "success"
      );

      setIsEditable(false);
    } catch (error) {
      Swal.fire(
        "Error",
        "Profile Update Failed",
        "error"
      );
    }
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Logout",
    });

    if (result.isConfirmed) {
      logoutUser();
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-600">
        Please Login First
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="text-center mt-20 text-red-600">
        User not found in Database
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="p-6 mt-20 max-w-4xl mx-auto">
        <div className="shadow-2xl rounded-3xl overflow-hidden relative">

          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            ⬅ Back
          </button>

          <button
            onClick={() => setIsEditable(!isEditable)}
            className="absolute top-4 right-4 bg-white text-red-600 px-4 py-2 rounded-lg font-bold"
          >
            {isEditable ? "Cancel" : "Edit Profile"}
          </button>

          <div className="px-8 pb-8">

            <div className="flex flex-col items-center mt-14 mb-6">

              <img
                src={
                  userData?.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />

              <h2 className="text-2xl font-bold mt-4">
                {userData?.name}
              </h2>

            </div>

            <form
              onSubmit={handleSave}
              className="grid md:grid-cols-2 gap-6"
            >

              <div>
                <label className="font-bold">
                  Name
                </label>

                {isEditable ? (
                  <input
                    name="name"
                    defaultValue={userData.name}
                    className="input input-bordered w-full"
                  />
                ) : (
                  <p>{userData.name}</p>
                )}
              </div>

              <div>
                <label className="font-bold">
                  Email
                </label>
                <p>{userData.email}</p>
              </div>

              <div>
                <label className="font-bold">
                  Blood Group
                </label>

                {isEditable ? (
                  <input
                    name="bloodGroup"
                    defaultValue={userData.bloodGroup}
                    className="input input-bordered w-full"
                  />
                ) : (
                  <p>{userData.bloodGroup}</p>
                )}
              </div>

              <div>
                <label className="font-bold">
                  Role
                </label>

                <p>{userData.role}</p>
              </div>

              <div>
                <label className="font-bold">
                  District
                </label>

                {isEditable ? (
                  <input
                    name="district"
                    defaultValue={userData.district}
                    className="input input-bordered w-full"
                  />
                ) : (
                  <p>{userData.district}</p>
                )}
              </div>

              <div>
                <label className="font-bold">
                  Upazila
                </label>

                {isEditable ? (
                  <input
                    name="upazila"
                    defaultValue={userData.upazila}
                    className="input input-bordered w-full"
                  />
                ) : (
                  <p>{userData.upazila}</p>
                )}
              </div>

              {isEditable && (
                <>
                  <div className="md:col-span-2">
                    <label className="font-bold">
                      Photo URL
                    </label>

                    <input
                      name="photoURL"
                      defaultValue={userData.photoURL}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn bg-red-600 text-white md:col-span-2"
                  >
                    Save Changes
                  </button>
                </>
              )}

            </form>

            <div className="mt-8">
              <button
                onClick={handleLogout}
                className="btn bg-red-600 text-white w-full"
              >
                Logout
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const { userData, updateUser } = useContext(AuthContext);
  const [isEditable, setIsEditable] = useState(false);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Profile</h2>
        <button onClick={() => setIsEditable(!isEditable)} className="btn">
          {isEditable ? "Cancel" : "Edit"}
        </button>
      </div>

      <form>
        <div className="mb-4">
          <label className="font-bold">Name</label>
          {isEditable ? <input defaultValue={userData.name} className="input" /> : <p>{userData.name}</p>}
        </div>
        <div className="mb-4">
          <label className="font-bold">Email</label>
          <p>{userData.email}</p>
        </div>
        <div className="mb-4">
          <label className="font-bold">Blood Group</label>
          {isEditable ? <input defaultValue={userData.bloodGroup} className="input" /> : <p>{userData.bloodGroup}</p>}
        </div>

        {isEditable && <button type="submit" className="btn bg-red-600 text-white mt-4">Save Changes</button>}
      </form>
    </div>
  );
};

export default Profile;

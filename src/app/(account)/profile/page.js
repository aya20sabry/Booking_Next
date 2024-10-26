"use client";

import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function Profile() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("decodedToken.email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setDecodedToken(decoded);
      setName(decoded.username);
      setEmail(decoded.email);
      console.log("Decoded Token:", decoded);
    }
  }, []);

  const handleEditNameClick = () => {
    setIsEditingName(true);
  };

  const handleSaveNameClick = () => {
    localStorage.setItem("decodedToken.userName", username);
    setIsEditingName(false);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleSaveEmailClick = () => {
    localStorage.setItem("decodedToken.email", email);
    setIsEditingEmail(false);
  };

  const userRole = decodedToken ? decodedToken.role : null;
  console.log("Role", userRole);

  return (
    <div className="bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-4">Personal details</h1>

        <p className="text-gray-600 mb-6">
          Update your info and find out how it&apos;s used.
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Name</span>
            {isEditingName ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded p-1 mr-2"
                />
                <button onClick={handleSaveNameClick} className="text-blue-500">
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-500">{username}</span>
                <button onClick={handleEditNameClick} className="text-blue-500">
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <span>Email address</span>
            {isEditingEmail ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded p-1 mr-2"
                />
                <button
                  onClick={handleSaveEmailClick}
                  className="text-blue-500"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-500">{email}</span>
                <button
                  onClick={handleEditEmailClick}
                  className="text-blue-500"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <span>Phone number</span>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="flex justify-between">
            <span>Date of birth</span>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="flex justify-between">
            <span>Nationality</span>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="flex justify-between">
            <span>Gender</span>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="flex justify-between">
            <span>Address</span>
            <button className="text-blue-500">Edit</button>
          </div>
          <div className="flex justify-between">
            <span>Passport details</span>
            <span className="text-gray-500">Not provided</span>
            <button className="text-blue-500">Add passport</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

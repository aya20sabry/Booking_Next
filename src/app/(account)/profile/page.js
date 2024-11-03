"use client";

import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Profile() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationality, setNationality] = useState("");

  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setDecodedToken(decoded);
      const userId = decoded.id;
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/user/${userId}`
          );
          console.log("user data", response);

          setUserName(response.data.userName);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setPhoneNumber(response.data.phoneNumber || "");
          setNationality(response.data.nationality || "");
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
      console.log("userid", userId);
    }
  }, []);

  const handleSaveClick = async () => {
    const updatedData = {
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      nationality,
    };

    try {
      const userId = decodedToken.id;
      const response = await axios.patch(
        `http://localhost:3000/user/UpdateData/${userId}`,
        updatedData
      );
      console.log("Update response:", response.data);
    } catch (error) {
      console.error("Error updating data:", error);
    }

    localStorage.setItem("decodedToken.userName", userName);
    localStorage.setItem("decodedToken.firstName", firstName);
    localStorage.setItem("decodedToken.lastName", lastName);
    localStorage.setItem("decodedToken.email", email);
    localStorage.setItem("decodedToken.phoneNumber", phoneNumber);
    localStorage.setItem("decodedToken.nationality", nationality);
  };

  return (
    <div className="  bg-gray-100  flex items-center justify-center">
      <div className="  bg-white p-6 rounded-lg shadow-md w-full ">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Personal Details
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Update your info and find out how it&apos;s used.
        </p>

        <div className="space-y-4">
          {/* Input Fields in Two Columns */}
          <div className=" pl-1 grid grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block font-medium">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded w-full p-2 mt-1"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-medium">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded w-full p-2 mt-1"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded w-full p-2 mt-1"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded w-full p-2 mt-1"
              />
            </div>

            {/* Nationality */}
            <div>
              <label className="block font-medium">Nationality</label>
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="border rounded w-full p-2 mt-1"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSaveClick}
            className="mainColor text-white rounded px-4 py-2 hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

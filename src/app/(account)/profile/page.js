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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Personal Details
          </h1>
          <p className="text-gray-600">Update your info.</p>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
              <label className="block text-gray-700 font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
            </div>

            {/* Last Name */}
            <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
              <label className="block text-gray-700 font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
            </div>

            {/* Email Address */}
            <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
            </div>

            {/* Country */}
            <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
              <label className="block text-gray-700 font-semibold mb-2">
                Country
              </label>
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSaveClick}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

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

  const [isEditingUserName, setIsEditingUserName] = useState(false);
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingNationality, setIsEditingNationality] = useState(false);

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

    setIsEditingUserName(false);
    setIsEditingFirstName(false);
    setIsEditingLastName(false);
    setIsEditingEmail(false);
    setIsEditingPhone(false);
    setIsEditingNationality(false);
  };

  return (
    <div className="bg-gray-100 max-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 mx-auto ">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Personal Details
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Update your info and find out how it&apos;s used.
        </p>

        <div className="space-y-4">
          {/* User Name */}
          <div className="flex justify-between items-center">
            <span className="font-medium">User Name</span>
            {isEditingUserName ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="border rounded p-1 mr-2"
                />
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white rounded px-3 py-1"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-500">{userName}</span>
                <button
                  onClick={() => setIsEditingUserName(true)}
                  className="text-blue-500 ml-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* First Name */}
          <div className="flex justify-between items-center">
            <span className="font-medium">First Name</span>
            {isEditingFirstName ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded p-1 mr-2"
                />
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white rounded px-3 py-1"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-500">{firstName}</span>
                <button
                  onClick={() => setIsEditingFirstName(true)}
                  className="text-blue-500 ml-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* Last Name */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Last Name</span>
            {isEditingLastName ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded p-1 mr-2"
                />
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white rounded px-3 py-1"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-500">{lastName}</span>
                <button
                  onClick={() => setIsEditingLastName(true)}
                  className="text-blue-500 ml-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Email Address</span>
            {isEditingEmail ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded p-1 mr-2"
                />
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white rounded px-3 py-1"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-500">{email}</span>
                <button
                  onClick={() => setIsEditingEmail(true)}
                  className="text-blue-500 ml-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Phone Number</span>
            {isEditingPhone ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border rounded p-1 mr-2"
                />
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white rounded px-3 py-1"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-500">{phoneNumber}</span>
                <button
                  onClick={() => setIsEditingPhone(true)}
                  className="text-blue-500 ml-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* Nationality */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Nationality</span>
            {isEditingNationality ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="border rounded p-1 mr-2"
                />
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white rounded px-3 py-1"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-gray-500">{nationality}</span>
                <button
                  onClick={() => setIsEditingNationality(true)}
                  className="text-blue-500 ml-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

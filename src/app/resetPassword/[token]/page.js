"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing token");
    }
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.patch(`/api/user/resetPassword/${token}`, {
        password,
        confirmPassword,
      });

      if (response.data.message === "Password updated successfully") {
        setSuccessMessage("Your password has been reset successfully.");
        setError("");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("An error occurred while resetting the password.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your new password"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Confirm your new password"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-sm">{successMessage}</p>
        )}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

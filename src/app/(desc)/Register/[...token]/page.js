"use client";

import { useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const t = useTranslations("Reset");
  const { token } = useParams();

  const handleResetPassword = async () => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:3000",
    });

    try {
      const response = await axiosInstance.patch(
        `/user/resetPassword/${token}`,
        {
          password: password,
          confirmPassword: confirmPassword,
        }
      );

      if (response.status === 200) {
        setSuccessMessage(t("Your password has been reset successfully.")); // Translated success message
        window.alert(t("Your password has been reset successfully.")); // Translated alert
        router.push("/Signin");
      }
    } catch (error) {
      console.error("Error resetting password request:", error);
      setError(t("An error occurred while resetting the password.")); // Translated error message
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;

    if (!passwordRegex.test(password)) {
      setError(t("Password must be at least 10 characters long and include uppercase letters, lowercase letters, and numbers.")); // Translated error message
    } else if (password !== confirmPassword) {
      setError(t("Passwords do not match.")); // Translated error message
    } else {
      setError("");
      handleResetPassword();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{t("Reset Password")}</h2>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            {t("New Password")}
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder={t("Enter your new password")}
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            {t("Confirm Password")}
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder={t("Confirm your new password")}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          {t("Reset Password")}
        </button>
      </form>
    </div>
  );
};

export default Register;
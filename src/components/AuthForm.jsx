import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please accept the Terms & Conditions");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(isLogin ? "Logging in with:" : "Registering with:", formData);
    alert(isLogin ? "Login Successful!" : "Signup Successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username - only for signup */}
          {!isLogin && (
            <div>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="off"
            />
          </div>

          {/* Mobile - only for signup */}
          {!isLogin && (
            <div>
              <label className="block mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit mobile number"
                className="w-full p-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="new-password"
            />
          </div>

          {/* Confirm Password - only for signup */}
          {!isLogin && (
            <div>
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoComplete="new-password"
              />
            </div>
          )}

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to the Terms & Conditions</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg font-semibold"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch between Login / Signup */}
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

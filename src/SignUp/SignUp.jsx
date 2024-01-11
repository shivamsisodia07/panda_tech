import React from 'react';

const SignUp = () => {
  return (
    <div className="w-full max-w-md mx-auto p-8">
      {/* Sign In Text */}
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-500 mb-1">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-500 mb-1">Password</label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2"
          placeholder="Enter your password"
        />
      </div>

      {/* Forget Password */}
      <div className="mb-4">
        <p className="text-sm text-gray-500"><a href="#">Forget Password?</a></p>
      </div>

      {/* Sign In Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded">Sign In</button>
    </div>
  );
};

export default SignUp;

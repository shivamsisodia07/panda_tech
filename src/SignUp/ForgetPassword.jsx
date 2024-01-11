import React from 'react';

const ForgetPasswordComponent = () => {
  return (
    <div className="w-full max-w-md mx-auto p-8">
      {/* Forget Password Text */}
      <h2 className="text-2xl font-bold mb-4">Forget Password</h2>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-500 mb-1">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2"
          placeholder="Enter your email"
        />
      </div>

      {/* Get the Link Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded">Get the Link</button>
    </div>
  );
};

export default ForgetPasswordComponent;

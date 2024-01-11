import React from 'react';

const ResendLink = () => {
  return (
    <div className="w-full max-w-md mx-auto p-8">
      {/* Resend Link Text */}
      <h2 className="text-2xl font-bold mb-4">Resend Link</h2>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-500 mb-1">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2"
          placeholder="Enter your email"
        />
      </div>

      {/* Didn't get the password reset link? */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">Didn't get the password reset link?</p>
      </div>

      {/* Resend Link Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded">Resend Link</button>
    </div>
  );
};

export default ResendLink;

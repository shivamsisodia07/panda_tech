import React from 'react';

const ResetPassword = () => {
  return (
    <div className="w-full max-w-md mx-auto p-8">
      {/* Reset Password Text */}
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

      {/* New Password Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-500 mb-1">New Password</label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2"
          placeholder="Enter your new password"
        />
      </div>

      {/* Confirm New Password Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-500 mb-1">Confirm New Password</label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2"
          placeholder="Confirm your new password"
        />
      </div>

      {/* Reset Password Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded">Reset My Password</button>
    </div>
  );
};

export default ResetPassword;

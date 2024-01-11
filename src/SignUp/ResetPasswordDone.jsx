import React from 'react';

const ResetPasswordDone = () => {
  return (
    <div className="w-full max-w-md mx-auto p-8">
      {/* Password Field (filled with *******) and Show Button */}
      <div className="mb-4 relative">
        <label className="block text-sm text-gray-500 mb-1">New Password</label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2 pr-10"
          value="********"
          readOnly
        />
        <button className="absolute top-0 right-0 mt-2 mr-3 text-gray-500">
          Show
        </button>
      </div>

      {/* Confirm Password Field (filled with *******) and Show Button */}
      <div className="mb-4 relative">
        <label className="block text-sm text-gray-500 mb-1">Confirm New Password</label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2 pr-10"
          value="********"
          readOnly
        />
        <button className="absolute top-0 right-0 mt-2 mr-3 text-gray-500">
          Show
        </button>
      </div>

      {/* Your password has been reset text */}
      <p className="text-sm text-gray-500 mb-4">Your password has been reset</p>

      {/* Sign In Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded">Sign In</button>
    </div>
  );
};

export default ResetPasswordDone;

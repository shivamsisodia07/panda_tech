import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Banner Section (Full width on mobile, 2/3 width on larger screens) */}
      <div className="md:w-2/3 w-full bg-blue-500 p-8 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Your Company Name</h1>
        {/* Your banner image goes here */}
      </div>

      {/* Login Details Section (1/3 width on larger screens, full width on mobile) */}
      <div className="md:w-1/3 w-full p-8 flex flex-col">
        <div className="mb-8">
          {/* Tabs for Login and Signup */}
          <div className="flex">
            <button className="mr-4 px-4 py-2 bg-blue-500 text-white">Login</button>
            <button className="px-4 py-2 border border-blue-500">Signup</button>
          </div>

          {/* Slogan */}
          <p className="text-gray-600 mt-2">Create your account</p>
        </div>

        {/* Email and Password fields */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your password"
          />
        </div>

        {/* Checkboxes */}
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">Remember me</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">I agree to the terms and conditions</span>
          </label>
        </div>

        {/* Signup Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded">Signup</button>
      </div>
    </div>
  );
};

export default LoginPage;

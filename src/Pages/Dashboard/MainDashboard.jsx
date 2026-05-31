import React from "react";
import {
  FaUsers,
  FaHandHoldingHeart,
  FaTint,
  FaDonate,
} from "react-icons/fa";

const MainDashboard = () => {
  return (
    <div className="p-6 bg-base-200 min-h-screen">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-red-600">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-2">
          Welcome back! Here's what's happening in OneDrop.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Total Donors</h3>
              <h2 className="text-3xl font-bold">1,250</h2>
            </div>
            <FaUsers className="text-4xl text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Blood Requests</h3>
              <h2 className="text-3xl font-bold">320</h2>
            </div>
            <FaTint className="text-4xl text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Successful Donations</h3>
              <h2 className="text-3xl font-bold">890</h2>
            </div>
            <FaHandHoldingHeart className="text-4xl text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Total Funding</h3>
              <h2 className="text-3xl font-bold">৳ 85,000</h2>
            </div>
            <FaDonate className="text-4xl text-purple-500" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">
            Recent Donation Requests
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold">
                A+ Blood Needed
              </p>
              <p className="text-sm text-gray-500">
                Dhaka Medical College
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold">
                B- Blood Needed
              </p>
              <p className="text-sm text-gray-500">
                Square Hospital
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold">
                O+ Blood Needed
              </p>
              <p className="text-sm text-gray-500">
                United Hospital
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-error">
              Create Request
            </button>

            <button className="btn btn-primary">
              Search Donor
            </button>

            <button className="btn btn-success">
              Donate Blood
            </button>

            <button className="btn btn-secondary">
              Funding
            </button>
          </div>
        </div>
      </div>

      {/* Motivational Banner */}
      <div className="mt-10 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold flex gap-3">
          <FaTint /> Every Drop Counts
        </h2>

        <p className="mt-2 text-lg">
          Your blood donation can save up to 3 lives.
          Thank you for being part of OneDrop.
        </p>
      </div>
    </div>
  );
};

export default MainDashboard;
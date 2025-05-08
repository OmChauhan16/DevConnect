import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            Welcome to DevConnect
          </h1>
          <p className="text-gray-600">
            Create your profile and showcase your projects to the community.
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <button
          onClick={() => navigate("/create-project")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Create New Project
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Your Projects</h2>
        <div className="bg-gray-100 p-4 rounded text-gray-600">
          {/* Replace this with actual project list */}
          <p>No projects yet. Start by creating one!</p>
        </div>
      </div>
    </div>
  );
}

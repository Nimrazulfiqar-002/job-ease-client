import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4">🚀 JobEase</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        AI-powered Resume Builder & Job Recommender.  
        Build your professional resume in minutes and discover matching jobs instantly!
      </p>

      {/* Main Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => navigate("/resume")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          📝 Build Resume
        </button>
        <button
          onClick={() => navigate("/jobs")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          💼 Browse Jobs
        </button>
        <button
          onClick={() => navigate("/favorites")}
          className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700"
        >
          ❤️ Favorites
        </button>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm">
        Made with ❤️ using React & AI
      </p>
    </div>
  );
}

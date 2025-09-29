import React, { useState, useEffect } from "react";

export default function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSaved(stored.some((j) => j.id === job.id));
  }, [job.id]);

  const toggleSave = () => {
    const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
    let updated;

    if (saved) {
      updated = stored.filter((j) => j.id !== job.id);
    } else {
      updated = [...stored, job];
    }

    localStorage.setItem("savedJobs", JSON.stringify(updated));
    setSaved(!saved);
  };

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-sm text-gray-600">
        Skills: {job.skills.join(", ")}
      </p>
      <button
        onClick={toggleSave}
        className="mt-2 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
      >
        {saved ? "❤️ Saved" : "🤍 Save"}
      </button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import JobCard from '../Components/JobCard';

export default function Favorites() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(stored);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">❤️ Saved Jobs</h1>

      {savedJobs.length > 0 ? (
        <div className="grid gap-4">
          {savedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p>No saved jobs yet.</p>
      )}
    </div>
  );
}

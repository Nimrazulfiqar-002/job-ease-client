
import React, { useState } from "react";
import JobCard from "../Components/JobCard";

const jobs = [
  { id: 1, title: "Frontend Developer", skills: ["React", "JavaScript"] },
  { id: 2, title: "Backend Developer", skills: ["Node.js", "Express"] },
  { id: 3, title: "Data Scientist", skills: ["Python", "ML"] },
  { id: 4, title: "AI Engineer", skills: ["AI", "TensorFlow"] },
];

export default function Jobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">💼 Job Board</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search job..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Job list */}
      <div className="grid gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

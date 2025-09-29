import { useState } from "react";

export default function SearchBar({ jobs }) {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search job..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
      <ul>
        {filteredJobs.map(job => <li key={job.id}>{job.title}</li>)}
      </ul>
    </div>
  );
}

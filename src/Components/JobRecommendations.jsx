import { useState } from "react";

const jobs = [
  { id: 1, title: "Frontend Developer", skills: ["React", "JavaScript"] },
  { id: 2, title: "Backend Developer", skills: ["Node.js", "Express"] },
  { id: 3, title: "Data Scientist", skills: ["Python", "ML"] },
];

export default function JobRecommendations({ userSkills }) {
  const [recommended, setRecommended] = useState([]);

  // recomend skills suggestions 
  const handleRecommend = () => {
    const rec = jobs.filter(job =>
      job.skills.some(skill => userSkills.includes(skill))
    );
    setRecommended(rec);
  };

  return (
    <div>
      <button onClick={handleRecommend} className="bg-blue-500 text-white p-2 rounded">
        Get Job Recommendations
      </button>
      <ul>
        {recommended.length > 0 ? (
          recommended.map(job => <li key={job.id}>{job.title}</li>)
        ) : (
          <p>No recommendations yet.</p>
        )}
      </ul>
    </div>
  );
}

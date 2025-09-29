import { useState } from "react";

const jobTitles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Engineer",
  "React Developer",
  "AI Engineer",
  "Data Scientist",
];

export default function JobAutocomplete() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      setLoading(true);

      // Simulate async search (can replace with API)
      setTimeout(() => {
        const filtered = jobTitles.filter((title) =>
          title.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
        setLoading(false);
      }, 500); // fake delay
    } else {
      setResults([]);
      setLoading(false);
    }
  };

  // ✅ Handle click on a result
  const handleSelect = (title) => {
    setQuery(title); // fill input
    setResults([]); // hide results
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter job title..."
        className="border p-2 rounded w-full"
      />

      {/* UI states */}
      {loading && <p className="text-gray-500 mt-2">⏳ Fetching job titles...</p>}

      {!loading && results.length === 0 && query && (
        <p className="text-red-500 mt-2">❌ No matching titles found</p>
      )}

      {!loading && results.length > 0 && (
        <ul className="mt-2 border rounded p-2 bg-white shadow">
          {results.map((title, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(title)}
              className="p-1 hover:bg-green-100 cursor-pointer rounded"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

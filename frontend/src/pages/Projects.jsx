import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [comment, setComment] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  const leaveComment = async (id) => {
    await axios.post(
      `http://localhost:5000/api/projects/${id}/comment`,
      { text: comment },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("Comment added!");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Projects</h2>
      {projects.map((project) => (
        <div key={project._id} className="border p-2 mb-2">
          <h3 className="font-semibold">{project.title} </h3>
          <p>{project.description}</p>
          <a className="text-blue-500" href={project.link} target="_blank" rel="noreferrer">Link</a>
          <div className="mt-2">
            <input className="border p-1 mr-2" placeholder="Comment" onChange={(e) => setComment(e.target.value)} />
            <button className="bg-purple-500 text-white px-2" onClick={() => leaveComment(project._id)}>Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
}
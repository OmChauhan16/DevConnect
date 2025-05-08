import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/projects",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Project created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to create project.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief description of your project"
            required
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Project Link</label>
          <input
            className="w-full border p-2 rounded"
            type="url"
            name="link"
            value={form.link}
            onChange={handleChange}
            placeholder="https://github.com/your-project"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}

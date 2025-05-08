import Project from "../models/Project.js";
import User from "../models/User.js";



export const getProjects = async (req, res) => {
  const projects = await Project.find().populate("userId", "name");
  res.json(projects);
};

export const commentProject = async (req, res) => {
  const { text } = req.body;
  const project = await Project.findById(req.params.id);
  project.comments.push({ userId: req.user.id, text });
  await project.save();
  res.json(project);
};

export const search = async (req, res) => {
  const q = req.query.q;
  const users = await User.find({ name: new RegExp(q, "i") });
  const projects = await Project.find({ title: new RegExp(q, "i") });
  res.json({ users, projects });
};


export const createProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const newProject = new Project({
      user: req.user._id,
      title,
      description,
      link,
    });

    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("user", "name email");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};
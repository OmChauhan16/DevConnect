// import React, { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const [form, setForm] = useState({ name: "", email: "", password: "", bio: "" });

//   const handleSignup = async () => {
//     await axios.post("http://localhost:5000/api/auth/signup", form);
//     alert("Signed up!");
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-2">Signup</h2>
//       <input className="border p-1 mr-2" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
//       <input className="border p-1 mr-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <input className="border p-1 mr-2" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
//       <input className="border p-1 mr-2" placeholder="Bio" onChange={(e) => setForm({ ...form, bio: e.target.value })} />
//       <button className="bg-green-500 text-white px-3 py-1" onClick={handleSignup}>Signup</button>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", bio: "" });

  const handleSignup = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", form);
    alert("Signed up!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {["name", "email", "password", "bio"].map((field) => (
        <div className="mb-4" key={field}>
          <label className="block mb-1 capitalize">{field}</label>
          <input
            className="w-full border p-2 rounded"
            placeholder={field}
            type={field === "password" ? "password" : "text"}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        </div>
      ))}
      <button
        className="w-full bg-green-600 text-white py-2 rounded"
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
}

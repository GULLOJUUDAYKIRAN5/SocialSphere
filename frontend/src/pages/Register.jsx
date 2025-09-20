import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users", {
        username, email, password
      });
      alert("User registered: " + res.data.username);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username"
          value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

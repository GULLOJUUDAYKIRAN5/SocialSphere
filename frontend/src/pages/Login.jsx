import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login attempt: ${email}, ${password}`);
    // Here you can call your backend login API
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

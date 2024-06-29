import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const jsonResponse = await res.json();
      if (jsonResponse.message == "user authenticated") {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitForm}>
        <div className="form-group mt-5">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            id="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
}

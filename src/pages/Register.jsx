import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", {
        username,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="username">username</label>
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">password</label>
          </div>
          <div>
            <input
              type="text"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit">register</button>
        </div>
      </form>
    </section>
  );
}

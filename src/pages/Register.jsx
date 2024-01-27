import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <section className="flex items-center justify-center h-screen">
      <div className="w-9/12 mx-auto bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="my-10">
          <h1 className="text-black text-center mb-2 text-2xl font-bold">
            PLAYLIST PARADISE
          </h1>
          <p className="text-black text-center">register here</p>
        </div>
        <div className="w-min mx-auto ">
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <div className="mb-2">
                <label className="text-black " htmlFor="username">
                  USERNAME
                </label>
              </div>
              <div>
                <input
                  className="border-2 border-black text-black rounded"
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="my-5">
              <div className="mb-2">
                <label className="text-black " htmlFor="password">
                  PASSWORD
                </label>
              </div>
              <div>
                <input
                  className="border-2 border-black text-black rounded mb-5"
                  type="text"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center">
              <button
                className="text-white py-2 px-5 bg-black rounded mb-8"
                type="submit"
              >
                REGISTER
              </button>
            </div>
            <div className="text-center mb-5">
              <p>
                or login clicking{" "}
                <Link className="underline" to="/login">
                  here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

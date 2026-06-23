"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const res = await fetch(
      "/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert("Account Created");
      router.push("/login");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Left Side */}
      <div className="hidden lg:flex flex-1 flex-col justify-center px-20 text-white">
        <h1 className="text-6xl font-bold mb-6">
          Dynamic Form Builder
        </h1>

        <p className="text-xl text-slate-400 mb-10 max-w-xl">
          Join thousands of users creating forms,
          collecting responses, and analyzing data
          effortlessly.
        </p>

        <div className="space-y-4 text-lg">
          <p>✅ Dynamic Form Creation</p>
          <p>✅ Response Analytics</p>
          <p>✅ Public Form Sharing</p>
          <p>✅ Secure Authentication</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              D
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white text-center mb-2">
            Create Account
          </h2>

          <p className="text-slate-400 text-center mb-8">
            Start building forms today
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-slate-800 border border-slate-700 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-slate-400 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-400"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
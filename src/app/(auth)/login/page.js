'use client'
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiPhone, FiLock } from "react-icons/fi";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9+\s-]{10,14}$/.test(phone.trim()))
      newErrors.phone = "Enter a valid phone number";

    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Login submitted:", { phone, password });
      // hook up your auth call here
    }
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[var(--background)] px-6 py-16">
      <div className="w-full max-w-md">
        {/* brand mark */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="text-sm font-semibold tracking-[0.3em] text-[var(--foreground)]">
            AUREX
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Sign in to manage your orders and account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10"
        >
          {/* phone */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Phone Number
            </label>
            <div className="relative">
              <FiPhone
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
                }}
                placeholder="01XXXXXXXXX"
                className={`w-full rounded-md border bg-white/5 py-3 pl-11 pr-4 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
                  errors.phone ? "border-red-500/60" : "border-white/15"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
            )}
          </div>

          {/* password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                Password
              </label>
              <a
                href="#forgot-password"
                className="text-xs font-medium text-yellow-500 transition hover:text-yellow-400"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <FiLock
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password)
                    setErrors((p) => ({ ...p, password: "" }));
                }}
                placeholder="••••••••"
                className={`w-full rounded-md border bg-white/5 py-3 pl-11 pr-11 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
                  errors.password ? "border-red-500/60" : "border-white/15"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white/60"
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1.5 text-xs text-red-400">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-neutral-400">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-yellow-500 transition hover:text-yellow-400"
            >
              Create one
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
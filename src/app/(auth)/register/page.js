'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiUser, FiPhone, FiLock } from "react-icons/fi";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9+\s-]{10,14}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid phone number";

    if (!form.password.trim()) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!form.confirmPassword.trim())
      newErrors.confirmPassword = "Please confirm your password";
    else if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Signup submitted:", form);
      // hook up your registration call here
    }
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center px-6 lg:px-0 py-16">
      <div className="w-full max-w-md">
        {/* brand mark */}
        <div className="mb-10 flex flex-col items-center text-center">
          <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            Create Your Account
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-(--foreground) border border-white/10 p-8 backdrop-blur-md sm:p-10"
        >
          {/* name */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Full Name
            </label>
            <div className="relative">
              <FiUser
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full border bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
                  errors.name ? "border-red-500/60" : "border-white/15"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

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
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                className={`w-full rounded-md border bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
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
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Password
            </label>
            <div className="relative">
              <FiLock
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full border bg-white/5 py-3 pl-11 pr-11 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
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

          {/* confirm password */}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Confirm Password
            </label>
            <div className="relative">
              <FiLock
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full border bg-white/5 py-3 pl-11 pr-11 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-yellow-500 ${
                  errors.confirmPassword
                    ? "border-red-500/60"
                    : "border-white/15"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white/60"
              >
                {showConfirm ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 w-full bg-yellow-500 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-yellow-400"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-neutral-400">
            Already have an account?
            <Link
              href="/login"
              className="font-semibold text-yellow-500 transition hover:text-yellow-400"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
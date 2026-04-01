"use client";

import { useState, FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function ResetPassword() {
    const { token } = useParams();
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // ✅ validation
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters");
        }

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);

            const res = await axios.put(
                `http://localhost:8008/reset-password/reset/${token}`, // ✅ FIXED URL
                {
                    password,
                    confirmPassword,
                }
            );

            toast.success(res.data.message || "Password updated");

            setTimeout(() => {
                router.push("/authentication/login");
            }, 1500);

        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            toast.error(
                error?.response?.data?.message || "Invalid or expired link"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-cyan-100 px-4">

            {/* Card */}
            <div className="backdrop-blur-xl bg-white/80 border border-white/30 shadow-2xl rounded-3xl p-8 w-full max-w-md">

                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
                    Reset Password
                </h2>

                <p className="text-center text-gray-500 mb-6 text-sm">
                    Enter your new password
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Password */}
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-gray-400" />
                        <input
                            type={show ? "text" : "password"}
                            placeholder="New password"
                            className="w-full pl-10 pr-10 p-3 rounded-xl border focus:ring-2 focus:ring-red-400 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <span
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-3.5 cursor-pointer"
                        >
                            {show ? <EyeOff size={18} /> : <Eye size={18} />}
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-gray-400" />
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Confirm password"
                            className="w-full pl-10 p-3 rounded-xl border focus:ring-2 focus:ring-red-400 outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-xl text-white font-medium transition 
              ${loading
                                ? "bg-red-400"
                                : "bg-gradient-to-r from-red-800 to-red-500 hover:scale-[1.02]"
                            }`}
                    >
                        {loading ? "Updating..." : "Update Password"}
                    </button>
                </form>

                {/* Back */}
                <div className="mt-6 text-center">
                    <a
                        href="/authentication/login"
                        className="text-sm text-red-600 hover:underline font-medium"
                    >
                        ← Back to Login
                    </a>
                </div>

            </div>
        </div>
    );
}
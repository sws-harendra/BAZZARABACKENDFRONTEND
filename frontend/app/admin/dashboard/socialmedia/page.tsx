"use client";

import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const Page = () => {
    const [links, setLinks] = useState({
        instagram: "",
        facebook: "",
        twitter: "",
    });

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLinks({ ...links, [e.target.name]: e.target.value });
    };

    // 🔥 Fetch existing links
    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const res = await axios.get("http://localhost:8008/social-links");
                if (res.data) {
                    setLinks({
                        instagram: res.data.instagram || "",
                        facebook: res.data.facebook || "",
                        twitter: res.data.twitter || "",
                    });
                }
            } catch (err) {
                toast.error("Failed to load links ❌");
            } finally {
                setFetching(false);
            }
        };

        fetchLinks();
    }, []);

    // 🔥 Save links
    const handleSubmit = async () => {
        setLoading(true);
        const toastId = toast.loading("Saving links...");

        try {
            await axios.post("http://localhost:8008/social-links", links);
            toast.success("Links saved successfully 🚀", { id: toastId });
        } catch (err) {
            toast.error("Error saving links ❌", { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    // 🔄 Loading state
    if (fetching) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-lg">Loading settings...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 text-center">

                {/* Title */}
                <h2 className="text-3xl font-bold mb-8">
                    Social Media Settings
                </h2>

                {/* Form */}
                <div className="flex flex-col items-center space-y-6">

                    {/* Instagram */}
                    <div className="w-full">
                        <label className="flex items-center justify-center gap-2 mb-1 font-medium">
                            <FaInstagram className="text-pink-500" />
                            Instagram
                        </label>
                        <input
                            type="text"
                            name="instagram"
                            value={links.instagram}
                            onChange={handleChange}
                            placeholder="https://instagram.com/..."
                            className="w-full border rounded-xl px-4 py-2 text-center focus:ring-2 focus:ring-pink-500 outline-none"
                        />
                    </div>

                    {/* Facebook */}
                    <div className="w-full">
                        <label className="flex items-center justify-center gap-2 mb-1 font-medium">
                            <FaFacebookF className="text-blue-600" />
                            Facebook
                        </label>
                        <input
                            type="text"
                            name="facebook"
                            value={links.facebook}
                            onChange={handleChange}
                            placeholder="https://facebook.com/..."
                            className="w-full border rounded-xl px-4 py-2 text-center focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Twitter */}
                    <div className="w-full">
                        <label className="flex items-center justify-center gap-2 mb-1 font-medium">
                            <FaTwitter className="text-black" />
                            Twitter / X
                        </label>
                        <input
                            type="text"
                            name="twitter"
                            value={links.twitter}
                            onChange={handleChange}
                            placeholder="https://x.com/..."
                            className="w-full border rounded-xl px-4 py-2 text-center focus:ring-2 focus:ring-black outline-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full mt-4 py-3 rounded-xl text-white transition ${loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#E53935] hover:bg-red-700"
                            }`}
                    >
                        {loading ? "Saving..." : "Save Changes"}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Page;
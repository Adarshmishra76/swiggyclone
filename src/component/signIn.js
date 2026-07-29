
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

function SignIn() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        
        setIsLoading(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            navigate("/");
        } catch (err) {
            setError("Invalid email or password");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

                <h1 className="text-3xl font-bold text-orange-500 text-center">
                    Swiggy
                </h1>

                <h2 className="text-2xl font-semibold mt-6 text-center">
                    Sign In
                </h2>

                <p className="text-gray-500 text-center mt-2">
                    Welcome back! Please login to continue.
                </p>

                {error && (
                    <div className="mt-4 bg-red-50 text-red-500 px-4 py-2 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-orange-500 font-semibold"
                    >
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default SignIn;
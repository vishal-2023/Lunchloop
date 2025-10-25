"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Mail, Lock, User, Phone, ChefHat } from "lucide-react";
import Header from "@/components/Header";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // simulate delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-yellow-100 to-orange-200 p-4">
      <Header/>
      <Card className="w-full max-w-md mt-20 shadow-2xl border-0 rounded-2xl bg-white/90 backdrop-blur-md">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <ChefHat className="w-12 h-12 text-orange-500" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Create Your Account 🍱
          </CardTitle>
          <p className="text-sm text-gray-500">
            Join our Tiffin family and start your journey
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
             <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Select Role</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    defaultChecked
                    className="text-orange-600 focus:ring-orange-500"
                  />
                  <span className="text-gray-700 text-sm">User</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="restaurant"
                    className="text-orange-600 focus:ring-orange-500"
                  />
                  <span className="text-gray-700 text-sm">Restaurant</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="household_chef"
                    className="text-orange-600 focus:ring-orange-500"
                  />
                  <span className="text-gray-700 text-sm">Household Chef</span>
                </label>
              </div>
            </div>
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="pl-9"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="pl-9"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  className="pl-9"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="pl-9"
                />
              </div>
            </div>

            {/* Signup Button */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>

            {/* OR Divider */}
            <div className="flex items-center gap-2 my-4">
              <div className="grow h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">OR</span>
              <div className="grow h-px bg-gray-200" />
            </div>

            {/* Google Signup */}
            {/* <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 rounded-xl"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </Button> */}

            {/* Already have account */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-600 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

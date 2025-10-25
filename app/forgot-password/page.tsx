"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Mail, ChefHat, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // simulate API delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-50 via-orange-100 to-yellow-200 p-4">
      <Header/>
      <Card className="w-full max-w-md shadow-2xl border-0 rounded-2xl bg-white/90 backdrop-blur-md">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <ChefHat className="w-12 h-12 text-orange-500" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Forgot Password 🔑
          </CardTitle>
          <p className="text-sm text-gray-500">
            Enter your registered email and we’ll send you a reset link
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
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

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending link...
                </>
              ) : (
                "Send Reset Link"
              )}
            </Button>

            {/* Back to login */}
            <div className="flex justify-center mt-4">
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm text-orange-600 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

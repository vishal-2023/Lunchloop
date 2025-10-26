"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2, User, Mail, Phone, Lock, ChefHat, MapPin } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header"; // if you already have one

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"user" | "restaurant" | "household_chef">("user");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    serviceName: "",
    address: "",
    city: "",
    pincode: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Optional: Fetch geolocation
  const handleGetLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported in this browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        // Set latitude and longitude in your state
        setForm((prev) => ({
          ...prev,
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        }));

        // Call Nominatim API to get address
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          console.log("ddlj",data);
          setForm((prev) => ({
            ...prev,
            address: data.display_name, // Or other parts as needed
          }));
        } catch (error) {
          alert("Unable to fetch address.");
        }
      },
      (err) => {
        alert("Unable to get location. Please allow access or enter manually.");
      }
    );
  };


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Example backend API call (replace with your own)
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      alert("Signup successful!");
      // redirect to dashboard
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-100 to-orange-200 p-4">
      <Header />
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
            {/* Role Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Select Role</label>
              <div className="flex items-center gap-4">
                {["user", "restaurant", "household_chef"].map((r) => (
                  <label key={r} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="role"
                      value={r}
                      checked={role === r}
                      onChange={() => setRole(r as any)}
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-gray-700 text-sm capitalize">
                      {r === "household_chef" ? "Household Chef" : r === "restaurant" ? "Restaurant" : "User"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
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
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="pl-9"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
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
                  name="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="pl-9"
                />
              </div>
            </div>

            {/* Show extra fields for restaurant or household chef */}
            {(role === "restaurant" || role === "household_chef") && (
              <>
                {/* Service Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    {role === "restaurant" ? "Restaurant Name" : "Tiffin Service Name"}
                  </label>
                  <Input
                    name="serviceName"
                    type="text"
                    required
                    value={form.serviceName}
                    onChange={handleChange}
                    placeholder={role === "restaurant" ? "DelishBites" : "HomeMade by Neha"}
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      name="address"
                      type="text"
                      required
                      value={form.address}
                      onChange={handleChange}
                      placeholder="123 MG Road, Pune"
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* City + Pincode */}
                <div className="flex gap-3">
                  <div className="flex-1 space-y-2">
                    <label className="text-sm font-medium text-gray-700">City</label>
                    <Input
                      name="city"
                      type="text"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Pune"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-sm font-medium text-gray-700">Pincode</label>
                    <Input
                      name="pincode"
                      type="text"
                      required
                      value={form.pincode}
                      onChange={handleChange}
                      placeholder="411001"
                    />
                  </div>
                </div>

                {/* Optional Location Button */}
                <div className="space-y-2">
                  <Button
                    type="button"
                    onClick={handleGetLocation}
                    variant="outline"
                    className="w-full flex gap-2 items-center justify-center rounded-xl"
                  >
                    <MapPin size={16} />
                    Use My Current Location
                  </Button>
                  {form.latitude && (
                    <p className="text-xs text-center text-green-600">
                      📍 Location captured: {form.latitude}, {form.longitude}
                    </p>
                  )}
                  {form.address && (
                    <p className="text-xs text-center text-blue-600">
                      🏠 Address: {form.address}
                    </p>
                  )}

                </div>
              </>
            )}

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

            {/* Already have an account */}
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

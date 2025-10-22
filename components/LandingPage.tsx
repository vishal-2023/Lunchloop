'use client'

import {
  Menu,
  X,
  Star,
  MapPin,
  Search,
  Clock,
  ChefHat,
  Truck,
  Heart,
} from "lucide-react";
import { useState } from "react";



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [likedDishes, setLikedDishes] = useState<{ [key: number]: boolean }>({});

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleLike = (index: number) => {
    setLikedDishes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const dishes = [
    {
      name: "Butter Chicken & Rice",
      rating: 4.8,
      reviews: 342,
      price: "$8.99",
      provider: "Home Chef - Priya",
      image: "🍗",
      deliveryTime: "12:30 PM",
    },
    {
      name: "Paneer Tikka Masala",
      rating: 4.9,
      reviews: 521,
      price: "$9.49",
      provider: "Kitchen Delight",
      image: "🥘",
      deliveryTime: "12:45 PM",
    },
    {
      name: "Dal Makhani & Naan",
      rating: 4.7,
      reviews: 298,
      price: "$7.99",
      provider: "Traditional Meals",
      image: "🍲",
      deliveryTime: "1:00 PM",
    },
    {
      name: "Biryani Special",
      rating: 4.9,
      reviews: 612,
      price: "$10.49",
      provider: "Spice Masters",
      image: "🍛",
      deliveryTime: "1:15 PM",
    },
    {
      name: "Fish Curry & Rice",
      rating: 4.6,
      reviews: 189,
      price: "$9.99",
      provider: "Coastal Flavors",
      image: "🐟",
      deliveryTime: "12:50 PM",
    },
    {
      name: "Veggie Thali",
      rating: 4.8,
      reviews: 456,
      price: "$8.49",
      provider: "Health Kitchen",
      image: "🥗",
      deliveryTime: "1:10 PM",
    },
  ];

  const providers = [
    {
      name: "Priya's Home Kitchen",
      type: "Household",
      rating: 4.8,
      reviews: 1200,
      speciality: "North Indian",
      icon: "👩‍🍳",
    },
    {
      name: "Kitchen Delight Restaurant",
      type: "Restaurant",
      rating: 4.7,
      reviews: 2100,
      speciality: "Multi-Cuisine",
      icon: "🏪",
    },
    {
      name: "Traditional Meals",
      type: "Household",
      rating: 4.9,
      reviews: 950,
      speciality: "Home Cooked",
      icon: "👩‍🍳",
    },
    {
      name: "Spice Masters",
      type: "Restaurant",
      rating: 4.8,
      reviews: 1850,
      speciality: "Authentic Indian",
      icon: "🏪",
    },
  ];

  const plans = [
    {
      name: "Daily Tiffin",
      price: "$7",
      meals: "1 meal/day",
      period: "Pick any day",
      features: [
        "Fresh meal delivered daily",
        "Choose from menu",
        "Flexible cancellation",
      ],
    },
    {
      name: "Weekly Plan",
      price: "$45",
      meals: "5 meals/week",
      period: "7 days",
      popular: true,
      features: [
        "5 fresh meals",
        "Save 15%",
        "Priority delivery slot",
        "Menu flexibility",
      ],
    },
    {
      name: "Monthly Premium",
      price: "$150",
      meals: "30 meals/month",
      period: "30 days",
      features: [
        "30 meals",
        "Save 25%",
        "Priority support",
        "Customized menus",
        "Free substitutions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-float-up">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-primary">Tiifin</h1>
              <p className="text-xs text-muted-foreground">Food Near You</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("dishes")}
              className="text-foreground hover:text-primary font-medium transition duration-300 hover:scale-110"
            >
              Explore
            </button>
            <button
              onClick={() => scrollToSection("providers")}
              className="text-foreground hover:text-primary font-medium transition duration-300 hover:scale-110"
            >
              Providers
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="text-foreground hover:text-primary font-medium transition duration-300 hover:scale-110"
            >
              Plans
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Login Button */}
          <button className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition shadow-md hover:shadow-lg duration-300">
            Sign In
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border p-4 space-y-4 animate-float-up">
            <button
              onClick={() => scrollToSection("dishes")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition"
            >
              Explore
            </button>
            <button
              onClick={() => scrollToSection("providers")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition"
            >
              Providers
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition"
            >
              Plans
            </button>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-full font-medium hover:opacity-90 transition mt-4">
              Sign In
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-6xl animate-sway">
            🍛
          </div>
          <div className="absolute bottom-20 left-10 text-5xl animate-float-up" style={{animationDelay: '0.2s'}}>
            🥘
          </div>
          <div className="absolute top-1/2 right-1/4 text-4xl animate-zoom-in" style={{animationDelay: '0.4s'}}>
            🍗
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Fresh Homemade Meals<br />
              <span className="text-secondary animate-pulse">Delivered Daily</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-float-up" style={{animationDelay: '0.2s'}}>
              Order from trusted household chefs and local restaurants. Authentic,
              fresh, and affordable tiffin service at your doorstep.
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto animate-zoom-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-white rounded-full p-2 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 gap-2">
                <MapPin className="text-primary" size={20} />
                <input
                  type="text"
                  placeholder="Enter your delivery location"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 w-full sm:w-auto duration-300 hover:shadow-lg">
                <Search size={20} />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 text-center">
            {[
              { label: "Active Providers", value: "500+" },
              { label: "Daily Orders", value: "10K+" },
              { label: "Avg Rating", value: "4.8★" },
            ].map((stat, idx) => (
              <div key={idx} className="animate-float-up" style={{animationDelay: `${0.4 + idx * 0.15}s`}}>
                <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="dishes" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Today's Top Picks
            </h2>
            <p className="text-lg text-muted-foreground">
              Highly rated meals from trusted providers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in border border-border/50 hover:border-primary/30"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                {/* Top Section - Image */}
                <div className="relative bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/5 p-8 text-6xl flex items-center justify-center h-40 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-secondary/10 transition-opacity duration-300"></div>
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-300">{dish.image}</span>

                  {/* Heart Button */}
                  <button
                    onClick={() => toggleLike(idx)}
                    className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 shadow-lg ${
                      likedDishes[idx]
                        ? "bg-primary text-primary-foreground scale-100"
                        : "bg-white/90 text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <Heart size={20} fill={likedDishes[idx] ? "currentColor" : "none"} />
                  </button>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold">
                    Popular ⭐
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-3">
                  {/* Title & Provider */}
                  <div>
                    <h3 className="font-bold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {dish.provider}
                    </p>
                  </div>

                  {/* Rating & Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-primary/5 px-2.5 py-1 rounded-full">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            className={
                              i < Math.floor(dish.rating)
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-foreground">
                        {dish.rating}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-primary">
                      {dish.price}
                    </span>
                  </div>

                  {/* Delivery Time */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/5 px-3 py-2 rounded-lg">
                    <Clock size={14} className="text-primary" />
                    <span className="font-medium">Delivery by {dish.deliveryTime}</span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 mt-2">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers" className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Trusted Providers
            </h2>
            <p className="text-lg text-muted-foreground">
              Household chefs and restaurants you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {providers.map((provider, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 animate-scale-in border border-border/40 hover:border-primary/20 overflow-hidden"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                {/* Background gradient effect */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Header with icon and badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/15 transition-all duration-300">
                        {provider.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {provider.name}
                        </h3>
                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${
                          provider.type === "Household"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary/10 text-secondary"
                        }`}>
                          {provider.type === "Household" ? "👩‍🍳" : "🏪"} {provider.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Speciality */}
                  <div className="mb-5 pb-5 border-b border-border/30">
                    <p className="text-sm text-muted-foreground">
                      Speciality:{" "}
                      <span className="font-bold text-foreground bg-secondary/10 px-2 py-1 rounded-lg inline-block mt-1">
                        {provider.speciality}
                      </span>
                    </p>
                  </div>

                  {/* Rating Section */}
                  <div className="flex items-center gap-4 mb-6 bg-primary/5 p-4 rounded-2xl">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < Math.floor(provider.rating)
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }
                          />
                        ))}
                      </div>
                      <span className="font-bold text-lg text-foreground">
                        {provider.rating}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      <span className="block text-foreground font-bold">
                        {provider.reviews}
                      </span>
                      reviews
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    View Menu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12 animate-slide-up">
            How Tiifin Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Browse Providers",
                description: "Choose from household chefs or restaurants",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Select Your Plan",
                description: "Pick daily, weekly, or monthly subscription",
                icon: "📅",
              },
              {
                step: "3",
                title: "Customize Menu",
                description: "Choose meals based on your preferences",
                icon: "🥘",
              },
              {
                step: "4",
                title: "Order Placed",
                description: "Receive hot meal at your doorstep",
                icon: "🚚",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center animate-float-up"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="text-5xl mb-4 inline-block hover:scale-110 transition-transform">{item.icon}</div>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible subscription options for your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 transition-all duration-300 animate-scale-in hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-2xl md:scale-105"
                    : "bg-white border-2 border-border hover:border-primary hover:shadow-lg"
                }`}
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
                    <span className="bg-secondary text-primary font-bold px-4 py-1 rounded-full text-sm">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">
                    {plan.price}
                    <span className="text-lg font-normal">/month</span>
                  </div>
                  <p
                    className={`text-sm ${
                      plan.popular
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.meals} • {plan.period}
                  </p>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 mb-6 hover:shadow-lg ${
                    plan.popular
                      ? "bg-secondary text-primary hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <span className="text-secondary font-bold text-lg">✓</span>
                      <span
                        className={
                          plan.popular ? "text-primary-foreground" : "text-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Order Your First Tiffin Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of happy customers enjoying fresh, homemade meals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:opacity-90 transition shadow-lg hover:shadow-xl duration-300">
              Download App
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary-foreground/10 transition duration-300">
              Order Online
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/95 text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 animate-float-up">
            <div>
              <h4 className="font-bold text-lg mb-4">Tiifin</h4>
              <p className="text-sm text-primary-foreground/70">
                Fresh homemade meals delivered to your doorstep every day
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Providers</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Join Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Partner Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; 2024 Tiifin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import StatsSection from "../components/StatsCard";
import AlertSystem from "../components/AlertSystem"; // 🆕 ADD THIS IMPORT
import { Users, Droplet, ShieldCheck, Cpu, BarChart3 } from "lucide-react";

export default function Home({ user, onLogout }) {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-16 shadow-inner relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-6">
          {/* Emblem */}
          <img
            src="/assets/images.png"
            alt="National Emblem"
            className="h-28 mx-auto mb-4"
          />

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
            राष्ट्रीय जल सुरक्षा पोर्टल
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            National Jal Suraksha Portal
          </h2>

          {/* Welcome Banner */}
          {user.username && (
            <div className="bg-green-100 border-l-4 border-green-600 text-green-800 font-semibold px-6 py-3 mb-6 rounded shadow-md">
              Welcome, {user.username} ({user.role})!
            </div>
          )}

          {/* Optional Logout Button */}
          {user.username && onLogout && (
            <div className="mb-6">
              <button
                onClick={onLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow font-semibold transition"
              >
                Logout
              </button>
            </div>
          )}

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A unified platform for{" "}
            <span className="font-semibold">
              water quality, public schemes, awareness, and grievance redressal
            </span>{" "}
            under the Ministry of Jal Shakti, Government of India.
          </p>
        </div>

        {/* Subtle background icon */}
        <div className="absolute top-0 right-0 opacity-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply animate-pulse"></div>
      </section>

      {/* 🆕 Alert System Section */}
      <section className="max-w-6xl mx-auto mt-8 px-6 w-full">
        <AlertSystem />
      </section>

      {/* Quick Links / Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 mt-12 px-6 bg-gradient-to-r from-white to-blue-50 rounded-lg p-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-700 hover:scale-105 transition-transform">
          <Droplet className="h-8 w-8 mx-auto text-blue-700 mb-2" />
          <h3 className="text-lg font-bold text-blue-700 mb-2">Water Reports</h3>
          <p className="text-gray-600 text-sm">
            Access real-time & historical water quality data.
          </p>
        </div>

        {/* Dashboard Card */}
        <Link to="/dashboard" className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-purple-700 hover:scale-105 transition-transform cursor-pointer">
          <BarChart3 className="h-8 w-8 mx-auto text-purple-700 mb-2" />
          <h3 className="text-lg font-bold text-purple-700 mb-2">Dashboard</h3>
          <p className="text-gray-600 text-sm">
            View analytics & geographical distribution of reports.
          </p>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-700 hover:scale-105 transition-transform">
          <ShieldCheck className="h-8 w-8 mx-auto text-green-700 mb-2" />
          <h3 className="text-lg font-bold text-green-700 mb-2">Govt Schemes</h3>
          <p className="text-gray-600 text-sm">
            Learn about national & state water schemes and resources.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-orange-600 hover:scale-105 transition-transform">
          <Users className="h-8 w-8 mx-auto text-orange-600 mb-2" />
          <h3 className="text-lg font-bold text-orange-600 mb-2">ASHA Login</h3>
          <p className="text-gray-600 text-sm">
            Data entry & water sample updates by field workers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-red-600 hover:scale-105 transition-transform">
          <Cpu className="h-8 w-8 mx-auto text-red-600 mb-2" />
          <h3 className="text-lg font-bold text-red-600 mb-2">Grievances</h3>
          <p className="text-gray-600 text-sm">
            Submit and track complaints related to water services.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <div className="mt-16 w-full">
        <SearchBar />
      </div>

      {/* Stats Section */}
      <div className="mt-12 w-full">
        <StatsSection />
      </div>

      {/* News / Updates Ticker */}
      <div className="w-full bg-yellow-100 border-t border-yellow-300 mt-16 py-3 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 flex items-center space-x-3 overflow-hidden">
          <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded text-sm font-bold">
            Latest Updates
          </span>
          <marquee
            behavior="scroll"
            direction="left"
            className="text-gray-700 font-medium"
          >
            🚰 Water Quality Report (September 2025) released | 💡 Rural Water
            Conservation Scheme launched | 📢 New online grievance redressal
            feature added | 🌍 Jal Shakti Abhiyan 2.0 begins nationwide
          </marquee>
        </div>
      </div>

      {/* Call-to-Action / Footer Info */}
      <section className="max-w-6xl mx-auto mt-12 px-6 py-12 bg-blue-50 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-3">
          Join Us in Ensuring Safe Drinking Water
        </h2>
        <p className="text-gray-700 mb-6">
          Contribute, report, and participate in initiatives under the National Jal
          Suraksha Portal to help every citizen get access to clean water.
        </p>
        <a
          href="/asha-login"
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded shadow transition"
        >
          ASHA Worker Login / Data Entry
        </a>
      </section>
    </div>
  );
}
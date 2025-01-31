import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, PhoneCall, TrendingUp, ShieldCheck } from "lucide-react";

export default function MavunoWealthAd() {
  const [phone, setPhone] = useState("");

  const handleSignUp = () => {
    alert(`Thank you for your interest, ${phone}! We will contact you soon.`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      <div className="flex justify-between w-full max-w-4xl mb-6">
        <Button className="bg-green-600 hover:bg-green-700 text-white">Sign In</Button>
        <Button className="bg-green-600 hover:bg-green-700 text-white">Sign Up</Button>
      </div>
      
      <motion.h1
        className="text-4xl font-bold text-green-800 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Grow Your Wealth with <span className="text-green-600">Mavuno Wealth</span>
      </motion.h1>
      <p className="text-gray-700 text-center mt-4 max-w-lg">
        Save, invest, and secure your financial future effortlessly with our farmer-focused platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <FeatureCard icon={<TrendingUp />} title="Smart Investments" desc="Maximize your earnings through low-risk investment options." />
        <FeatureCard icon={<ShieldCheck />} title="Secure Savings" desc="Keep your savings safe with automated deposits and withdrawals." />
        <FeatureCard icon={<PhoneCall />} title="Easy Access via USSD" desc="Monitor savings & investments with a simple USSD code." />
      </div>

      <div className="mt-10 flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-green-700">Get Started Today</h2>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-4 p-2 border rounded w-full"
        />
        <Button onClick={handleSignUp} className="mt-4 bg-green-600 hover:bg-green-700 text-white">
          Sign Up Now
        </Button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-green-600 mb-2">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </motion.div>
  );
}

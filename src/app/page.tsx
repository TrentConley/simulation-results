"use client"; // Add this line at the top

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("plot1");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "plot1" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("plot1")}
          >
            Plot 1
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "plot2" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("plot2")}
          >
            Plot 2
          </button>
          {/* Add more buttons for additional plots as needed */}
        </div>
        <div className="w-full h-[9000px]">
          {activeTab === "plot1" && (
            <>
              <h2 className="text-center text-xl mb-4">
                Using product for only Lift and Drag
              </h2>
              <iframe
                src="/sim_plots.html"
                className="w-full h-full border-0"
                title="Simulation Plot 1"
              ></iframe>
            </>
          )}
          {activeTab === "plot2" && (
            <>
              <h2 className="text-center text-xl mb-4">
                Using product for all
              </h2>
              <iframe
                src="/sim_plots2.html"
                className="w-full h-full border-0"
                title="Simulation Plot 2"
              ></iframe>
            </>
          )}
          {/* Add more iframes for additional plots as needed */}
        </div>
      </div>
    </main>
  );
}

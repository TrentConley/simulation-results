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
            className={`px-4 py-2 mr-2 ${
              activeTab === "plot1" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("plot1")}
          >
            Plot 1
          </button>
          <button
            className={`px-4 py-2 mx-2 ${
              activeTab === "plot2" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("plot2")}
          >
            Plot 2
          </button>
          <button
            className={`px-4 py-2 ml-2 ${
              activeTab === "plot3" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("plot3")}
          >
            Plot 3
          </button>
          <button
            className={`px-4 py-2 ml-2 ${
              activeTab === "plot4" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("plot4")}
          >
            Plot 4
          </button>
          {/* Add more buttons for additional plots as needed */}
        </div>
        <div className="w-full h-[9000px]">
          {activeTab === "plot1" && (
            <>
              <h2 className="text-center text-xl mb-4">
                Current center of gravity, no dampening
              </h2>
              <iframe
                src="/CURRENT_CENTER_GRAVITY_NO_DAMPENING.html"
                className="w-full h-full border-0"
                title="Simulation Plot 1"
              ></iframe>
            </>
          )}
          {activeTab === "plot2" && (
            <>
              <h2 className="text-center text-xl mb-4">
                With center of gravity at 2.00, no dampening
              </h2>
              <iframe
                src="/2_CENTER_GRAVITY_NO_DAMPENING.html"
                className="w-full h-full border-0"
                title="Simulation Plot 2"
              ></iframe>
            </>
          )}
          {activeTab === "plot3" && (
            <>
              <h2 className="text-center text-xl mb-4">
                Current center of gravity, with dampening
              </h2>
              <iframe
                src="/CURRENT_CENTER_GRAVITY_YES_DAMPENING.html"
                className="w-full h-full border-0"
                title="Simulation Plot 3"
              ></iframe>
            </>
          )}
          {activeTab === "plot4" && (
            <>
              <h2 className="text-center text-xl mb-4">
                With center of gravity at 2.00, with dampening
              </h2>
              <iframe
                src="/2_CENTER_GRAVITY_YES_DAMPENING.html"
                className="w-full h-full border-0"
                title="Simulation Plot 3"
              ></iframe>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

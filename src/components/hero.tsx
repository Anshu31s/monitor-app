"use client";
import React from "react";
import { Meteors } from "./ui/meteors";
import { SparklesCore } from "./ui/sparkles";

export function MeteorsDemo() {
  return (
    <div className="flex justify-center items-center w-full h-screen text-center">
      <div className="max-w-4xl">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Website Monitoring <br />
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:flex mt-9 space-y-3 sm:space-y-0 sm:space-x-5">
          <a
            href="#"
            className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Create a bot
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Book a demo
          </a>
        </div>
      </div>
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={10}
        className="absolute w-full h-full"
        particleColor="#FFFFFF"
      />
      <Meteors number={20} />
    </div>
  );
}

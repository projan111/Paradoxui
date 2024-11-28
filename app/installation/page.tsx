"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("code");
  const [copied, setCopied] = useState(false);

  const toggleButtonCode = `npx install motion clx tailwindcss`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(toggleButtonCode);
    setCopied(true);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col mt-6">
        <h2 className="text-xl font-semibold text-zinc-300">Installation</h2>
        <p className="text-sm text-zinc-400 py-2">
          Simply copy and paste the best ui design direct to your files.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-between items-center border border-zinc-700 p-2 rounded-xl bg-zinc-900 mt-4">
        <div className="flex gap-1 w-fit">
          <button
            className={`px-3 py-1 text-sky-500 transition-colors ${
              activeTab === "code"
                ? ""
                : "hover:text-sky-500 text-zinc-300"
            }`}
            onClick={() => setActiveTab("code")}
          >
            npx install motion clx tailwindcss
          </button>
        </div>
        {!copied && activeTab === "code" && (
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-md text-zinc-300 hover:text-sky-500 cursor-pointer"
          >
            <Icon icon="si:copy-alt-line" />
            <span className="text-sm">Copy code</span>
          </button>
        )}
        {copied && activeTab === "code" && (
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-md text-zinc-300 cursor-pointer"
          >
            <Icon icon="charm:tick" />
            <span className="text-sm">Copied!</span>
          </button>
        )}
      </div>
    </div>
  );
}

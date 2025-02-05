"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("preview");
  const [isOn, setIsOn] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleButtonCode = `// Interactive On/Off Button
import React, { useState } from 'react';

function OnOffButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={
        \`px-4 py-2 rounded-md \${isOn ? 'bg-green-500' : 'bg-red-500'} text-white\`
      }
    >
      {isOn ? 'On' : 'Off'}
    </button>
  );
}

export default OnOffButton;`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(toggleButtonCode);
    setCopied(true);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-zinc-300">Introduction</h2>
        <p className="text-sm text-zinc-400 py-2">
          Simply copy and paste the best ui design direct to your files.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-between items-center border border-zinc-700 p-2 rounded-tl-xl rounded-tr-xl bg-zinc-900 mt-4">
        <div className="flex gap-1 bg-zinc-800 rounded-md border w-fit">
          <button
            className={`px-3 py-1 rounded-md cursor-pointer border transition-colors ${
              activeTab === "preview"
                ? "bg-zinc-900 border-zinc-500 text-sky-500"
                : "hover:text-sky-500 text-zinc-300"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`px-3 py-1 rounded-md cursor-pointer border transition-colors ${
              activeTab === "code"
                ? "bg-zinc-900 border-zinc-500 text-sky-500"
                : "hover:text-sky-500 text-zinc-300"
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
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

      {/* Tab Content */}
      <div className="flex border border-zinc-700 p-2 rounded-bl-xl rounded-br-xl h-[60vh] bg-zinc-900 text-zinc-300">
        {activeTab === "code" ? (
          <pre className="text-sm text-left w-full overflow-auto p-4 rounded-md font-mono text-sky-500 ]">
            {toggleButtonCode}
          </pre>
        ) : (
          <div className="w-full flex items-center justify-center">
            <button
              onClick={() => setIsOn(!isOn)}
              className={`px-4 py-2 rounded-md ${
                isOn ? "bg-green-500" : "bg-red-500"
              } text-white`}
            >
              {isOn ? "On" : "Off"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function Footer() {
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    // Fetch the last updated timestamp written by GitHub Action
    fetch("/last-update.txt")
      .then((res) => res.text())
      .then((data) => setLastUpdate(data.trim()))
      .catch(() => setLastUpdate("Unknown"));
  }, []);

  return (
    <footer className="mt-20 py-8 text-center border-t border-gray-800 bg-gradient-to-t from-black to-slate-900">
      <div className="space-y-3">
        {/* Owner Info */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-medium">Lijin Raj</span>. All Rights Reserved.
        </p>

        {/* Last Update Timestamp */}
        <p className="text-xs text-gray-500 italic">
          {lastUpdate
            ? `Last updated: ${lastUpdate}`
            : "Fetching last update info..."}
        </p>

        {/* Visitor Counter Badge */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-xs text-gray-500">Visitors:</span>
          <img
            src="https://visitor-badge.laobi.icu/badge?page_id=nlijin.devops_portfolio"
            alt="visitor badge"
            className="h-5"
          />
        </div>
      </div>
    </footer>
  );
}

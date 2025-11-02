import React, { useEffect, useState } from "react";

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState("Loading...");

  useEffect(() => {
    const fileUrl = `${window.location.origin}${import.meta.env.BASE_URL}last-update.txt`;

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => setLastUpdated(text))
      .catch(() => setLastUpdated("Last updated: unknown"));
  }, []);

  return (
    <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800 bg-slate-900">
      <p>© 2025 Lijin Raj. All Rights Reserved.</p>
      <p className="mt-1">{lastUpdated}</p>
    </footer>
  );
}

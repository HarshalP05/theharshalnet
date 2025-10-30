import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen text-green-400">
      <span className="animate-pulse text-lg font-semibold">
        Loading 3D Scene...
      </span>
    </div>
  );
}

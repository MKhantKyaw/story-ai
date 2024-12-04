import React from "react";
import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="text-white p-2 rounded-2xl bg-blue-400 state-effects bg-gradient-to-r from-emerald-400/50 via-purple-400/50 to-red-500/60"
    >
      {pending ? "Generating..." : "Generate Story"}
    </button>
  );
}

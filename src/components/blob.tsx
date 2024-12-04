import Image from "next/image";
import React from "react";

export default function Blob() {
  return (
    <Image
      src="/blob.svg"
      width={600}
      height={600}
      alt="Blob"
      className="hidden lg:inline blur-lg"
    />
  );
}

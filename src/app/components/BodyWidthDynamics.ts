"use client";
import dynamic from "next/dynamic";

export const BodyWidthDynamic = dynamic(
  () =>
    import("./BodyWidth").then((mod) => mod.BodyWidth as React.ComponentType),
  {
    ssr: false,
  },
);

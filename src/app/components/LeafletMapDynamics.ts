"use client";
import dynamic from "next/dynamic";

export const LeafletMapDynamic = dynamic(
  () => import("./LeafletMap").then((mod) => mod.LeafletMap),
  {
    ssr: false,
  },
);

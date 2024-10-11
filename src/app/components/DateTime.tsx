"use client";
import { useMount } from "../hooks/useMount";
import { Suspense } from "react";

export function DateTime() {
  const hydrated = useMount();
  return (
    <div>
      <Suspense key={hydrated ? "local" : "server"}>
        <p>{new Date().toLocaleString()}</p>
      </Suspense>
    </div>
  );
}

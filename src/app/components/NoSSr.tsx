"use client";

import React from "react";
import { useMount } from "../hooks/useMount";

export default function NoSsr({ children }: { children: React.ReactNode }) {
  const mounted = useMount();
  if (!mounted) return null;
  return <>{children}</>;
}

"use client";

import { useRef, useEffect } from "react";
import * as d3 from "d3";

export function D3Demo() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) throw new Error("Chart wrapper not found");
    chartRef.current.innerHTML = "";
    d3.select(chartRef.current)
      .insert("svg")
      .attr("width", 960)
      .attr("height", 500)
      .append("g")
      .attr("transform", "translate(20, 20)")
      .append("rect")
      .attr("width", 920)
      .attr("height", 460);
  }, []);
  return <div ref={chartRef}>Loading D3....</div>;
}

"use client";
// @ts-nocheck
import $ from "jquery";

export function BodyWidth() {
  const width = $("body").width();
  return (
    <div>
      <h2 className="text-2xl text-yellow-100">The Width of the body</h2>
      <p className="text-xl text-yellow-100">{width}</p>
    </div>
  );
}

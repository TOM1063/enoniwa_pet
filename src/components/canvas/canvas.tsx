"use client";
import dynamic from "next/dynamic";
import React from "react";
import { P5WrapperProps } from "react-p5-wrapper";
import p5Canvas from "./canvas-p5";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper as any),
  {
    ssr: false,
  }
) as unknown as React.NamedExoticComponent<P5WrapperProps>;

export function Canvas() {
  return (
    <div>
      <ReactP5Wrapper sketch={p5Canvas} />
    </div>
  );
}

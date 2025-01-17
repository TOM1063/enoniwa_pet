"use client";
import dynamic from "next/dynamic";
import React from "react";
import { P5WrapperProps } from "react-p5-wrapper";
import sketch from "./sketch";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper as any),
  {
    ssr: false,
  }
) as unknown as React.NamedExoticComponent<P5WrapperProps>;

export function Preview() {
  return (
    <>
      <ReactP5Wrapper sketch={sketch} />
    </>
  );
}
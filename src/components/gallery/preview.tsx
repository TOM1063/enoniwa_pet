"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { Preview } from "./preview-p5";
export function PreviewComponent() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let instance: Preview | null = null;
      console.log("canvasref?")
    if (canvasRef.current) {
      console.log("instancing canvas on", canvasRef.current);
      instance = new Preview(canvasRef.current);
      console.log("instance", instance);
      return () => {
        if (instance) {
          instance.destroy();
          instance = null;
          console.log("destroyed");
        }
      };
    }
    else {
      console.log("no canvas ref");
    } 
  },[]);

  return (
    <>
      <div ref={canvasRef} />
    </>
  );
}
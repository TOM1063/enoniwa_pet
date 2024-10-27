"use client";
import React, { useEffect, useRef } from "react";
import { Canvas } from "./canvas-p5";
import { ArrowLeftIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export function CanvasComponent() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [instance, setInstance] = useState<Canvas | null>(null);

  const uploadData = async (data: string) => {
    console.log("uploading data", data);
  }

  const uploadHandler = async () => {
    console.log("uploading data");
    await instance?.uploadData();
  }

  const uploadDataCallback = async (data: string) => {
      console.log("uploading data", data);
      await uploadData(data);
  }

  useEffect(() => {
    let instance: Canvas | null = null;
      console.log("canvasref?")
    if (canvasRef.current) {
      console.log("instancing canvas on", canvasRef.current);
      instance = new Canvas(canvasRef.current, uploadDataCallback);
      setInstance(instance);
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
      <div className="rounded-lg bg-white shadow-lg">
        <div className="w-full h-8 bg-white rounded-t-lg shadow-md flex justify-between items-center px-4">
          <Link href="/gallery">
            <ArrowLeftIcon className="w-6 h-6 text-gray-500" />
          </Link>
          {/* <button
              className="text-sm font-bold text-gray-500 mr-2"
              onClick={() => setShowColorPicker(!showColorPicker)}
            >
              <PaletteIcon className="w-6 h-6" />
            </button>
            {showColorPicker && (
              <input
                type="color"
                className="w-8 h-8 p-0 border-none"
              onChange={(e) => console.log(e.target.value)} // Handle color change
            />
          )} */}
          <button className="text-sm font-bold text-gray-500" onClick={() => {uploadHandler()}}>
            <CheckIcon className="w-6 h-6" />
          </button>
        </div>
        <div ref={canvasRef}></div>
      </div>
  );
}
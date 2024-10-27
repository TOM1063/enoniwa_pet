"use client";
import { Canvas } from "@/components/canvas/canvas";
import { ArrowLeftIcon, CheckIcon, PaletteIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function CanvasPage() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const upload = () => {
    console.log("upload");
  };
  const getData = (data: string[]) => {
    console.log("getData");
    setData(data);
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-3rem)] w-full bg-gray-100">
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
          <button className="text-sm font-bold text-gray-500" onClick={() => {upload()}}>
            <CheckIcon className="w-6 h-6" />
          </button>
        </div>
        <Canvas getData={getData} />
      </div>
    </div>
  );
}

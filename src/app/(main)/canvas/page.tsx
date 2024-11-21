"use client";

import { CanvasComponent } from "@/components/canvas/canvas";
export default function CanvasPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-3rem)] w-full bg-gray-100">
        <CanvasComponent/>
    </div>
  );
}

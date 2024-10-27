"use client";
import { CanvasComponent } from "@/components/canvas/canvas";
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
        <CanvasComponent/>
    </div>
  );
}

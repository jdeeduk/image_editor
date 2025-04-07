'use client';

import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

export default function ImageEditor() {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    canvasRef.current = new fabric.Canvas('canvas', {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff'
    });

    return () => {
      canvasRef.current?.dispose();
    };
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      fabric.Image.fromURL(event.target?.result as string, (img) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Scale image to fit canvas
        const scale = Math.min(
          canvas.width! / img.width!,
          canvas.height! / img.height!
        );
        img.scale(scale);

        canvas.clear();
        canvas.add(img);
        canvas.centerObject(img);
        setImageLoaded(true);
      });
    };
    reader.readAsDataURL(file);
  };

  const addText = () => {
    const text = new fabric.IText('Double click to edit', {
      left: 100,
      top: 100,
      fontSize: 20,
      fill: '#000000'
    });
    canvasRef.current?.add(text);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = dataURL;
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <canvas id="canvas" />
      </div>
      
      <div className="flex gap-4">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Upload Image
        </button>
        
        <button
          onClick={addText}
          disabled={!imageLoaded}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        >
          Add Text
        </button>
        
        <button
          onClick={downloadImage}
          disabled={!imageLoaded}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
        >
          Download
        </button>
      </div>
    </div>
  );
}

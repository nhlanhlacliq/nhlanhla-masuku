"use client";

import { useEffect, useState } from "react";

const MouseFollow = ({ children }: { children: any }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='relative'>
      <div
        className='absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-full pointer-events-none transform -translate-x-1 -translate-y-1 mix-blend-multiply'
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>
      {children}
    </div>
  );
};

export default MouseFollow;

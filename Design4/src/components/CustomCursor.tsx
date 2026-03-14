"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      cursorPos.current.x +=
        (mousePos.current.x - cursorPos.current.x) * 0.12;
      cursorPos.current.y +=
        (mousePos.current.y - cursorPos.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseEnterInteractive = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "60px";
        cursorRef.current.style.height = "60px";
        cursorRef.current.style.marginLeft = "-10px";
        cursorRef.current.style.marginTop = "-10px";
        cursorRef.current.style.borderColor = "var(--color-accent)";
      }
    };

    const handleMouseLeaveInteractive = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "40px";
        cursorRef.current.style.height = "40px";
        cursorRef.current.style.marginLeft = "0px";
        cursorRef.current.style.marginTop = "0px";
        cursorRef.current.style.borderColor = "var(--color-foreground)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 40,
          height: 40,
          border: "1.5px solid #111111",
          borderRadius: "50%",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, margin 0.3s ease",
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#111111",
          borderRadius: "50%",
        }}
      />
    </>
  );
}

"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section"));
    sections.forEach((el) => el.classList.add("reveal-init"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-60px 0px", threshold: 0.05 }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

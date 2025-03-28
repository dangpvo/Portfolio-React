import { useEffect } from "react";

const useLazyLoading = () => {
  useEffect(() => {
    const lazyImages = document.querySelectorAll(".lazy");

    if (lazyImages.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("loading");
            img.classList.add("loaded");
            observerInstance.unobserve(img);
          }
        });
      },
      {
        root: null, // Observing the entire page
        rootMargin: "0px", // Default margin
        threshold: 0, // Load image as soon as it appears
      }
    );

    lazyImages.forEach((img) => observer.observe(img));

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);
};

export default useLazyLoading;

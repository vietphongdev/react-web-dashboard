import { useEffect, useRef } from "react";

export const useClickOutside = (callback) => {
  const domNode = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!domNode.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return domNode;
};

export const useClickOutsideRef = (content_ref, toggle_ref) => {
  useEffect(() => {
    const listener = document.addEventListener("mousedown", (e) => {
      // user click toggle
      if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
        content_ref.current.classList.toggle("active");
      } else {
        // user click outside toggle and content
        if (content_ref.current && !content_ref.current.contains(e.target)) {
          content_ref.current.classList.remove("active");
        }
      }
    });
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);
};

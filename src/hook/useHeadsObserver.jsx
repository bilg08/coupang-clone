import { useState,useRef,useEffect } from "react";

function useHeadsObserver() {
  const [activeId, setActiveId] = useState("");
  const observer = useRef();

  useEffect(() => {
    const handleObsever = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-20% 0% -35% 0px",
    });

    const elements = document.querySelectorAll("nav");
    elements.forEach((elem) => {
      return observer.current.observe(elem);
    });
    return () => observer.current?.disconnect();
  }, []);
  return { activeId };
}
export default useHeadsObserver;
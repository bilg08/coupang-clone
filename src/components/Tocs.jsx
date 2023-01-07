import React, { useEffect, useState } from "react";
import useHeadsObserver from "../hook/useHeadsObserver";

function Tocs() {
  const [headings, setHeadings] = useState([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("nav")).map(
      (elem) => {
        return {
          id: elem.id,
          text: elem.id,
        };
      }
    );
    setHeadings(elements);
  }, []);
  return (
    <div className="sticky top-0 w-24">
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={heading.id}>
            <a
              className={`${
                heading.id === activeId ? "text-green-500" : "text-sky-500"
              }`}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: "smooth",
                });
              }}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tocs;

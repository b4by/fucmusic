//@ts-nocheck
import { useEffect, useRef, useState } from "react";

export const PlaylistTabs = ({ data, setCurrentGenre }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(1);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(1);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="relative overflow-hidden">
      <ul className="flex space-x-6 overflow-hidden overflow-x-scroll md:overflow-x-auto">
        {data &&
          Object.keys(data).map((genre, key) => {
            if (genre === "id") return;
            return (
              <li key={genre}>
                <button
                  type="button"
                  ref={(el) => (tabsRef.current[key] = el)}
                  className="pb-3 pt-2 font-bold uppercase text-white transition-all duration-300 hover:opacity-75 md:text-2xl"
                  onClick={() => {
                    setActiveTabIndex(key);
                    setCurrentGenre(genre);
                  }}
                >
                  {genre === "pop" && "Поп"}
                  {genre === "rock" && "Рок"}
                  {genre === "rap" && "Рэп"}
                  {genre === "hyperpop" && "Hyperpop"}
                  {genre === "electronic" && "Электронная"}
                </button>
              </li>
            );
          })}
      </ul>
      <span
        className="absolute bottom-0 hidden h-1 bg-gradient-to-r from-[#F18336] to-[#D12B2D] transition-all duration-300 md:block"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      />
    </div>
  );
};

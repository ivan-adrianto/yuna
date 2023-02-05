import { useEffect } from "react";

export const useScrollToFetch = (
  callback: () => void,
  dependencies: (string | number)[],
  endOfList?: boolean
) => {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line
  }, dependencies);

  const onScroll = () => {
    if (endOfList) return;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      callback();
    }
  };
};

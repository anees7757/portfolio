import { useEffect, useState } from "react";
const useScroll = () => {
  const [completion, setCompletion] = useState<number>(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const scrollPercent = (currentProgress / scrollHeight) * 100;
        setCompletion(parseFloat(scrollPercent.toFixed(2)));
      }
    };
    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};
export default useScroll;

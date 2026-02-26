import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  target: string;
}

const CountUp = ({ target }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/\d/g, "");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default CountUp;

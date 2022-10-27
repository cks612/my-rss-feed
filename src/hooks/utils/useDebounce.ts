import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [devouncedValue, setDevouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDevouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return devouncedValue;
};

export default useDebounce;

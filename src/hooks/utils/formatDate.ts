import { useEffect, useState } from "react";

const FormatDate = (props: string) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const date = new Date(props);
  useEffect(() => {
    setFormattedDate(
      date.toLocaleDateString().replaceAll(".", " -").slice(0, -1)
    );
  }, []);

  return formattedDate;
};

export default FormatDate;

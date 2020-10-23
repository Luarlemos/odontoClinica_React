import { useEffect, useState } from "react";

import mockTestimonials from "./mockData/testimonials.json";

const useTestimonyHook = () => {
  const [testimonies, setTestimonies] = useState([
    {
      client: "",
      clientJob: "",
      clientImg: "",
      feeback: "",
      feedback_summary: "",
    },
  ]);

  useEffect(() => {
    const generateRandomIndex = (arrayLength, diff = null) => {
      const random = Math.floor(Math.random() * arrayLength);

      if (random === diff) return generateRandomIndex();

      return random;
    };

    const firstRandomIndex = generateRandomIndex(mockTestimonials.length);
    const secondRandomIndex = generateRandomIndex(
      mockTestimonials.length,
      firstRandomIndex
    );

    setTestimonies([
      mockTestimonials[firstRandomIndex],
      mockTestimonials[secondRandomIndex],
    ]);
  }, []);

  return testimonies;
};

export default useTestimonyHook;

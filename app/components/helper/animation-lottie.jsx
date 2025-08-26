"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%',
    }
  };

  // Only render on client side
  if (!isClient) {
    return <div style={{ width: width || '95%', height: '200px' }} />; // Placeholder
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
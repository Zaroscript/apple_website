import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div class="w-full h-full -translate-x-1/2 flex justify-center items-center">
        <div class="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    </Html>
  );
};

export default Loader;

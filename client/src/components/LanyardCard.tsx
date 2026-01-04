import React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Lanyard from "./Lanyard";

interface LanyardCardProps {
  cardTexture: string;
}

const LanyardCard: React.FC<LanyardCardProps> = ({ cardTexture }) => {
  return (
    <div
      className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
      style={{ height: 420 }}
    >
      <Canvas
        style={{ background: "transparent", borderRadius: '1rem', width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <Physics>
          <Lanyard cardTexture={cardTexture} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default LanyardCard;

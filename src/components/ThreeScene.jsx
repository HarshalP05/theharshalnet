import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import Loader from "./Loader";

function PCBModel() {
  const { scene } = useGLTF("/models/pcb.glb");
  return <primitive object={scene} scale={2.5} rotation={[0.4, 0, 0]} />;
}

export default function ThreeScene() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <PCBModel />
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>

      {/* Overlay Text + Image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.img
          src="/images/profile.png"
          className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.h1
          className="text-4xl font-bold mt-4 text-green-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Harshal Patil
        </motion.h1>
        <motion.p
          className="mt-2 text-gray-300 text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Embedded Systems | AI | Full Stack
        </motion.p>
      </div>
    </div>
  );
}

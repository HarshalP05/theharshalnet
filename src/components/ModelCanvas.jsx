import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function PCBModel() {
  const { scene } = useGLTF("/models/pcb.glb"); // replace later with your actual model
  return <primitive object={scene} scale={1.5} />;
}

export default function ModelCanvas() {
  return (
    <div className="w-full h-[400px] bg-black rounded-xl">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <PCBModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

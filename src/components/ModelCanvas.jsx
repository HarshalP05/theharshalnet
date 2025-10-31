import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import { supabase } from "../lib/supabaseClient";

function ESP32Model({ modelUrl }) {
  const { scene } = useGLTF(modelUrl, true);
  const ref = useRef();
  const [angle, setAngle] = useState(0);
  const [ledIntensity, setLedIntensity] = useState(0);

  useEffect(() => {
    if (!scene) return;

    // Auto center & scale
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = 2.5 / maxDim;
    scene.scale.setScalar(scaleFactor);

    // Adjust orientation
    scene.rotation.z = 45 * (Math.PI / 180);
    scene.rotation.y = 90 * (Math.PI / 180);
  }, [scene]);

  useFrame((state, delta) => {
    if (ref.current) {
      setAngle((prev) => prev + delta * 0.4);
      ref.current.rotation.y = Math.sin(angle * 0.8) * 0.3 + angle * 0.15;
      ref.current.rotation.x = Math.cos(angle * 0.6) * 0.05;

      const ledPulse = Math.abs(Math.sin(state.clock.elapsedTime * 4));
      setLedIntensity(ledPulse * 2.5);
    }
  });

  return (
    <group ref={ref} position={[0, -0.2, 0]}>
      <primitive object={scene} />
      <pointLight
        position={[0.05, 0.1, 0.08]}
        intensity={ledIntensity}
        distance={0.3}
        color={"#00ffcc"}
      />
    </group>
  );
}

export default function ModelCanvas() {
  const [modelUrl, setModelUrl] = useState(null);

  // ✅ Fetch signed URL from Supabase bucket
  useEffect(() => {
    const loadModel = async () => {
      const { data, error } = await supabase.storage
        .from("files")
        .createSignedUrl("ESP.glb", 600); // 10-minute signed link

      if (error) {
        console.error("Error loading model:", error.message);
      } else {
        setModelUrl(data.signedUrl);
      }
    };

    loadModel();
  }, []);

  if (!modelUrl) {
    return (
      <div className="w-full h-[450px] flex items-center justify-center bg-[#001a1f] text-gray-400 rounded-2xl">
        Loading 3D Model...
      </div>
    );
  }

  return (
    <div className="w-full h-[450px] rounded-2xl bg-gradient-to-br from-[#000e0f]/80 via-[#001a1f]/60 to-[#001a33]/90 border border-teal-400/20 shadow-[0_0_30px_rgba(0,255,200,0.15)] backdrop-blur-md">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 40 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.8} color={"#aaffff"} />
        <directionalLight position={[3, 3, 2]} intensity={1.4} color={"#00aaff"} />
        <directionalLight position={[-3, -3, -2]} intensity={0.6} color={"#00ffaa"} />
        <ESP32Model modelUrl={modelUrl} />
        <fog attach="fog" args={["#000e0f", 4, 10]} />
        <OrbitControls enableZoom enablePan enableRotate />
      </Canvas>
    </div>
  );
}

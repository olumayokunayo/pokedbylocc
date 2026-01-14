import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense } from "react";

const Piercing3D = () => {
  const { scene } = useGLTF("/models/nose_piercing.glb");

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 35 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Suspense fallback={<Html>Loading 3D...</Html>}>
        <primitive
          object={scene}
          rotation={[0.3, Math.PI / 4, 0]}
          scale={1}
          position={[0, -0.9, 0]}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
};

export default Piercing3D;

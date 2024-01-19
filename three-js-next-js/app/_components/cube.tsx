"use client";

import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Mesh, TextureLoader } from "three";

export default function Maincube() {
  return (
    <Canvas>
      <ScrollControls pages={5} damping={0.1}>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[4, 5, 3]} />
      <Cube />
      </ScrollControls>
    </Canvas>
  )
}

function Cube() {
  const mesh = useRef<Mesh>(null);
  const mouse = {
    x: useSpring(useMotionValue(0)),
    y: useSpring(useMotionValue(0)),
  }

  const data = useScroll();

  useFrame((state, delta) => {
    const { offset } = data;

    mesh.current.rotation.x = offset * 5;
    mesh.current.rotation.y = offset * 5;
    mesh.current.rotation.z = offset * 5;
    
  })

  // useFrame((state, delta) => {
    // mesh.current.rotation.x += delta * 0.5;
    // mesh.current.rotation.y += delta * 0.5;
    // mesh.current.rotation.z += delta * 0.5;
  // })

  const texture1 = useLoader(TextureLoader, "/assets/1.jpg")
  const texture2 = useLoader(TextureLoader, "/assets/2.jpg")
  const texture3 = useLoader(TextureLoader, "/assets/3.jpg")
  const texture4 = useLoader(TextureLoader, "/assets/4.jpg")
  const texture5 = useLoader(TextureLoader, "/assets/5.jpg")
  const texture6 = useLoader(TextureLoader, "/assets/6.jpg")

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture1} attach={"material-0"} />
      <meshStandardMaterial map={texture2} attach={"material-1"} />
      <meshStandardMaterial map={texture3} attach={"material-2"} />
      <meshStandardMaterial map={texture4} attach={"material-3"} />
      <meshStandardMaterial map={texture5} attach={"material-4"} />
      <meshStandardMaterial map={texture6} attach={"material-5"} />
    </mesh>
  )
}

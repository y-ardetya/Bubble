import { MeshReflectorMaterial, RoundedBox, Float } from "@react-three/drei";
import * as THREE from "three";

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshBasicMaterial({
  toneMapped: false,
  color: new THREE.Color(1, 1, 3),
});

const Bubble = ({ ...props }) => {
  return (
    <Float
      speed={3}
      rotationIntensity={0.75}
      floatIntensity={0.5}
      floatingRange={[0.75, 0.75, 0.5]}
    >
      <mesh {...props} geometry={geometry} material={material} />
        
     
    </Float>
  );
};

const LandingPage = () => {
  return (
    <>
      //* Back Wall * //
      <mesh scale={[30, 10, 1]} position={[0, 3, -5]}>
        <planeGeometry />
        <meshStandardMaterial />
      </mesh>
      //* Floor *//
      <mesh
        scale={[30, 10, 1]}
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          blur={[150, 50]}
          resolution={512}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.2}
          maxDepthThreshold={1.6}
          color="#050505"
          metalness={0}
        />
      </mesh>
      //* Back Wall *//
      <mesh scale={[30, 10, 1]} position={[0, 3, -5]}>
        <planeGeometry />
        <meshStandardMaterial color="black" />
      </mesh>
      //* Middle Cube *//
      <RoundedBox scale={1.5} position={[-0.2, -1.4, 0]} rotation={[0, 0.7, 0]}>
        <meshStandardMaterial color={[1, 1, 3]} toneMapped={false} />
      </RoundedBox>
      //* BUBBLES *//
      <Bubble scale={0.75} position={[-3, -1.3, 0]} />
      <Bubble scale={0.2} position={[0.8, -1.8, 1]} />
      <Bubble scale={0.3} position={[-1.4, -1.7, -1.3]} />
      <Bubble scale={1.5} position={[1.5, -0.75, -2.5]} />
      <Bubble scale={1.7} position={[-3, -0.1, -2.5]} />
      <Bubble scale={0.5} position={[-1.5, -1.5, 1.3]} />
      <Bubble scale={0.75} position={[2, -1.3, 0]} />
      <Bubble scale={0.3} position={[1.3, -1.7, 0.7]} />
    </>
  );
};

export default LandingPage;

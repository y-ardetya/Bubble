import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Scroll, ScrollControls } from "@react-three/drei";
import LandingPage from "./LandingPage";
import Overlay from "./Overlay";
import FlagMaterial from "./FlagMaterial";
import Laptop from "./Laptop";

const Scene = () => {
  return (
    <>
      <fog attach="fog" args={["black", 0, 8]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 7, 0]} intensity={0.5} />
      <ScrollControls pages={3} damping={0.25}>
        <LandingPage />
        <Laptop
          scale={0.5}
          position={[-0.1, -0.75, 0.1]}
          rotation={[0, 0.7, 0]}
        />
        <Scroll html>
          <Overlay />
        </Scroll>
        <Scroll>
          <FlagMaterial />
        </Scroll>
      </ScrollControls>
      <EffectComposer>
        <Bloom mipmapBlur />
      </EffectComposer>
    </>
  );
};

export default Scene;

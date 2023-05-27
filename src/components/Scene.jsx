import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Float, Scroll, ScrollControls } from "@react-three/drei";
import LandingPage from "./LandingPage";
import Overlay from "./Overlay";
import FlagMaterial from "./FlagMaterial";
import Laptop from "./Model";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <ScrollControls pages={3}>
        <LandingPage />
        <Float floatIntensity={0.2}>
          <Laptop
            scale={0.5}
            position={[-0.1, -0.75, 0.1]}
            rotation={[0, 0.7, 0]}
          />
        </Float>
        <Scroll html>
          <Overlay />
        </Scroll>
        <Scroll>
          <FlagMaterial />
        </Scroll>
      </ScrollControls>
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={0.4}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.3}
        />
      </EffectComposer>
    </>
  );
};

export default Scene;

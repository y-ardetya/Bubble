import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Outerlay from "./components/Outerlay";

const App = () => {
  return (
    <>
      <Outerlay />
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
};

export default App;

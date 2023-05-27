import { Environment, Float, useGLTF } from "@react-three/drei";

const Laptop = (props) => {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <Float rotationIntensity={0.4}>
        <primitive object={scene} {...props} />;
      </Float>
    </>
  );
};

export default Laptop;

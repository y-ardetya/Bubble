import { shaderMaterial, useScroll, useTexture } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import * as THREE from "three";
import { useRef } from "react";
import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";

const Setting = ({ position, texture, rotation }) => {
  //* Refs
  const $shader = useRef();
  const $mesh = useRef();
  //* Scroll
  const data = useScroll();
  //* Viewport
  const { viewport } = useThree();
  //* Shader
  const SMaterial = shaderMaterial(
    {
      uTime: 0,
      uMouse: new THREE.Vector2(-10, -10),
      uProgress: 0,
      uTexture: texture,
    },

    vertexShader,
    fragmentShader
  );
  //* Extend Shader
  extend({ SMaterial });

  //* Frame
  useFrame((state, delta) => {
    $shader.current.uniforms.uTime.value += delta;
    $shader.current.uniforms.uMouse.value.x =
      (state.mouse.x * viewport.width) / 2;
    $shader.current.uniforms.uMouse.value.y =
      (state.mouse.y * viewport.height) / 2;
    //! HERE IS THE PROBLEM
    $shader.current.uniforms.uProgress.value = data.range(0, 1);
  });

  return (
    <>
      <mesh ref={$mesh} position={position} rotation={rotation}>
        <planeGeometry args={[3, 4, 16, 16]} />
        <sMaterial ref={$shader} key={SMaterial.key} />
      </mesh>
    </>
  );
};

const FlagMaterial = () => {
  //*Texture
  const [texture1, texture2] = useTexture([img, img2]);
  texture1.wrapS = THREE.MirroredRepeatWrapping;
  texture1.wrapT = THREE.MirroredRepeatWrapping;
  texture2.wrapS = THREE.MirroredRepeatWrapping;
  texture2.wrapT = THREE.MirroredRepeatWrapping;

  //* viewPort
  const { viewport } = useThree();

  return (
    <>
      <Setting
        rotation={[0, -0.5, 0]}
        position={
          viewport.height > viewport.width ? [0, -4.5, -4] : [4.5, -7.5, 0]
        }
        texture={texture1}
      />
      <Setting
        rotation={[0, -0.5, 0]}
        position={
          viewport.height > viewport.width ? [0, -12, -4] : [4.5, -15, 0]
        }
        texture={texture2}
      />
    </>
  );
};

export default FlagMaterial;

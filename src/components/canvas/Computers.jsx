import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useGraph } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useFBX } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const AvatarModel = ({ isMobile }) => {
  const group = useRef();
  const mixer = useRef();
  
  const { scene } = useGLTF('models/67fc969231f1c6f08b18e587.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  
  const fbx = useFBX('animations/danceB.fbx');
  
  useEffect(() => {
    if (fbx && fbx.animations && fbx.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(group.current);
      
      const clip = fbx.animations[0];
      
      clip.name = "dancing";
      
      const action = mixer.current.clipAction(clip);
      
      action.play();
    }
  }, [fbx]);
  
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <mesh>
      <ambientLight intensity={1} />

      <directionalLight 
        position={[0, 10, 0]} 
        intensity={0.5} 
        color="#ffffff" 
      />

      <pointLight position={[10, 5, 10]} intensity={0.3} color="#ffffff" />
      <pointLight position={[-10, 5, 10]} intensity={0.3} color="#ffffff" />
      <pointLight position={[0, 5, -10]} intensity={0.3} color="#ffffff" />
      <pointLight position={[0, -5, 2]} intensity={0.2} color="#ffffff" />

      <pointLight position={[-5, 3, -5]} intensity={0.1} color="#9ebbff" />
      
      <group 
        ref={group} 
        dispose={null}
        scale={isMobile ? 3 : 2.5}
        position={isMobile ? [0, -3, 0] : [0, -3, 0]}
        rotation={[0, 0, 0]}
      >
        <primitive object={nodes.Hips} />
        <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
        <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
        <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
        <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
      </group>
    </mesh>
  );
};

const MemoizedAvatarModel = React.memo(AvatarModel);

useGLTF.preload('models/67fc969231f1c6f08b18e587.glb');

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows={false}
      dpr={[1, 2]}
      camera={{ position: [0, 2, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MemoizedAvatarModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
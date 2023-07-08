import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'

 const Car = () => {
  const glft = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "model/scene.gltf"
  );
  useEffect(() => {
    glft.scene.scale.set(0.005, 0.005, 0.005);
    glft.scene.position.set(0, -0.035 ,0);
    glft.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    })
  }, [glft])
  return <primitive object={glft.scene} />;
}

export default  Car;



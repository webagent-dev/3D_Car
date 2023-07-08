import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment,CubeCamera  } from '@react-three/drei';
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import './App.css'
import { Ground, Car, Ring, Boxes } from './comps'

const ShowCar = () => {
  return (
    <>
    <OrbitControls  target={[0, 0.35, 0]} maxPolarAngle={1.45} />
    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
    <color  args={[0,0,0]} attach='background'/>
    <CubeCamera  resolution={256} frames={Infinity}>
      {(texture) => (
        <>
          <Environment  map={texture}/>
          <Car />
        </>
      )}
    </CubeCamera>
     <Boxes />
      <spotLight 
        color={[1,0.25,0.7]}
        intensity={1.5}
        angle={0.5}
        penumbra={0.5}
         position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.001}
      />

      <spotLight 
        color={[0.14,0.5,1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
         position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.001}
      />
      <Ground />
      <Bloom 
        blendFunction={BlendFunction.ADD}
        intensity={1.3}
        width={300}
        height={300}
        kernelSize={5}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.025}
      />
      <Ring />
     
      </>
  )
}

function App() {
  return (
   <Suspense fallback={null}>
      <Canvas shadows>
        <ShowCar />
      </Canvas>
   </Suspense>
  );
}

export default App;

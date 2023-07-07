import React, {useRef } from 'react'
import { useFrame } from '@react-three/fiber'
const Ring = () => {
    const itemRef = useRef([])
    useFrame((state) => {
        for (let i = 0; i < itemRef.current.length; i++) {
            let mesh = itemRef.current[i];
            let z = (i - 7) * 3.5;
            mesh.position.set(0,0, -z)
        }
    })
  return (
    <>
    {[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((v, i) => (
        <mesh
        castShadow
        receiveShadow
        position={[0,0,0]}
        key={i}
        ref={(el) => (itemRef.current[i] = el)}
        >
            <torusGeometry args={[3.35, 0.05, 16, 100]} />
            <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0,0,0]}/>
        </mesh>
    ))}
    </>
  )
}

export default Ring
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
const Box = ({color}) => {
    const boxRef = useRef();
    const [xRotSpeed] = useState(() => Math.random());
    const [yRotSpeed] = useState(() => Math.random());
    const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05)
    const [position, setPosition] = useState(resetPosition())

    function resetPosition() {
        let v = new Vector3( (Math.random() * 2 - 1) * 3, Math.random() * 2.5 * 0.1, (Math.random() * 2 -1) * 15);
        if (v.x < 0) v.x -= 1.75;
          if(v.x > 0) v.x += 1.75;
        // setPosition(v)
        return v 
    }
    useFrame((state, delta) => {
        boxRef.current.position.set(position.x, position.y, position.z);
        boxRef.current.rotation.x += delta * xRotSpeed;
        boxRef.current.rotation.y += delta * yRotSpeed;
    },[xRotSpeed,  yRotSpeed, position]);
  return (
    <mesh ref={boxRef} scale={scale} castShadow>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial  color={color} envMapIntensity={0.15}/>
    </mesh>
  )
}

const Boxes = () => {
    return <>
    {
        [ 0,0,0,0,0,0,0,0,0,0,   0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,  0,0,0,0,0,0,0,0,0,0,
         0,0,0,0,0,0,0,0,0,0].map((e, i) => <Box key={i} color={i % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]} />)
    }
    </>
}
export default Boxes
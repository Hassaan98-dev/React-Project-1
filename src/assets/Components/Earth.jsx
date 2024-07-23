import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import {useFrame } from '@react-three/fiber'
import img from '../images/earth.jpg'
import img2 from '../images/cloud.jpg'
export const Sphere=({size,position,color,texture,metalness,roughness})=>{
    const ref=useRef();
    useFrame((state, delta)=>{
        ref.current.rotation.y+=delta;
    })
return(
<mesh position={position} ref={ref}>
        <sphereGeometry args={size} ></sphereGeometry>
        <meshStandardMaterial color={color} map={texture} metalness={metalness} roughness={roughness} />
  
    </mesh>
)
}
function Earth({texture,metalness,roughness}) {
  return (
    <Canvas>
<OrbitControls/>
   <group>
  <ambientLight intensity={2} color={'rgb(177, 206, 252)'} />
    <Sphere size={[3,32,32]} position={[0,0,0]}  texture={texture} metalness={metalness} roughness={roughness}/>
    </group>
    </Canvas>
  )
}

export default Earth
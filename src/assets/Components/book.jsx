import React from 'react';
import { Canvas,useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import {OrbitControls} from '@react-three/drei'
const Cube=({size,position,color,texture})=>{
    const ref=useRef();
    useFrame((state,delta)=>{
        ref.current.rotation.y+=delta;
    })
    return(
        
        <mesh position={position} ref={ref}>
        <boxGeometry args={size} color={color} />
        <meshStandardMaterial   map={texture} metalness={5} roughness={15}/>
        </mesh>
        
    )
}
function Box({texture}){
    // const gltf=useLoader(GLTFLoader,model)
    return(
    <div className='container'>
      <Canvas>
        <ambientLight intensity={0.5} color={'rgb(209, 198, 138)'} />
        <Cube size={[6,9,0.9]} position={[0,0.5,-4]}  texture={texture}/>
        {/* <primitive object={gltf.scene} /> */}
      </Canvas>
      </div>
    )
    
}
export default Box;


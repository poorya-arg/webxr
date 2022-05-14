import React from "react";
import { useFrame, extend, useThree, useLoader} from "react-three-fiber"
import {Suspense, useRef} from "react"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import * as THREE from 'three'
import ImageWood from "../../assets/wood.jpg"
import ImageSky from "../../assets/sky.jpg"
import { ARCanvas } from '@react-three/xr'
extend({OrbitControls})
export default function HomeContainer(){
 
  const Orbit = () => {
    const {camera, gl} = useThree()
    return <orbitControls args={[camera,gl.domElement]}/>
  }

  const Box = (props) => {
    const ref = useRef()
    const texture = useLoader(THREE.TextureLoader,ImageWood)
    useFrame(state=>{
      // ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.01
    })
    return <mesh ref={ref} {...props}>
    <sphereBufferGeometry args={[0.5,100,500]}/>
    <meshPhysicalMaterial
    map={texture}
    //  color="red"
      // transparent  
      // roughness={0}
      // clearcoat={1}
      // transmission={0.8}
      // reflectivity={1}
      // side={THREE.DoubleSide}
    />
  </mesh>
  }

  // const Background = props =>{
  //   const texture = useLoader(THREE.TextureLoader,ImageSky)

  //   return <primitive object={texture} attach={"background"}/>
  // }
  // const Floor = (props)=>{
  //   return <mesh {...props}>
  //   <boxBufferGeometry args={[10,0,10]} position={[5,5,0]} color="#FFF"/>
  //   <meshPhysicalMaterial color="white"/>
  // </mesh>
  // }

  const Bulb = props =>{
    return <mesh {...props}>
      <pointLight castShadow={true}/>
      <sphereBufferGeometry args={[0.2, 20, 20]}/>
      <meshPhongMaterial emissive="yellow"/>
    </mesh>
  }
    return <ARCanvas 
    // style={{
    //   background:"black"
    // }}
    // camera={{
    //   position: [3,3,3]
    // }}
    >
      <ambientLight intensity={0.2} />
      <Bulb position={[-1,2,0]}/>
      <Orbit />
      <axesHelper args={[5]}/>
      <Suspense fallback={null}>
      <Box position={[-2,1,-1]}/>
      </Suspense>
      <Suspense fallback={null}>
      {/* <Background /> */}
      </Suspense>
      {/* <Floor color="#FFF" position={[0,-0.5,0]}/> */}
    </ARCanvas>
};
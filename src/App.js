
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Knob2 } from './Knob2'
import { Frame } from './Frame'
export default function Viewer() {
  const ref = useRef()
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">

          <Knob2 position={[0, 0, 0]} knobSteps={3} />
          <Knob2 position={[2, 0, 0]} knobSteps={5} />
          <Knob2 position={[4, 0, 0]} knobSteps={2} />
          <Knob2 position={[6, 0, 0]} knobSteps={6} />

          <Frame />
        </Stage>
      </Suspense>
       <OrbitControls ref={ref} /> 
    </Canvas>
  )
}
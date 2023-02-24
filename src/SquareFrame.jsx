/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 squareFrame.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/squareFrame-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.ID16002.geometry} material={materials.FRAME} />
      <mesh geometry={nodes.ID16002_1.geometry} material={nodes.ID16002_1.material} />
    </group>
  )
}

useGLTF.preload('/squareFrame-transformed.glb')
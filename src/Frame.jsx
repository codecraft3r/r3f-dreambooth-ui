import React, { useRef } from 'react'
import { Image } from '@react-three/drei'
import { Model as FrameModel } from './SquareFrame'

export function Frame(props) {
    const image = useRef()
    const frame = useRef()

    return (
        <group {...props}>
            <FrameModel ref={frame} scale={[3,3,3]}/>
            <Image ref={image} url="0.jpeg" position={[0, 0, -.1]} scale={[3, 3, 3]} />
        </group>
    )
}

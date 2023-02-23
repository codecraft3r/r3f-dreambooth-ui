import React, { useRef } from 'react'
import { Image } from '@react-three/drei'
import { useDials } from './stores/useDials'

export function Frame(props) {
    const frame = useRef()

    return (
        <group {...props}>
            <Image ref={frame} url="0.jpeg" position={[3, 3, 0]} scale={[3, 3, 3]} />
        </group>
    )
}

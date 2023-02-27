import React, { useRef, useEffect } from 'react'
import { Image } from '@react-three/drei'
import { Model as FrameModel } from './SquareFrame'
import { shallow } from 'zustand/shallow'
import { knobStore } from './stores/knobStore'
export function Frame(props) {
    const image = useRef()
    const text = useRef()
    const {k0, k1, k2, k3} = knobStore(
        (state) => ({k0: state.k0, k1: state.k1, k2: state.k2, k3: state.k3}), shallow
        )
    const promptTable = {
        k0: {0: "Blue", 1: "Red", 2: "Orange", 3: "Yellow"},
        k1: {0: "Happy", 1: "Sad", 2: "Neutral", 3: "Surprised"},
        k2: {0: "Impressionist", 1: "Realistic", 2: "Watercolor", 3: "Impasto", 4: "Vincent Van Gogh"},
        k3: {0: "Beach", 1: "Forest", 2: "Downtown", 3: "Rural", 4: "space"}
    }

    useEffect(() => {
        const prompt = `${promptTable.k0[k0]} ${promptTable.k1[k1]} ${promptTable.k2[k2]} ${promptTable.k3[k3]}`
        console.log(prompt)
    }, [k0, k1, k2, k3])
    
    return (
        <group {...props}>
            <FrameModel scale={[3,3,3]}/>
            <Image ref={image} url={`/images/${promptTable.k0[k0]}-${promptTable.k1[k1]}-${promptTable.k2[k2]}-${promptTable.k3[k3]}.png`} position={[0, 0, -.1]} scale={[3, 3, 3]} />
        </group>
    )
}

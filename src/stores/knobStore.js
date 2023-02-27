import { create } from "zustand";

export const knobStore = create((set) => ({
    "k0": 0,
    "k1": 0,
    "k2": 0,
    "k3": 0,
}))
export function setKnob(key, value) {
    knobStore.setState({ ["k" + key]: value });
}

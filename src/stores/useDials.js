import { create } from "zustand";

const useDials = create((set) => ({
    dials: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
    },
    setDial: (dial, value) => {
        set((state) => {
            const dials = { ...state.dials };
            dials[dial] = value;
            return { dials };
        });
    },
    getDial: (dial) => {
        return dials[dial];
    }
}));
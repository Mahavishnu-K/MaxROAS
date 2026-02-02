import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

export default function Magnetic({children}) {
    const magnetic = useRef(null);

    useEffect( () => {
        // Disable magnetic effect on touch devices (phones/tablets)
        // because "hovering" doesn't exist and feels broken.
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) return;

        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x * 0.35);
            yTo(y * 0.35)
        }

        const mouseLeave = (e) => {
            xTo(0);
            yTo(0)
        }

        // Add Listeners
        magnetic.current.addEventListener("mousemove", mouseMove)
        magnetic.current.addEventListener("mouseleave", mouseLeave)

        // Cleanup
        return () => {
            if (magnetic.current) {
                magnetic.current.removeEventListener("mousemove", mouseMove);
                magnetic.current.removeEventListener("mouseleave", mouseLeave);
            }
        }
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}
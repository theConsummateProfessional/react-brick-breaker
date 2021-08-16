import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePos, setMousePos] = useState({x: null, y: null});

    const updateMousePosition = e => {
        setMousePos({x: e.clientX, y: e.clinetY});
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePos;
};

export default useMousePosition;
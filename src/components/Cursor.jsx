import { useEffect, useRef, useState } from "react"


const Cursor = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const rafRef = useRef();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    useEffect(() => {
        const animate = () => {
            setPos(prev => ({
                x: prev.x + (mouse.x - prev.x) * 0.15,
                y: prev.y + (mouse.y - prev.y) * 0.15
            }));
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [mouse.x, mouse.y]);

    return (
        <div
            className="w-12 h-12 rounded-full border-white border-1 fixed z-50 pointer-events-none transition-all duration-100"
            style={{
                left: pos.x + 5,
                top: pos.y + 5,
                position: "fixed"
            }}
        >
        </div>
    )
}

export default Cursor

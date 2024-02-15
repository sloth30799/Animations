import { useEffect } from 'react'
import anime from 'animejs'
import './_css/squareGlitches.css'

const SquareGlitches = () => {
    const squareCount = [
        { x: 20, y: 40, w: 80, h: 80 },
        { x: 60, y: 20, w: 200, h: 80 },
        { x: 120, y: 70, w: 180, h: 100 },
        { x: 50, y: 55, w: 70, h: 70 },
        { x: 80, y: 60, w: 100, h: 120 },
        { x: 140, y: 10, w: 100, h: 120 },
        { x: 200, y: 15, w: 120, h: 80 },
        { x: 40, y: 105, w: 120, h: 80 },
        { x: 200, y: 125, w: 120, h: 80 },
    ]

    useEffect(() => {
        anime({
            targets: '.square',
            // opacity: 1,
            keyframes: [
                {
                    width: (el) => {
                        return el.getAttribute('data-w')
                    },
                    height: (el) => {
                        return el.getAttribute('data-h')
                    },
                    translateX: (el) => {
                        return el.getAttribute('data-x')
                    },
                    translateY: (el) => {
                        return el.getAttribute('data-y')
                    },
                    duration: 1000,
                },
                { opacity: 1, backgroundColor: '#fff', duration: 150 },
                { opacity: 0, duration: 150 },
            ],
            easing: 'easeInSine',
        })
    }, [])

    return (
        <section className="w-[600px] h-[400px] border border-black square-stack">
            {squareCount.map((sq) => (
                <div
                    data-w={sq.w}
                    data-h={sq.h}
                    data-x={sq.x}
                    data-y={sq.y}
                    className="w-0 h-0 bg-emerald-200 opacity-70 square"
                    key={sq}
                ></div>
            ))}
        </section>
    )
}

export default SquareGlitches

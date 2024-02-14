import { useEffect } from "react";
import anime from "animejs";
import './_css/squareGlitches.css';

const SquareGlitches = () => {
    const squareCount = [...Array(10).keys()]

    useEffect(() => {
        anime({
            targets: '.square',
            width: () => {
                return anime.random(80, 200)
            },
            translateX: () => {
                return anime.random(0, 240)
            },
            translateY: () => {
                return anime.random(0, 160)
            },
            easing: 'easeInSine'
        })
    }, [])

    return (
        <section className="w-[600px] h-[400px] border border-black square-stack">
            {squareCount.map((sq) => (
                <div className="w-0 h-32 square" key={sq}></div>
            ))}
        </section>
    )
}

export default SquareGlitches

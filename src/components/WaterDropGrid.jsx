import anime from "animejs"

const GRID_WIDTH = 25
const GRID_HEIGHT = 20

const DotGrid = () => {
    const handleDotClick = (e) => {
        anime({
            targets: '.dot-point',
            scale: [
                { value: 1.35, easing: "easeOutSine", duration: 250 },
                { value: 1, easing: "easeInOutQuad", duration: 500 },
            ],
            translateY: [
                { value: -15, easing: "easeOutSine", duration: 250 },
                { value: 0, easing: "easeInOutQuad", duration: 500 },
            ],
            translateX: [
                { value: 1, easing: "easeOutSine", duration: 250 },
                { value: 0.5, easing: "easeInOutQuad", duration: 500 },
            ],
            delay: anime.stagger(100, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: e.target.dataset.index
            }),
        })
    }

    const dots = []
    let index = 0

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    onClick={handleDotClick}
                    data-index={index}
                    key={`${i}-${j}`}
                    className="p-2 transition-colors rounded-full group cursor-crosshair hover:bg-slate-600"
                >
                    <div
                        className="w-2 h-2 rounded-full opacity-50 dot-point bg-gradient-to-b from-slate-700 to-slate-400 group-hover:to-white"
                        data-index={index}
                    />
                </div>
            )
            index++
        }
    }

    return (
        <div
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
            className="grid w-fit"
        >
            {dots}
        </div>
    )
}

const WaterDropGrid = () => {
    return (
        <div className="relative grid h-screen px-8 place-content-center bg-slate-900">
            <DotGrid />
        </div>
    )
}

export default WaterDropGrid

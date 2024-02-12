import anime from "animejs"

const StackCards = () => {
    const cardSize = `w-[400px] h-[200px] rounded-[14px]`

    const cards = [
        {
            content: "one",
            style: "-top-8 -left-8 z-10 bg-purple-500",
            dotStyle: "bg-red-400 top-0 left-0",
        },
        {
            content: "two",
            style: "top-0 left-0 z-30 bg-yellow-500",
            dotStyle: "bg-white bottom-0 right-0",
        },
        {
            content: "three",
            style: "top-8 left-8 z-20 bg-green-500",
            dotStyle: "bg-white bottom-0 right-0",
        },
        {
            content: "four",
            style: "top-16 left-16 z-10 bg-red-500",
            dotStyle: "bg-white bottom-0 right-0",
        },
    ]

    const animeTest = () => {
        anime({
            targets: '.card-one',
            zIndex: 100,
            duration: 500,
            easing: 'easeInOutSine'
        })
    }

    return (
        <div className={`relative h-[150px] m-10`}>
            {cards.map((c) => (
                <div
                    className={`absolute shadow-md ${cardSize} ${c.style} p-3 card-${c.content}`}
                    key={c.content}
                >
                    <div className="relative flex items-center justify-center w-full h-full">
                        <div
                            className={`w-4 h-4 absolute ${c.dotStyle} rounded-full`}
                        ></div>
                        <h1>{c.content}</h1>
                    </div>
                </div>
            ))}

            <button className="mt-[400px]" onClick={animeTest}>test</button>
        </div>
    )
}

export default StackCards
